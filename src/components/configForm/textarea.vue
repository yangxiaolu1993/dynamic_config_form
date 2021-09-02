<template>
  <div class="config-form-input">

      <div class="add-record-item">
        <label>{{formItem.label}}</label>
        <input :placeholder="formItem.placeholder" maxlength="1000" v-model="formItem.value" />
      </div>
  </div>
</template>

<script>
export default {
  name: "CFTextarea",
  props: {
    formItem: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {};
  },
  mounted() {
    //   console.log(this.formItems)
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "@s/form.scss";
</style>
