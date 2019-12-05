<template>
    <div class="article-aspiration-medical-container" style="margin-top: 100px;">
        <div class="article article-aspiration-medical">
            <div class="article-header font-38 font-bold line-height-1"
                 style="text-align: center; margin-bottom: 117px">科研推动临床实践，数据驱动医学创新</div>
            <div class="section" style="margin-left:35px;">
                <img src="@/assets/home/macbookpro.png" style="width:922px; height: 519px;display:block; margin: 0 auto;"/>
                <div class="navigation-down">
                    <img src="@/assets/home/arrow-down.png" style="display:block; margin: 88px auto;"/>
                </div>
            </div>
            <e-media-talent-section/>
            <e-media-advantages-card/>
        </div>
    </div>
</template>

<script>
  import EMediaTalentSection from "@/components/EMediaTalentSection.vue";
  import EMediaAdvantagesCard from "@/components/EMediaAdvantagesCard.vue";
  export default {
    name: "EAspirationMedical",
    components: {
      EMediaTalentSection,
      EMediaAdvantagesCard
    }
  }
</script>

<style scoped>
    .article-aspiration-medical-container {
        background-image: url("../assets/home/aspiration-medical-bg.png");
        background-repeat: no-repeat;
        background-position: center bottom;
        background-size: auto 1365px;
    }
</style>