<template>
  <div class="bar">
    <h1 @click="onTest">Compt3组件页面</h1>
    <h4>{{msg}}</h4>
  </div>
</template>

<script>
  const initFetchData = ({ store }) => {
    store.dispatch('testHttp');
  };
  export default {
    asyncData: initFetchData,
    data(){
      return {

      }
    },
    methods: {
      onTest(){
        alert("abc");
      }
    },
    destroyed() {
      
    },
    created() {
      let store = this.$store;
      initFetchData({ store });
    },
    computed: {
      msg(){
        return this.$store.state.msg;
      }
    }
  }
</script>

<style>
.bar {
  background: #666;
}
</style>