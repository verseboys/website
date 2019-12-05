<template>
    <!-- 科研服务主页 -->
    <div class="min_width">
        <div class="research">
            <common-nav v-show= "display" id="comn_nav" class="animated slideInDown"/>
            <div class="banner">
                <nav-bar/>
                <div class="banner_main">
                    <div class="main">
                        <h2>优质科研资源与服务</h2>
                        <p style="height:0;font-size:28px;color:#fff;">聚合医疗资源</p>
                        <p style="padding-top:47px;font-size:28px;color:#fff;">形成规模化市场效应</p>
                    </div>
                    <div class="pics"><img src="@/assets/service/head.png" alt=""></div>
                </div>
            </div>
        </div>
        <target-customer/>
        <service-advantage/>
        <service-type/>
        <cooperative-brand/>
        <copy-right-section/>
    </div>
</template>
<script>
import commonNav from "@/components/CommonNav.vue";
import navBar from "@/components/NavBar.vue";
import targetCustomer from "@/components/TargetCustomer.vue";
import serviceAdvantage from "@/components/ServiceAdvantage.vue";
import serviceType from "@/components/ServiceType.vue";
import cooperativeBrand from "@/components/CooperativeBrand.vue";
import copyRightSection from "@/components/CopyRightSection.vue"
export default {
    components: {
        commonNav,
        navBar,
        targetCustomer,
        serviceAdvantage,
        serviceType,
        cooperativeBrand,
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
.min_width {
    width: 100%;
    height: 100%;
    background:#fff;
}
.research {
    width:100%;
    height:630px;
    background:#1a81de;
}
.banner{
    width:1180px;
    margin:0 auto;
    height:auto;
}
.banner_main {
    width:1180px;
}
.banner_main .main {
    float: left;
    width:490px;
    text-align:left;
    padding-top:150px;
    color:#fff;
    margin-left:70px;
}
.main>h2 {
    font-size: 40px;
    color: #fff;
}
.main>p {
    width: 321px;
    font-size: 28px;
}
.banner_main .pics {
    padding-top:20px;
    width: 96%;
    height: 96%;
    margin-left:40px;
}
</style>
