<template>
    <!-- 科研服务——合作品牌 -->
    <div class="cooperative_brand">
        <div class="brands">
            <h3>合作品牌<span></span></h3>
            <div class="cooperative">
                <p><img src="@/assets/service/logos.png" alt=""></p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
.cooperative_brand {
    width: 100%;
    height:800px;
    background:#fff;
}
.brands {
    width:1180px;
    margin:0 auto;
}
.brands h3 {
    font-size: 36px;
    text-align:center;
    color: #333;
    padding-bottom:10px;
    padding-top:60px;
    position: relative;
}
.brands h3 span {
    width:120px;
    height:3px;
    background:#f5a623;
    position: absolute;
    left:533px;
    top:122px;
}

.brands .cooperative p {
    width: 813px;
    height: 447px;
    margin:98px auto;
}
.brands .cooperative p img {
    width: 100%;
    height: 100%;
}
</style>
