<template>
    <!-- 关于我们——加入我们 -->
    <div class="join_us">
        <div class="pic_bg" id="pic_bg">
            <!-- <img src="@/assets/about/joinus_bg.jpg" alt=""> -->
            <div class="bgdown" :style= "{'backgroundPosition':'0px '+down+'px'}"></div>
            <div class="mask">
                <div class="mask_text">
                    <h4>加入我们<span></span></h4>
                    <div class="contain">
                        <p>泽创天成提供国际化的平台与视野，邀请优秀的你共同参与到数字化医疗健康的浪潮中。在这里，我们提倡“Work-Life Balance”的工作方式，工作时专业严谨、求真进取，团队间互相信任、高效协作。希望你对医疗行业充满热情，既拥有坚定的信念，又有敏捷的执行力。</p>
                        <p>请将简历投递至：career@natureself.cn </p>
                    </div>
                    <div class="tab_list">
                        <ul id="ul">
                            <li @click= "mousehover($event,0)" :class= "[num == ''? active : '']">新媒体运营/活动策划<span v-show= "idx==0"></span></li>
                            <li @click= "mousehover($event,1)" :class= "[num == '1'? active : '']">医学编辑<span v-show= "idx==1"></span></li>
                            <li @click= "mousehover($event,2)" :class= "[num == '2'? active : '']">产品经理<span v-show= "idx==2"></span></li>
                            <li @click= "mousehover($event,3)" :class= "[num == '3'? active : '']">前端开发工程师<span v-show= "idx==3"></span></li>
                            <li @click= "mousehover($event,4)" :class= "[num == '4'? active : '']">产品经理实习生<span v-show= "idx==4"></span></li>
                        </ul>
                        <div class="tab_content">
                            <div class="introduce_one introduce" v-show= "idx==0">
                                <h5>岗位职责：</h5>
                                <p>1、策划及撰写新媒体活动文案，提升用户关注度和活跃度；</p>
                                <p>2、与合作讲者沟通，策划及组织线上及线下培训班、沙龙等活动；</p>
                                <p>3、和医学院校、医院、学会组织等单位联系，合作举办活动；</p>
                                <p>4、分析整理运营数据，对用户行为进行总结，改善后续运营计划；</p>
                                <h5 style="padding-top:20px;">任职要求：</h5>
                                <p>1、本科及以上学历，有2年以上活动运营相关经验；</p>
                                <p>2、具有策划及撰写活动文案的能力；</p>
                                <p>3、具有一定的活动策划及落地执行能力；</p>
                                <p>4、乐于挖掘各种新媒体活动形式，喜欢与用户互动；</p>
                                <p>5、对医疗行业感兴趣；有医疗背景或相关工作经验优先；</p>
                            </div>
                            <div class="introduce_two introduce" v-show= "idx==1">
                                <h5>岗位职责：</h5>
                                <p>1、查阅国内外医学新闻网站和期刊，跟踪医学进展；</p>
                                <p>2、挑选优质内容，整理和编辑成中文文章；</p>
                                <p>3、更新网站和微信公众号的内容；</p>
                                <p>4、与用户沟通，了解用户感兴趣的内容，改进选题；</p>
                                <h5 style="padding-top:20px;">任职要求：</h5>
                                <p>1、医学相关专业本科及以上学历，临床、公卫专业更佳；</p>
                                <p>2、英语6级，熟练翻译文献，检索文献；</p>
                                <p>3、具备编辑写作能力，文笔流畅；</p>
                                <p>4、有文章写作或公众号运营经验者，优先考虑；</p>
                            </div>
                            <div class="introduce_three introduce" v-show= "idx==2">
                                <h5>岗位职责：</h5>
                                <p>1、制定产品规划，负责用户需求调研、产品原型设计、需求文档撰写等工作；</p>
                                <p>2、组织研发、设计团队，推动产品按计划上线；</p>
                                <p>3、跟踪和评估数据变化及用户需求，不断优化产品，提高用户体验；</p>
                                <p>4、关注竞争对手和用户的产品反馈，分析并提供应对方案，改进产品功能；</p>
                                <p>5、负责重大关键项目的跟踪及推进工作；</p>
                                <h5 style="padding-top:20px;">任职要求：</h5>
                                <p>1、本科及以上学历，3年以上互联网行业产品经验；</p>
                                <p>2、有完整的竞品调研、需求分析、产品设计经验，熟练使用 AXURE 等产品设计工具；</p>
                                <p>3、良好的逻辑思维能力和数据分析能力；</p>
                                <p>4、具备较强的口头表达沟通能力和团队协调能力，能独立推进产品从调研到上线等工作；</p>
                                <p>5、有医学类产品经验者优先；</p>
                            </div>
                            <div class="introduce_four introduce" v-show= "idx==3">
                                <h5>工作内容：</h5>
                                <p>1.参与或负责公司云平台的前端模块设计和开发工作；</p>
                                <p>2.参与公司云平台的架构及权限设计；</p>
                                <p>3.与产品和后端协作编写api文档，并利用api文档实现前后端分离开发与测试；</p>
                                <h5 style="padding-top:20px;">任职要求：</h5>
                                <p>1.扎实的 JavaScript 和 CSS 基础，熟悉 Git；</p>
                                <p>2.熟悉 AngularJS/vue等，熟悉页面路由设计；</p>
                                <p>3.熟悉 web 性能调优，熟练使用 RESTful web service/JSON 来处理数据；</p>
                                <p>4.了解基本的 web 安全知识，了解 http 协议，了解Linux；</p>
                                <h5 style="padding-top:20px;">加分项目：</h5>
                                <p>1.有后端或多种语言的开发经历，了解数据库设计；</p>
                                <p>2.有 GitHub 账号,技术博客或成功作品者优先；</p>
                            </div>
                            <div class="introduce_five introduce" v-show= "idx==4">
                                <h5>岗位职责：</h5>
                                <p>1、参与需求收集、产品设计，跟进设计和开发、配合测试验收、维护需求文档等相关工作；</p>
                                <p>2、医疗大数据项目的配置和数据管理，用户需求沟通和跟进完善；</p>
                                <p>3、配合产品经理的其他日常工作；</p>
                                <h5 style="padding-top:20px;">任职要求：</h5>
                                <p>1、 本科及以上学历，医学相关专业、或计算机相关专业优先；</p>
                                <p>2、逻辑清晰，有良好的沟通能力，具备较强的抗压能力，有较强执行能力，负责到底；</p>
                                <p>3、实习时间不少于3个月，每周到岗时间不少于3天；</p>
                                <h5 style="padding-top:20px;">加分项目：</h5>
                                <p>1、有一定互联网行业常识，对数据敏感；</p>
                                <p>2、有相关实习经验优先；</p>
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
            idx:0,
            num:'',
            active:'active',
            down:0
        }
    },
    mounted(){
        window.addEventListener("scroll",this.move);
    },
    methods: {
        mousehover($event,index){
            this.idx = index;
            this.num  = index;
        },
        move(){
            let sct=document.documentElement.scrollTop;
            console.log(sct)
            if(sct<1200){
                this.down = 0
            }
            if(sct>=1200&&sct<1700){
                this.down = -sct+(1200+(sct-1000)/2)
            }
            if(sct>=1700){
                this.down = -50
            }
        }
    }
}
</script>
<style>
.join_us {
    width: 100%;
}
.join_us .pic_bg {
    width: 100%;
    height:880px;
    position: relative;
    overflow: hidden;
}
.join_us .pic_bg .bgdown {
    width: 100%;
    height:1000px;
    background:url(../assets/about/joinus_bg.jpg) no-repeat;
    background-size:100% 100%;
    transition: 2s;
}
.mask {
    width: 100%;
    height:880px;
    position:absolute;
    top:0;
    left:0;
    background:#000;
    opacity:0.85;
}
.mask .mask_text {
    width:1180px;
    margin:0 auto;
}
.mask .mask_text h4 {
    font-size: 36px;
    text-align:center;
    color: #fff;
    padding-bottom:10px;
    padding-top:106px;
    position: relative;
}
.mask .mask_text h4 span {
    width:100px;
    height:3px;
    background:#f5a623;
    position: absolute;
    left:540px;
    top:165px;
}
.contain {
    padding-top:55px;
}
.contain p {
    width:857px;
    margin:0 auto;
    font-size: 14px;
    line-height:34px;
    color:#fff;
}
.mask_text .tab_list {
    padding-top:77px;
}
.mask_text .tab_list ul {
    float: left;
    text-align:left;
    padding-left:205px;
    border-right: solid 3px #dadadc;
    padding-right:80px;
    height: 400px;
}
.mask_text .tab_list ul li {
    list-style:none;
    color:#fff;
    font-size:20px;
    line-height:40px;
    position: relative;
}
.mask_text .tab_list ul li.active {
    color: #45a0ea!important;
}
.mask_text .tab_list ul li span {
    display:block;
    width: 5px;
    height: 31px;
    border-radius: 4.5px;
    background-color: #4a90e2;
    position: absolute;
    top:2px;
    right:-84px;
}
.mask_text .tab_list .tab_content .introduce {
    float: left;
    text-align:left;
    padding-left:49px;
}
.mask_text .tab_list .tab_content .introduce>h5,p {
    color:#fff;
    font-size:16px;
}
</style>
