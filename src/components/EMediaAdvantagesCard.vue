<template>
    <div class="e-media-advantages-card-outer" style=" width: 948px; margin: -150px auto 280px auto; text-align: center;height: 602px;position: relative;">
        <div style="position: absolute; bottom: -280px; height: 100%;width:100%;" class="e-media-advantages-card">
            <div style="padding: 50px;">
                <div class="font-38 font-bold" style="text-align: center; margin-bottom: 30px;">核心优势</div>
                <div class="e-media-advantage-item animated fadeInUp delay-2s"
                     v-for="(item, i) in mediaAdvantages" :key="i" style="width: 33.33%; display: inline-block;">
                    <div class="e-media-advantage-item-avatar"
                         :class="'e-media-advantage-item-avatar-' + item.name">
                        <img src="@/assets/home/advantage-course.png" v-if="item.name === 'advantage-course'" :style="item.img"/>
                        <img src="@/assets/home/advantage-ai.png" v-if="item.name === 'advantage-ai'" :style="item.img"/>
                        <img src="@/assets/home/advantage-qa.png" v-if="item.name === 'advantage-qa'" :style="item.img"/>
                        <img src="@/assets/home/advantage-standard-setting.png" v-if="item.name === 'advantage-standard-setting'" :style="item.img"/>
                        <img src="@/assets/home/advantage-data-analysis.png" v-if="item.name === 'advantage-data-analysis'" :style="item.img"/>
                        <img src="@/assets/home/advantage-one-stop-solution.png" v-if="item.name === 'advantage-one-stop-solution'" :style="item.img"/>
                    </div>
                    <div class="e-media-advantage-item-title font-20 font-bold">
                        {{ item.title }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import {mediaAdvantages} from "@/configs";

  export default {
    name: "EMediaAdvantagesCard",
    data() {
      return {
        mediaAdvantages
      };
    }
  }
</script>

<style scoped>
    .e-media-advantages-card {
        background-color: #ffffff;
        box-shadow: 0 18px 33px 9px rgba(0, 85, 156, 0.13);
    }

    .e-media-advantage-item {
        margin: 20px 0;
    }

    .e-media-advantage-item-avatar {
        display: block;
        /*width: 100px;*/
        height: 110px;
        margin: 10px 0;
        /*background-size: 100% auto;*/
        /*background-repeat: no-repeat;*/
        /*background-position: center;*/
    }
</style>