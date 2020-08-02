<template>
  <section class="main-container">
    <h2 @click="test" class="page-heading">Search for a Film</h2>
    <form name="searchForm" class="search" v-on:submit.prevent="onSubmit">
      <div class="search-row">
        <input
          type="text"
          v-model="search.searchTitle"
          placeholder="title*"
          class="search-title"
        />
        <input
          type="number"
          v-model="search.searchYear"
          placeholder="year"
          class="search-year"
        />
      </div>
      <select v-model="search.searchType" class="search-type">
        <option value="">choose a type (optional)</option>
        <option value="movie">movie</option>
        <option value="series">series</option>
        <option value="episode">episode</option>
      </select>
      <button
        type="submit"
        :disabled="!search.searchTitle"
        class="search-submit"
      >
        Search
      </button>
    </form>
    <div class="previous-search">
      <p v-show="recentSearchMessage">{{ recentSearchMessage }}</p>
    </div>
    <div v-if="appHistory[0]" v-show="!showError" class="history">
      <MovieCard :movie="appHistory[0]" />
    </div>
    <h3 v-show="showError">Not found. Try again with new parameters.</h3>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";
import MovieCard from "./MovieCard.vue";

export default {
  components: {
    MovieCard
  },
  data: function() {
    return {
      search: {
        searchTitle: "",
        searchYear: "",
        searchType: ""
      },
      recentSearchMessage: "",
      showError: false,
      api: process.env.VUE_APP_OPEN_MOVIE_API_KEY
    };
  },
  computed: {
    ...mapGetters(["appHistory"])
  },
  methods: {
    ...mapMutations(["addToHistory"]),
    onSubmit() {
      this.$http
        .get(
          `?apikey=${this.api}&t=${this.search.searchTitle}${
            this.search.searchType ? `&type=${this.search.searchType}` : ""
          }${this.search.searchYear ? `&y=${this.search.searchYear}` : ""}`
        )
        .then(
          response => response.json(),
          error => {
            alert(error);
          }
        )
        .then(data => {
          if (data.Error) {
            this.showError = true;
            const errorString = `Failed search for "${
              this.search.searchTitle
            }"${
              this.search.searchYear ? ` + "${this.search.searchYear}"` : ""
            }${this.search.searchType ? ` + "${this.search.searchType}"` : ""}`;
            console.log("errorString", errorString);
            this.$store.commit("addToHistory", { data: errorString });
          } else {
            this.recentSearchMessage = `Showing results for "${this.search.searchTitle}"`;
            this.showError = false;
            this.$store.commit("addToHistory", { data: data });
          }
        });
    },
    test() {
      console.log(this.appHistory);
    }
  }
};
</script>

<style lang="scss">
.search {
  display: flex;
  flex-direction: column;
  max-width: 400px;
  &-row {
    width: 100%;
    display: flex;
  }
  input,
  select,
  button {
    margin: 3px;
    border: 2px solid #235789;
    border-radius: 5px;
    height: 20px;
    text-indent: 5px;
    padding: 0;
  }
  &-title {
    flex: 2;
  }
  &-year {
    flex: 1;
  }
  &-type {
    width: 50%;
    height: 24px !important;
  }
  &-submit {
    height: 24px !important;
    width: 25%;
  }
}
.previous-search {
  height: 34px;
}
</style>
