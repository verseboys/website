<template>
    <!-- 官网公共导航部分 -->
    <div class="scroll_nav">
        <div class="common_nav" style="width:1200px;margin:0 auto;height:65px;">
            <div class="logo">
                <router-link to="/home" class="li" style="cursor: pointer;"><img src="@/assets/EinMatrix/logos.png" alt=""></router-link>
            </div>
            <ul>
                <router-link to="/home" class="li" style="cursor: pointer;">首页</router-link>
                <router-link to="" class="li" @mouseenter.native= "enter" @mouseleave.native= "leave">
                    <span>产品服务</span>
                    <span style="position:absolute;top:-2px;right:53px;"><img src="@/assets/EinMatrix/black_arrow.svg" alt=""></span>
                    <div class="select" v-if= "xianshi" style="width:125px;height:121px;left:-18px;">
                        <em style="bottom:121px;left:52px;"></em>
                        <router-link to="/medieco" style="padding-top:12px;text-decoration: none;" class="p">科研教育</router-link>
                        <router-link to="/einmatrix" class="p" style="text-decoration: none;">科研大数据</router-link>
                        <router-link to="/service" class="p" style="text-decoration: none;">科研服务</router-link>
                    </div>
                </router-link>
                <router-link to="" class="li" @mouseenter.native= "enters" @mouseleave.native= "leaves">
                    <span>创新成果</span>
                    <span style="position:absolute;top:-2px;right:53px;"><img src="@/assets/EinMatrix/black_arrow.svg" alt=""></span>
                    <div class="select" v-show= "append" style="left:-32px;">
                        <em style="bottom: 90px;left:58px;"></em>
                        <router-link to="/disease" style="padding-top:12px;text-decoration: none;" class="p">呼吸疾病临床研究大数据平台</router-link>
                        <router-link to="/shared" class="p" style="text-decoration: none;padding-top:4px;padding-bottom: 10px;">中国队列共享平台</router-link>
                    </div>
                </router-link>
                <router-link to="/about" class="li" style="cursor: pointer;text-decoration: none;">关于我们</router-link>
            </ul>
            <router-view/>
        </div>
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
<style>
.scroll_nav {
    width:100%;
    background:#fff;
    position:fixed;
    top:0;
    left:0px;
    z-index:999;
    box-shadow: 5px 5px 7px -1px rgba(19, 33, 58, 0.13);
}
.scroll_nav ul {
    float: right;
    line-height:36px;
    margin-top:15px;
    padding-right: 10px;
}
.scroll_nav ul .li{
    float: left;
    padding-right:70px;
    color:#333;
    cursor: pointer;
    font-size:16px;
    position:relative;
    text-decoration: none;
}
.scroll_nav ul .li:hover{
    /* color:blue; */
}
.scroll_nav .logo {
    float:left;
    width:140px;
    height:46px;
    margin-top: 10px;
    margin-left: 36px;
}
.scroll_nav .logo img {
    width: 100%;
    height: 100%;
}
.select {
    position:absolute;
    top:46px;
    left:-60px;
    width:212px;
    background:#fff;
    border-radius: 4px;
    z-index:999;
    box-shadow: 0px 0px 7px -1px rgba(19, 33, 58, 0.13);
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