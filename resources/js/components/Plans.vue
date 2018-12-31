<template>
  <div>
    <div v-if="personal" class="tw-flex tw-mx-auto tw-flex-col md:tw-flex-row">
      <div
        v-for="(plan,index) in plans"
        :key="index"
        class="plan-option tw-flex tw-flex-col tw-bg-white tw-rounded-lg tw-px-8 tw-py-5 tw-text-center tw-h-full tw-max-w-xs tw-mx-auto tw-mb-4 md:tw-mx-3 tw-flex tw-w-full"
        v-if="plan.group == 'Personal'"
      >
        <div class="tw-flex tw-w-full tw-justify-between">
          <h5 class="tw-uppercase tw-pt-2">
            <a :href="plan.link" v-text="plan.name" class="tw-text-black"></a>
          </h5>
          <h5 class="tw-text-blue">
            $
            <span v-text="plan.price" class="font-lg tw-text-blue"></span>
          </h5>
        </div>

        <div>
          <a :href="plan.link">
            <img :src="plan.image" alt>
          </a>
        </div>

        <div class="tw-pb-6 md:tw-h-32">
          <h4 v-text="plan.text" class="tw-font-light"></h4>
        </div>

        <div>
          <a
            :href="plan.link"
            class="tw-block menu-border-dark tw-py-3 tw-text-black"
          >START LEARNING</a>
        </div>
      </div>
    </div>
    <div v-else class="tw-flex tw-max-w-md tw-mx-auto tw-flex-col md:tw-flex-row">
      <div
        v-for="plan in plans"
        :key="plan.id"
        v-if="plan.group == 'Team'"
        class="plan-option tw-flex-col tw-bg-white tw-rounded-lg tw-px-8 tw-py-5 tw-text-center tw-h-full tw-max-w-xs tw-mx-auto tw-mb-4 md:tw-mx-3 tw-flex tw-w-full"
      >
        <div class="tw-flex tw-w-full tw-justify-between">
          <h5 class="tw-uppercase tw-pt-2">
            <a :href="plan.link" v-text="plan.name" class="tw-text-black"></a>
          </h5>
          <h5 class="tw-text-blue">
            $
            <span v-text="plan.price" class="font-lg tw-text-blue"></span>
          </h5>
        </div>

        <div>
          <a :href="plan.link">
            <img :src="plan.image" alt>
          </a>
        </div>

        <div class="tw-pb-6 md:tw-h-32">
          <h4 v-text="plan.text" class="tw-font-light"></h4>
        </div>

        <div>
          <a
            :href="plan.link"
            class="tw-block menu-border-dark tw-py-3 tw-text-black"
          >START LEARNING</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    personal: Boolean,
    plans: Array
  }
};
</script>

<style scoped>
.plan-option {
  box-shadow: 0 6px 15px 0 rgba(36, 37, 38, 0.08);
  border: 1px solid #f5f5f5;
}
</style>

