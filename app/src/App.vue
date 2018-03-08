<template>
  <div id="app">
    <Particles
      :particleOpacity="0.7"
      linesColor="#3EE6C1"
      :particlesNumber="30"
      shapeType="circle"
      :particleSize="3"
      :linesWidth="2"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="0.3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    >
    </Particles>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
  @import '../node_modules/roboto-fontface/css/roboto/roboto-fontface.css';
  @import '../node_modules/font-awesome/css/font-awesome.css';
  @import '../node_modules/material-design-icons/iconfont/material-icons.css';
  @import '../node_modules/source-sans-pro/source-sans-pro.css';
  @import '../node_modules/npm-font-open-sans/open-sans.css';
  @import '../node_modules/npm-font-open-sans-condensed/open-sans-condensed.css';
  @import '../node_modules/raleway-webfont/raleway.css';

  body {
    padding: 0;
    margin: 0;
    overflow-x: hidden;
    background: #CCCCCC;
  }

  #particles-js {
    z-index: 9999;
    background-size: cover;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1930px;
  }
</style>
