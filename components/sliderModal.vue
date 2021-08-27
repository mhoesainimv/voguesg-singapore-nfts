<template>
  <div  class="moja">
    <b-modal no-close-on-esc data-keyboard="false" @ok="hideModal" @cancel="hideModal" @close="hideModal" content-class="cover-the-modal" hide-footer hide-title  hide-header v-if="the_condition" no-close-on-backdrop modal-header="no" ref="my-modal" centered  id="modal-xl" size="xl" title="Extra Large Modal">
      <template #modal-title>
      </template>
      <template #modal-footer>
      </template>
      <template #modal-header>
      </template>
      <div v-if="the_view_mode == 'Desktop'" class="d-none d-md-block">
        <div class="container-fluid">
          <div class="row">
            <div class="col-12">
              <div class="the-bar">
                <div class="the-title">
                  {{the_data.title}}
                </div>
                <button type="button" aria-label="Close" @click="hideModal" class="close">
                  <svg xmls="https://www.w3.org/2000/svg" width="25.354" height="25.847" viewBox="0 0 25.354 25.847">
                    <line id="Line_16" data-name="Line 16" x2="34.857" transform="translate(0.354 0.354) rotate(45)" fill="none" stroke="#000" stroke-width="1"/>
                    <line id="Line_17" data-name="Line 17" y2="34.857" transform="translate(25.001 0.846) rotate(45)" fill="none" stroke="#000" stroke-width="1"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-4">
              <div class="the-background-cover-inside-modal">
                <div class="container-fluid">
                  <div class="row">
                    <div class="p-0 col-12">
                      <video id="zorc_video_modal" class="video_modal" ref="inside_the_modal_video" autoplay playsinline loop>
                        <source :src="the_data.video" type="video/mp4">
                      </video>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-8">
              <div class="h-100 d-flex flex-column fountains-of-desktop">
                <div style='text-align:left;' v-html="the_data.description">
                </div>
                <ul class="the-list-unhinge mb-4">
                  <li v-for="(the_list,index) of the_data.list_unhinge" :key="index">
                    <b>{{the_list.category}}</b> {{the_list.name}}
                  </li> 
                </ul>
                <div class="mt-auto">
                  <div class="row">
                    <div class="col-6">
                      <a :href="the_data.link_one" class="the-button-link" target="_blank">
                        {{the_data.link_title_one}}
                      </a>
                    </div>
                    <div class="col-6">
                      <a :href="the_data.link_two" class="the-button-link" target="_blank">
                        {{the_data.link_title_two}}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row mt-2">
            <div class="col-md-4">
              <div class="row">
                <div class="col-6 align-self-center">
                <button v-if="the_data.no_sound == false" type="button" aria-label="Close" @click="speakerToggle" :class="{active: isActive}" class="speaker to_video">
                  <svg id="plyr-volume" class="not_muted" viewBox="0 0 18 18"><path d="M15.6 3.3c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4C15.4 5.9 16 7.4 16 9c0 1.6-.6 3.1-1.8 4.3-.4.4-.4 1 0 1.4.2.2.5.3.7.3.3 0 .5-.1.7-.3C17.1 13.2 18 11.2 18 9s-.9-4.2-2.4-5.7z"></path><path d="M11.282 5.282a.909.909 0 000 1.316c.735.735.995 1.458.995 2.402 0 .936-.425 1.917-.995 2.487a.909.909 0 000 1.316c.145.145.636.262 1.018.156a.725.725 0 00.298-.156C13.773 11.733 14.13 10.16 14.13 9c0-.17-.002-.34-.011-.51-.053-.992-.319-2.005-1.522-3.208a.909.909 0 00-1.316 0zm-7.496.726H.714C.286 6.008 0 6.31 0 6.76v4.512c0 .452.286.752.714.752h3.072l4.071 3.858c.5.3 1.143 0 1.143-.602V2.752c0-.601-.643-.977-1.143-.601L3.786 6.008z"></path></svg>
                  <svg class="muted" id="plyr-muted" viewBox="0 0 18 18">
                    <path d="M12.4 12.5l2.1-2.1 2.1 2.1 1.4-1.4L15.9 9 18 6.9l-1.4-1.4-2.1 2.1-2.1-2.1L11 6.9 13.1 9 11 11.1zM3.786 6.008H.714C.286 6.008 0 6.31 0 6.76v4.512c0 .452.286.752.714.752h3.072l4.071 3.858c.5.3 1.143 0 1.143-.602V2.752c0-.601-.643-.977-1.143-.601L3.786 6.008z"></path>
                  </svg>
                </button>
                </div>
                <div class="col-6 align-self-center">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="the_view_mode == 'Mobile'" class="d-block d-md-none">
        <div class="container-fluid">
          <div class="row">
            <div class="col-12 mb-3 p-0 mt-5 mt-sm-0">
              <button type="button" aria-label="Close" @click="hideModal" class="close">
                  <svg xmls="https://www.w3.org/2000/svg" width="25.354" height="25.847" viewBox="0 0 25.354 25.847">
                    <line id="Line_16" data-name="Line 16" x2="34.857" transform="translate(0.354 0.354) rotate(45)" fill="none" stroke="#fff" stroke-width="1"/>
                    <line id="Line_17" data-name="Line 17" y2="34.857" transform="translate(25.001 0.846) rotate(45)" fill="none" stroke="#fff" stroke-width="1"/>
                  </svg>
              </button>
            </div>
          </div>
          <div class="row">
            <div class="col-12 mt-0" style="background-color:#EFECE7;">
              <div class="container-fluid">
                <div class="row">
                  <div class="col-12 p-0">
                    <div class="the-bar">
                      <div class="the-title">
                        {{the_data.title}}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="container-fluid p-0">
                <div class="row">
                  <div class="col-12 px-0">
                    <video id="zorc_video_modal" class="video_modal" ref="inside_the_modal_video" autoplay playsinline loop>
                      <source :src="the_data.video" type="video/mp4">
                    </video>
                  </div>
                </div>
              </div>
              <div class="container-fluid borderismo-mobile px-0">
                <div class="row" :class="the_data.no_sound == true ?'mb-3':''">
                  <div class="col-4 align-self-center" :class="the_data.no_sound == true ? 'd-none':''">
                    <button type="button" aria-label="Close" @click="speakerToggle" :class="{active: isActive}" class="speaker to_video">
                      <svg id="plyr-volume" class="not_muted" viewBox="0 0 18 18"><path d="M15.6 3.3c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4C15.4 5.9 16 7.4 16 9c0 1.6-.6 3.1-1.8 4.3-.4.4-.4 1 0 1.4.2.2.5.3.7.3.3 0 .5-.1.7-.3C17.1 13.2 18 11.2 18 9s-.9-4.2-2.4-5.7z"></path><path d="M11.282 5.282a.909.909 0 000 1.316c.735.735.995 1.458.995 2.402 0 .936-.425 1.917-.995 2.487a.909.909 0 000 1.316c.145.145.636.262 1.018.156a.725.725 0 00.298-.156C13.773 11.733 14.13 10.16 14.13 9c0-.17-.002-.34-.011-.51-.053-.992-.319-2.005-1.522-3.208a.909.909 0 00-1.316 0zm-7.496.726H.714C.286 6.008 0 6.31 0 6.76v4.512c0 .452.286.752.714.752h3.072l4.071 3.858c.5.3 1.143 0 1.143-.602V2.752c0-.601-.643-.977-1.143-.601L3.786 6.008z"></path></svg>
                      <svg class="muted" id="plyr-muted" viewBox="0 0 18 18">
                        <path d="M12.4 12.5l2.1-2.1 2.1 2.1 1.4-1.4L15.9 9 18 6.9l-1.4-1.4-2.1 2.1-2.1-2.1L11 6.9 13.1 9 11 11.1zM3.786 6.008H.714C.286 6.008 0 6.31 0 6.76v4.512c0 .452.286.752.714.752h3.072l4.071 3.858c.5.3 1.143 0 1.143-.602V2.752c0-.601-.643-.977-1.143-.601L3.786 6.008z"></path>
                      </svg>
                    </button>
                  </div>
                  <div class="col-8 align-self-center">
                  </div>
                </div>
              </div>
              <div class="container-fluid">
                <div class="row">
                  <div class="col-12 p-0">
                    <div class="fountains-of-mobile" v-html="the_data.description">
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12 p-0 mb-4">
                    <ul class="the-list-unhinge">
                      <li v-for="(the_list,index) of the_data.list_unhinge" :key="index">
                        <b>{{the_list.category}}</b> {{the_list.name}}
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12 mb-3 p-0">
                    <a :href="the_data.link_one" class="the-button-link" target="_blank">
                      {{the_data.link_title_one}}
                    </a>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12 mb-3 p-0">
                    <a :href="the_data.link_two" class="the-button-link" target="_blank">
                      {{the_data.link_title_two}}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </b-modal>
  </div>
</template>
<script>
export default {
  props: {
    the_data:Object,
    the_view_mode:String,
    the_condition:Boolean
  },
  data(){
    return{
      isActive: false,
      view_mode: this.the_view_mode
    }
  },
  methods:{
    disableEsc(e){
      setTimeout(() => {
        this.$emit('motekar', '123');
      }, 200);
    },
    onResize(){

    },
    hideModal() {
      this.$refs['my-modal'].hide();
      setTimeout(() => {
        this.$emit('motekar', '123');
      }, 200);
    },
    speakerToggle(){
      this.isActive = !this.isActive;
      var mute = document.getElementById('zorc_video_modal').muted;
      if(mute == true){
        document.getElementById('zorc_video_modal').muted = false;
      } else {
        document.getElementById('zorc_video_modal').muted = true;
      }
    }
  },
  mounted:function(){
    if(this.the_condition == true) this.$refs['my-modal'].show();
    if (process.browser) {
    }
    this.$nextTick(function () {
      var vid = document.getElementById("zorc_video_modal");
      vid.volume = 0.3;
    });
  },
  created:function(){
    // window.addEventListener('keydown', (e) => {
  
      
    // }
  }
}
</script>
<style lang="scss" scoped>
</style>