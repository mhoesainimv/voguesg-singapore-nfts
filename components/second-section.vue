<template>
  <div :class="'con-contained '+view_mode">
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
        <div v-for="(object,index) of objects" :key="index" :class="'object object-'+index+' '+object.slug">
          <div class="the-description">
            {{object.title}}
          </div>
        </div>
      </div>
    </div>
    <div class="modalismo" v-if="showModalcover">
      <sliderModal @motekar="oneMoreThing" :the_condition="showModalcover" :the_data="modal_content"/>
    </div>
  </div>
</template>
<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import json from '~/components/json/cover.json'
import objects from '~/components/json/objects.json'

import sliderModal from '~/components/sliderModal.vue'

export default {
  data(){
    return{
      mobile_background:'background-image:url("images/background-positioning-mobile.png")',
      desktop_background:'background-image:url("images/background-positioning.png")',
      view_mode:'',
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
    VueSlickCarousel,sliderModal
  },
  methods:{
    showModal(i){
      let index = i;
      let modal_content = this.data[index];
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
      },3000);
    },
  },
  created:function(){
    if(this.window.width < 767){
      this.view_mode = 'Mobile';
    } else {
      this.view_mode = 'Desktop';
    }
    if (process.client) {
      let video = document.getElementById("the_benchmark");
      let video_height = video.clientHeight;
      setTimeout(function(){
      document.documentElement.style.setProperty('--the_height', `${video_height}px`);
      },3000);
    }
  },
  mounted:function(){
    this.onResize();
    if(this.window.width < 767){
      this.view_mode = 'Mobile';
    } else {
      this.view_mode = 'Desktop';
    }
    if(this.view_mode == 'Desktop'){
      this.$refs.this_video.play();
    }
     if (process.client) {
      this.onResize();
      let video = document.getElementById("the_benchmark");
      let video_height = video.clientHeight;
      setTimeout(function(){
      document.documentElement.style.setProperty('--the_height', `${video_height}px`);
      },3000);
    }
    this.$nextTick(function () {
      window.addEventListener('resize', this.onResize);
    });
  }
}
</script>
<style lang="scss" scoped>
  .background-video-image{
    position:relative;
    width:100vw;
    height:100vh;
    height: calc(var(--vh, 1vh) * 100);
    min-height: -webkit-fill-available;
    video{
      position: relative;
      width: 100%;
      height: auto;
      top: 50%;
      object-fit: contain;
      transform: translateY(-50%);
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
        background-color:rgba(128, 128, 128, 0.055);
        position: relative;
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position:center center;
      }
    }
    .the-description {
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
    .the-objects{
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
        height: 15%;
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

</style>