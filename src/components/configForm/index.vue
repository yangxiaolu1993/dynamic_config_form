<!-- 表单配置 -->

<template>
  <div class="config-form-page">
    <div class="add-record-items">
      <template v-for="(formitem, index) of formItems">
        <cf-input :key="index" :formItem='formitem'></cf-input>
      </template>
    </div>
  </div>
</template>

<script>
import CFInput from "./input.vue";

export default {
  name: "ConfigForm",
  components: {
    "cf-input": CFInput,
  },
  props: {
    formItems: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  data() {
    return {};
  },
  mounted() {
    console.log(this.formItems);
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "@s/form.scss";
</style>
