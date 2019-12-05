<template>
    <!-- 共享平台——平台内容 -->
    <div class="platform_content">
        <div class="content_box">
            <h4>平台内容<span></span></h4>
            <div class="platform_list">
                <div class="status_list" style="float:left;padding-left:170px;">
                    <div class="status">
                        <h2>队列数据管理标准</h2>
                        <p>建立通用数据模型，对异构数据进行统一清理、转化和储存，并对项目信息进行统一登记</p>
                    </div>
                    <div class="status" style="padding-top:109px;">
                        <h2>专业数据分析技术</h2>
                        <p>多种临床研究方法学支持，为用户制定更具科学性和可行性的研究方案提供参考</p>
                    </div>
                </div>
                <div class="status_list" style="float:right;padding-right:170px;">
                    <div class="status">
                        <h2>海量大型队列数据</h2>
                        <p>已上线全国20个大型人群队列，涉及健康与疾病多个领域与学科，覆盖全国超过50万人群</p>
                    </div>
                    <div class="status" style="padding-top:109px;">
                        <h2>灵活数据共享机制</h2>
                        <p>提供不同层级的数据使用方式，协调不同的数据资源，搭建数据共享通道</p>
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
.platform_content {
    width:100%;
    height: 750px;
    background:#fff;
}
.platform_content .content_box {
    width:1180px;
    height:750px;
    margin:0 auto;
}
.platform_content .content_box h4 {
    font-size: 38px;
    text-align:center;
    color: #333;
    margin-top:30px;
    position: relative;
    padding-top:80px;
}
.platform_content .content_box h4 span {
    width:70px;
    height:3px;
    background:#f5a623;
    position: absolute;
    left:555px;
    top:145px;
}
.platform_list {
    width:1180px;
    height:870px;
    margin:0 auto;
}
.platform_list .status_list .status {
    width: 340px;
    height: 150px;
    margin:0 auto;
    text-align: left;
    /* background-color: #d8dbfb;
    margin-top:16px; */
}
.platform_list .status_list .status h2 {
    font-size:26px;
    padding-top:75px;
    color:#333;
}
.platform_list .status_list .status p {
    font-size:16px;
    color: #7d8e96;
    padding-top:19px;
    line-height:32px;
}
</style>
