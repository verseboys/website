<template>
<!-- 科研服务——目标客户 -->
    <div class="target_customer">
        <div class="target">
            <h3>目标客户<span></span></h3>
            <div class="target_list">
                <div class="customer_one">
                    <b><img src="@/assets/service/ypqy.png" alt=""></b>
                    <div class="mask">
                        <span>药械企业</span>
                    </div>
                </div>
                <div class="customer_two">
                    <b><img src="@/assets/service/ylbx.png" alt=""></b>
                    <div class="mask">
                        <span>医疗保险</span>
                    </div>
                </div>
                <div class="customer_three">
                    <b><img src="@/assets/service/yplt.png" alt=""></b>
                    <div class="mask">
                        <span>药品流通</span>
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
.target_customer {
    width: 100%;
    height:650px;
    background:#f3f6f9;
}
.target {
    width:1180px;
    margin:0 auto;
}
.target h3 {
    font-size: 36px;
    text-align:center;
    color: #333;
    padding-bottom:10px;
    padding-top:60px;
    position: relative;
}
.target h3 span {
    width:120px;
    height:3px;
    background:#f5a623;
    position: absolute;
    left:533px;
    top:122px;
}
.target_list {
    width:1180px;
    height:400px;
    margin-top:82px;
    margin-left:88px;
}
.target_list .customer_one {
    width: 302px;
    height: 302px;
    float: left;
    position: relative;
    margin-left:26px;
    overflow:hidden;
}
.target_list .customer_one b {
    width: 302px;
    height: 302px;
    display:block;
}
.target_list .customer_one b img{
    width: 100%;
    height: 100%;
}
.target_list .customer_one:hover img{
    transition: all 1s;
    transform: scale(1.2);
}
.target_list .customer_one .mask {
    width: 302px;
    height: 302px;
    background:rgba(0, 0, 0, 0.6);
    position: absolute;
    left:0;
    top:0;
}
.target_list .customer_one .mask span {
    text-align:center;
    line-height:302px;
    color:#fcfbfb;
    font-size: 40px;
}

.target_list .customer_two {
    width: 302px;
    height: 302px;
    float: left;
    position: relative;
    margin-left:26px;
    overflow:hidden;
}
.target_list .customer_two b {
    width: 302px;
    height: 302px;
    display:block;
}
.target_list .customer_two b img{
    width: 100%;
    height: 100%;
}
.target_list .customer_two:hover img{
    transition: all 1s;
    transform: scale(1.2);
}
.target_list .customer_two .mask {
    width: 302px;
    height: 302px;
    background:rgba(0, 0, 0, 0.6);
    position: absolute;
    left:0;
    top:0;
}
.target_list .customer_two .mask span {
    text-align:center;
    line-height:302px;
    color:#fcfbfb;
    font-size: 40px;
}

.target_list .customer_three {
    width: 302px;
    height: 302px;
    float: left;
    position: relative;
    margin-left:26px;
    overflow:hidden;
}
.target_list .customer_three b {
    width: 302px;
    height: 302px;
    display:block;
}
.target_list .customer_three b img{
    width: 100%;
    height: 100%;
}
.target_list .customer_three:hover img{
    transition: all 1s;
    transform: scale(1.2);
}
.target_list .customer_three .mask {
    width: 302px;
    height: 302px;
    background:rgba(0, 0, 0, 0.6);
    position: absolute;
    left:0;
    top:0;
}
.target_list .customer_three .mask span {
    text-align:center;
    line-height:302px;
    color:#fcfbfb;
    font-size: 40px;
}
</style>
