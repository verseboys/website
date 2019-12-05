<template>
    <div style="height: 450px;" class="e-copyright-footer">
        <!-- <img src="../assets/home/copyright.svg"
        style="postion: absolute; height: 100%; width: auto; min-width:100%;"> -->
        <div class="content font-bold font-16"
             style="color: white; line-height: 51px; text-align: center; position: absolute;bottom: 75px;width: 100%;">
            <div>Tel：010-84148036<span style="padding-left: 26px">Email：business@natureself.cn</span></div>
            <div>地址：北京市朝阳区望京科技创业园E座315A</div>
            <div>©2018-2019 北京泽创天成科技发展有限公司 版权所有<span style="padding-left: 18px">京ICP备16045582号</span></div>
        </div>

    </div>
</template>
<script>
  import {
    copyrightItems
  } from "@/configs"

  export default {
    name: "ECopyRightSection",
    data() {
      return {
        copyrightItems
      };
    }
  }
</script>

<style scoped>
    .e-copyright-footer {
        background-image: url(../assets/home/copyright.svg);
        background-repeat: no-repeat;
        background-position: center 0;
    }
</style>