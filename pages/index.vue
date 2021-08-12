<template>
  <div class='the-contained'>
    <div class="first-page">
      <div class="container">
        <div class=" bornga row align-content-center justify-content-center">
          <div class="col-md-8 text-center">
            <h3 class="bolder">New Beginnings</h3>
          </div>
        </div>
        <div class=" bornga row align-content-center justify-content-center my-3">
          <div class="col-md-8 text-center">
            <p class="description-head">
              We are working with NFT and digital artists to create a series of covers in line with the global September theme of ‘New Beginnings’ to explore the intersection of fashion and technology—the dawn of fashion in the metaverse—as Singapore is a hub for innovation.
            </p>
          </div>
        </div>
        <div class=" bornga row">
          <div class="col-xl-4 col-lg-4 col-md-3 col-sm-6 mx-auto d-table text-center">
            <div class="headline cover one-and-only" style="position:relative;overflow:hidden;background-image:url('images/static-cover.jpg');>">
              <theSun id='the-brightness' class="sun_will_animate" />
            </div>
          </div>
        </div>
        <div class=" bornga row mt-5 align-content-center justify-content-center">
          <div class="col-md-6 d-table mx-auto entry">
            <button @click="triggerMeTransition()" class=" d-table mx-auto click-me-to-enter">
              Enter
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="second-page">
      <secondSection v-show="triggerSecondPage" :the_responsive="view_mode"/>
    </div>
  </div>
</template>

<script>
import {gsap, Power2} from "gsap";
import secondSection from "~/components/second-section.vue"
import theSun from "~/components/the-sun.vue"

export default {
  data(){
    return{
      view_mode:'Desktop',
      triggerSecondPage: false,
      window: {
        width: 0,
        height: 0
      }
    }
  },
  components: {
    secondSection,theSun
  },
  methods:{
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
    welcomeEntry(){
      var tl = gsap.timeline();
      tl.to('.first-page .bornga', {
        opacity: 1,
        stagger: 0.3,
        y:0
      });
    },
    triggerMeTransition(){
      this.triggerSecondPage = true;
      var tl = gsap.timeline();
       tl.to('.first-page', 0.9,{ 
        scaleX:1, scaleY:1, opacity:1,ease: Power2.easeOut,
        onComplete:function(){
        }
      });
      tl.to('.first-page', 0.7,{
        scaleX:3, scaleY:3, opacity:0,ease: Power2.easeOut,
        onComplete:function(){
          document.getElementById("the-brightness").classList.add('activate');
          gsap.set('.first-page',{ opacity:0, scaleX:0, scaleY:0});
          gsap.to('.second-page',0.5,{ opacity:1, scaleX:1, scaleY:1,ease: Power2.easeOut});
        }
      });
      var tl2 = gsap.timeline();
      document.querySelector(".headline.cover.one-and-only").classList.add('activate-this');
      tl2.to('.sun_will_animate',0.9,{
        opacity:1,scaleX:9, scaleY:9, ease: Power2.easeOut,
        onComplete:function(){
          document.querySelector(".headline.cover.one-and-only").classList.remove('activate-this');
          gsap.to('.sun_will_animate',0.5,{ width:'100%', height:'100%', ease: Power2.easeOut});
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
    gsap.set('.sun_will_animate',{ opacity:1,scaleX:0,scaleY:0});
    gsap.set('.first-page .bornga',{ opacity:0, y:'-10px'});
    gsap.set('.second-page',{ opacity:0, scaleX:1.2, scaleY:1.2});
    this.welcomeEntry();
    if (process.browser) {
    }
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
  .the-contained{
    @media all and (min-width:512px){
      overflow:hidden !important;
    }
  }
  .first-page{
    // background-image:repeating-conic-gradient(from 0 at 50% 50%, rgba(56, 28, 28, 0.7) 0% 5deg, transparent 0 9deg),
    // radial-gradient(
    //   circle 150px at 50% 50%,
    //   white,
    //   yellow,
    //   lightyellow,
    //   rgba(46, 181, 229, 0.8)
    // );
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
    p.description-head{
      font-family:'Akzidenz-Grotesk'
    }
    h3.bolder{
      font-family:'Akzidenz-Grotesk Pro Med'
    }
    .headline.cover{
      background-size:cover;
      background-position:center center;
      width:100%;
      height:0px;
      padding-bottom:127%;
      transition: box-shadow 0.3s ease-in-out;
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
      &:hover{
        background-color:#fff;
        color:#000;
        transition:0.5s;
      }
    }
  }
  .second-page{
    overflow:hidden;
  }
</style>