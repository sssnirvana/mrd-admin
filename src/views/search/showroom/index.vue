<template>
  <div id="showroom">
    <div class="showroomlist">
      <div class="showroomlist-left">13</div>
      <div class="showroomlist-rigth">12</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "showroom",
  data() {
    return {};
  },
};
</script>

<style lang="less">
#showroom{
  position: relative;
  bottom: 520px;
  display: flex;
  justify-content: center;
}

.showroomlist{
  width: 1200px;
  background-color: aqua;
  display: flex;

  .showroomlist-left{
    width: 20%;
  }

  .showroomlist-rigth{
    width: 80%;
  }
}

</style>
