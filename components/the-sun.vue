<template>
  <div class="sun">
    <!-- <div id="ultimate_ray_box" class="ray_box">
      <div class="contained_rays">
        <div class="ray ray1"></div>
        <div class="ray ray2"></div>
        <div class="ray ray3"></div>
        <div class="ray ray4"></div>
        <div class="ray ray5"></div>
        <div class="ray ray6"></div>
        <div class="ray ray7"></div>
        <div class="ray ray8"></div>
        <div class="ray ray9"></div>
        <div class="ray ray10"></div>
      </div>
    </div> -->
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
  .sun { 
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 30px;
    height: 60px;
    padding-bottom: 0%;
    border-radius: 0px;
    background: #fff;
    box-shadow: 0 0 16px 0px #fff, 0 0 20px 3px #fff, 0 0 50px 50px #fff, 0px 0px 50px 100px #e9d78a;
  }
  .ray_box {
    position: absolute;
    margin: auto;
    top:0px;
    left:0;
    right:0;
    bottom:0;	
    width:100%;  
    .contained_rays {
      position: absolute;
      left: 0%;
      top: 0%;
      transform: scale(1);
    }
    &.activated{
      -webkit-animation: ray_anim 2s linear infinite;
      animation: ray_anim 2s linear infinite;
    }    
  }
  
</style>