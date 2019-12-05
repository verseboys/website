<template>
    <!-- 共享平台——平台优势 -->
    <div class="platform_advantage">
        <div class="platforms">
            <h4>平台优势<span></span></h4>
            <div class="platform_teams">
                <div class="teams">
                    <h1 style="width:100px;height:50px;"><img src="@/assets/share/zjtd_pic.svg" alt=""></h1>
                    <div class="expert">
                        <h5 style="padding-top:15px;">专家团队</h5>
                        <p style="padding-top:8px;">国内外顶尖学府</p>
                        <p>数十名知名研究者</p>
                    </div>
                </div>
                <div class="teams" style="margin:0 46px;">
                    <h1 style="width:60px;height:65px;"><img src="@/assets/share/ffly.svg" alt=""></h1>
                    <div class="expert">
                        <h5>丰富领域</h5>
                        <p style="padding-top:8px;">涵盖医疗健康</p>
                        <p>多个研究方向</p>
                    </div>
                </div>
                <div class="teams">
                    <h1 style="width:70px;height:50px;"><img src="@/assets/share/aqgx.svg" alt=""></h1>
                    <div class="expert">
                        <h5 style="padding-top:15px;">安全共享</h5>
                        <p style="padding-top:8px;">多层级数据共享制</p>
                        <p>确保数据无忧托管</p>
                    </div>
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
.platform_advantage {
    width:100%;
    height: 560px;
}
.platform_advantage .platforms {
    width:1180px;
    height:560px;
    margin:0 auto;
}
.platform_advantage .platforms h4 {
    font-size: 36px;
    text-align:center;
    color: #333;
    padding-top:30px;
    position: relative;
}
.platform_advantage .platforms h4 span {
    width:70px;
    height:3px;
    background:#f5a623;
    position: absolute;
    left:555px;
    top:95px;
}
.platform_teams {
    margin-left:135px;
    margin-top:70px;
}
.platform_teams .teams {
    width: 263px;
    height: 313px;
    border-radius: 4px;
    box-shadow: 0 2px 4px 0 #eaeaf0;
    background-color: #fff;
    float: left;
}
.platform_teams .teams h1 {
    margin:0 auto;
    margin-top:48px;
    margin-bottom:38px;
}
.platform_teams .teams h1 img {
    width: 100%;
    height: 100%;
}
.expert h5 {
    font-size: 24px;
    color:#000;
}
.expert p {
    font-size: 18px;
    color:#4a4a4a!important;
    
}
</style>
