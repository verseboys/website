<template>
    <!-- 官网公共导航部分 -->
    <div class="nav">
        <div class="logo">
            <router-link to="/home" class="li" style="cursor: pointer;"><img src="@/assets/EinMatrix/logo_2.svg" alt=""></router-link>
        </div>
        <ul>
            <router-link to="/home" class="li" style="cursor: pointer;">首页</router-link>
            <router-link to="" class="li" @mouseenter.native= "enter" @mouseleave.native= "leave">
                <span>产品服务</span>
                <span style="position:absolute;top:-2px;right:53px;"><img src="@/assets/EinMatrix/arrow2.svg" alt=""></span>
                <div class="select" v-show= "xianshi" style="width:125px;height:121px;left:-18px;">
                    <em style="bottom:121px;left:52px;"></em>
                    <router-link to="/medieco" style="padding-top:12px;text-decoration: none;" class="p">科研教育</router-link>
                    <router-link to="/einmatrix" class="p" style="text-decoration: none;">科研大数据</router-link>
                    <router-link to="/service" class="p" style="text-decoration: none;">科研服务</router-link>
                </div>
            </router-link>
            <router-link to="" class="li" @mouseenter.native= "enters" @mouseleave.native= "leaves">
                <span>创新成果</span>
                <span style="position:absolute;top:-2px;right:53px;"><img src="@/assets/EinMatrix/arrow2.svg" alt=""></span>
                <div class="select" v-show= "append" style="left:-32px;">
                    <em style="bottom: 90px;left:58px;"></em>
                    <router-link to="/disease" style="padding-top:12px;text-decoration: none;" class="p">呼吸疾病临床研究大数据平台</router-link>
                    <router-link to="/shared" class="p" style="text-decoration: none;padding-top:4px;padding-bottom: 10px;">中国队列共享平台</router-link>
                </div>
            </router-link>
            <router-link to="/about" class="li" style="cursor: pointer;">关于我们</router-link>
        </ul>
        <router-view/>
    </div>
</template>
<script>
export default {
    data() {
        return {
            xianshi:false,
            append:false,
        }
    },
    methods: {
        enter(){
            this.xianshi = true
        },
        leave() {
            this.xianshi = false
        },
        enters(){
            this.append = true
        },
        leaves() {
            this.append = false
        }
    }
}
</script>
<style scoped>
html {
    font-family: sans-serif;
    line-height: 1.4;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    -ms-overflow-style: scrollbar;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
html, body, #app {
    padding: 0;
    margin: 0;
    min-width: 100%;
    min-height: 100%;
}
.nav {
    width:1180px;
    height:80px;
}
.nav ul {
    float: right;
    line-height:46px;
    margin-top:15px;
}
.nav ul .li{
    float: left;
    padding-right:70px;
    color:#fff;
    font-size:16px;
    text-decoration: none;
    position:relative;
}
.nav .logo {
    float:left;
    width:159px;
    height:46px;
    margin-top:15px;
    margin-left: 20px;
}
.nav .logo img {
    width: 100%;
    height: 100%;
}
.select {
    position:absolute;
    top:50px;
    left:-60px;
    width:212px;
    background:#fff;
    border-radius: 4px;
    z-index:999;
}
.select em {
    width: 0px;
    height: 0px;
    font-size: 0;
    line-height: 0;
    overflow: hidden;
    border-width: 9px;
    position: absolute;
    bottom: 80px;
    left: 88px;
    border-style: dashed dashed solid dashed;
    border-color: transparent transparent #fff transparent;
}
.select .p {
    color:#404040;
    font-size:14px;
    line-height:32px;
    padding-left:16px;
    text-align:left;
    display:block;
    cursor: pointer;
}
.select .p:hover {
    color:#1a81de;
}
</style>