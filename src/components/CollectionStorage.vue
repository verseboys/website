<template>
    <!-- 呼吸疾病——收集与存储平台 -->
    <div class="collection_storage">
        <div class="collection" id="collection">
            <div class="storage" v-show= "hide">
                <div class="design_storage animated fadeInRight" style="padding-right:120px;padding-top:88px;">
                    <h3 style="font-size:28px;text-align:left;">临床研究大数据收集与存储平台</h3>
                    <p style="font-size: 20px;padding-top:10px;text-align:left;width:465px;letter-spacing:1px;color:#333;line-height:38px;">采集专病人群的临床和组学疾病数据，为我国呼吸疾病相关临床研究提供高质量的数据和样本信息。</p>
                </div>
                <div class="img_storage animated fadeInLeft" style="margin-left:91px;"><img src="@/assets/disease/sjyccpt.svg" alt=""></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            hide:false
        }
    },
    mounted () {
        window.addEventListener('scroll', this.handleScroll)
    },
    methods: {
        handleScroll () {
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            var offsetTop = document.querySelector('#collection').offsetTop;
            if (scrollTop > offsetTop-400) {
                this.hide = true
            }
        },
    }
}
</script>
<style>
.collection_storage {
    width: 100%;
    height:450px;
    background:#fff;
}
.collection {
    width:1180px;
    height:450px;
    margin:0 auto;
}
.storage {
    width:1180px;
    margin:0 auto;
    float: left;
    margin-top:60px;
}
.design_storage {
    float: right;
}
.img_storage {
    float: left;
}
</style>
