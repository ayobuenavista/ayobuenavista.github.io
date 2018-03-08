<template>
  <div class="page-wrapper">
    <div class="page">
      <div class="page-inner">
        <Resume />
      </div>
    </div>
  </div >
</template>

<script>
  import Vue from 'vue';

  export default  {
    name: 'Home',
  };
</script>

<style scoped>
  .page-inner{
    height: 100%;
    width: 100%;
  }
  .page-wrapper {
    overflow-x: hidden;
    background: #CCCCCC;
    margin: 0;
    padding: 0;
    -webkit-print-color-adjust: exact;
    box-sizing: border-box;
  }

  .resume {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .page {
    background: white;
    position: relative;
    /* height: 2100px; */
    /* display: block; */
    page-break-after: auto;
    overflow: hidden;
  }
</style>
