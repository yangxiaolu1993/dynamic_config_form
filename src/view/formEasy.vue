<template>
  <div class="form-page">


    <ConfigForm :form-items='formItems'></ConfigForm>


  </div>
</template>

<script>
import ConfigForm from '@p/configForm/index.vue'

export default {
  name: "Form",
  components:{
      ConfigForm
  },
  data() {
    return {
      inputVal:'',

      formItems:[{
          type:'custom',
          field:'choosemage',
          label:'选择商机',
          value:'',
          placeholder:'请选择',
      },{
          type:'text',
          field:'magename',
          label:'客户名称',
          value:'',
          placeholder:'请输入',
      },{
          type:'text',
          field:'name',
          label:'联系人名称',
          value:'',
          placeholder:'请选择',
      },{
          type:'number',
          field:'phone',
          label:'联系人手机',
          value:'',
          placeholder:'请选择',
      },{
          type:'textarea',
          field:'content',
          label:'拜访内容',
          value:'',
          placeholder:'请输入',
      }]
    };
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
@import '@s/form.scss';
</style>
