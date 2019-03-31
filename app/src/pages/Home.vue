<template>
  <div class="page-wrapper">
    <div class="page">
      <div class="page-inner">
        <Resume />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style scoped>
.page-inner {
  height: 100%;
  width: 100%;
}

.page-wrapper {
  overflow-x: hidden;
  background: white;
  margin: 0;
  padding: 0;
  -webkit-print-color-adjust: exact;
  box-sizing: border-box;
}

.resume {
  height: 100%;
  width: 100%;
}

.page {
  position: relative;
  page-break-after: auto;
  overflow: hidden;
}
</style>
