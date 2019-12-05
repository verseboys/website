<template>
    <!-- EinMattrix科研大数据主页 -->
    <div class="min-width">
        <div id="particles-js" class="particles-container particles-js" style="width:100%;height:550px;position:absolute;left:0;top:70px;z-index:999;"></div>

        <div class="einmatrix">
            <common-nav v-show= "display" id="comn_nav" class="animated slideInDown"/>
            <div class="banner">
                <nav-bar/>
                <div class="banner_main">
                    <div class="main">
                        <h2>EinMatrix 科研大数据中心</h2>
                        <p style="width: 461px;font-size: 18px;">基于真实世界研究（RWS）量身打造的临床研究大数据平台，为科研项目、科研数据及其价值应用提供全方位的技术服务</p>
                    </div>
                    <div class="pic_1"><img src="@/assets/EinMatrix/head.png" alt=""></div>
                </div>
            </div>
        </div>
        <product-advantage/>
        <mine-service/>
        <copy-right-section style="margin-top:500px;"/>
    </div>
</template>
<script>
import commonNav from "@/components/CommonNav.vue";
import navBar from "@/components/NavBar.vue";
import productAdvantage from "@/components/ProductAdvantage.vue";
import mineService from "@/components/MineService.vue";
import copyRightSection from "@/components/CopyRightSection.vue";
export default {
    components: {
        commonNav,
        navBar,
        productAdvantage,
        mineService,
        copyRightSection
    },
    data() {
        return {
            scroll:false,
            display:false,
        }
    },
    mounted () {
        window.addEventListener('scroll', this.handScroll);
    },
    beforeMount(){
        function loadJS(url, success) {
            var domScript = document.createElement('script');
            domScript.src = url;
            success = success || function () {};
            domScript.onload = domScript.onreadystatechange = function () {
                if (!this.readyState || 'loaded' === this.readyState || 'complete' === this.readyState) {
                    success();
                    this.onload = this.onreadystatechange = null;
                    this.parentNode.removeChild(this);
                }
            }
            document.getElementsByTagName('head')[0].appendChild(domScript);
        }
        loadJS('test.js')
    },
    methods: {
        handScroll () {
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            var offsetTop = document.querySelector('#comn_nav').offsetTop;
            if (scrollTop > offsetTop) {
                this.display = true;
            } else {
                this.display = false;
            }
        }
    }
}
</script>

<style>
.min-width {
    width:100%;
    background:#f5f5f5;
}
.einmatrix {
    width: 100%;
    height: 620px;
    background:#15124b;
}
.einmatrix .banner {
    width:1180px;
    height: 620px;
    margin:0 auto;
}
.banner_main {
    width:1180px;
    height: 476px;
}
.banner_main>.main {
    float: left;
    width:490px;
    text-align:left;
    padding-top:170px;
    color:#fff;
}
.main>h2 {
    font-size: 36px;
    font-weight: 500;
    color: #fff;
}
.main>p {
    width: 461px;
    height: 165px;
    font-size: 18px;
    color: #dccfe8;
    padding-top:30px;
    line-height:36px;
}
.banner_main>.pic_1 {
    float: right;
    width:436px;
    height:436px;
    margin-right:100px;
    margin-top:0px;
}
.banner_main .pic_1 img {
    width: 100%;
    height: 100%;
}
</style>
