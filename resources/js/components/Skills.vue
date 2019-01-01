<template>
  <div class="skill-container" :class="{ shift: shift }">
    <div
      class="skill-box tw-text-center tw-flex tw-relative tw-mb-12"
      :class="{ show: hover }"
      @mouseenter="hover=true"
      @mouseleave="hover=false"
    >
      <div class="shade tw-absolute tw-pin-l tw-h-full" :style="{ background: skill.color }"></div>
      <div class="skill-box-inner tw-p-4 tw-flex tw-flex-col tw-justify-around">
        <a
          :href="skill.link"
          class="menu-border tw-px-3 tw-uppercase tw-text-white"
          :style="{ background: skill.secondarycolor }"
        >
          <div>
            <h5 v-text="skill.name" class="tw-font-light tw-text-white"></h5>
          </div>
        </a>
        <a :href="skill.link">
          <div>
            <img :src="skill.image">
          </div>
        </a>
        <div>
          <h5 class="tw-font-light tw-text-white" v-text="skill.difficulty"></h5>
          <h5 class="tw-font-light tw-text-white">Difficulty</h5>
        </div>
      </div>

      <div class="tw-w-full tw-flex tw-justify-around tw-flex-col tw-pr-4 md:tw-px-4 color">
        <div class="tw-w-full tw-text-left">
          <a :href="skill.link" class="tw-py-2">
            <h2 class="tw-font-normal" v-text="skill.title"></h2>
          </a>
        </div>
        <div class="tw-w-full tw-py-1 tw-text-left">
          <p class="tw-font-light" v-text="skill.text"></p>
        </div>
        <div class="tw-flex">
          <div class="tw-w-full tw-py-1">
            <h5>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="14"
                viewBox="0 0 13 14"
                class="expanded-card-meta-icon tw-mr-1"
              >
                <path
                  fill-rule="nonzero"
                  d="M4.129 6.44v4.873c0 .217-.159.41-.395.481a4.098 4.098 0 0 1-1.167.155c-1.236 0-2.564-.437-2.564-1.398V4.317c-.028-.429.145-1.185.976-1.595.386-.19 2.412-1.314 3.43-1.882A.674.674 0 0 1 5.01.82c.19.09.309.262.309.448v.739c0 .281-.265.51-.591.51-.254 0-.47-.139-.554-.333-.92.51-2.273 1.258-2.61 1.423a.683.683 0 0 0-.38.573c0 .167.041.299.117.37.21.198.909.075 1.671-.32.733-.38 4.346-2.455 4.382-2.476a.67.67 0 0 1 .606-.025.505.505 0 0 1 .313.45v.058c0 .17-.099.329-.263.424 0 0-2.508 1.444-2.73 1.567-.85.472-1.152 1.051-1.152 2.213zM13 3.98V10.6a.498.498 0 0 1-.276.431s-3.445 2.308-4.144 2.675c-.367.193-.835.295-1.352.295-1.228 0-2.499-.574-2.499-1.532V6.14l.002-.006c.012-.373.113-.906.917-1.418C6.13 4.41 9 2.721 9.123 2.65a.674.674 0 0 1 .608-.03.505.505 0 0 1 .315.452v.738c0 .281-.264.51-.59.51a.598.598 0 0 1-.544-.31c-.917.54-2.262 1.337-2.563 1.528-.38.243-.431.403-.438.609.001.152.05.268.146.345.301.238 1.113.138 1.912-.276.592-.307 3.143-2.007 4.076-2.636a.673.673 0 0 1 .623-.056c.203.085.332.262.332.458zm-1.182 2.272L8.865 8.23v1.02l2.953-1.978v-1.02z"
                  opacity=".5"
                  class="tw-fill-current"
                ></path>
              </svg>
              <span class="tw-font-light" v-text="skill.lessons"></span>
              <span class="tw-font-light">lessons</span>
            </h5>
          </div>
          <div class="tw-w-full tw-py-1">
            <h5>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="13"
                viewBox="0 0 13 13"
                class="expanded-card-meta-icon tw-mr-1"
              >
                <path
                  fill-rule="evenodd"
                  d="M6.5 0C2.925 0 0 2.925 0 6.5S2.925 13 6.5 13 13 10.075 13 6.5 10.075 0 6.5 0zm2.967 9L6 6.913V3h1v3.391l3 1.761L9.467 9z"
                  opacity=".5"
                  class="tw-fill-current"
                ></path>
              </svg>
              <span class="tw-font-light" v-text="skill.time"></span>
              <span class="tw-font-light">mins</span>
            </h5>
          </div>
        </div>
      </div>
    </div>

    <!-- <div
      class="skill-box tw-text-center tw-mb-4 tw-flex tw-relative"
      :class="{ show: hover }"
      @mouseenter="hover=true"
      @mouseleave="hover=false"
    >
      <div class="shade tw-absolute tw-pin-l tw-h-full" :style="{ background: skill.color }"></div>
      <div class="skill-box-inner tw-p-4 tw-flex tw-flex-col tw-justify-around">
        <a
          :href="skill.link"
          class="menu-border tw-px-3 tw-uppercase tw-text-white"
          :style="{ background: skill.secondarycolor }"
        >
          <div>
            <h5 v-text="skill.name" class="tw-font-light tw-text-white"></h5>
          </div>
        </a>
        <a :href="skill.link">
          <div>
            <img :src="skill.image">
          </div>
        </a>
        <div>
          <h5 class="tw-font-light tw-text-white" v-text="skill.difficulty"></h5>
          <h5 class="tw-font-light tw-text-white">Difficulty</h5>
        </div>
      </div>

      <div class="tw-w-full tw-flex tw-justify-around tw-flex-col tw-pr-4 md:tw-px-4 color">
        <div class="tw-w-full tw-text-left">
          <a :href="skill.link" class="tw-py-2">
            <h2 class="tw-font-normal" v-text="skill.title"></h2>
          </a>
        </div>
        <div class="tw-w-full tw-py-1 tw-text-left">
          <p class="tw-font-light" v-text="skill.text"></p>
        </div>
        <div class="tw-flex">
          <div class="tw-w-full tw-py-1">
            <h5>
              <span class="tw-font-light" v-text="skill.lessons"></span>
              <span class="tw-font-light">lessons</span>
            </h5>
          </div>
          <div class="tw-w-full tw-py-1">
            <h5>
              <span class="tw-font-light" v-text="skill.time"></span>
              <span class="tw-font-light">mins</span>
            </h5>
          </div>
        </div> 
      </div>
    </div>-->
  </div>
</template>

<script>
export default {
  props: {
    skill: Object,
    shift: Boolean
  },
  data() {
    return {
      hover: false
    };
  }
};
</script>

<style scoped>
.skill-box {
  transition: 200ms linear;
  box-shadow: 4px 4px 15px 0 rgba(36, 37, 38, 0.08);
  height: 245px;
}

.skill-container.shift {
  transform: translateX(-250px);
}

.skill-box .shade {
  width: 130px;
  z-index: -1;
  transition: 200ms ease-in-out;
}

.skill-box.show .shade {
  width: 100%;
  transition: 200ms ease-in-out;
}

.skill-box,
.skill-box-inner,
.shade {
  border-radius: 10px;
}

.height {
  height: 50px;
}

.skill-box .color * {
  color: #4f4f4f;
  transition: 300ms ease-in-out;
}

.skill-box.show .color * {
  color: white;
  transition: 300ms ease-in-out;
}
</style>

