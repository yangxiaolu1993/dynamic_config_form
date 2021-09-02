<template>
  <div class="form-page">

    <div class="add-record-items">
      
      <div class="add-record-item">
        <label>收货人</label>
        <input 
            type="text" 
            class="input" 
            :placeholder="nPlaceholder"
            v-model="name"
            @focus="clearTxtTel('name')"
        />
      </div>
      <div class="add-record-item">
        <label>手机号</label>
        <input 
            type="tel" 
            class="input" 
            :placeholder='pPlaceholder'
            :value="phone"
            maxlength="11"
            @input="inpPhone"
            @blur="verifyPhone"
            @focus="clearTxtTel('phone')"
        />
      </div>
      <div class="add-record-item">
        <label>所在地区</label>
        <div class="action-sheet-box">
          <div class="add-record-content">请输入</div>
        </div>
      </div>
      <div class="add-record-item">
        <label>详细地址</label>
        <input type="text" placeholder="街道、楼牌号等" maxlength="250" v-model="detail" />
      </div>

    </div>

  </div>
</template>

<script>

export default {
  name: "Form",
  components:{},
  data() {
    return {
      name:'',
      nPlaceholder:'请输入收货人姓名',

      phone:'',
      pPlaceholder:'请填写收货人手机号',

      detail:''
    };
  },
  mounted() {},
  methods: {
    //验证手机号
    verifyPhone() {
        if (!this.phoneValidate(this.phone)) {
            this.$toast.text('手机号格式不对，请重新输入')
        }
    },
    // 清空手机号、姓名
    clearTxtTel(type) {
        if (this.flag == 'edit' && this[type] == this.editAddressCache[type]) {
            this[type] = ''
        }
    },
    phoneValidate(phone) {
        const regPhone = /^1[0-9]{10}$/
        if (!regPhone.test(phone)) {
            return false
        }
        return true
    },
    // 获取收入手机号
    inpPhone(e) {
        if (this.isNumber(e.target.value)) {
            this.phone = e.target.value
        } else {
            e.target.value = ''
            this.phone = ''
        }
    }
  },
};
</script>

<style lang="scss" scoped>
@import '@s/form.scss';
</style>
