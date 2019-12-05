<template>
    <!-- 共享平台主页 -->
    <div class="min-width">
        <div class="shared_platform">
            <common-nav v-show= "display" id="comn_nav" class="animated slideInDown"/>
            <div class="banner_pic">
                <nav-bar/>
                <div class="banner_platform">
                    <div class="platform">
                        <h2>中国队列共享平台</h2>
                        <p>大型队列是实现精准医学的基础和保障，建立多层次立体化的合作策略和共享机制，推动数据融合和共享，提升科研成果的数量与质量。</p>
                        <div class="putin">
                            <a target="_blank" href="http://chinacohort.bjmu.edu.cn/">点击进入</a>
                            <a target="_blank" href="http://chinacohort.bjmu.edu.cn/"><img src="@/assets/share/blue_arrow.svg" alt=""></a>
                        </div>
                    </div>
                    <div class="picture"><img src="@/assets/share/group.png" alt=""></div>
                </div>
            </div>
        </div>
        <purpose-and-vision/>
        <platform-advantage/>
        <platform-content/>
        <cooperation-agency/>
        <copy-right-section/>
    </div>
    
</template>
<script>
import commonNav from "@/components/CommonNav.vue";
import navBar from "@/components/NavBar.vue";
import purposeAndVision from "@/components/PurposeAndVision.vue";
import platformAdvantage from "@/components/PlatformAdvantage.vue";
import platformContent from "@/components/PlatformContent.vue";
import cooperationAgency from "@/components/CooperationAgency.vue";
import copyRightSection from "@/components/CopyRightSection.vue"
export default {
    components: {
        commonNav,
        navBar,
        purposeAndVision,
        platformAdvantage,
        platformContent,
        cooperationAgency,
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
.min-width {
    width:100%;
    background-color: #fcfbfb;
}
.shared_platform {
    width: 100%;
    height:650px;
    background:#2b8ad7;
}
.shared_platform .banner_pic {
    width:1180px;
    height:756px;
    margin:0 auto;
}
.shared_platform .banner_pic .banner_platform {
    width:1180px;
    height:710px;
    position: relative;
}
.shared_platform .banner_pic .banner_platform .platform {
    float: left;
    width:470px;
    text-align:left;
    color:#fff;
    padding-left:70px;
}
.shared_platform .banner_pic .banner_platform .platform h2 {
    font-size: 36px;
    font-weight: 500;
    color: #fff;
    padding-top:120px;
}
.shared_platform .banner_pic .banner_platform .platform p {
    width: 394px;
    font-size: 18px;
    color: #e1e9ff;
    line-height:38px;
    letter-spacing: 0.5px;
}
.putin {
    position:absolute;
    top:356px;
    left:71px;
    width: 224px;
    height: 62px;
    border-radius: 6px;
    background: #fff;
    cursor: pointer;
    text-align:center;
}
.putin a:nth-child(1) {
    display:inline-block;
    line-height:62px;
    font-weight:500;
    letter-spacing: 1px;
    color:#2469a0;
    font-size:20px;
    text-decoration: none;
}
.putin a:nth-child(2) {
    display:inline-block;
    text-decoration: none;
}
.putin a:nth-child(2) img {
    margin-left: 25px;
    vertical-align: bottom;
}
.shared_platform .banner_pic .banner_platform .picture {
    float: right;
    width:580px;
    height:350px;
    margin-top:100px;
    margin-right:45px;
}
.shared_platform .banner_pic .banner_platform .picture img {
    width: 100%;
    height: 100%;
}
</style>
