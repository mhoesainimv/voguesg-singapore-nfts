<template>
  <div>
    <div class="the-navbar w-100 fronthold-canvas " :class="+ triggerSecondPage == true ? 'activated' : ''">
      <div class="a the-logo">
        <NuxtLink to="/">
          <VogueSingaporeLogo/>
        </NuxtLink>
      </div>
      <div class="the-hamburger vogue-nft">
        <button class="hamburger hamburger--collapse" type="button"
        @click="onCanvas" :class="{'is-active': isActive}">
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
        </button>
      </div>
    </div>
    <div class="the-video-background-super-big">
      <video id="ig-filter-video" ref="ig_filter_video" autoplay loop playsinline muted>
        <source src="https://vogue-singapore.s3.amazonaws.com/video/vogue-singapore-nfts/VOGUE_HEADDRESS_IG_FILTER.mp4" type="video/mp4">
      </video>
    </div>
    <div class="the-flex-container">
      <div class="on-mobile-changes-container container mt-5 pt-5 pt-sm-0 mt-sm-0">
        <div class="row">
          <div class="col-md-8 d-table mx-auto">
            <p class="description text-center">
              Try on the digital headdress created by The Fabricant
            </p>
          </div>
        </div>
        <div class="row pt-5">
          <div class="d-none d-sm-block col-md-3 col-8 mx-auto">
            <SvgScanBarcode/>
          </div>
        </div>
        <div class="d-none d-sm-block row pt-5">
          <div class="col-md-8 d-table mx-auto">
            <p class="description text-center">
              Scan QR code to open Instagram
            </p>
          </div>
        </div>
      </div>
      <div class="mobile-click d-flex d-sm-none mb-5">
        <a href="https://www.instagram.com/ar/844781686182230/" target="_blank">
          TRY IT ON INSTAGRAM
        </a>
      </div>
    </div>
    <div v-if="triggerSecondPage" class="the-menu vogue nft" :class="{'is-active': isActive}">
      <CanvasMenu/>
    </div>
  </div>
</template>

<script>
import {gsap, Power2,Power4,Power3} from "gsap";
import VogueSingaporeLogo from "~/components/VogueSingaporeLogo.vue"
import CanvasMenu from "~/components/Canvasmenu.vue"
import SvgScanBarcode from '~/components/Svgscanbarcode.vue'

export default {
  data(){
    return{
      isActive: false,
      view_mode:'Desktop',
      triggerSecondPage: true,
      window: {
        width: 0,
        height: 0
      },
      view_mode : 'Desktop'
    }
  },
  components: {
    VogueSingaporeLogo,CanvasMenu,SvgScanBarcode
  },
  methods:{
    onCanvas: function() {
      this.isActive = !this.isActive;
      // some code to filter users
    },
    onResize() {
      // Directive interpolar changes for mobile data

      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
      if(this.window.width < 512){
        this.view_mode = 'Mobile';
      } else {
        this.view_mode = 'Desktop';
      }
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    },
  },
  mounted:function(){
    this.$nextTick(function () {
      window.addEventListener('resize', this.onResize);
    });
  },
  created:function(){
    if (process.client) {
      setTimeout(function(){
        this.window.width = window.innerWidth;
        this.window.height = window.innerHeight;
      },1500);
    }
  }
}
</script>
<style lang="scss" scoped>
  .the-navbar {
    top:0px;
    position: absolute;
    display:flex;
    z-index: 1001;
    .a.the-logo{
      flex: 0 0 10%;
      height: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      @media all and (max-width:512px){
      flex: 0 0 30%;
      }
      svg{
        padding:.5em;
        width:100%;
      }
    }
    .the-hamburger{
      display: flex;
      flex: 1 1 auto;
      justify-content: flex-end;
      align-content: center;
      .hamburger{
        padding:15px 15px 5px 15px;
      }
    }
  }
  .the-menu.vogue.nft{
    display: flex;
    justify-content: center;
    align-items: center;
    position:fixed;
    opacity:0;
    width:100%;
    height:100%;
    height:100vh;
    height: calc(var(--vh, 1vh) * 100);
    min-height: -webkit-fill-available;
    z-index:-1;
    top:0px;
    left:0px;
    transition:0.2s;
    &.is-active{
      top: 0px;
      left: 0px;
      opacity: 1;
      overflow:hidden;
      z-index: 1000;
      background-color: #ffffffc4;
      transition:0.2s;
    }
  }
  .the-video-background-super-big {
    position: fixed;
    top:0px;
    left:0px;
    width: 100%;
    height: 100%;
    z-index:-1;
    video#ig-filter-video {
      object-fit: cover;
      width: 100%;
      position: absolute;
      object-position: center center;
      height: 100vh;
      z-index:-1;
      transform:scale(1);
      @media all and (max-width:512px){
        transform:scale(1);
      }
    }
  }

  .the-flex-container{
    display: flex;
    justify-content: center;
    // align-content: center;
    align-items: center;
    flex-direction: column;
    height:100%;
    height: 100vh;
    height: calc(var(--vh, 1vh) * 100);
    min-height: -webkit-fill-available;
    background-color: #fff6;
    @media all and (max-width:512px){
      position:absolute;
      height:100%;
      flex:1 1 auto;
    }
    .on-mobile-changes-container {
      @media all and (max-width:512px){
        align-content: flex-start;
        flex: 1 1 auto;
      }
    }
    .mobile-click{
      align-items: flex-end;
      justify-content: center;
      flex-direction: row;
      flex-wrap: wrap;
      flex: 1 1 auto;
      a{
      width: 100%;
      background-color: #000 !important;
      display: block;
      font-size: 1.3em;
      font-family: 'Akzidenz-Grotesk';
      padding: 0.5em 3em;
      color: #fff !important;
      text-decoration: none !important;
        @media all and (max-width:512px){
          font-size:1em;
          padding: 0.5em 1em;
        }
      }
    }
  }
  p.description.text-center {
    font-family: 'Akzidenz-Grotesk';
    font-size:2em;
    @media all and (max-width:512px){
      font-size:1.5em;
    }
  }
  svg.barcode{
    opacity:1;
  }
</style>