<template>
    <!-- 医咖会主页 -->
    <div class="min-width">
        <div class="arcline"></div>
        <div class="left"></div>
        <div class="right"></div>
        <common-nav v-show= "display" id="comn_nav" class="animated slideInDown"/>
        <div class="main">
            <div class="title">
                <h2>医咖会</h2>
                <h4>全国领先的临床研究学习和协作平台</h4>
            </div>
            <div class="left_logo">
                <div class="navs"><nav-bars/></div>
            </div>
            <div class="right_pic">
                <p class="img_image"><img src="@/assets/medieco/head.png" alt=""></p>
                <div class="advant">
                    <img src="@/assets/medieco/advantage.png" alt="">
                </div>
                <core-advantage/>
                <statistics-tutorials/>
                <research-problems/>
                <communication-and-collaboration/>
                <research-and-interpretation/>
            </div>
            <div class="button">
                <a target="_blank" href="https://www.mediecogroup.com/">点击进入</a>
                <a target="_blank" href="https://www.mediecogroup.com/"><img src="@/assets/medieco/arrow.svg" alt=""></a>
            </div>
        </div>
        <div class="footer">
            <copy-right-section/>
            <!-- <copy-right/> -->
        </div>
    </div>
</template>
<script>
import commonNav from "@/components/CommonNav.vue";
import navBars from "@/components/NavBars.vue";
import coreAdvantage from "@/components/CoreAdvantage.vue";
import statisticsTutorials from "@/components/StatisticsTutorials.vue";
import researchProblems from "@/components/ResearchProblems.vue";
import communicationAndCollaboration from "@/components/CommunicationAndCollaboration.vue";
import researchAndInterpretation from "@/components/ResearchAndInterpretation.vue";
import copyRightSection from "@/components/CopyRightSection.vue"
// import copyRight from "@/components/CopyRight.vue"

export default {
    components: {
        commonNav,
        navBars,
        coreAdvantage,
        statisticsTutorials,
        researchProblems,
        communicationAndCollaboration,
        researchAndInterpretation,
        // copyRight
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
<style scoped>
li {
    list-style:none;
}
html {
    font-family: sans-serif;
    line-height: 1.4;
}
html, body, #app {
    padding: 0;
    margin: 0;
    min-width: 100%;
}
body {
    margin:0!important;
}
.min-width {
    width: 100%;
    height:100%;
    overflow:hidden;
    background:#fff;
    position:relative;
}
.min-width .arcline {
    width:100%;
    height: 1498.4px;
    object-fit: contain;
    background:url(../assets/medieco/Path.png) no-repeat;
    background-size:100% 90%;
    position:absolute;
    top:1550px;
    left:0;
}
.min-width .main {
    position:relative;
    width:1183px;
    margin:0 auto;
}
.min-width .left{
    width:737px;
    height: 870px;
    background:#fff;
    position:absolute;
    left:0;
    top:0;
}
.min-width .right {
    width:1042px;
    height: 870px;
    opacity: 0.86;
    background:url(../assets/medieco/background.png) no-repeat;
    background-size:100% 100%;
    position:absolute;
    top:0;
    right:0;
}
.main .title h2 {
    position:absolute;
    top:100px;
    left:70px;
    width: 150px;
    height: 70px;
    font-size: 50px;
    color: #403f40;
}
.main .title h4 {
    position:absolute;
    top:184px;
    left:70px;
    width: 374px;
    height: 90px;
    font-size: 30px;
    letter-spacing:2px;
    color: #403f40;
    text-align:left;
}
.main .left_logo {
    position:relative;
}
.navs {
    position:absolute;
    top:-156px;
    right:0;
}
.main .right_pic {
    width:100%;
}
.main .right_pic .img_image {
    width:600px;
    height:500px;
    margin-left:588px;
    margin-top:156px;
}
.main .right_pic .img_image img {
    width: 100%;
    height: 100%;
}
.main .right_pic .advant {
    width: 83px;
    height: 78px;
    margin:0 auto;
    margin-top:142px;
    margin-bottom:64px;
}
.main .right_pic .advant img{
    width: 100%;
    height: 100%;
}
.button{
    position:absolute;
    top:385px;
    left:70px;
    width: 270px;
    height: 70px;
    border-radius: 6px;
    background-image: linear-gradient(98deg, #5fc1f5, #545be6);
    cursor: pointer;
}
.button a:nth-child(1) {
    display:inline-block;
    line-height:70px;
    font-size:26px;
    color:#fff;
    font-weight:normal;
}
.button a:nth-child(2) {
    display:inline-block;
}
.button a:nth-child(2) img {
    margin-left: 25px;
    vertical-align: text-bottom;
}
</style>