<template>
  <section class="main-container">
    <h2 @click="test" class="page-heading">History of Searches</h2>
    <div v-if="appHistory" class="history">
      <MovieCard v-for="(movie, i) in appHistory" :key="i" :movie="movie" />
    </div>
    <h3 v-show="!appHistory">Search for a movie for it to appear here!</h3>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import MovieCard from "./MovieCard.vue";

export default {
  components: {
    MovieCard
  },
  computed: {
    ...mapGetters(["appHistory"])
  },
  methods: {
    test() {
      console.log(this.appHistory);
    }
  }
};
</script>

<style lang="scss" scoped></style>
