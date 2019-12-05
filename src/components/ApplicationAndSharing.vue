<template>
    <!-- 呼吸疾病——应用与共享 -->
    <div class="application_share">
        <div class="application">
            <h2>呼吸疾病临床研究数据的应用与共享</h2>
            <div class="list_team">
                <div class="applicate">
                    <b style="width:159px;height:108px;margin-top: -5px;"><img src="@/assets/disease/dxdl.svg" alt=""></b>
                    <p style="padding-top:34px;">呼吸疾病<br/>专病大型队列</p>
                </div>
                <div class="applicate">
                    <b style="width:163px;height:92px;"><img src="@/assets/disease/sjbz.svg" alt=""></b>
                    <p style="padding-top:45px;">呼吸疾病<br/>专病数据标准</p>
                </div>
                <div class="applicate">
                    <b style="width:153px;height:109px;margin-top: -15px;"><img src="@/assets/disease/nljs.svg" alt=""></b>
                    <p style="padding-top:43px;">呼吸疾病<br/>体系与能力建设</p>
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
.application_share {
    width:100%;
    height:465px;
    background:#fff;
}
.application {
    width:1180px;
    height:300px;
    margin:0 auto;
    margin-top:185px;
}
.application h2 {
    font-size: 36px;
    margin:90px 0;
    padding-top: 40px;
    color:#333;
}
.list_team .applicate {
    float: left;
    margin-left:165px;
}
.applicate>b {
    display:block;
}
.applicate>b img {
    width: 100%;
    height: 100%;
}
.applicate p {
    color: #00559c;
    font-size: 20px;
}
</style>
