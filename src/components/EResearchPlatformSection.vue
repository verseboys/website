<template>
    <div class="article" >
        <div class="section e-research-platform-section" style="position: relative;padding-top: 143px;padding-left:20px;">
            <div class="section section-header font-38 font-bold line-height-1"
                 style="text-align: center;position: relative; margin-bottom: 93px;    padding-right: 20px;">
                {{ title }}
            </div>
            <div class="e-research-platform-item" v-for= "item in items"
                 style="margin-bottom: 143px;position: relative;"
                 :key= "item"
                 :style= "{height: item.img.height}"
                 :class="'e-research-platform-item-' + item.name">
                <img src="@/assets/home/respiratory-diseases-platform.png"
                     v-if= "item.name === 'respiratory-diseases-platform'"
                     style="left: 0"
                     :style= "item.img">
                <div class="e-research-platform-item-content" style="width: 415px;">
                    <div class="e-research-platform-item-content-title font-28 font-bold"
                         style="margin-bottom: 33px;text-align:left;width: 428px;">
                        {{ item.title }}
                    </div>
                    <div class="e-research-platform-item-content-detail font-16 font-light" style="text-align:left;line-height:2;">
                        {{ item.describe }}
                    </div>
                </div>
                <img src="@/assets/home/queue-sharing-platform.png"
                     v-if= "item.name === 'queue-sharing-platform'"
                     style="right: 56px;"
                     :style= "item.img">
            </div>
        </div>
    </div>

</template>

<script>
  import {aspirationResearchPlatform} from "@/configs";

  const {
    title,
    items,
  } = aspirationResearchPlatform;

  export default {
    name: "EResearchPlatformSection",
    data() {
      return {
        title,
        items,
      };
    }
  }
</script>

<style scoped lang="scss">
    .e-research-platform-item {
        margin-bottom: 143px;
        width: 972px;
        margin-left: auto;
        margin-right: auto;

        &.e-research-platform-item-respiratory-diseases-platform {
            padding-left: 481px;
            .e-research-platform-item-content {
                padding-top: 55px;
                padding-left:56px;
            }
        }
        &.e-research-platform-item-queue-sharing-platform {
            padding-right: 459px;
            .e-research-platform-item-content {
                padding-top: 35px;
                padding-left: 20px;
            }
        }
        img {
            position: absolute;
            top: 0
        }
    }
</style>