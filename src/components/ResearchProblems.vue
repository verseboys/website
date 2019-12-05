<template>
    <div class="research_problems" id="research_problems">
        <div class="question" v-show= "problems">
            <div class="img animated fadeInUp" style="margin-left: 70px;"><img src="@/assets/medieco/yjwt.png" alt=""></div>
            <div class="design animated fadeInUp" style="margin-right: 30px;margin-top: 18px;">
                <b style="width: 78px;height: 88px;"><img src="@/assets/medieco/1.png" alt=""></b>
                <h3 style="line-height:36px;">科研社区沉淀2000+常见临床研究问题</h3>
                <p>来自用户的真实科研项目</p>
                <p>大咖解答，及时解决科研难题</p>
                <p>各领域用户交流，共同提升临床研究水平</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            problems:false
        }
    },
    mounted () {
        window.addEventListener('scroll', this.handleScroll)
    },
    methods: {
        handleScroll () {
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            var offsetTop = document.querySelector('#research_problems').offsetTop;
            if (scrollTop > offsetTop-400) {
                this.problems = true
            }
        },
    }
}
</script>
<style>
.research_problems{
    width:100%;
    height:600px;
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
.design p {
    text-align:left;
    font-size:18px;
    line-height: 32px;
    color:#333;
    width:350px;
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
