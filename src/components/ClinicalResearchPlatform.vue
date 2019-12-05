<template>
    <div class="clinical_research">
        <div class="research_platform" id="research_platform">
            <div class="clinical" v-show= "hid">
                <div class="design_storag animated fadeInLeft" style="padding-left:120px;padding-top:88px;">
                    <h3 style="font-size:30px;text-align:left;">临床研究方法学培训平台</h3>
                    <p style="font-size: 18px;padding-top:20px;width:475px;text-align:left;line-height:30px;letter-spacing:1px;color:#333;line-height:38px;">培养呼吸疾病及相关学科临床研究专业人才，提升临床研究技能，助力临床研究人才队伍的建设，促进呼吸领域高质量临床研究成果的高效产出。</p>
                </div>
                <div class="img_storag animated fadeInRight" style="margin-right:91px;margin-top: 37px;"><img src="@/assets/disease/ffxpxpt.svg" alt=""></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            hid:false
        }
    },
    mounted () {
        window.addEventListener('scroll', this.handleScroll)
    },
    methods: {
        handleScroll () {
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            var offsetTop = document.querySelector('#research_platform').offsetTop;
            if (scrollTop > offsetTop-400) {
                this.hid = true
            }
        }
    }
}
</script>
<style>
.clinical_research {
    width: 100%;
    height:497px;
    background:#fff;
}
.research_platform {
    width: 1180px;
    height:497px;
    margin: 0 auto;
}
.clinical {
    width:1180px;
    margin:0 auto;
    float: left;
    margin-top:70px;
}
.design_storag {
    float: left;
}
.img_storag {
    float: right;
}

</style>
