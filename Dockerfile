FROM node:10-alpine as builder

ENV PROJECT_ROOT /project

COPY package.json $PROJECT_ROOT/package.json
COPY package-lock.json $PROJECT_ROOT/package-lock.json
RUN cd $PROJECT_ROOT \
	&& npm install
ENV PATH $PROJECT_ROOT/node_modules/.bin:$PATH

COPY . $PROJECT_ROOT
RUN cd $PROJECT_ROOT \
	&& npm run build

# ---------- 8< ----------

FROM nginx:1.13.3-alpine as timezone

# Ref: https://wiki.alpinelinux.org/wiki/Setting_the_timezone
# Use multistage, so this image can always be cached
RUN apk add --no-cache tzdata \
	&& cp -f /usr/share/zoneinfo/Asia/Shanghai /etc/localtime \
	&& echo "Asia/Shanghai" > /etc/timezone

# ---------- 8< ----------

FROM nginx:1.13.3-alpine

COPY --from=timezone /etc/localtime /etc/localtime
COPY --from=timezone /etc/timezone  /etc/timezone
COPY --from=builder  /project/dist  /usr/share/nginx/html
