<template>
    <div class="article article-slogan"
         style="position: relative; height: 773px;">
        <div style="color: white;float:left;padding-top: 160px;padding-left: 100px;">
            <div class="font-42 font-bold" style="line-height: 73px; margin-bottom: 27px;text-align:left;">
                <div v-for="title in slogans.titles" :key="title">
                    {{ title }}
                </div>
            </div>
            <div class="font-20 font-light" style="text-align:left;">
                <div v-for= "subtitle in slogans.subtitles" :key= "subtitle" style="line-height:40px;">
                    {{ subtitle }}
                </div>
            </div>
        </div>
        <!-- <e-land style="position: absolute; top: 98px; left: 581px;"/> -->
        <div class="img_head" style="position: absolute;top: 101px;left: 551px;"><img src="@/assets/home/head.svg" alt=""></div>
    </div>
</template>

<script>
  import ELand from "@/components/ELand.vue";

  import {slogans} from "@/configs";

  export default {
    name: "ESloganArticle",
    components: {
      ELand
    },
    data() {
      return {
        slogans
      }
    }
  }
</script>

<style scoped>
    .img_head {
        width: 658px;
        height: 530px;
    }
    .img_head>img {
        width: 100%;
        height: 100%;
    }
</style>