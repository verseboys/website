<template>
    <!-- 关于我们——核心团队 -->
    <div class="team">
        <div class="core_team">
            <h3>核心团队<span></span></h3>
            <div class="core_list">
                <dl>
                    <dt><img src="@/assets/about/yxtd.svg" alt=""></dt>
                    <dd>医学团队</dd>
                </dl>
                <dl>
                    <dt><img src="@/assets/about/tjtd.svg" alt=""></dt>
                    <dd>统计团队</dd>
                </dl>
                <dl>
                    <dt><img src="@/assets/about/cptd.svg" alt=""></dt>
                    <dd>产品团队</dd>
                </dl>
                <dl>
                    <dt><img src="@/assets/about/jstd.svg" alt=""></dt>
                    <dd>技术团队</dd>
                </dl>
            </div>

            <div class="core_list">
                <dl>
                    <dt><img src="@/assets/about/xsyytd.svg" alt=""></dt>
                    <dd>学术运营团队</dd>
                </dl>
                <dl>
                    <dt><img src="@/assets/about/kcnrtd.svg" alt=""></dt>
                    <dd>课程内容团队</dd>
                </dl>
                <dl>
                    <dt><img src="@/assets/about/hdchtd.svg" alt=""></dt>
                    <dd>活动策划团队</dd>
                </dl>
                <dl>
                    <dt><img src="@/assets/about/hwzjtd.svg" alt=""></dt>
                    <dd>海外专家团队</dd>
                </dl>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>
<style>
.team {
    width:100%;
    height:900px;
    background:#f9f9f9;
}
.core_team {
    width:1180px;
    margin:0 auto;
}
.core_team h3 {
    font-size: 36px;
    text-align:center;
    color: #333;
    padding-bottom:10px;
    padding-top:76px;
    position: relative;
}
.core_team h3 span {
    width:100px;
    height:3px;
    background:#f5a623;
    position: absolute;
    left:538px;
    top:135px;
}
.core_team .core_list {
    margin-left:100px;
}
.core_team .core_list dl {
    float: left;
    width: 220px;
    height: 251px;
    box-shadow: 0 5px 4px 0 rgba(207, 220, 228, 0.46);
    background: white;
    margin:0 12px;
    margin-top:70px;
}
.core_team .core_list dl:hover {
    transition: .8s;
    transition-timing-function: ease;
    transform: scale(1.05);
    box-shadow: 0 9px 15px 0 rgba(207, 220, 228, 0.77);
    background-color:white;
}
.core_team .core_list dl dt {
    width: 72px;
    height: 57px;
    margin:0 auto;
    margin-top:67px;
}
.core_team .core_list dl dt img {
    width: 100%;
    height: 100%;
}
.core_team .core_list dl dd {
    padding-top:32px;
    font-size:22px;
}
</style>

