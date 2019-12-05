<template>
    <!-- EinMattrix科研大数据主页——产品优势 -->
    <div class="advantage">
        <div class="list_product">
            <h3>产品优势<span></span></h3>
            <div class="advantage_list">
                <dl>
                    <dt><img src="@/assets/EinMatrix/dcjg.svg" alt=""></dt>
                    <dd>灵活的底层架构</dd>
                </dl>
                <dl>
                    <dt><img src="@/assets/EinMatrix/sjmx.svg" alt=""></dt>
                    <dd>定制化数据模型</dd>
                </dl>
                <dl>
                    <dt><img src="@/assets/EinMatrix/xxjs.svg" alt=""></dt>
                    <dd>深度学习技术</dd>
                </dl>
            </div>
            <div class="advantage_list" style="margin-top:80px;">
                <dl>
                    <dt><img src="@/assets/EinMatrix/czfg.svg" alt=""></dt>
                    <dd>简单的操作风格</dd>
                </dl>
                <dl>
                    <dt><img src="@/assets/EinMatrix/tjfx.svg" alt=""></dt>
                    <dd>多维度统计分析</dd>
                </dl>
                <dl>
                    <dt><img src="@/assets/EinMatrix/fzzn.svg" alt=""></dt>
                    <dd>专业辅助智能</dd>
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
.advantage {
    width: 100%;
    height: 819px;
    background-color: #f5f5f5;
}
.advantage .list_product {
    width:1180px;
    height:819px;
    margin:0 auto;
}
.advantage .list_product h3 {
    font-size: 36px;
    text-align:center;
    color: #333;
    margin-bottom:15px;
    padding-top:100px;
    position: relative;
}
.advantage .list_product h3 span {
    width:100px;
    height:3px;
    background:#f5a623;
    position: absolute;
    left:538px;
    top:160px;
}
.advantage .list_product .advantage_list {
    padding-top: 80px;
    height: 200px;
}
.advantage .list_product .advantage_list dl {
    float: left;
    width:182px;
    margin-left:160px;
}
.advantage .list_product .advantage_list dl dt{
    width: 96px;
    height: 109px;
    margin-left: 35px;
}
.advantage .list_product .advantage_list dl dt img {
    width: 100%;
    height: 100%;
}
.advantage .list_product .advantage_list dl dd {
    font-size: 24px;
    color: #333;
    padding-top:21px;
}
</style>

