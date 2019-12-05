<template>
    <!-- 科研服务——服务优势 -->
    <div class="service_advantage">
        <div class="advantages">
            <h3>服务优势<span></span></h3>
            <div class="advantage_list">
                <div class="advantage_one">
                    <b><img src="@/assets/service/globe.png" alt=""></b>
                    <h6>统计分析精英团队</h6>
                    <p>科研合作人均来自北大医学部、协和医学院、哈佛大学、约翰霍普金斯大学等国内外知名医学高校、三甲医院和研究机构，拥有流行病学、临床医学、药物经济学等专业医学背景。</p>
                </div>
                <div class="advantage_two">
                    <b><img src="@/assets/service/book.png" alt=""></b>
                    <h6 style="padding-top:20px;">灵活学术推广方案</h6>
                    <p>提供教育培训、数据管理，统计咨询、学术推广等多种临床研究相关服务，维护和拓展临床研究专家网络，促成临床研究学术推广多方位合作。</p>
                </div>
                <div class="advantage_three">
                    <b><img src="@/assets/service/computer.png" alt=""></b>
                    <h6 style="padding-top:26px;">丰富学术运营经验</h6>
                    <p>深耕临床研究学术运营领域多年，与学术团队、临床专家紧密合作，策划、执行近百个各种类型学术推广项目，并利用互联网运营手段，推动临床研究的影响力。</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
.service_advantage {
    width: 100%;
    height:660px;
    background:#eaeaf0;
}
.advantages {
    width:1180px;
    margin:0 auto;
    background:#eaeaf0;
}
.advantages h3 {
    font-size: 36px;
    text-align:center;
    color: #333;
    padding-bottom:10px;
    padding-top:60px;
    position: relative;
}
.advantages h3 span {
    width:120px;
    height:3px;
    background:#f5a623;
    position: absolute;
    left:533px;
    top:122px;
}
.advantages .advantage_list {
    float: left;
    width:1180px;
    margin-left:100px;
    margin-top:60px;
}

.advantages .advantage_list .advantage_one {
    float: left;
    width: 300px;
    height: 379.1px;
    border-radius: 4px;
    background:#fff;
}
.advantage_one b {
    margin:0 auto;
    margin-top:39px;
    width: 62px;
    height: 63px;
    display:block;
}
.advantage_two b {
    margin:0 auto;
    margin-top:40px;
    width: 72px;
    height: 61px;
    display:block;
}
.advantage_three b {
    margin:0 auto;
    margin-top:45px;
    width: 77px;
    height: 51px;
    display:block;
}
.advantages .advantage_list b img {
    width: 100%;
    height: 100%;
}
.advantages .advantage_list h6 {
    font-size:20px;
    color:#000;
    padding:20px 0;
}
.advantages .advantage_list p {
    font-size:14px;
    color:#000;
    padding:0 48px;
    text-align:left;
}
.advantages .advantage_list .advantage_two {
    float: left;
    width: 300px;
    height: 379.1px;
    border-radius: 4px;
    background:#fff;
    margin:0 34px;
}
.advantages .advantage_list .advantage_three {
    float: left;
    width: 300px;
    height: 379.1px;
    border-radius: 4px;
    background:#fff;
}

</style>
