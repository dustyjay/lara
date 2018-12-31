<template>
  <div
    class="course-box tw-text-center tw-mr-8"
    :style="[ hover ? { background: course.color } : {} ]"
    :class="{ show: hover }"
    @mouseenter="hover=true"
    @mouseleave="hover=false"
  >
    <div :style="[ !hover ? { background: course.color }:{} ]" class="course-box-inner tw-p-4">
      <a :href="course.link">
        <div>
          <img :src="course.image" alt width="auto" class="tw-h-24">
        </div>
        <div>
          <h3 v-text="course.name" class="tw-font-light tw-text-white"></h3>
        </div>
      </a>
    </div>
    <div class="tw-relative height">
      <div
        class="tw-absolute tw-pin tw-w-full tw-flex tw-justify-center tw-items-center"
        v-if="hover"
      >
        <a :href="course.link" class="menu-border tw-px-2 tw-py-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 15 15"
            class="tw-hidden md:tw-inline tw-mr-2 tw-pt-1"
          >
            <g fill="none" fill-rule="evenodd">
              <path d="M-1-1h18v18H-1z"></path>
              <path
                d="M6 10.875L10.5 7.5 6 4.125v6.75zM7.5 0C3.36 0 0 3.36 0 7.5 0 11.64 3.36 15 7.5 15c4.14 0 7.5-3.36 7.5-7.5C15 3.36 11.64 0 7.5 0zm0 13.5c-3.307 0-6-2.693-6-6s2.693-6 6-6 6 2.693 6 6-2.693 6-6 6z"
                class="tw-fill-current tw-text-white"
              ></path>
            </g>
          </svg>
          <span class="tw-text-white">Explore</span>
        </a>
      </div>
      <div class="tw-flex" v-else>
        <div class="tw-w-full dashed tw-py-1">
          <h2 class="tw-font-light" v-text="course.series"></h2>
          <p class="tw-font-light">series</p>
        </div>
        <div class="tw-w-full dashed tw-py-1">
          <h2 class="tw-font-light" v-text="course.videos"></h2>
          <p class="tw-font-light">videos</p>
        </div>
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
    return {
      hover: false
    };
  }
};
</script>

<style scoped>
.course-box {
  width: 170px;
  height: 180px;
  transition: 200ms linear;
}

.course-box.show {
  height: 220px;
  transition: 200ms ease-in-out;
}

.course-box,
.course-box-inner {
  border-radius: 10px;
}

.height {
  height: 50px;
}

.dashed {
  border: 1px dashed rgba(0, 0, 0, 0.15);
}
</style>

