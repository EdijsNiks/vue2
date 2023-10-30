<template>
  <div class="home">
    <h1 class="title">{{ title }}</h1>
    <SongListComponent />
  </div>
</template>

<script>
import SongListComponent from "@/components/SongListComponent.vue";

export default {
  name: "HomeComponent",
  components: {
    SongListComponent,
  },
  data() {
    return {
      title: "HOME",
    };
  },
};
</script>

<style scoped>
.home {
  text-align: center;
  padding: 20px;
}

.title {
  color: white;
}
</style>