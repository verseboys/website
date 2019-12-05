<template>
    <!-- 科研服务——服务类型 -->
    <div class="service_type">
        <div class="types">
            <h3>服务类型<span></span></h3>
            <div class="types_lists">
                <dl style="margin-left:260px;" 
                @click= "mouseent($event,0)" 
                :class= "[num == ''? active : '']">
                    <dt>临床研究CRO服务</dt>
                    <dd v-show= "append==0"></dd>
                </dl>
                <dl @click= "mouseent($event,1)" 
                :class= "[num == '1'? active : '']">
                    <dt>医学科研活动策划</dt>
                    <dd v-show= "append==1"></dd>
                </dl> 
                <div class="types_contain">
                    <div class="types_one" v-show= "append==0">
                        <div class="types_top" style="margin-left:150px;">
                            <dl>
                                <dt style="width:62px;height:62px;"><img src="@/assets/service/tjfx.svg" alt=""></dt>
                                <dd>
                                    <p style="font-size:22px;color:#000;">上市后观察性研究设计和统计分析</p>
                                    <p style="font-size:18px;padding-top:5px;color:#000;">科学的设计和充足的预算</p>
                                </dd>
                            </dl>
                            <dl>
                                <dt style="width:65px;height:65px;"><img src="@/assets/service/sjwj.svg" alt=""></dt>
                                <dd>
                                    <p style="font-size:22px;color:#000;">基于电子病历的数据挖掘</p>
                                    <p style="font-size:18px;padding-top:5px;color:#000;">数据的可及性及质量</p>
                                </dd>
                            </dl>
                        </div>
                        <div class="types_top">
                            <dl>
                                <dt style="width:66px;height:65px;"><img src="@/assets/service/xtpj.svg" alt=""></dt>
                                <dd>
                                    <p style="font-size:22px;color:#000;">Meta分析与系统评价</p>
                                    <p style="font-size:18px;padding-top:5px;color:#000;">原始研究的数据及质量</p>
                                </dd>
                            </dl>
                            <dl>
                                <dt style="width:69px;height:71px;"><img src="@/assets/service/jjxyj.svg" alt=""></dt>
                                <dd>
                                    <p style="font-size:22px;color:#000;">卫生经济学与药物经济学研究</p>
                                    <p style="font-size:18px;padding-top:5px;color:#000;">临床证据、专家资源和经济学数据</p>
                                </dd>
                            </dl>
                        </div>
                    </div>
                    <div class="types_two" v-show= "append==1">
                        <div class="types_top" style="margin-left:150px;">
                            <dl>
                                <dt style="width:68px;height:68px;"><img src="@/assets/service/jypx.svg" alt=""></dt>
                                <dd>
                                    <p style="font-size:22px;color:#000;">教育培训</p>
                                    <p style="font-size:18px;padding-top:5px;color:#000;">线上线下联动，融合科研思维</p>
                                </dd>
                            </dl>
                            <dl>
                                <dt style="width:64px;height:63px;"><img src="@/assets/service/gypx.svg" alt=""></dt>
                                <dd>
                                    <p style="font-size:22px;color:#000;">公益评选</p>
                                    <p style="font-size:18px;padding-top:5px;color:#000;">关爱医生群体，弘扬医者精神</p>
                                </dd>
                            </dl>
                        </div>
                        <div class="types_top">
                            <dl>
                                <dt style="width:66px;height:65px;"><img src="@/assets/service/nhlt.svg" alt=""></dt>
                                <dd>
                                    <p style="font-size:22px;color:#000;">年会论坛</p>
                                    <p style="font-size:18px;padding-top:5px;color:#000;">汇集行业资源，推动基层医疗</p>
                                </dd>
                            </dl>
                            <dl>
                                <dt style="width:66px;height:71px;"><img src="@/assets/service/mttg.svg" alt=""></dt>
                                <dd>
                                    <p style="font-size:22px;color:#000;">媒体推广</p>
                                    <p style="font-size:18px;padding-top:5px;color:#000;">拓宽传播渠道，助力资源下沉</p>
                                </dd>
                            </dl>
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
            num:'',
            active:'defaults',
            append:0,
        }
    },
    methods: {
        mouseent($event,index){
            this.append = index;
            this.num  = index;
        }
    }
}
</script>
<style>
p{
    margin-bottom:0;
}
.service_type {
    width: 100%;
    height:650px;
    background:#f3f6f9;
}
.types {
    width:1180px;
    margin:0 auto;
}
.types h3 {
    font-size: 36px;
    text-align:center;
    color: #333;
    padding-bottom:10px;
    padding-top:60px;
    position: relative;
}
.types h3 span {
    width:120px;
    height:3px;
    background:#f5a623;
    position: absolute;
    left:533px;
    top:122px;
}
.types_lists>dl {
    float: left;
    list-style:none;
    width: 315px;
    height: 67px;
    border-radius: 6px;
    background-color: #eaeaf1;
    margin-left:33px;
    font-size:20px;
    text-align:center;
    line-height:67px;
    color: #3260b6;
    position: relative;
}
.types_lists>dl:hover {
    color:#fff;
    background:#1a81de;
}
.defaults {
    color:#fff!important;
    background:#1a81de!important;
}
.types_lists>dl>dd {
    border-width: 20px;
    position: absolute;
    bottom:-48px;
    left:130px;
    border-style: dashed dashed solid dashed;
    border-color: #1a81de transparent transparent transparent;
}
.types_contain {
    height: 465px;
}
.types_contain .types_one {
    margin-top:61px;
}
.types_contain .types_one .types_top {
    float: left;
    margin-top:80px;
}
.types_contain .types_one .types_top dl {
    width:480px;
    height:100px;
    margin-bottom:20px;
}
.types_contain .types_one .types_top dl dt{
    float: left;
    margin-right:30px;
}
dl dt img {
    width: 100%;
    height: 100%;
}
.types_contain .types_one .types_top dl dd{
    width:480px;
}
.types_contain .types_one .types_top dl dd p{
    text-align:left;
}
.types_contain .types_two {
    margin-top:61px;
}
.types_contain .types_two .types_top {
    float: left;
    margin-top:80px;
}
.types_contain .types_two .types_top dl {
    width:480px;
    height:100px;
    margin-bottom:20px;
}
.types_contain .types_two .types_top dl dt{
    float: left;
    margin-right:30px;
}
.types_contain .types_two .types_top dl dd{
    width:480px;
}
.types_contain .types_two .types_top dl dd p{
    text-align:left;
}
</style>
