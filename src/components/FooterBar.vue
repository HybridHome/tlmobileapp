<template>
  <div id="footerbar">
    <mt-tabbar v-model="selected" v-show="isShow" fixed class="border-1px-top">
      <mt-tab-item id="main">
        <img :src="img1" slot="icon">首页
      </mt-tab-item>
      <mt-tab-item id="tool">
        <img v-bind:src="img3" slot="icon">应用中心
      </mt-tab-item>
      <mt-tab-item id="mine">
        <img v-bind:src="img5" slot="icon">我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
    export default {
      data(){
        return {
            selected: this.$store.state.selectedTab,
            img1: "static/tabbar/home_selected.png",
            img3: "static/tabbar/tool.png",
            img5: "static/tabbar/user.png"
        }
     },
     computed: {
      isShow: function () {
        return this.$store.state.footerVisible;
      }
    },
    watch: {
      'selected': {
        handler(){
          if (this.selected == "main") {
            this.$router.push('/main');
            this.img1 = "static/tabbar/home_selected.png"
          } else {
            this.img1 = "static/tabbar/home.png"
          }
          if (this.selected == "tool") {
            this.$router.push('/tool');
            this.img3 = 'static/tabbar/tool_selected.png'
          } else {
            this.img3 = 'static/tabbar/tool.png'
          }
          if (this.selected == "mine") {
            this.$router.push('/mine')
            this.img5 = "static/tabbar/user_selected.png";
          } else {
            this.img5 = "static/tabbar/user.png";
          }
        }
      }
     }
    }
</script>

<style scoped>
</style>