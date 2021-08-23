<template>
  <div>
    <div :class="'con-contained ' + view_mode">
      <div v-if="view_mode == 'Desktop'">
        <div class="background-video-image desktop">
          <video id="the_benchmark" ref="this_video" autoplay playsinline muted loop>
            <source src="video/the_background_video.mp4" type="video/mp4">
          </video>
        </div>
        <div id="the_constantine" style="height:var(--the_height)" class="the-common-ground desktop">
          <div @click="showModal(index)" v-for="(slide,index) of data" :key="index" :class="'deck image-cover-'+index">
            <div class="background-image-slider" :style="{ 'background-image': 'url('+ slide.image_cover + ')' }">
            </div>
          </div>
          <div class="the-objects">
            <a target="_blank" :href="object.link" v-for="(object,index) of objects" :key="index" :class="'object object-'+index+' '+object.slug">
              <div class="the-description" v-html="object.title">
              </div>
            </a>
          </div>
        </div>
      </div>
      <div v-if="view_mode == 'Mobile'" class="background-video-image mobile" style="">
        <video id="the_benchmark" ref="this_video" autoplay playsinline muted loop>
          <source src="video/the_background_video_mobile.mp4" type="video/mp4">
        </video>
        <div v-if="view_mode == 'Mobile'" id="the_constantine" style="" class="the-common-ground mobile">
          <div class="positioning-carousel">
            <VueSlickCarousel v-bind="settings">
              <div @click="showModal(index)" v-for="(slide,index) of data" :key="index">
                <div class="background-image-slider">
                  <video  class="video_outside" ref="inside_the_modal_video" autoplay playsinline muted loop>
                    <source :src="slide.video_mobile" type="video/mp4">
                  </video>
                </div>
              </div>
            </VueSlickCarousel>
          </div>
        </div>
      </div>
      <div v-if="view_mode == 'Mobile'" class="the-objects">
        <div class="container-fluid">
          <div class="row">
            <a :href="object.link" target="_blank" v-for="(object,index) of objects" :key="index" :class="'col-6 m-0 object the-box object-'+index+' '+object.slug">
              <div class="row">
                <div class="col-12">
                  <div class="background-image-mobile-objects" :style="{ 'background-image': 'url('+ object.image_cover + ')' }">
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-12">
                  <span class="mobile-description" style="font-family:'Baskerville;text-align:center;display:table;" v-html="object.title">
                  </span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="modalismo" v-if="showModalcover">
      <sliderModal @motekar="oneMoreThing" :the_condition="showModalcover" :the_view_mode="view_mode" :the_data="modal_content"/>
    </div>
  </div>
</template>
<script>
import {gsap, Power2} from "gsap"
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import json from '~/components/json/cover.json'
import objects from '~/components/json/objects.json'

import sliderModal from '~/components/sliderModal.vue'
import VogueSingaporeLogo from "~/components/VogueSingaporeLogo.vue"

export default {
  props: {
    the_responsive:String,
    the_condition:Boolean
  },
  data(){

    return{
      isActive: false,
      mobile_background:'background-image:url("images/background-positioning-mobile.png")',
      desktop_background:'background-image:url("images/background-positioning.png")',
      view_mode:'Desktop',
      settings:{
        dots: false,
        arrows:false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive:[{
          breakpoint: 512,
          settings:{
            slidesToShow: 1,
            slidesToScroll: 1
            }
          }
        ]
      },
      video:{
        width:0,
        height:0,
      },
      window: {
        width: 0,
        height: 0
      },
      hoverStateDescription:false,
      data: json,
      objects: objects,
      modal_content : '',
      showModalcover: false
    }
  },
  components:{
    VueSlickCarousel,sliderModal,VogueSingaporeLogo
  },
  methods:{
    showModal(i){
      let index = i;
      let modal_content = this.data[index];
      this.$refs.inside_the_modal_video.play();
      this.modal_content = modal_content;
      this.showModalcover = true;
    },
    oneMoreThing(){
      this.showModalcover = false;
    },
    onResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
      if(this.window.width < 767){
        this.view_mode = 'Mobile';
      } else {
        this.view_mode = 'Desktop';
      }
      // Directive interpolar changes for mobile data
        let video = document.getElementById("the_benchmark");
        let video_height = video.clientHeight;
      let vh = window.innerHeight * 0.01;
      setTimeout(function(){
          document.documentElement.style.setProperty('--vh', `${vh}px`);
          document.documentElement.style.setProperty('--the_height', `${video_height}px`);
      },1500);
    },
  },
  created:function(){
    if(this.view_mode == 'Desktop' && process.client){
      let video = document.getElementById("the_benchmark");
      let video_height = video.clientHeight;
      document.documentElement.style.setProperty('--the_height', `${video_height}px`);
    }
  },
  mounted:function(){
    gsap.set('.positioning-carousel',{opacity:0});
    this.onResize();
    if(this.view_mode == 'Desktop'){
      this.$refs.this_video.play();
    }
     if (process.client) {
      this.onResize();
      let video = document.getElementById("the_benchmark");
      let video_height = video.clientHeight;
      setTimeout(function(){
      document.documentElement.style.setProperty('--the_height', `${video_height}px`);
      },1500);
    }
    this.$nextTick(function () {
      this.onResize();
    });
    window.addEventListener('resize', this.onResize);
  }
}
</script>
<style lang="scss" scoped>
  .con-contained.Desktop{
    .background-video-image{
      position: relative;
      width: 100vw;
      padding: 0px;
      margin: 0px;
      height: auto;
      display: grid;
      video{
        position: relative;
        width: 100%;
        height: auto;
        // top: 50%;
        object-fit: contain;
        // transform: translateY(-50%);
      }
    }
    .the-common-ground{
      position: absolute;
      top: 50%;
      left: 0px;
      width: 100%;
      transform: translateY(-50%);
      height:var(--the_height);
      height: auto;
      background-position: bottom center;
      background-repeat: no-repeat;
      background-size: cover;
      .background-image-example{
      position: absolute;
      width: 50%;
      transform: translate(-50%, -50%);
      top: 53%;
      left: 50%;
      padding: 1em 1em 0.5em;
      }
      .positioning-carousel {
        position: absolute;
        width: 54%;
        transform: translate(-50%, -50%);
        top: 54%;
        left: 50%;
        padding: 1em 1em 0.5em;
        .deck{
          padding:0em 2em;
          .background-image-slider {
            z-index: -1;
            position: relative;
          }
        }
      }
      .deck{
        &.image-cover-0{
          position: absolute;
          left: 28.4%;
          width: 17.0%;
          top: 32%;
          height: 45%;
        }
        &.image-cover-1{
          position: absolute;
          left: 54.3%;
          width: 17%;
          top: 32%;
          height: 45%;
        }
        .background-image-slider{
          background-image:none !important;
          background-color:rgba(128, 128, 128, 0.055);
          background-color: rgb(255 143 241 / 80%);
          position: relative;
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position:center center;
        }
      }
      a{
      text-decoration:none !important;
      .the-description {
        color:#000 !important;
        position: relative;
        left: 103%;
        top: 50%;
        font-family:'Akzidenz-Grotesk';
        transform: translateY(-50%);
        width:200px;
        opacity:0;
        transition:0.5s;
        &.activate{
          opacity:1;
          transition:0.5s;
        }
        }
      }
      .the-objects{
        background-color:#f3eeec;
        .object{
          &:hover{
            .the-description{
              opacity:1;
              transition:0.5s;
            }
          }
        }
        .object-0{
          position: absolute;
          width: 13%;
          height: 35%;
          background-color: #00800091;
          bottom: 4%;
          left: 3%;
        }
        .object-1{
          position: absolute;
          width: 4.3%;
          height: 15%;
          background-color: rgba(0,128,0,0.56863);
          bottom: 11%;
          left: 22%;
        }
        .object-2{
          position: absolute;
          width: 4.3%;
          height: 17%;
          background-color: rgba(0, 128, 0, 0.56863);
          bottom: 9%;
          left: 35%;
        }
        .object-3{
          position: absolute;
          width: 4.3%;
          height: 15%;
          background-color: rgba(0, 128, 0, 0.56863);
          bottom: 7%;
          left: 61%;
        }
        .object-4{
          position: absolute;
          width: 10.3%;
          height: 10%;
          background-color: rgba(0, 128, 0, 0.56863);
          bottom: 2%;
          left: 73.3%;
        }
        .object-5{
          position: absolute;
          width: 6.3%;
          height: 29%;
          background-color: rgba(0, 128, 0, 0.56863);
          bottom: 11%;
          right: 5.5%;
          .the-description {
          position: relative;
          right: 225%;
          left:auto;
          }
        }
      }
    }
  }
  .con-contained.Mobile{
    .the-objects{
      text-decoration:none !important;
      background-color: #f3eeec;
      span.mobile-description {
        text-decoration:none !important;
        color:#000 !important;
        font-size: 0.6em;
      }
    }
    .background-video-image{
      position: relative;
      width: 100%;
      height: auto;
      position: relative;
      width: 100%;
      height: 0px;
      padding-bottom: 148%;
      > video{
        position: relative;
        display:table;
        width: 100%;
        height: auto;
        top: 0%;
        object-fit: contain;
        transform: translateY(0);
      }
    }
    .background-image-slider{
      position: relative;
      display: block;
      width: 100%;
      height: 0px;
      padding-bottom: 122%;
      background-size: cover;
      background-position: center center;
      > video{
        position: absolute;
        display: block;
        width: 100%;
        height: 100%;
        left: 0px;
        top: 0px;
      }
    }
    .the-box{
      text-decoration:none !important;
      padding: 2em;
      border-right: 1px solid grey;
      border-bottom: 1px solid grey;
      &:nth-child(even){
        border-right:0px;
      }
      .background-image-mobile-objects {
        width: 50%;
        height: 0px;
        padding-bottom: 50%;
        display: table;
        margin: 0 auto;
        margin-bottom: 1.5em;
        background-size: cover;
        background-position: center center;
      }
    }
    .the-common-ground{
      position: absolute;
      top: 0%;
      left: 0px;
      width: 100%;
      transform: translateY(0%);
      // height:var(--the_height);
      height:0px;
      padding-bottom:148%;
      background-position: bottom center;
      background-repeat: no-repeat;
      background-size: cover;
      .positioning-carousel{
        position: absolute;
        width: 49.5%;
        top: 24%;
        left: 25%;
      }
    }
    
  } 
  @media all and (min-aspect-ratio: 8/5) and (max-aspect-ratio:8/5){

  }
</style>