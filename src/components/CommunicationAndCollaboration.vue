<template>
    <!-- 交流协作 -->
    <div class="communication_collaboration" id="communication_collaboration">
        <div class="search" style="padding-top:100px;" v-show= "communite">
            <div class="design animated fadeInUp" data-delay="0.5s" id="design" style="padding-left: 80px;">
                <b style="display:block;width: 78px;height: 59px;"><img src="@/assets/medieco/3.png" alt=""></b>
                <h3>7大科研社群，3000+临床研究者即时交流协作</h3>
                <p>汇聚活跃的临床研究者</p>
                <p>即时交流临床研究难题</p>
                <p>协作推进临床研究开展</p>
            </div>
            <div class="img imgs animated fadeInUp" data-delay="0.5s" style="margin-right:110px;"><img src="@/assets/medieco/jlxz.png" alt=""></div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            communite:false
        }
    },
    mounted () {
        window.addEventListener('scroll', this.handleScroll)
    },
    methods: {
        handleScroll () {
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            var offsetTop = document.querySelector('#communication_collaboration').offsetTop;
            if (scrollTop > offsetTop-400) {
                this.communite = true
            }
        },
    } 
}
</script>
<style>
.communication_collaboration {
    width:100%;
    height:600px;
}
.search {
    padding-top:150px;
    height:500px;
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
