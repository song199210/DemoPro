<template>
  <div id="app">
    <h1>开始测试</h1>
    <router-link to="/compt3">compt3路由组件</router-link>
    <Compt1></Compt1>
    <Compt2></Compt2>
    <router-view></router-view>
  </div>
</template>

<script>
import Compt1 from './components/Compt1.vue';
import Compt2 from './components/Compt2.vue';
import Compt3 from './components/Compt3.vue';

export default {
  components: {
    Compt1, Compt2, Compt3
  }
}
</script>