<template>
    <!-- 关于我们——新闻报道 -->
    <div class="news">
        <div class="report">
            <ul>
                <li class="li"><h3>新闻报道<span></span></h3></li>
                <div class="list">
                    <a target="_blank" href="https://36kr.com/p/5148115.html">
                        <dl>
                            <dt><img src="@/assets/about/36Kr.png" alt=""></dt>
                            <dd>
                                <p>从科研培训到大数据管理和分析，「泽创天成」要服务临床研究的“全生命周期”</p>
                                <p>2018-08-20</p>
                            </dd>
                        </dl>
                    </a>
                    <a target="_blank" href="https://www.toutiao.com/i6602898572780241422/">
                        <dl>
                            <dt style="width: 70px;height: 69px;margin-top:34px;"><img src="@/assets/about/headline.png" alt=""></dt>
                            <dd>
                                <p>人大代表团考察泽创天成，鼓励医生科研教育，做真正的临床科研大数据</p>
                                <p>2018-09-19</p>
                            </dd>
                        </dl>
                    </a>
                    <a target="_blank" href="https://vcbeat.net/MTNhMDg3MjdmZWY4NTI0ZWQ5MGYyNWM1MGRmNDYzYmY=">
                        <dl>
                            <dt style="width: 70px;height: 68px;margin-top:34px;"><img src="@/assets/about/vb.png" alt=""></dt>
                            <dd>
                                <p style="height:106px;">以科研为流量新入口，医咖会如何打造顶级临床研究学习平台？</p>
                                <p>2018-10-10</p>
                            </dd>
                        </dl>
                    </a>
                </div>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
.news {
    width:100%;
    height:450px;
    background:#f9f9f9;
}
.report {
    width:1180px;
    height:450px;
    margin:0 auto;
    margin-top:110px;
}
.report ul .li {
    list-style:none;
    width:100px;
    float: left;
}
.report ul .li h3 {
    font-size: 36px;
    position: relative;
    padding-top:86px;
    color:#333;
}
.report ul .li h3 span{
    width:40px;
    height:3px;
    background:#f5a623;
    position: absolute;
    left:30px;
    top:200px;
}
.report ul .list {
    width:1000px;
    float: right;
}
.report ul .list dl {
    float: left;
    width: 273px;
    height: 324px;
    box-shadow: 0 2px 4px 0 #eaeaf0;
    background-color: white;
    margin:0 15px;
}
.report ul .list dl:hover {
    transition: 1s;
    transition-timing-function: ease;
    transform: scale(1.05);
}
.list dl dt {
    width: 85px;
    height: 50px;
    margin:0 auto;
    margin-top:54px;
}
.list dl dt img {
    width: 100%;
    height: 100%;
}
.list dl dd p {
    width:226px;
    margin:0 auto;
    color: #403f40;
    text-align:left;
}
.list dl dd p:nth-child(1){
    padding-top:34px;
}
.list dl dd p:nth-child(2){
    width:226px;
    margin:0 auto;
    color: #403f40;
    text-align:center;
    padding-top:60px;
}
</style>
