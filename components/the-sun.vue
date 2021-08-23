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
    top:0;
    left:0;
    right:0;
    bottom:0;
    margin: auto;  
    width:1px;
    height:1px;
    border-radius:50%;	
    background:#fff;
    opacity:1;			
    z-index:5;
    // box-shadow: 0px 0px 40px 15px rgb(255, 255, 200),
    // 0 0 100px 50px #ff0;  
    // // box-shadow:0px 0px 43px 43px #ffff84;
    // // box-shadow: 
    // // 0 0 40px 20px #fff, 
    // // 0 0 100px 50px #ff0;
    // // background-image: gradient(circle 150px at 25% 33%, white, yellow, lightyellow, aqua);
    // box-shadow:
    // 0 0 50px 30px #fff,  
    // 0 0 100px 150px #ff0,
    // 0 0 100px 165px rgb(255, 123, 0), 
    // 0 0 100px 200px #fff;  
    // box-shadow: 0 0 50px 30px #fff, 0 0 100px 150px #fff0, 0 0 100px 165px #ffffff, 0 0 100px 200px #fff0;
    // box-shadow:0 0 70px 10px #d3d1d2, 0 0 50px 50px rgb(255 255 255 / 0%), 0 0 50px 50px #d3d1d2, 0 0 50px 100px #d3d1d2;
    // box-shadow:0 0 70px 10px #ffffff, 0 0 50px 50px #ffffff00, 0 0 50px 50px #ffffff, 0px 0px 30px 100px #d3d1d2;
    box-shadow:0 0 70px 10px #ffffff, 0 0 50px 50px rgb(255 255 255 / 0%), 0 0 50px 50px #fff, 0px 0px 30px 100px #e9d78a;
    &.activate{
      background:#d3d1d2;
      box-shadow:0 0 70px 10px #d3d1d2, 0 0 50px 50px rgb(255 255 255 / 0%), 0 0 50px 50px #d3d1d2, 0 0 50px 100px #d3d1d2;
      transition:0.5s;
    }
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
  .ray {  
      background: linear-gradient(top, rgba(255,255,255,0) 0%, rgba(255, 238, 0, 0.8) 50%, rgba(255,255,255,0) 100%); 
      background: -webkit-linear-gradient(top, rgba(255,255,255,0) 0%, rgba(255, 238, 0, 0.8) 50%, rgba(255,255,255,0) 100%);
      margin-left:10px;
      border-radius:80% 80% 0 0;
      position:absolute;
      opacity:0.1;
  }

  .ray1 {    
      height:170px;
      width:30px;
      -webkit-transform: rotate(180deg);
      top:-175px;
      left: 15px;
  }
  .ray2 {
      height:100px;
      width:8px;
      -webkit-transform: rotate(220deg);
      top:-90px;
      left: 75px;
  }
  .ray3 {
      height:170px;
      width:50px;
    -webkit-transform: rotate(250deg);
      top:-80px;
      left: 100px;
  }
  .ray4 {
      height:120px;
      width:14px;
    -webkit-transform: rotate(305deg);
      top:30px;
      left: 100px;
  }
  .ray5 {
      height:140px;
      width:30px;
    -webkit-transform: rotate(-15deg);
      top:60px;
      left: 40px;
  }
  .ray6 {
      height:90px;
      width:50px;
    -webkit-transform: rotate(30deg);
      top:60px;
      left: -40px;
  }
  .ray7 {
      height:180px;
      width:10px;
    -webkit-transform: rotate(70deg);
      top:-35px;
      left: -40px;
  }
  .ray8 {
      height:120px;
      width:30px;
    -webkit-transform: rotate(100deg);
      top:-45px;
      left:-90px;
  }
  .ray9 {
      height:80px;
      width:10px;
    -webkit-transform: rotate(120deg);
      top:-65px;
      left:-60px;
  }
  .ray10 {
      height:190px;
      width:23px;
    -webkit-transform: rotate(150deg);
      top:-185px;
      left: -60px;
  }
  @-webkit-keyframes ray_anim { 
      0% { -webkit-transform: rotate(0deg); transform: rotate(0deg);}    
      100% { -webkit-transform: rotate(360deg); transform: rotate(360deg);}
  }
</style>