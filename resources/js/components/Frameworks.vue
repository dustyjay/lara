<template>
  <div>
    <p v-text="frame.name"></p>
    <p v-text="frame.desc"></p>
    <p v-text="frame.views"></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      frame: {
        name: "JS",
        desc: "JS Desc",
        views: 30
      }
    };
  }
  // props:{
  //     frame: Object
  // }
};
</script>