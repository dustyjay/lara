<template>
  <nav
    class="section md:tw-overflow-y-hidden tw-pt-6 md:tw-py-0 widescreen:tw-mb-auto tw-pb-1 lg:tw-pb-8 menu"
  >
    <div>
      <div
        class="tw-items-center tw-flex tw-flex-row tw-justify-between tw-mb-6 md:tw-mb-8 md:tw-pt-8"
      >
        <div class="tw-inline-block">
          <a href="/">
            <img src="../assets/img/logo.png" width="60px" alt="logo">
          </a>
        </div>
        <div class="tw-inline-block">
          <ul>
            <li class="tw-float-left tw-hidden md:tw-block">
              <a href="/" class="tw-text-xs tw-font-bold tw-text-white">SIGN IN</a>
            </li>
            <li class="tw-float-left tw-mx-6 tw-hidden md:tw-block tw-p-2 tw--mt-2">
              <a
                href="/"
                class="tw-text-xs tw-font-bold tw-text-white menu-border tw-p-2"
              >GET STARTED</a>
            </li>
            <li class="tw-float-left">
              <a @click.stop="showSearch" class="tw-cursor-pointer">
                <img src="../assets/img/magnifying-glass.png" alt="search" width="24px">
              </a>
            </li>
            <li class="tw-float-left tw-ml-6 md:tw-hidden">
              <a @click.stop="mobile = true" class="tw-cursor-pointer">
                <img src="../assets/img/sort.png" alt="search" width="24px">
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="mobile tw-fixed tw-w-full tw-bg-blue" :class="{ show: mobile }">
      <div class="tw-flex tw-flex-col tw-justify-around tw-h-full">
        <!-- <div id="nav-icon" :class="{open: mobile}">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
        </div>-->
        <div class="tw-text-white tw-text-right tw-pr-4">
          <a class="tw-mr-4 tw-font-bold font-lg tw-cursor-pointer" @click.stop="mobile = false">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              viewBox="0 0 12 16"
              class="modal-close-button tw-absolute tw-text-white tw-fill-current tw-cursor-pointer tw-z-10"
            >
              <path
                style="color:#fff"
                d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"
              ></path>
            </svg>
          </a>
        </div>
        <div class="tw-h-64 tw-flex tw-justify-between tw-flex-col">
          <div class="tw-text-center tw-text-white">
            <a class="tw-mr-4 tw-font-bold font-lg">SIGN IN</a>
          </div>
          <div class="tw-text-center tw-text-white">
            <a class="tw-mr-4 tw-font-bold font-lg">HOME</a>
          </div>
          <div class="tw-text-center tw-text-white">
            <a class="tw-mr-4 tw-font-bold font-lg">BROWSE</a>
          </div>
          <div class="tw-text-center tw-text-white">
            <a class="tw-mr-4 tw-font-bold font-lg">SERIES</a>
          </div>
          <div class="tw-text-center tw-text-white">
            <a class="tw-mr-4 tw-font-bold font-lg">PODCAST</a>
          </div>
        </div>
        <div class="tw-text-center tw-flex tw-justify-center tw-items-end tw-h-16">
          <a class="menu-border tw-py-2 tw-px-4 tw-h-fit-content tw-text-md tw-font-bold">SIGN UP</a>
        </div>
      </div>
    </div>

    <div class="search tw-fixed tw-w-full tw-bg-blue" :class="{ show: search }">
      <div class="tw-flex tw-flex-col tw-justify-start tw-h-full tw-relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="225"
          height="541"
          viewBox="0 0 225 541"
          class="tw-absolute tw-pin-b"
          style="left: 50%; margin-left: -105px;"
        >
          <g fill="none" fill-rule="evenodd">
            <g opacity=".1" transform="translate(8 8)">
              <circle cx="104.5" cy="104.5" r="104.5" stroke="#FFF" stroke-width="15"></circle>
              <path
                fill="#FFF"
                d="M62.305 172.96C38.18 158.944 21.96 132.823 21.96 102.914c0-44.71 36.244-80.954 80.954-80.954 29.91 0 56.03 16.22 70.046 40.345-11.937-6.936-25.809-10.907-40.609-10.907-44.709 0-80.953 36.244-80.953 80.953 0 14.8 3.971 28.672 10.907 40.61z"
                opacity=".4"
              ></path>
              <path stroke="#FFF" stroke-width="15" d="M105 209v336.5"></path>
            </g>
            <g fill-rule="nonzero" opacity=".03">
              <path
                fill="#FFF"
                d="M92.015 156.977v-25.06h9.147v10.493l45.397-21.924a22.682 22.682 0 0 0 3.209-1.759c-.334-.241-.68-.465-1.037-.67l-47.577-24.162v15.176h-9.146V79l61.09 31.023c2.249 1.234 7.417 4.638 6.86 9.481-.518 4.637-6.234 7.82-9.657 9.32L92 157l.015-.023z"
              ></path>
              <path
                fill="#FFF"
                d="M115.007 128h-33c-1.66 0-3.007-1.12-3.007-2.5s1.346-2.5 3.007-2.5h32.986c1.66 0 3.007 1.12 3.007 2.5s-1.346 2.5-3.007 2.5h.014zM127.874 118H95.126c-1.727 0-3.126-1.12-3.126-2.5s1.4-2.5 3.126-2.5h32.748c1.727 0 3.126 1.12 3.126 2.5s-1.4 2.5-3.126 2.5z"
              ></path>
              <path
                fill="#00CECF"
                d="M73.013 129h-6.026A2.994 2.994 0 0 1 64 126c0-1.657 1.337-3 2.987-3h6.026A2.994 2.994 0 0 1 76 126c0 1.657-1.337 3-2.987 3zM85.013 119h-6.026A2.994 2.994 0 0 1 76 116c0-1.657 1.337-3 2.987-3h6.026A2.994 2.994 0 0 1 88 116c0 1.657-1.337 3-2.987 3z"
              ></path>
              <path
                fill="#FFF"
                d="M91.015 156.977v-25.06h9.012v10.493l44.73-21.924a22.25 22.25 0 0 0 3.161-1.759c-.328-.241-.67-.465-1.021-.67l-46.878-24.162v15.176h-9.011V79l60.192 31.023c2.215 1.234 7.307 4.638 6.759 9.481-.51 4.637-6.143 7.82-9.515 9.32L91 157l.015-.023z"
              ></path>
              <path
                fill="#FFF"
                d="M115.93 129H82.085c-1.703 0-3.084-1.343-3.084-3s1.381-3 3.084-3h33.832c1.703 0 3.084 1.343 3.084 3s-1.381 3-3.084 3h.015zM127.794 119H94.206c-1.77 0-3.206-1.343-3.206-3s1.435-3 3.206-3h33.588c1.77 0 3.206 1.343 3.206 3s-1.435 3-3.206 3z"
              ></path>
            </g>
          </g>
        </svg>
        <!-- <div id="nav-icon" :class="{open: mobile}">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
        </div>-->
        <div class="tw-flex section tw-py-5 md:tw-py-8">
          <div class="tw-w-full tw-text-white tw-flex tw-flex-row tw-justify-center">
            <img src="../assets/img/magnifying-glass.png" alt="search" class="change">
            <input
              class="transparent tw-w-full md:tw-w-auto tw-h-full tw-px-3 font-lg"
              type="text"
              placeholder="What will you learn today?"
              ref="sInput"
            >
          </div>
          <div class="tw-text-white tw-text-right">
            <a class="tw-mr-4 tw-font-bold font-lg tw-cursor-pointer" @click.stop="search = false">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                viewBox="0 0 12 16"
                class="modal-close-button tw-absolute tw-text-white tw-fill-current tw-cursor-pointer tw-z-10"
              >
                <path
                  style="color:#fff"
                  d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      mobile: false,
      search: false
    };
  },
  methods: {
    showSearch() {
      this.search = true;
      this.$refs.sInput.focus();
    }
  }
};
</script>

<style scoped>
.search {
  background: linear-gradient(118deg, #328bf2, #1644ad);
}

img.change {
  height: 22px;
  width: 22px;
}

@media (min-width: 768px) {
  img.change {
    height: 36px;
    width: 34px;
  }
}

.search svg.tw-pin-b {
  opacity: 0.05;
}

.search a,
.mobile a {
  color: white;
}
</style>



