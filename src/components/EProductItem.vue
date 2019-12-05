<template>
    <div class="e-product-item clearfix" style="height: 278px;position: relative; text-align: center;">
        <div
                style=" display: inline-block;text-align: left;"
                :style="{width: sizes.containerWidth}">
            <div class="e-product-item-card-container"
                 :style="{width: sizes.cardWidth}"
                 :class="{'e-float-left': order % 2 === 1, 'e-float-right': order % 2 === 0}">

                <img src="@/assets/home/product-arrow-left.svg" v-if="order > 1 && order % 2 === 1"/>
                <img src="@/assets/home/product-arrow-right.svg" v-if="order > 1 && order % 2 === 0"/>

                <div class="e-product-card"
                     :class="'e-product-card-' + name"
                     style="height: 160px; width: 100%;position: relative;padding-left: 147px; ">
                    <div class="e-product-card-avatar"
                         style="left: 0; position: absolute;width:147px; height: 100%;"></div>
                    <div style="padding-top: 48px;">
                        <div class="font-28 font-bold">
                            {{title}}
                        </div>
                        <div class="font-18 font-light">
                            {{subtitle}}
                        </div>
                    </div>
                </div>
                <div class="e-product-item-category font-light line-height-1"
                     style="text-align: center;padding-top: 55px;font-size:28px;">
                    {{ feature }}
                </div>
            </div>
        </div>
    </div>
</template>
<script>
  export default {
    name: "EProductItem",
    props: {
      order: Number,
      name: String,
      feature: String,
      title: String,
      subtitle: String,
    },
    computed: {
      sizes() {
        let cardWidth = 490;
        let cardSpace = 102;
        let containerWidth = cardWidth * 2 + cardSpace;
        let rightCardLeft = cardWidth + cardSpace;
        let result = {
          cardWidth,
          containerWidth,
          cardSpace,
          rightCardLeft
        };
        Object.keys(result).map(function (key) {
          result[key] = result[key] + "px";
        });
        return result;
      }
    },
  }
</script>

<style scoped lang="scss">
    .e-product-card {
        background-color: #f9fbfd;
        box-shadow: 0 3px 6px 1px rgba(0, 85, 156, 0.13);
    }

    .e-product-item + .e-product-item .e-product-card {
        margin-top: -30px;
    }


    .e-product-item-card-container {
        display: inline-block;
        text-align: left;
        img {
            margin-top: -200px;
            position: absolute;
            z-index: 888;
            margin-left: 340px;
        }
    }

    .e-float-left {
        float: left;
    }

    .e-float-right {
        float: right;
        img {
            margin-top: -200px;
            position: absolute;
            z-index: 888;
            margin-left: -70px;
        }
    }

    /*.e-product-card-avatar {*/
    /*width: 91px;*/
    /*height: 77px;*/
    /*}*/

    .e-product-card-avatar {
        background-position: center center;
        background-repeat: no-repeat;
    }

    .e-product-card-yikahui .e-product-card-avatar {
        background-image: url("../assets/home/product-yikahui.png");
        background-size: 87px 73px;
    }

    .e-product-card-EinMatrix .e-product-card-avatar {
        background-image: url("../assets/home/product-einmatrix.svg");
        background-size: 99px 80px;
    }

    .e-product-card-activity .e-product-card-avatar {
        background-image: url("../assets/home/product-activity.png");
        background-size: 99px 76px;
    }

    .e-product-card-CRO .e-product-card-avatar {
        background-image: url("../assets/home/product-cro.svg");
        background-size: 86px 101px;
    }

    .clearfix::after {
        display: block;
        content: "";
        clear: both;
    }
</style>