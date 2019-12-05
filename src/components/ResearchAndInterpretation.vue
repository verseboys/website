<template>
    <!-- 研究解读 -->
    <div class="research_interpretation" id="research_interpretation">
        <div class="quest" style="padding-top: 110px;height:500px;" v-show= "research">
            <div class="design animated fadeInUp" style="padding-top:44px;padding-right: 30px;">
                <b style="display:block;width: 76px;height: 68px;"><img src="@/assets/medieco/2.png" alt=""></b>
                <h3>300+高质量临床研究成果解读</h3>
                <p>精选高影响因子研究文章</p>
                <p>速递全球最新研究进展</p>
                <p>研究方法+临床意义全方位解读</p>
            </div>
            <div class="img animated fadeInUp" style="margin-left: 60px;"><img src="@/assets/medieco/cgjd.png" alt=""></div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            research:false
        }
    },
    mounted () {
        window.addEventListener('scroll', this.handleScroll)
    },
    methods: {
        handleScroll () {
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            var offsetTop = document.querySelector('#research_interpretation').offsetTop;
            if (scrollTop > offsetTop-450) {
                this.research = true
            }
        },
    } 
}
</script>
<style>
.research_interpretation {
    width:100%;
    height:650px;
}
.design>b>img {
    width: 100%;
    height: 100%;
}
.design h3 {
    text-align:left;
    font-size:28px;
    width:400px;
    padding:20px 0;
}
.design p {
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
.quest {
    padding-top:150px;
    height:500px;
}
.quest>.design {
    float:right;
}
.quest>.img {
    float:left;
    margin-top:31px;
}
#design {
    padding-left:40px;
    padding-top: 32px;
}
</style>
