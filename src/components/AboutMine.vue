<template>
    <!-- 关于我们主页 -->
    <div class="aboutMine">
        <div class="banner">
            <common-nav v-show= "display" id="comn_nav" class="animated slideInDown"/>
            <div class="nav">
                <nav-bar/>
            </div>
            <div class="about">
                <h2>关于我们</h2>
                <p>北京泽创天成科技发展有限公司成立于2015年，汇集海内外优秀的医疗与技术人才，以互联网+临床研究的创新模式，运用大数据技术，致力于打造全国领先的“科研教育、科研大数据、科研服务”三位一体的SaaS级临床研究数字平台，为临床研究提供全生命周期的系统解决方案。</p>
            </div>
        </div>
        <core-team/>
        <join-us/>
        <news-reports/>
        <copy-right-section style="clear:both;"/> 
    </div>
</template>

<script>
import commonNav from "@/components/CommonNav.vue";
import navBar from "@/components/NavBar.vue";
import coreTeam from  "@/components/CoreTeam.vue";
import joinUs from "@/components/JoinUs.vue";
import newsReports from "@/components/NewsReports.vue";
import copyRightSection from "@/components/CopyRightSection.vue"
export default {
    components: {
        commonNav,
        navBar,
        coreTeam,
        joinUs,
        newsReports,
        copyRightSection
    },
    data() {
        return {
            scroll:false,
            display:false,
        }
    },
    mounted () {
        window.addEventListener('scroll', this.handScroll)
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
            
        },
    }
}
</script>

<style>
html,body {
    background: #f9f9f9;
}
.aboutMine {
    width:100%;
    background: #f9f9f9;
}
.aboutMine .banner{
    width:100%;
    height:634px;
    background:url(../assets/about/banner_bg.png) no-repeat;
    background-size:100% 100%;
}
.banner .nav {
    width:1180px;
    margin:0 auto;
}
.banner .about {
    width:1180px;
    margin:0 auto;
    padding-top:150px;
}
.about h2 {
    width:1100px;
    margin:0 auto;
    font-size:50px;
    color: #fcfbfb;
    line-height:70px;
    letter-spacing: 6px;
}
.about p {
    width:1100px;
    margin:0 auto;
    line-height:36px;
    font-size:18px;
    color: #fcfbfb;
    letter-spacing: 1px;
    padding-top:47px;
}
</style>
