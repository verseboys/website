<template>
    <div ref="app">
        <div class="container">
            <div class="article top-article">
                <common-nav v-show= "display" id="comn_nav" class="animated slideInDown"/>
                <div class="header">
                    <!-- <img src="../../assets/home/logo.png" class="logo"> -->
                    <nav-bar style="width:1200px;padding-left: 25px;"/>
                </div>
            </div>
            <e-slogan-article/>
            <div class="article article-products">
                <div class="article-header font-bold"
                     style="text-align: center;
                     line-height: 1;
                     margin: 55px 0 124px 0;
                     font-size:36px;
                    ">产品服务
                </div>
                <div class="section">
                    <e-product-item 
                    v-for= "(product, i) in products" 
                    v-bind= "product" 
                    :order= "i + 1"
                    :key= "i"/>
                </div>
            </div>
            <e-aspiration-medical/>
            <e-research-platform-section/>
            <copy-right-section/>
        </div>
    </div>
</template>

<script>
  import ELand from "@/components/ELand.vue";
  import EProductItem from "@/components/EProductItem.vue";
  import EMediaAdvantagesCard from "@/components/EMediaAdvantagesCard.vue";
  import EResearchPlatformSection from "@/components/EResearchPlatformSection.vue";
  import CopyRightSection from "@/components/CopyRightSection.vue";
  import ESloganArticle from "@/components/ESloganArticle.vue";
  import commonNav from "@/components/CommonNav.vue";
  import NavBar from "@/components/NavBar.vue";
  import {products} from "@/configs";
  import EAspirationMedical from "@/components/EAspirationMedical.vue";
  export default {
    name: 'app',
    components: {
      EAspirationMedical,
      ELand,
      EProductItem,
      EMediaAdvantagesCard,
      EResearchPlatformSection,
      CopyRightSection,
      ESloganArticle,
      commonNav,
      NavBar
    },
    data() {
      return {
        products,
        scroll:false,
        display:false,
        viewBox: this.getViewBox()
      };
    },
    computed: {
      viewportContent() {
        let w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        let baseWidth = 1280;
        return `width=${baseWidth}px,user-scalable=yes,initial-scale=${w / baseWidth}`;
      },
      scale() {
        return Math.min(this.viewBox.width / 1440, 1);
      },
      appStyle() {
        // let w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        // return {zoom: w/ 1225};
        // let {scale, viewBox} = this;
        // let tx = - (1 - scale) * viewBox.height / 2;
        // return {
        //     transform: `scale(${scale}) translateY(${tx}px)`
        // };
      },
      getTopSectionHeight() {
        let {width} = this.getViewBox();
        return width / 1920 * 838 - 56 + "px";
      },
    },
    methods: {
      handleResize() {
        Object.assign(this.viewBox, this.getViewBox());
      },
      getViewBox() {
        let {availWidth, availHeight} = window.screen;

        availWidth = document.body.offsetWidth;
        availHeight = document.body.offsetHeight;

        return {
          width: availWidth,
          height: availHeight
        };
      },
      handScroll () {
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            var offsetTop = document.querySelector('#comn_nav').offsetTop;
            if (scrollTop > offsetTop) {
                this.display = true;
            } else {
                this.display = false;
            }
            
        },
    },
    mounted() {
      window.addEventListener("resize", this.handleResize.bind(this));
      window.addEventListener('scroll', this.handScroll);
    }
  }
</script>

<style lang="scss">
    // * {
    //     position: relative;
    // }

    html {
        font-family: sans-serif;
        line-height: 1.4;
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
        -ms-overflow-style: scrollbar;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        background:#fff;
    }

    html, body, #app {
        padding: 0;
        margin: 0;
        min-width: 100%;
        min-height: 100%;
    }

    body {
        /*background-image: url(../../assets/home/rectangle-6.svg");*/
        /*background-size: 100% auto;*/
        /*background-repeat: no-repeat;*/
        /*background-position: 0 0;*/
    }
    #app {
        font-family: 'Microsoft YaHei', 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB', 'Noto Sans CJK SC', 'WenQuanYi Micro Hei', Arial, 'sans-serif';
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #403F40;
        overflow-x: hidden;
    }

    .rectangle-6 {
        display: block;
        width: 100%;
    }

    // .logo {
    //     width: 143px;
    //     height: 46px;
    //     margin-left:46px;
    // }

    .article {
        display: block;
        width: 1225px;
        margin: 0 auto;
        background-color: transparent;
    }

    .container {
        width: 100%;
        position: relative;
        background:#fff url(../../assets/home/top-bg.svg);
        background-repeat: no-repeat;
        background-position: 0 0;
        background-size: auto 838px;
    }

</style>
