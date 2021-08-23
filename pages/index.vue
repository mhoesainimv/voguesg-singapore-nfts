<template>
  <div :class="isActive == true ? 'overflow-lock':''">
    <div id="45_nods_" :class="'the-contained '+ view_mode">
      <div id="first-introismo" class="the-intro">
        <div class="position-absolute">
          <div class="the-intro-text first">A new dawn for fashion lies in technology</div>
        </div>
        <div class="position-absolute">
          <div class="the-intro-text second">Enter the metaverse</div>
        </div>
      </div>
      <div class="first-page">
        <div id="45_nods_1" class="container">
          <div class="row">
            <div class="col-xl-4 col-lg-4 col-md-3 col-sm-6 mt-4 mx-auto d-table text-center">
              <div class="headline cover one-and-only" style="position:relative;">
                <div class="video first-headline">
                  <video id="the_first_video" ref="the_first_video" playsinline muted>
                    <source src="video/VOGUE_NFT_COVER_SHINE_FLOW_V4.mp4" type="video/mp4">
                  </video>
                  <theSun id='the-brightness' class="sun_will_animate" />
                </div>
                <div class="the-text-new-beginning bornga">New Beginnings</div>
              </div>
            </div>
          </div>
          <div class=" bornga row mt-4 align-content-center justify-content-center mb-2">
            <div class="col-md-10 text-center">
              <p class="description-head">
                As part of the global theme of 'New Beginnings' for September, <i>Vogue</i> Singapore explores the creative renaissance born out of digital innovation with an issue dedicated to Non-Fungible Tokens (NFTs). 
              </p>
              <p class="description-head">
                Enter our fashion metaverse to discover two virtual-only covers—available for purchase as one-of-one NFTs—created in collaboration with two teams of local and international digital artists.
              </p>
            </div>
          </div>
          <div class=" bornga row align-content-center justify-content-center">
            <div class="col-md-6 d-table mx-auto entry">
              <button @click="triggerMeTransition()" class=" d-table mx-auto click-me-to-enter">
                Enter
              </button>
            </div>
          </div>
        </div>
      </div>
      <div :class="isActive == true ? 'blurred' : ''" class="second-page">
        <secondSection v-show="triggerSecondPage" :the_responsive="view_mode"/>
      </div>
      <div class="the-navbar w-100 fronthold-canvas " :class="+ triggerSecondPage == true ? 'activated' : ''">
        <div class="a the-logo">
          <a href="https://vogue.sg" target="_blank">
            <VogueSingaporeLogo/>
          </a>
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
      <div v-if="view_mode == 'Desktop'" class="omerta_footer">
        <div class="table-positioning-logo">
          <a href="https://vogue.sg" target="_blank">
            <VogueSingaporeLogo/>
          </a>
        </div>
      </div>
      <div v-if="triggerSecondPage" class="the-menu vogue nft" :class="{'is-active': isActive}">
        <CanvasMenu/>
      </div>
    </div>
  </div>
</template>

<script>
import {gsap, Power2,Power4,Power3} from "gsap";
import secondSection from "~/components/second-section.vue"
import theSun from "~/components/the-sun.vue"
import VogueSingaporeLogo from "~/components/VogueSingaporeLogo.vue"
import CanvasMenu from "~/components/Canvasmenu.vue"

export default {
  data(){
    return{
      isActive: false,
      view_mode:'Desktop',
      triggerSecondPage: false,
      window: {
        width: 0,
        height: 0
      },
      view_mode : 'Desktop'
    }
  },
  components: {
    secondSection,theSun,VogueSingaporeLogo,CanvasMenu
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
    firstIntro(){
      let video = document.getElementById("the_first_video");
      var tl = gsap.timeline();
      tl.to('.the-intro-text.first',{
        opacity:1,
        onComplete:function(){
        }
      },1);
      tl.to('.the-intro-text.first',{
        opacity:0,
        onComplete:function(){
        }
      },2);
      tl.to('.the-intro-text.second',{
        opacity:1,
        onComplete:function(){
        }
      },3);
      tl.to('.the-intro-text.second',{
        opacity:0,
        onComplete:function(){
        }
      },5);
      tl.to('.the-intro',{
        opacity:0,
        onComplete:function(){
          document.getElementById('first-introismo').style.zIndex = "-1";
          video.play();
          setTimeout(function(){
            video.pause();
          },3900);
        }
      },6);
      tl.to('.first-page .bornga', {
        opacity: 1,
        stagger: 0.6,
        y:0,
        onComplete:function(){
        }
      },8);
    },
    triggerMeTransition(){
      let video = document.getElementById("the_first_video");
      // video.play();
      this.triggerSecondPage = true;
      var tl = gsap.timeline();
      tl.to('.first-page', 2,{
        scaleX:10, scaleY:10, opacity:1,ease: Power3.easeIn,
        onStart:function(){
          document.getElementById('45_nods_1').classList.add('change_background');
          // document.getElementById('45_nods').classList.add('change_background');
        },
        onComplete:function(){
          // document.getElementById("the-brightness").classList.add('activate');
          gsap.set('.first-page',{ opacity:0, scaleX:0, scaleY:0});
          gsap.to('.second-page',1,{ opacity:1, scaleX:1, scaleY:1,ease: Power2.easeOut});
          gsap.to('.omerta_footer',1,{ opacity:1, scaleX:1, scaleY:1,ease: Power2.easeOut});
          gsap.to('.omerta_footer svg',1,{ opacity:1, scaleX:1, scaleY:1,ease: Power2.easeOut});
        }
      });
      var tl2 = gsap.timeline().delay(0.3);
      document.querySelector(".headline.cover.one-and-only").classList.add('activate-this');
      tl2.to('.sun_will_animate',2,{
        opacity:1,scaleX:3, scaleY:3, ease: Power2.easeOut,
        onComplete:function(){
          document.querySelector(".headline.cover.one-and-only").classList.remove('activate-this');
          gsap.to('.sun_will_animate',0.5,{ width:'100%', height:'100%', ease: Power2.easeOut}).delay(1);
          gsap.to('.fronthold-canvas',{opacity:1}).delay(1);
          setTimeout(function(){
            let video = document.getElementById("the_benchmark");
            let video_height = video.clientHeight;
            if(this.window.width < 512){
              this.view_mode = 'Mobile';
            } else {
              this.view_mode = 'Desktop';
            }
            this.the_responsive = this.view_mode;
            document.documentElement.style.setProperty('--the_height', `${video_height}px`);
          },10);
          }
      });
    }
  },
  mounted:function(){
    gsap.set('.fronthold-canvas',{opacity:0});
    gsap.set('.sun_will_animate',{ opacity:1,scaleX:0,scaleY:0});
    gsap.set('.first-page .row.bornga',{ opacity:0, y:'-10px'});
    gsap.set('.second-page',{ opacity:0, scaleX:1.2, scaleY:1.2});
    gsap.set('.second-page',{ opacity:0, scaleX:1.2, scaleY:1.2});
    gsap.set('.omerta_footer',{ opacity:0, scaleX:1, scaleY:1});
    gsap.set('.omerta_footer svg',{ opacity:0, scaleX:5, scaleY:5});

    // this.welcomeEntry();
    this.firstIntro();
    if (process.browser) {
    }
    this.$nextTick(function () {
      let video = document.getElementById("the_first_video");
      window.addEventListener('resize', this.onResize);
      // video.addEventListener("timeupdate", function(){
      //   if(this.currentTime >= 1.9) {
      //     console.log('hello');
      //     this.pause();
      //   }
      // });
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
  .overflow-lock{
    overflow:hidden;
  }
  .the-contained{
    background-color:#f3eeec;
    width:100%;
    height:100vh;
    min-height: -webkit-fill-available;
    @media all and (min-width:512px){
      overflow-x:hidden !important;
      height:100%;
      height:100vh;
      height: calc(var(--vh, 1vh) * 100);
    }
    @media all and (max-width:1350px) and (min-width:512px) and (min-height:767px){
      flex-flow: column;
      display:flex;
    }
    &.change_background{
      background-color:#fff;
      transition:1s;
    }
  }
  .the-intro{
    position:absolute;
    z-index:56;
    width: 100vw;
    height: 100vh;
    height:100%;
    min-height: -webkit-fill-available;
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    // background: linear-gradient(182deg, #66a0d0, #f1bd7b);
    background: rgb(102,160,208);
    background: linear-gradient(180deg, rgba(102,160,208,1) 0%, rgba(241,189,123,1) 100%);
    background-size: 300% 300%;
    -webkit-animation: ShiftingGradient 8s ease infinite;
    -moz-animation: ShiftingGradient 8s ease infinite;
    -o-animation: ShiftingGradient 8s ease infinite;
    animation: ShiftingGradient 8s ease infinite;
    .the-intro-text{
      opacity:0;
      font-family: 'Akzidenz-Grotesk';
      font-size: 1.3em;
      @media all and (max-width:512px){
        font-size: 0.7em;
        text-align: center;
        display: table;
      }
    }
  }
  .first-page{
    background-color:#f3eeec;
    video#the_first_video {
      width: 100%;
      height:auto;
    }
    &.change_background{
      background-color:#fff;
      transition:1s;
    }
    .the-text-new-beginning.bornga{
      font-family: "Akzidenz-Grotesk";
      position: absolute;
      top: 19.75%;
      left: 2.3%;
      font-size: 77%;
      text-transform: uppercase;
      opacity:0;
    }
    .row.bornga{
      opacity:0;
    }
    position: absolute;
    z-index:55;
    width: 100vw;
    height: 100vh;
    height: calc(var(--vh, 1vh) * 100);
    min-height: -webkit-fill-available;
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    transform: scale(0.9);
    @media all and (min-width:960px) and (max-height:800px){
      transform:scale(0.8);
    }
    @media all and (max-width:512px){
      transform: scale(.65);
    }
    p.description-head{
      font-family:'Akzidenz-Grotesk';
      @media all and (max-width:512px){
        font-size: 80%;
      }
    }
    h3.bolder{
      font-family:'Akzidenz-Grotesk Pro Med'
    }
    .headline.cover{
      background-size:cover;
      background-position:center center;
      width:100%;
      height:0px;
      padding-bottom:133%;
      transition: box-shadow 0.3s ease-in-out;
      overflow:hidden;
      &.one-and-only{
        &.activate-this{
          box-shadow: 0px 0px 40px 20px rgb(255, 255, 255);
          transition: box-shadow 1.5s ease-in-out;
        }
      }
    }
    button.click-me-to-enter {
      background-color: #000;
      color: #fff;
      border: 0px;
      padding: .5em 5em;
      font-family:'Akzidenz-Grotesk Pro Med';
      text-transform:uppercase;
      transition:0.8s;
      border:1px solid #000;
      @media all and (max-width:512px){
        font-size:85%;
      }
      &:hover{
        background-color:#fff;
        color:#000;
        transition:0.5s;
      }
    }
  }
  .second-page{
    overflow:hidden;
    flex: 0 1 auto;
    transition:0.5s;
    filter:blur(0px);
    &.blurred{
      transition:0.5s;
      filter:blur(2px);
    }
  }
  .omerta_footer{
    overflow:hidden;
    background-color:#FEDC7B;
    flex:1 1 auto;
    .table-positioning-logo{
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      align-content: center;
      flex-wrap: nowrap;
      svg{
        width: 200px;
      }
    }
    position: relative;
    width: 100%;
    height: 7em;
    display: flex;
    justify-content: center;
    @media all and (max-width:1350px) and (min-height:850px){

    }
    @media all and (max-width:512px){
      display:none;
    }
  }
  @-webkit-keyframes ShiftingGradient {
    0%{background-position:51% 0%}
    50%{background-position:50% 100%}
    100%{background-position:51% 0%}
  }
  @-moz-keyframes ShiftingGradient {
      0%{background-position:51% 0%}
      50%{background-position:50% 100%}
      100%{background-position:51% 0%}
  }
  @-o-keyframes ShiftingGradient {
      0%{background-position:51% 0%}
      50%{background-position:50% 100%}
      100%{background-position:51% 0%}
  }
  @keyframes ShiftingGradient {
      0%{background-position:51% 0%}
      50%{background-position:50% 100%}
      100%{background-position:51% 0%}
  }
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
      @media all and (min-width:512px){
        display:none;
      }
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
  .fronthold-canvas{
    opacity:0;
    transition:0.5s;
    &.activated{
      transition:0.5s;
      opacity:1;
    }
  }
  @media all and (orientation: landscape) and (min-aspect-ratio: 8/5) {
   .omerta_footer{
      display:none;
    }
    .the-navbar{
      .a.the-logo{
        display:flex;
      }
    }
  }
</style>