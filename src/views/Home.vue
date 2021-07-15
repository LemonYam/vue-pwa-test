<template>
  <div>
    <h1>Welcome my pwa page</h1>
    <router-link to="/login">Link to login page</router-link>
    <img src="https://images.cnblogs.com/cnblogs_com/lemonyam/1433359/o_bg_1.jpg">
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {}
</script>
