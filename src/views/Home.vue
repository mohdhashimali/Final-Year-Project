<template>
<div>
  <Header sitename="Homes" />
  <HelloWorld />
  <HomeList />
  </div >
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import HelloWorld from "@/components/HelloWorld.vue";
import HomeList from "@/components/HomeList.vue";

export default {
  name: "Home",
  components: {
    Header,
    HelloWorld,
    HomeList,
  },
};
</script>
