<template>
    <div class="core">
        <h3>核心优势</h3>
        <div class="list">
            <div class="lists">
                <div class="finger" id="finger">
                    <div class="bgs">
                        <div class="bg"></div>
                    </div>
                </div>
                <h4>原创科研项目</h4>
                <p style="padding-top:40px;margin-top:-20px;">通过与大数据平台的融合，提供类型丰富的真实科研项目</p>
            </div>
            <div class="lists two">
                <div class="origin">
                    <div class="projects">
                        <div class="project"></div>
                    </div>
                </div>
                <h4>科研实践训练</h4>
                <p>参与真实的临床研究项目，将理论运用到实践中，提升技能</p>
            </div>
            <div class="lists">
                <div class="style">
                    <div class="huds">
                        <div class="hud"></div>
                    </div>
                </div>
                <h4>学习社群互动</h4>
                <p>聚合临床医生与科研大咖，探讨问题，开展科研协作</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
html {
    font-family: sans-serif;
    line-height: 1.4;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    -ms-overflow-style: scrollbar;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
html, body, #app {
    padding: 0;
    margin: 0;
    min-width: 100%;
    min-height: 100%;
}
.core {
    width: 1180px;
    height:600px;
}
.core h3 {
    width: 192px;
    height: 67px;
    font-family: PingFangSC;
    font-size: 48px;
    color: #31495d;
    margin:0 auto;
    clear: both;
}
.list {
    width:1180px;
    float:left;
    padding-left:90px;
    padding-top:66px;
}
.lists {
    width: 300px;
    height: 400px;
    border-radius: 14px;
    background-color: #ffffff;
    background-color: var(--white);
    box-shadow: 0 2px 15px 1px #ece9e4;
    float:left;
    cursor: pointer;
}
.lists h4 {
    font-size: 28px;
    color: #31495d;
    text-align:center;
}
.lists p {
    padding: 0 40px;
    font-size: 16px;
    text-align: center;
    color: #8c96a9;
    padding-top:20px;
    line-height:26px;
    width:321px;
}
/* first */
.lists .finger {
    position:relative;
}
.lists .finger .bgs {
    width: 100px;
    height: 100px;
    margin:70px auto;
    position:relative;
    background:url(../assets/medieco/finger-print-blue.png) no-repeat;
    background-size:100% 100%;
}
.lists .finger .bg {
    width: 100px;
    height: 100px;
    position:absolute;
    top:0;
    left:0;
    background:url(../assets/medieco/finger.png) no-repeat; 
    background-size:100% 100%;
}
.lists .finger .bg:hover {
    background:url(../assets/medieco/finger-print-blue.png) no-repeat;
    background-size:100% 100%;
}
.lists .finger #slider {
    width:150px;
    height:3px;
    background:#f7945c;
    position:absolute;
    top:50%;
    left:95px;
}

/* second */
.two {
    margin:0 50px;
    margin-top:78px;
}
.two .origin {
    position: relative;
}
.two .origin .projects {  /* 划过的 */
    width: 130px;
    height: 128px;
    margin:58px auto;
    position:relative;
    background:url(../assets/medieco/ico-widget-hover.png) no-repeat;
    background-size:100% 100%;
}
.two .origin .project {
    width: 130px;
    height: 128px;
    position:absolute;
    top:0;
    left:0;
    background:url(../assets/medieco/kysjxl.png) no-repeat;
    background-size:100% 100%;
}
.two .origin .project:hover {
    background:url(../assets/medieco/ico-widget-hover.png) no-repeat;
    background-size:100% 100%;
}
/* third */
.lists .style {
    position: relative;
}
.lists .style .huds {
    width: 150px;
    height: 135px;
    margin:58px auto;
    position:relative;
    background:url(../assets/medieco/coffee-selected.png) no-repeat;
    background-size:100% 100%;
}
.lists .style .hud {
    width: 150px;
    height: 135px;
    position:absolute;
    top:0;
    left:0;
    background:url(../assets/medieco/ico-coffee.png) no-repeat;
    background-size:100% 100%;
}
.lists .style .hud:hover {
    background:url(../assets/medieco/coffee-selected.png) no-repeat;
    background-size:100% 100%;
}
.lists img {
    width: 100%;
    height: 100%;
}
</style>
