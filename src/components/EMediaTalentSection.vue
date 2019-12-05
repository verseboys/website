<template>
    <div class="section" style="color: white;margin-top: 18px;">
        <div class="section-header font-38 font-bold line-height-1"
             style="text-align: center; margin-bottom: 91px;">
            高素质的科研人才，高质量的数据管理
        </div>
        <div class="section section-high-quality-talent"
             style="width: 948px; margin: 0 auto;display: block;text-align: center;">
            <div class="talent-item" v-for="(item, i) in highQualityTalents"
                 :style="getItemStyle(i)"
                 :key="i"
                 style="">
                <div class="talent-item-title" style="position:relative;">
                    <img src="@/assets/home/course.png" v-if="item.name === 'course'"/>
                    <img src="@/assets/home/big-data.png" v-if="item.name === 'bigData'"/>
                    <img src="@/assets/home/research.png" v-if="item.name === 'research'"/>
                    <span class="font-28 font-bold line-height-1">
                        {{ item.title }}
                    </span>
                </div>
                <div class="talent-item-contents font-18 font-light line-height-1">
                    <div v-for="line in item.contents" :key="line" style="margin-bottom: 14px;">
                        {{ line }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import {highQualityTalents} from "@/configs";


  export default {
    name: "EMediaTalentSection",
    computed: {},
    methods: {
      getItemStyle(index) {
        let style = {};
        if (index === 0) {
          Object.assign(style, {
            float: "left",
          });
        } else if (index === 2) {
          Object.assign(style, {
            float: "right",
          });
        }
        return style;
      }
    },
    data() {
      return {
        highQualityTalents
      };
    }

  }
</script>

<style scoped lang="scss">
    .talent-item {
        display: inline-block;
        width: auto;
        text-align: left;
        .talent-item-title {
            margin-bottom: 26px;
            padding-left: 48px;
            img {
                width: 36px;
                height: 32px;
                position: absolute;
                left: 0;
                top: -2px;
            }
        }
    }


</style>