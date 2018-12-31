<template>
  <div class="section footer">
    <div class="top-footer">
      <div class="md:tw-w-1/2 tw-mx-auto tw-text-center">
        <div>
          <h2
            class="tw-text-white tw-text-3xl pr-1-tablet tw-mb-8 tw-tracking-tight"
          >Want us to email you occasionally with Laracasts news?</h2>
        </div>
        <div>
          <form id="newsletter-form" method="POST" action="/">
            <div class="tw-flex tw-flex-col lg:tw-flex-row tw-justify-center mobile:tw-mb-10">
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email Address"
                autocomplete="off"
                required="required"
                class="lg:tw-w-1/2 tw-rounded-xl lg:tw-rounded-none lg:tw-rounded-l-lg tw-px-4 tw-py-4 lg:tw-py-3 mobile:tw-mb-4 tw-text-grey-black tw-text-center lg:tw-text-left lg:tw-text-xs mobile:tw-w-64 mobile:tw-mx-auto"
              >
              <button
                type="submit"
                class="tw-button mobile:tw-mx-auto mobile:tw-border lg:tw-bg-blue hover:tw-bg-blue-dark hover:tw-text-white lg:tw-border-none tw-py-5 lg:tw-py-4 tw-text-white tw-font-bold tw-uppercase tw-rounded-none tw-rounded-xl lg:tw-rounded-none lg:tw-rounded-r-lg tw-text-base lg:tw-text-xs lg:tw-w-32"
              >Subscribe</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="bottom-footer">
      <footer class="container">
        <div class="md:tw-flex md:mb-3 tw-text-center md:tw-text-left">
          <div class="md:tw-w-2/5 md:tw-mr-auto">
            <div class="tw-mb-3">
              <svg
                id="white-logo"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 792.51 102.4"
                class="tw-fill-current tw-text-white laracasts-logo"
              >
                <path
                  d="M103.08,445.39v65.52h35.74v13.42H87V445.39Z"
                  transform="translate(-86.99 -435.26)"
                ></path>
                <path
                  d="M191.63,445.39h14.7l34.18,78.93H223l-7.07-17.09H182.05L175,524.33H157.45Zm7.4,20.87-11.52,27.5h22.88Z"
                  transform="translate(-86.99 -435.26)"
                ></path>
                <path
                  d="M285.3,491.87h-7.85v32.45H261.37V445.39h36a23.65,23.65,0,0,1,17.26,6.9,23.17,23.17,0,0,1,7,17.31q0,9.85-6.9,15.64a30.93,30.93,0,0,1-12.36,5.84l22.15,33.23H305Zm-7.85-33.06v21.76h16.42a10.65,10.65,0,0,0,10.8-11,10.24,10.24,0,0,0-3.15-7.79,10.72,10.72,0,0,0-7.65-3Z"
                  transform="translate(-86.99 -435.26)"
                ></path>
                <path
                  d="M374.58,445.39h14.7l34.18,78.93H405.91l-7.07-17.09H365l-7.07,17.09H340.4Zm7.4,20.87-11.52,27.5h22.88Z"
                  transform="translate(-86.99 -435.26)"
                ></path>
                <path
                  d="M500.09,471.17a24.2,24.2,0,0,0-3.67-4.84q-7.07-7.24-18.09-7.24t-18.09,7.24q-7,7.18-7,18.65t7,18.68q7,7.21,18,7.21t18.09-7.24a23.49,23.49,0,0,0,3.67-4.9L515,505.46a38.79,38.79,0,0,1-6.79,8.74q-11.8,11.52-29.78,11.52t-29.92-11.55q-11.94-11.55-11.94-29.2t11.94-29.28q11.94-11.63,29.92-11.63T508,455.86a38.8,38.8,0,0,1,6.79,8.57Z"
                  transform="translate(-86.99 -435.26)"
                ></path>
                <path
                  d="M677.73,444a44.48,44.48,0,0,1,29.11,10.35l-9.46,11.41a28.39,28.39,0,0,0-9.24-5.59,30.16,30.16,0,0,0-10.24-1.75q-6.12,0-9.63,2.67a6.49,6.49,0,0,0-2.56,5.29,6.56,6.56,0,0,0,3.28,5.68q2.56,1.73,12.41,4.51,11.63,3,17.31,6.57,10,6.63,10,18.43,0,10.8-9.35,17.92-8.46,6.24-21.49,6.23a46.6,46.6,0,0,1-33-13l9-11.47a36.24,36.24,0,0,0,10.3,7.07,29.9,29.9,0,0,0,13.64,3.28q6.68,0,10.58-2.84a8.35,8.35,0,0,0,3.51-6.62,7.28,7.28,0,0,0-3.56-6.29q-2.62-1.78-12.13-4.45-12.19-3.51-17.14-6.4-10.3-6.07-10.3-17.59A20.53,20.53,0,0,1,657,450.46Q665.21,444,677.73,444Z"
                  transform="translate(-86.99 -435.26)"
                ></path>
                <path
                  d="M730.16,445.39h64.13v13.3h-24v65.63H754.09V458.7H730.16Z"
                  transform="translate(-86.99 -435.26)"
                ></path>
                <path
                  d="M848.49,444a44.47,44.47,0,0,1,29.11,10.35l-9.46,11.41a28.36,28.36,0,0,0-9.24-5.59,30.16,30.16,0,0,0-10.24-1.75q-6.12,0-9.63,2.67a6.49,6.49,0,0,0-2.56,5.29,6.56,6.56,0,0,0,3.29,5.68q2.56,1.73,12.41,4.51,11.63,3,17.31,6.57,10,6.63,10,18.43,0,10.8-9.35,17.92-8.46,6.24-21.49,6.23a46.6,46.6,0,0,1-33-13l9-11.47a36.23,36.23,0,0,0,10.3,7.07,29.91,29.91,0,0,0,13.64,3.28q6.68,0,10.58-2.84a8.35,8.35,0,0,0,3.51-6.62,7.28,7.28,0,0,0-3.56-6.29Q856.56,494,847,491.37q-12.19-3.51-17.14-6.4-10.3-6.07-10.3-17.59a20.53,20.53,0,0,1,8.18-16.92Q836,444,848.49,444Z"
                  transform="translate(-86.99 -435.26)"
                ></path>
                <path
                  id="arrow"
                  fill="white"
                  d="M549.44,537.66V504.75h12v13.78L621,489.74a29.75,29.75,0,0,0,4.21-2.31,15.41,15.41,0,0,0-1.36-.88l-62.42-31.73v19.93h-12V435.26L629.58,476c2.95,1.62,9.73,6.09,9,12.45-.68,6.09-8.18,10.27-12.67,12.24l-76.49,37Z"
                  transform="translate(-86.99 -435.26)"
                ></path>
                <path
                  d="M579.77,499H535a4.08,4.08,0,1,1,0-8.16h44.75a4.08,4.08,0,1,1,0,8.16Z"
                  transform="translate(-86.99 -435.26)"
                ></path>
                <path
                  fill="#00b1b2"
                  d="M525.91,499h-8.23a4.08,4.08,0,1,1,0-8.16h8.23a4.08,4.08,0,1,1,0,8.16Z"
                  transform="translate(-86.99 -435.26)"
                ></path>
                <path
                  fill="#00b1b2"
                  d="M544.14,488.13h-8.23a4.08,4.08,0,0,1,0-8.16h8.23a4.08,4.08,0,1,1,0,8.16Z"
                  transform="translate(-86.99 -435.26)"
                ></path>
                <path
                  d="M596.19,488.14H553.44a4.08,4.08,0,1,1,0-8.16h42.75a4.08,4.08,0,0,1,0,8.16Z"
                  transform="translate(-86.99 -435.26)"
                ></path>
              </svg>
            </div>
            <p class="tw-mb-8 tw-text-white tw-leading-loose">
              Nine out of ten doctors recommend Laracasts over competing brands.
              Come inside, see for yourself, and massively level up your development skills in the process.
            </p>
            <div
              class="tw-flex tw-w-42 md:tw-w-28 tw-items-center tw-justify-center md:tw-justify-start tw-mb-8 md:tw-mb-0"
            >
              <a href="https://www.youtube.com/laracastsofficial" class="tw-mr-3" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 19"
                  class="tw-w-8 md:tw-w-6 tw-text-white hover:tw-text-black tw-transition-all"
                >
                  <g fill-rule="nonzero" class="tw-fill-current">
                    <path
                      d="M6.4 0H5.371l-.685 2.629L4 0H2.857c.229.686.457 1.257.686 1.943.343.914.571 1.714.571 2.171v2.743h1.029V4.114L6.4 0zm2.743 5.143V3.429c0-.572-.114-.915-.343-1.258-.229-.342-.571-.457-1.029-.457-.457 0-.8.229-1.028.572-.229.228-.343.571-.343 1.143v1.828c0 .572.114.914.343 1.143.228.343.571.457 1.028.457.458 0 .8-.228 1.029-.571.229-.115.343-.572.343-1.143zm-.914.228c0 .458-.115.686-.458.686-.342 0-.457-.228-.457-.686V3.2c0-.457.115-.686.457-.686.343 0 .458.229.458.686v2.171zm4.342 1.486V1.714h-.914V5.6c-.228.343-.343.457-.571.457a.246.246 0 0 1-.229-.228V1.714h-.914v4c0 .343 0 .572.114.8 0 .229.229.343.572.343.342 0 .685-.228 1.028-.571v.571h.914zM13.029 12c-.343 0-.458.229-.458.686v.457h.915v-.457c0-.457-.115-.686-.457-.686zM9.714 12c-.114 0-.343.114-.457.229v3.085c.114.115.343.229.457.229.229 0 .343-.229.343-.686v-2.171c0-.457-.114-.686-.343-.686z"
                    ></path>
                    <path
                      d="M15.314 9.486C15.086 8.686 14.4 8 13.714 8 11.886 7.771 9.943 7.771 8 7.771c-1.943 0-3.771 0-5.714.229-.686 0-1.372.686-1.6 1.486-.229 1.143-.229 2.4-.229 3.543 0 1.142 0 2.4.229 3.542.228.8.8 1.372 1.6 1.486 1.943.229 3.771.229 5.714.229 1.943 0 3.771 0 5.714-.229.8-.114 1.486-.686 1.6-1.486.229-1.142.229-2.4.229-3.542 0-1.143 0-2.4-.229-3.543zM4.8 10.514H3.657v5.829H2.63v-5.829H1.6V9.486h3.2v1.028zm2.743 5.829h-.914v-.572c-.343.458-.686.572-1.029.572-.343 0-.457-.114-.571-.343 0-.114-.115-.343-.115-.8v-4h.915v4c0 .114.114.229.228.229.229 0 .343-.115.572-.458V11.2h.914v5.143zm3.428-1.6c0 .457 0 .8-.114 1.028-.114.343-.343.572-.686.572-.342 0-.685-.229-.914-.572v.458h-.914V9.486h.914v2.171c.343-.343.572-.571.914-.571.343 0 .572.228.686.571.114.229.114.572.114 1.029v2.057zm3.429-.8h-1.829v.914c0 .457.115.686.458.686.228 0 .342-.114.457-.343v-.571h.914V15.314c0 .229-.114.343-.229.572-.228.343-.571.571-1.142.571-.458 0-.8-.228-1.143-.571-.229-.229-.343-.686-.343-1.143v-1.714c0-.572.114-.915.228-1.143.229-.343.572-.572 1.143-.572.457 0 .8.229 1.029.572.228.228.228.685.228 1.143v.914h.229z"
                    ></path>
                  </g>
                </svg>
              </a>
              <a href="https://twitter.com/laracasts" class="tw-mr-3" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 18 18"
                  class="tw-w-8 md:tw-w-6 tw-text-white hover:tw-text-black tw-transition-all"
                >
                  <path
                    fill-rule="nonzero"
                    d="M9 0C4.037 0 0 4.037 0 9c0 4.962 4.037 9 9 9 4.962 0 9-4.038 9-9 0-4.963-4.037-9-9-9zm4.015 6.94c.004.09.006.18.006.27 0 2.737-2.083 5.892-5.894 5.892a5.86 5.86 0 0 1-3.175-.93 4.158 4.158 0 0 0 3.067-.858 2.074 2.074 0 0 1-1.936-1.439 2.088 2.088 0 0 0 .936-.034 2.072 2.072 0 0 1-1.662-2.032v-.026c.28.155.6.249.938.26a2.07 2.07 0 0 1-.64-2.766 5.882 5.882 0 0 0 4.269 2.165 2.071 2.071 0 0 1 3.53-1.89 4.135 4.135 0 0 0 1.316-.503 2.08 2.08 0 0 1-.912 1.146c.419-.05.82-.16 1.19-.326-.277.415-.628.78-1.033 1.071z"
                    class="tw-fill-current"
                  ></path>
                </svg>
              </a>
              <a href="https://github.com/laracasts" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 30 29"
                  class="tw-w-8 md:tw-w-6 tw-text-white hover:tw-text-black tw-transition-all"
                >
                  <path
                    fill-rule="nonzero"
                    d="M27.959 7.434a14.866 14.866 0 0 0-5.453-5.414C20.21.69 17.703.025 14.984.025c-2.718 0-5.226.665-7.521 1.995A14.864 14.864 0 0 0 2.01 7.434C.67 9.714 0 12.202 0 14.901c0 3.242.953 6.156 2.858 8.746 1.906 2.589 4.367 4.38 7.385 5.375.351.064.611.019.78-.136a.755.755 0 0 0 .254-.58l-.01-1.047c-.007-.658-.01-1.233-.01-1.723l-.448.077a5.765 5.765 0 0 1-1.083.068 8.308 8.308 0 0 1-1.356-.136 3.04 3.04 0 0 1-1.308-.58c-.403-.304-.689-.701-.858-1.192l-.195-.445a4.834 4.834 0 0 0-.614-.988c-.28-.362-.563-.607-.85-.736l-.136-.097a1.428 1.428 0 0 1-.253-.233 1.062 1.062 0 0 1-.176-.271c-.039-.09-.007-.165.098-.223.104-.059.292-.087.566-.087l.39.058c.26.052.582.206.965.465.384.258.7.594.947 1.007.299.53.66.933 1.082 1.21.423.278.85.417 1.278.417.43 0 .8-.032 1.112-.097a3.9 3.9 0 0 0 .878-.29c.117-.866.436-1.53.956-1.996a13.447 13.447 0 0 1-2-.348 7.995 7.995 0 0 1-1.833-.756 5.244 5.244 0 0 1-1.571-1.298c-.416-.516-.758-1.195-1.024-2.034-.267-.84-.4-1.808-.4-2.905 0-1.563.514-2.893 1.541-3.99-.481-1.176-.436-2.493.137-3.952.377-.116.936-.03 1.678.261.741.291 1.284.54 1.629.746.345.207.621.381.83.523a13.948 13.948 0 0 1 3.745-.503c1.288 0 2.537.168 3.747.503l.741-.464c.507-.31 1.106-.595 1.795-.853.69-.258 1.216-.33 1.58-.213.586 1.46.638 2.777.156 3.951 1.028 1.098 1.542 2.428 1.542 3.99 0 1.099-.134 2.07-.4 2.916-.267.846-.611 1.524-1.034 2.034-.423.51-.95.94-1.58 1.288a8.01 8.01 0 0 1-1.834.756c-.592.155-1.259.271-2 .349.676.58 1.014 1.498 1.014 2.75v4.087c0 .232.081.426.244.58.163.155.42.2.77.136 3.019-.994 5.48-2.786 7.386-5.375 1.905-2.59 2.858-5.504 2.858-8.746 0-2.698-.671-5.187-2.01-7.466z"
                    class="tw-fill-current"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
          <div class="md:tw-w-1/6 tw-mb-6 md:tw-mb-0">
            <h5
              class="tw-text-white tw-font-bold md:tw-font-semibold tw-mb-2 md:tw-mb-6 tw-uppercase"
            >Learn</h5>
            <ul class="tw-leading-loose">
              <li>
                <a
                  href="/search?refinement=type&amp;name=series"
                  class="tw-text-transparent-50 hover:tw-text-white"
                >Browse</a>
              </li>
              <li>
                <a href="/index" class="tw-text-transparent-50 hover:tw-text-white">Lesson Index</a>
              </li>
              <li>
                <a href="/join" class="tw-text-transparent-50 hover:tw-text-white">Sign Up</a>
              </li>
              <li>
                <a href="/login" class="tw-text-transparent-50 hover:tw-text-white">Sign In</a>
              </li>
            </ul>
          </div>
          <div class="md:tw-w-1/6 tw-mb-6 md:tw-mb-0">
            <h5
              class="tw-text-white tw-font-bold md:tw-font-semibold tw-mb-2 md:tw-mb-6 tw-uppercase"
            >Discuss</h5>
            <ul class="tw-leading-loose">
              <li>
                <a href="/discuss" class="tw-text-transparent-50 hover:tw-text-white">Forum</a>
              </li>
              <li>
                <a href="/podcast" class="tw-text-transparent-50 hover:tw-text-white">Podcast</a>
              </li>
              <li>
                <div>
                  <a class="tw-text-transparent-50 hover:tw-text-white">Support</a>
                  <!---->
                </div>
              </li>
            </ul>
          </div>
          <div class="md:tw-w-1/6 tw-mb-8 md:tw-mb-0">
            <h5
              class="tw-text-white tw-font-bold md:tw-font-semibold tw-mb-2 md:tw-mb-6 tw-uppercase"
            >Extras</h5>
            <ul class="tw-leading-loose">
              <li>
                <a class="tw-text-transparent-50 hover:tw-text-white">Testimonials</a>
              </li>
              <li>
                <a href="/faq" class="tw-text-transparent-50 hover:tw-text-white">FAQ</a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/laracastsofficial"
                  target="_blank"
                  class="tw-text-transparent-50 hover:tw-text-white"
                >Youtube</a>
              </li>
              <li>
                <a
                  href="https://larajobs.com/?partner=36#"
                  target="_blank"
                  class="tw-text-transparent-50 hover:tw-text-white"
                >Get a Job</a>
              </li>
              <li>
                <a href="/feed" class="tw-text-transparent-50 hover:tw-text-white">RSS</a>
              </li>
            </ul>
            <ul class="zeroed tw-leading-loose">
              <li>
                <a href="/privacy" class="tw-text-transparent-50 hover:tw-text-white">Privacy</a>
              </li>
              <li>
                <a href="/terms" class="tw-text-transparent-50 hover:tw-text-white">Terms</a>
              </li>
            </ul>
          </div>
        </div>
        <div
          class="tw-border-t tw-border-solid tw-border-transparent-10 tw-py-4 md:tw-mt-8 mobile:tw-text-lg"
        >
          <div class="tw-text-transparent-50 tw-text-base md:tw-text-xs tw-text-center">
            <p class="tw-mb-5 md:tw-mb-2 tw-tracking-normal">© Laracasts 2018. All rights reserved.
              <br class="md:tw-hidden">Yes, all of them. That means you, Todd.
            </p>
            <p></p>
            <p class="tw-tracking-normal">
              <span class="mobile:tw-block">
                Designed with
                <img
                  src="https://laracasts.com/images/icons/heart.svg"
                  alt="heart"
                  class="tw-px-1 tw-relative heart-pulse"
                  style="top: 2px;"
                > by
                <a
                  href="https://twitter.com/tudssss"
                  class="tw-font-bold inherits-color link hover:tw-text-white"
                >Tuds</a>.
              </span>
              <br class="md:tw-hidden">Proudly hosted with
              <a
                href="https://forge.laravel.com"
                class="tw-font-bold inherits-color link hover:tw-text-white"
              >Laravel Forge</a>
              and
              <a
                href="https://www.digitalocean.com/?refcode=d2070a2d5f35"
                class="tw-font-bold link inherits-color link hover:tw-text-white"
              >DigitalOcean</a>.
            </p>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  background-image: url(https://laracasts.com/images/seriously-huge-logo-mobile.svg),
    radial-gradient(circle at 1% 1%, #328bf2, #1644ad);
  background-repeat: no-repeat;
  background-position: 100% 100%;
  background-size: auto;
}
.top-footer {
  background: url(https://laracasts.com/images/mic-drop.svg) no-repeat 0 0;
  background-size: 80px;
  padding-top: 4em;
  padding-bottom: 4em;
}
@media (min-width: 768px) {
  .top-footer {
    background: url(https://laracasts.com/images/mic-drop.svg) no-repeat 19% 0;
    background-size: 176px;
    padding-top: 80px;
    padding-bottom: 80px;
  }
}

.laracasts-logo {
  color: #fff;
  width: 132px;
}
@media (min-width: 992px) {
  .laracasts-logo {
    color: #22292f;
    width: 157px;
    height: 20px;
  }
}
.tw-text-transparent-50,
.tw-text-transparent-50 * {
  color: rgba(255, 255, 255, 0.5);
}

.tw-text-white * {
  color: #fff;
}

li,
h5 {
  text-align: center;
}

@media (min-width: 768px) {
  li,
  h5 {
    text-align: unset;
  }
}
</style>


