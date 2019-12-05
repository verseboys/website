<template>
    <!-- 呼吸疾病主页 -->
    <div class="respiratory_disease">
        <div class="respiratory">
            <common-nav v-show= "display" id="comn_nav" class="animated slideInDown"/>
            <span style="position:absolute;left:0;top:0;"><img src="@/assets/disease/tyx.png" alt=""></span>
            <div class="disease_banner">
                <nav-bar/>
                <div class="disease_main">
                    <div class="data">
                        <h2>呼吸疾病临床研究<br/>大数据平台</h2>
                        <p><span><img src="@/assets/disease/correct.svg" alt=""></span><span>领先的大数据技术</span></p>
                        <p><span><img src="@/assets/disease/correct.svg" alt=""></span><span>科研级高质量数据采集、质控与共享</span></p>
                        <p><span><img src="@/assets/disease/correct.svg" alt=""></span><span>集合科研培训、协作网络、医疗质控</span></p>
                        <p><span><img src="@/assets/disease/correct.svg" alt=""></span><span>全面提升中国呼吸疾病防诊治能力</span></p>
                    </div>
                    <div class="image animated swing"><img src="@/assets/disease/activity.png" alt=""></div>
                </div>
                <div class="numbers">
                    <ul>
                        <li>
                            <p class="text">20+</p>
                            <p>国家研究课题</p>
                        </li>
                        <li>
                            <p>1000+</p>
                            <p>呼吸领域临床医生</p>
                        </li>
                        <li>
                           <p>300+</p>
                            <p>省市中心医院</p> 
                        </li>
                        <li>
                            <p>50W+</p>
                            <p>呼吸患者</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <application-and-sharing/>
        <platform-structure/>
        <collection-storage/>
        <research-big-data/>
        <clinical-research-platform/>
        <clinical-management-platform/>
        <div class="a" style="background:#fcfbfb;">
            <copy-right-section/>
        </div>
    </div>
</template>
<script>
import commonNav from "@/components/CommonNav.vue";
import navBar from "@/components/NavBar.vue";
import applicationAndSharing from "@/components/ApplicationAndSharing.vue";
import platformStructure from "@/components/PlatformStructure.vue";
import collectionStorage from "@/components/CollectionStorage.vue";
import researchBigData from "@/components/ResearchBigData.vue";
import clinicalResearchPlatform from "@/components/ClinicalResearchPlatform.vue";
import clinicalManagementPlatform from "@/components/ClinicalManagementPlatform.vue";
import copyRightSection from "@/components/CopyRightSection.vue"
export default {
    components: {
        commonNav,
        navBar,
        applicationAndSharing,
        platformStructure,
        collectionStorage,
        researchBigData,
        clinicalResearchPlatform,
        clinicalManagementPlatform,
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
.respiratory_disease {
    width: 100%;
    height: 100%;
    background:#fff;
}
.respiratory_disease .respiratory {
    width:100%;
    height: 811px;
    background: #091744;
    position: relative;
}
.disease_banner {
    width:1180px;
    margin:0 auto;
}
.disease_main {
    width:1180px;
}
.disease_main .data {
    float: left;
    width:490px;
    text-align:left;
    padding-top:190px;
    color:#fff;
    margin-left:70px;
}
.data h2 {
    font-size: 40px;
    color: #fff;
}
.data p {
    width: 321px;
    font-size: 18px;
    color: #e1e9ff;
    line-height:40px;
}
.data p span:nth-child(1) {
    width: 17px;
    height: 17px;
    background-color: #2c4870;
    display:inline-block;
    color:#62d3df;
    text-align: center;
    line-height:17px;
    font-size:10px;
    border-radius: 50%;
    vertical-align: text-top;
}
.data p span:nth-child(1) img {
    width: 100%;
    height: 100%;
    padding:3px;
}
.data p span:nth-child(2) {
    color: #8ca6c5;
    padding-left:14px;
}
.disease_main .image {
    width: 553px;
    height: 452px;
    float: left;
    margin-top:110px;
    animation: 3s infinite image;
}
@-moz-keyframes image {
  0% {
    transform: translateY(-8px);
  }
  50% {
    transform: translateY(5px);  
  }
  100% {
    transform: translateY(-8px);
  }
}

@-webkit-keyframes image {
  0% {
    transform: translateY(-8px);
  }
  50% {
    transform: translateY(5px);  
  }
  100% {
    transform: translateY(-8px);
  }
}
@-o-keyframes image {
  0% {
    transform: translateY(-8px);
  }
  50% {
    transform: translateY(5px);  
  }
  100% {
    transform: translateY(-8px);
  }
}
@keyframes image {
  0% {
    transform: translateY(-8px);
  }
  50% {
    transform: translateY(5px);  
  }
  100% {
    transform: translateY(-8px);
  }
}
.disease_main .image img{
    width: 100%;
    height: 100%;
}

.disease_banner .numbers {
    width: 1082px;
    height: 205px;
    border-radius: 4px;
    box-shadow: 0 8px 7px -1px rgba(19, 33, 58, 0.13);
    background: #fff;
    margin-top:100px;
    float: left;
    margin-left: 50px;
}
.numbers ul {
    float: left;
    height:100px;
}
.numbers>ul>li {
    list-style: none;
    float: left;
    width:260px;
    height: 205px;
    margin-top:53px;
}
.numbers ul li>p {
    border-right:1px solid #ccc;
    color: #0257b1;
}
.numbers ul li:nth-child(4)>p {
    border-right:none;
}
.numbers ul li p:nth-child(1){
    font-size: 38px;
}
.numbers ul li p:nth-child(2){
    font-size: 22px;
}
</style>

