<template>
    <!-- EinMattrix科研大数据主页——我们的服务 -->
    <div class="service" style="background:#fff;width:100%;height:650px;">
        <div class="serve">
            <h4>我们的服务<span></span></h4>
            <div class="process">
                <ul class="data">
                    <li>数据抽取与清洗 </li>
                    <li style="width: 54px;height: 38px;margin:0 67px;"><img src="@/assets/EinMatrix/big_arrow.svg" alt=""></li>
                    <li>数据采集与质控 </li>
                    <li style="width: 54px;height: 38px;margin:0 67px;"><img src="@/assets/EinMatrix/big_arrow.svg" alt=""></li>
                    <li>数据分析与共享</li>
                </ul>
                <div class="hover" id="hover">
                    <div class="hover_one currents a" @click= "mouseclick($event,0)" :class= "[num == ''? active1 : '']">
                        <div class="one_img dt"></div> 
                        <div class="one_dd dd" :class= "[num == ''? active1 : '']" style="padding-top:60px;">数据融合平台</div>
                        <div class="triangle" v-show= "first==0"></div>
                    </div>
                    <div class="hover_two currents b" @click= "mouseclick($event,1)" :class= "[num == '1'? active1 : '']">
                        <div class="two_img dt"></div> 
                        <div class="two_dd dd" :class= "[num == '1'? active1 : '']" style="padding-top:70px;">数据标准化</div>
                        <div class="triangle" v-show= "first==1"></div>
                    </div>
                    <div class="hover_three currents c" @click= "mouseclick($event,2)"  :class= "[num == '2'? active1 : '']">
                        <div class="three_img dt"></div> 
                        <div class="three_dd dd" :class= "[num == '2'? active1 : '']" style="padding-top:73px;">数据采集平台</div>
                        <div class="triangle" v-show= "first==2"></div>
                    </div>
                    <div class="hover_four currents d" @click= "mouseclick($event,3)" :class= "[num == '3'? active1 : '']">
                        <div class="four_img dt"></div> 
                        <div class="four_dd dd" :class= "[num == '3'? active1 : '']" style="padding-top:71px;">数据分析平台</div>
                        <div class="triangle" v-show= "first==3"></div>
                    </div>
                    <div class="hover_five currents e" @click= "mouseclick($event,4)" :class= "[num == '4'? active1 : '']">
                        <div class="five_img dt"></div> 
                        <div class="five_dd dd" :class= "[num == '4'? active1 : '']" style="padding-top:72px;">数据共享平台</div>
                        <div class="triangle" v-show= "first==4"></div>
                    </div>
                    <div class="hover_main" id="hover_main">
                        <div class="first_main" v-show= "first==0">
                           <ul>
                                <li>多渠道数据源接入</li>
                                <li>一键转换异构数据</li>
                                <li>标准数据导出</li>
                            </ul> 
                            <ul>
                                <li>批量清洗不良数据</li>
                                <li>数据版本化管理</li>
                                <li>便捷数据应用分析</li>
                            </ul>
                        </div>
                        <div class="second_main" v-show= "first==1">
                            <div class="box box1">
                                <h2>CDISC</h2>
                                <p>专病标准表单库</p>
                            </div>
                            <div class="box box2">
                                <h2>WHO-ADR</h2>
                                <p>标准医学术语集</p>
                            </div>
                            <div class="box box3">
                                <h2>CDISC</h2>
                                <p>标准化数据库</p>
                            </div>
                        </div>
                        <div class="third_main" v-show= "first==2">
                            <div class="list_third">
                                <h3>科研管理</h3>
                                <p>单病种协作网络</p>
                                <p>多中心管理权限</p>
                                <p>可视化数据报告</p>
                            </div>
                            <div class="list_third">
                                <h3>eCRF配置</h3>
                                <p>丰富的控件类型</p>
                                <p>快速设置随访计划</p>
                                <p>自定义个人表单库</p>
                            </div>
                            <div class="list_third">
                                <h3>数据质控</h3>
                                <p>系统数值质控</p>
                                <p>高级逻辑指控</p>
                                <p>远程人工质疑</p>
                            </div>
                            <div class="list_third">
                                <h3>数据安全</h3>
                                <p>数据权限设置</p>
                                <p>数据痕迹追溯</p>
                                <p>电子签名加密</p>
                            </div>
                        </div>
                        <div class="fourth_main" v-show= "first==3">
                            <div class="my_picture">
                                <img src="@/assets/EinMatrix/fxptycpt.svg" alt="">
                            </div>
                        </div>
                        <div class="fifth_main" v-show= "first==4">
                            <div class="last">
                                <div class="language">
                                    <h5>数据共享平台</h5>
                                    <p>跨学科、跨研究领域</p>
                                    <p>打破数据孤岛</p>
                                    <p>提高数据资源的利用率</p>
                                    <p>数据价值的深度挖掘与再创造</p>
                                </div>
                                <div class="img" style="margin-right:160px;">
                                    <img src="@/assets/EinMatrix/il-home-hosted.svg" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            index:'',
            first:0,
            num:'',
            active1:'active',
        }
    },
    methods: {
        mouseclick($event,index){
            this.first = index;
            this.num  = index;
        }
    }
}
</script>

<style>
.active {
    color: #4a90e2!important;
}
.service {
    box-shadow: 0 2px 4px 0 #eaeaf1;
}
.service .serve {
    width:1180px;
    margin:0 auto;
}
.service .serve h4 {
    font-size: 36px;
    text-align:center;
    color: #333;
    padding-top:100px;
    position: relative;
}
.service .serve h4 span {
    width:130px;
    height:3px;
    background:#f5a623;
    position: absolute;
    left:523px;
    top:160px;
}
.service .serve .process .data {
    width:1180px;
    height:40px;
    margin:0 auto;
    padding-top:55px;
    padding-left:108px;
}
.service .serve .process .data li {
    list-style:none;
    line-height:40px;
    float: left;
    font-size: 28px;
    color: #333;
}  
.service .serve .process .data li img {
    width: 100%;
    height: 100%;
}
.service .serve .process .hover {
    padding-top:127px;
    padding-left:70px;
}
.service .serve .process .hover .currents {
    float: left;
    margin:0 57px;
    position:relative;
}
.service .serve .process .hover .currents .triangle {
    border-width: 22px;
    position: absolute;
    bottom:-135px;
    left:30px;
    border-style: dashed dashed solid dashed;
    border-color: transparent transparent #f5f5f5 transparent;
}
.service .serve .process .hover .currents .dt {
    margin:0 auto;
}

/* 1 */
.service .serve .process .hover .hover_one .one_img {
    width:69px;
    height:78px;
    background:url(../assets/EinMatrix/sjrhpt.svg) no-repeat;
    background-size:100% 100%;
}
.service .serve .process .hover .hover_one:hover .one_img{
    background:url(../assets/EinMatrix/rhpt.svg) no-repeat;
    background-size:100% 100%;
}
.service .serve .process .hover .hover_one:hover .dd{ 
    color: #4a90e2;
}

.hover_one.a.active .one_img {
    background:url(../assets/EinMatrix/rhpt.svg) no-repeat!important;
    background-size:100% 100%;
}
.hover_two.b.active .two_img {
    background:url(../assets/EinMatrix/bzh.svg) no-repeat!important;
    background-size:100% 100%;
}
.hover_three.c.active .three_img {
    background:url(../assets/EinMatrix/cjpt.svg) no-repeat!important;
    background-size:100% 100%;
}
.hover_four.d.active .four_img {
    background:url(../assets/EinMatrix/fxpt.svg) no-repeat!important;
    background-size:100% 100%;
}
.hover_five.e.active .five_img {
    background:url(../assets/EinMatrix/gxpt.svg) no-repeat!important;
    background-size:100% 100%;
}

/* 2 */
.service .serve .process .hover .hover_two .two_img {
    width:70px;
    height:75px;
    background:url(../assets/EinMatrix/sjbzh.svg) no-repeat;
    background-size:100% 100%;
    margin-top: -7px;
}
.service .serve .process .hover .hover_two:hover .two_img {
    background:url(../assets/EinMatrix/bzh.svg) no-repeat;
    background-size:100% 100%;
}
.service .serve .process .hover .hover_two:hover .dd{ 
    color: #4a90e2;
}
/* 3 */
.service .serve .process .hover .hover_three .three_img {
    width:94px;
    height:72px;
    background:url(../assets/EinMatrix/sjcjpt.svg) no-repeat;
    background-size:100% 100%;
    margin-top: -7px;
}
.service .serve .process .hover .hover_three:hover .three_img {
    background:url(../assets/EinMatrix/cjpt.svg) no-repeat;
    background-size:100% 100%;
}
.service .serve .process .hover .hover_three:hover .dd{ 
    color: #4a90e2;
}
/* 4 */
.service .serve .process .hover .hover_four .four_img {
    width:73px;
    height:80px;
    background:url(../assets/EinMatrix/sjfxpt.svg) no-repeat;
    background-size:100% 100%;
    margin-top: -14px;
}
.service .serve .process .hover .hover_four:hover .four_img {
    background:url(../assets/EinMatrix/fxpt.svg) no-repeat;
    background-size:100% 100%;
}
.service .serve .process .hover .hover_four:hover .dd{ 
    color: #4a90e2;
}
/* 5 */
.service .serve .process .hover .hover_five .five_img {
    width:70px;
    height:80px;
    background:url(../assets/EinMatrix/sjgxpt.svg) no-repeat;
    background-size:100% 100%;
    margin-top: -14px;
}
.service .serve .process .hover .hover_five:hover .five_img {
    background:url(../assets/EinMatrix/gxpt.svg) no-repeat;
    background-size:100% 100%;
}
.service .serve .process .hover .hover_five:hover .dd{ 
    color: #4a90e2;
}
.service .serve .process .hover .currents .dt img {
    width: 100%;
    height: 100%;
}
.service .serve .process .hover .currents .dd {
    color: #8c96a9;
    font-size:18px;
}
.service .serve .process .hover .currents .dd:hover {
    color: #4a90e2;
}

/* 数据融合平台 */
.service .serve .process .hover #hover_main {
    width:100%;
    height:620px;
    clear:both;
}
.service .serve .process .hover #hover_main .first_main{
    width:1180px;
    margin:0 auto;
    padding-top: 63px;
}
.service .serve .process .hover #hover_main .first_main ul {
    width:100%;
    margin-left:100px;
    float: left;
    margin-top:12px;
}
.service .serve .process .hover #hover_main .first_main ul:nth-child(1){
    width:100%;
    margin:0 auto;
    margin-top:152px;
    margin-left:100px;
}
#hover_main .first_main ul li {
    width: 234px;
    height: 100px;
    border-radius: 8px;
    background-color: #4a90e2;
    color:#fff;
    line-height:100px;
    text-align:center;
    float: left;
    margin:20px;
    font-size: 20px;
    list-style:none;
}
.service .serve .process .hover #hover_main .second_main {
    width:1180px;
    padding-left:60px;
    padding-top: 80px;
}
.service .serve .process .hover #hover_main .second_main .box {
    float: left;
    width: 300px;
    height: 315px;
    margin:10px;
    margin-top:152px;
    text-align:center;
    color:#fcfbfb;
    font-size:36px;
}
.service .serve .process .hover #hover_main .second_main .box h2 {
    padding-top:100px;
    font-weight:normal;
    color:#fcfbfb;
    font-size:36px;
}
.service .serve .process .hover #hover_main .second_main .box p {
    font-size:22px;
    line-height:4px;
}
.service .serve .process .hover #hover_main .second_main .box1 {
    background-color: #4a90e2;
}
.service .serve .process .hover #hover_main .second_main .box2 {
    background-color: rgba(76, 74, 159, 0.81);
}
.service .serve .process .hover #hover_main .second_main .box3 {
    background-color: #2e7b64;
}
.third_main {
    padding-top: 63px;
}
.service .serve .process .hover #hover_main .third_main .list_third {
    width: 256px;
    margin-top:152px;
    height: 310px;
    background-color: #ffffff;
    box-shadow: 0 2px 4px 0 #d8d8d8;
    float: left;
    margin-right:20px;
}   
.service .serve .process .hover #hover_main .third_main .list_third>h3 {
    text-align:center;
    font-size:28px;
    color:#333;
    line-height:40px;
    padding-top:47px;
}
.service .serve .process .hover #hover_main .third_main .list_third>p {
    text-align:center;
    font-size:18px;
    color:#333;
    line-height:42px;
}
.service .serve .process .hover #hover_main .third_main .list_third>p:nth-child(2) {
    padding-top:10px;
}
.fourth_main {
    margin-top: 63px;
}
#hover_main .fourth_main .my_picture {
    width: 816px;
    height: 369px;
}
#hover_main .fourth_main .my_picture img {
    width: 100%;
    height: 100%;
    margin-top:200px;
    margin-left: 108px;
}
.service .serve .process .hover #hover_main .fifth_main {
    width:1180px;
    padding-top: 80px;
}
.service .serve .process .hover #hover_main .fifth_main .last {
    width:1180px;
    float: left;
    margin-top:152px;
}
.fifth_main .last .language {
    float: left;
    text-align:left;
    padding-left:170px;
}
.fifth_main .last .language h5 {
    font-size:37px;
    padding:20px 0;
    font-weight:normal;
    color:#403f40;
}
.fifth_main .last .language p {
    font-size: 18px;
    color:#333;
    line-height:46px;
}
</style>
