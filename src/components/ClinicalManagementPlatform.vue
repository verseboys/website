<template>
    <div class="management_platform">
        <div class="clinical_management" id="clinical_management">
            <div class="manage" v-show= "fadeout">
                <div class="design_stor animated fadeInRight" style="padding-right:120px;padding-top:88px;">
                    <h3 style="font-size:30px;text-align:left;">临床研究项目管理平台</h3>
                    <p style="font-size: 18px;padding-top:20px;width:400px;text-align:left;line-height:30px;letter-spacing:1px;color:#333;line-height:38px;">提供从项目申报，贯穿项目实施，到项目结题的全流程系统化管理服务。</p>
                </div>
                <div class="img_stor animated fadeInLeft" style="margin-left:91px;margin-top: 37px;"><img src="@/assets/disease/xmglpt.svg" alt=""></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            fadeout:false
        }
    },
    mounted () {
        window.addEventListener('scroll', this.handleScroll)
    },
    methods: {
        handleScroll () {
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            var offsetTop = document.querySelector('#clinical_management').offsetTop;
            if (scrollTop > offsetTop-400) {
                this.fadeout = true
            }
        },
    }
}
</script>
<style>
.management_platform {
    width: 100%;
    height:555px;
    background:#fcfbfb;
}
.clinical_management {
    width: 1180px;
    height:555px;
    margin: 0 auto;
}
.manage {
    width:1180px;
    margin:0 auto;
    float: left;
    margin-top:70px;
}
.design_stor {
    float: right;
}
.img_stor {
    float: left;
}
</style>
