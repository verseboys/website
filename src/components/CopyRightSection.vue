<template>
    <div class="foot_main">
        <div class="boxs">
            <div class="left_box">
                <p style="width:150px;height:50px;"><img src="@/assets/medieco/logo_2.svg" alt=""></p>
                <p style="width:105px;height:31px;margin-left:16px;margin-top:15px;"><img src="@/assets/medieco/ykh_logo.svg" alt=""></p>
            </div>
            <div class="right_box">
                <ul>
                    <li class="lis">产品服务</li>
                    <li><router-link to="/medieco" style="cursor: pointer;text-decoration: none;">科研教育</router-link></li>
                    <li><router-link to="/einmatrix" style="cursor: pointer;text-decoration: none;">科研大数据</router-link></li>
                    <li><router-link to="/service" style="cursor: pointer;text-decoration: none;">科研服务</router-link></li>
                </ul>
                <ul>
                    <li class="lis">创新成果</li>
                    <li style="width:120px;">
                        <router-link to="/disease" style="cursor: pointer;text-decoration: none;">呼吸疾病临床研究大数据平台</router-link>
                    </li>
                    <li>
                        <router-link to="/shared" style="cursor: pointer;text-decoration: none;">中国队列共享平台</router-link>
                    </li>
                </ul>
                <ul>
                    <li class="lis">关于我们</li>
                    <li><router-link to="/about" style="cursor: pointer;text-decoration: none;">公司简介</router-link></li>
                    <li><router-link to="/about" style="cursor: pointer;text-decoration: none;">加入我们</router-link></li>
                </ul>
                <ul>
                    <li class="lis">联系我们</li>
                    <li><a href="javascript:;" style="cursor:default;">Tel：010-84148036</a></li>
                    <li><a href="javascript:;" style="cursor:default;">Email：business@natureself.cn</a></li>
                    <li><a href="javascript:;" style="cursor:default;">地址：北京市朝阳区望京科技创业园E座315A</a></li>
                </ul>
            </div>
        </div>
        <div class="copy">
            <p>©2018-2019 北京泽创天成科技发展有限公司 版权所有京ICP备16045582号</p>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
li{
    list-style:none;
}
.foot_main {
    width:100%;
    height: 398.7px;
    background:url(../assets/medieco/Rectangle.png) no-repeat;
    background-size:100% 100%;
    position:relative;
}
.foot_main .copy {
    width:100%;
    height: 59px;
    background-color: #192533;
    position:absolute;
    bottom:0;
    left:0;
    opacity:0.8;
}
.copy p {
    color:#fff;
    line-height:59px;
    font-size:14px;
}
.boxs {
    width:1180px;
    margin:0 auto;
}
.left_box {
    float:left;
    width:20%;
    margin-top:102px;
    padding-left: 115px;
}
.left_box p img {
    width: 100%;
    height: 100%;
}
.right_box {
    float:right;
    width:75%;
    padding-top:100px;
}
.right_box ul {
    float: left;
}
.right_box ul li {
    padding:10px 0;
    margin-right: 46px;
    color:#fff;
    font-size:16px;
    text-align: left;
    opacity:0.85;
}
.right_box ul li a {
    font-size:14px;
    color:#fff;
    text-align: left;
}
.right_box ul .lis {
    padding:15px 0;
    opacity:1;
    text-decoration: none;
}
</style>
