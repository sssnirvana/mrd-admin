<template>
  <div id="search">
    <navigation></navigation>
    <crumbs></crumbs>
    <showroom></showroom>
  </div>
</template>

<script>
import navigation from "@/components/navigation";
import crumbs from "./crumbs";
import showroom from "./showroom";
export default {
  name: "search",
  components: {
    crumbs,
    showroom,
    navigation,
  },
  data() {
    return {};
  },
};
</script>

<style></style>
