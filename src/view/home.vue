<template>
  <div class="home">
    <div class="home-title"><svg-icon icon='icon-naoling'></svg-icon>表单动态配置</div>
    <div class="group">
        <div class="group-list" v-for="(item,i) in list" :key="i" @click="jump(item)">
            <div class="img"><img :src="require(`../assets/img/header/${item.icon}`)" alt=""></div>
            <div class="content">
                <div class="title">{{item.title}}</div>
                <div class="desc">{{item.desc}}</div>
            </div>  
        </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Home",
  data() {
    return {
      list:[
        {id:'6',title:'常用输入方式',desc:' ',route:'form',icon:'6.jpeg'},
        {id:'0',title:'输入动态配置',desc:' ',route:'formEasy',icon:'2.jpeg'}
      ]
    };
  },
  mounted() {},
  methods: {
    jump(route){
      this.$router.push({
        name:route.route
      })
    }
  },
};
</script>

<style lang="scss" scoped>
@import '@s/home.scss';
</style>
