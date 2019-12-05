<template>
    <!-- 共享平台——合作机构 -->
    <div class="operation_agency">
        <div class="agency">
            <h4>合作机构<span></span></h4>
            <div class="university">
                <p>
                    <span style="width:53px;height:53px;display:inline-block;margin-top:10px;"><img src="@/assets/share/hzjg_logo.png" alt=""></span>
                    <span style="display:inline-block;font-size:30px;vertical-align: middle;padding-left:28px;color:#333;">北京大学公共卫生学院</span></p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
.operation_agency {
    width:100%;
    height: 370px;
}
.operation_agency .agency {
    width:1180px;
    height:370px;
    margin:20px auto;
}
.operation_agency .agency h4 {
    font-size: 38px;
    text-align:center;
    color: #333;
    padding-top:67px;
    position: relative;
}
.operation_agency .agency h4 span {
    width:70px;
    height:3px;
    background:#f5a623;
    position: absolute;
    left:555px;
    top:135px;
}
.university p {
    width: 1180px;
    margin:44px auto;
    color:#333;
}
.university p span img {
    width: 100%;
    height: 100%;
}
</style>
