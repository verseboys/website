<template>
    <div class="statistics" id="statistics">
        <div class="research" v-show= "fadeIn">
            <div data-animate="fadeInUp" data-delay="0.5s" class="design animated fadeInUp" style="padding-left:90px;">
                <b style="display:block;width: 70px;height: 62px;"><img src="@/assets/medieco/4.png" alt=""></b>
                <h3>500+临床研究设计和统计教程</h3>
                <p>数百位讲者实力雄厚，毕业自知名医学高校</p>
                <p>独具医咖会风格的手把手医学统计教程</p>
                <p>实例教学，覆盖临床研究全流程知识点</p>
            </div>
            <div class="img animated fadeInUp" data-delay="0.5s" style="margin-right:61px;"><img src="@/assets/medieco/tjjc.png" alt=""></div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            fadeIn:false
        }
    },
    mounted () {
        window.addEventListener('scroll', this.handleScroll)
    },
    methods: {
        handleScroll () {
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            var offsetTop = document.querySelector('#statistics').offsetTop;
            if (scrollTop > offsetTop-400) {
                this.fadeIn = true
            }
        },
    } 
}
</script>
<style scoped>
.statistics {
    width:1180px;
    height:500px;
    clear:both;
}
.research {
    padding-top:150px;
    height:500px;
    background:none;
}
.design {
    float:left;
    padding-left:20px;
}
.design b {
    display:block;
    width: 76px;
    height: 68px;
}
.design b img {
    width: 100%;
    height: 100%;
}
.design h3 {
    text-align:left;
    font-size:28px;
    width:400px;
    padding:20px 0;
}
.design>p {
    text-align:left;
    font-size:18px;
    line-height: 32px;
    color:#333;
}
.img{
    float:right;
    width: 450px;
    height: 343px;
    object-fit: contain;
}
.img img {
    width: 100%;
    height: 100%;
}
.imgs {
    width: 217px;
    height: 420px;
    object-fit: contain;
    margin-right:100px;
}
.question {
    padding-top:150px;
    height:500px;
}
.question>.design {
    float:right;
}
.question>.img {
    float:left;
    margin-top:31px;
}
#design {
    padding-left:40px;
    padding-top: 32px;
}
</style>
