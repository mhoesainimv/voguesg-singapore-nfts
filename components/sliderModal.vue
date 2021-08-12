<template>
  <div class="moja">
    <b-modal class="cover-the-modal" v-if="the_condition" no-close-on-backdrop modal-header="no" ref="my-modal" centered hide-footer  id="modal-xl" size="xl" title="Extra Large Modal">
      <template #modal-title>
      </template>
      <template #modal-footer>
      </template>
      <template #modal-header>
      </template>
      <div class="d-block text-center">
        {{the_data}}
      </div>
      <b-button class="mt-3" variant="outline-danger" block @click="hideModal">Close Me</b-button>
    </b-modal>
  </div>
</template>
<script>
export default {
  props: {
    the_data:Object,
    the_condition:Boolean
  },
  data(){
    return{

    }
  },
  methods:{
    hideModal() {
      this.$refs['my-modal'].hide();
      setTimeout(() => {
        this.$emit('motekar', '123');
      }, 200);
    }
  },
  mounted:function(){
    if(this.the_condition == true) this.$refs['my-modal'].show();
    if (process.browser) {
    }
    this.$nextTick(function () {
    });
  },
  created:function(){

  }
}
</script>
<style lang="scss" scoped>
  .moja{
    button.close{
      display:none;
    }
    header#modal-xl___BV_modal_header_ {
      display: none;
    }
  }
  header#modal-xl___BV_modal_header_ {
    display: none;
  }
</style>