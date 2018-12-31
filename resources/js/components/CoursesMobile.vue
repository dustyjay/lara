<template>
  <div class="course-box tw-text-center tw-mb-4 tw-flex" :style="{ background: course.color }">
    <div class="course-box-inner tw-p-4 tw-flex tw-items-center">
      <a :href="course.link">
        <div>
          <img :src="course.image">
        </div>
        <div>
          <h2 v-text="course.name" class="tw-font-light tw-text-white"></h2>
        </div>
      </a>
    </div>
    <div class="tw-w-full tw-flex tw-justify-center tw-flex-col tw-pr-4 md:tw-px-4">
      <div class="tw-flex tw-mb-12">
        <div class="tw-w-full dashed tw-py-1">
          <h2 class="tw-font-light tw-text-white" v-text="course.series"></h2>
          <p class="tw-font-light tw-text-white">series</p>
        </div>
        <div class="tw-w-full dashed tw-py-1">
          <h2 class="tw-font-light tw-text-white" v-text="course.videos"></h2>
          <p class="tw-font-light tw-text-white">videos</p>
        </div>
      </div>
      <div class="tw-pin tw-w-full menu-border tw-flex tw-justify-center tw-items-center">
        <a :href="course.link" class="tw-py-2">
          <span class="tw-text-white">Explore</span>
          <span class="tw-text-white" v-text="course.name"></span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    course: Object
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
.course-box {
  height: 220px;
  color: white;
}

.course-box,
.course-box-inner {
  border-radius: 10px;
}

img {
  max-width: unset;
}
</style>

