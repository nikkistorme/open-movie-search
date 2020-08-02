<template>
  <div>
    <h3 v-if="!movie.Title" class="movie-card">{{ movie }}</h3>
    <div v-if="movie.Title" class="movie-card">
      <h3>{{ `${movie.Title} (${movie.Year})` }}</h3>
      <div class="movie">
        <div class="movie-poster">
          <img
            :src="movie.Poster"
            :alt="`${movie.Title} (${movie.Year})`"
            v-if="movie.Poster">
        </div>
        <ul class="movie-info">
          <li v-if="movie.Director != 'N/A'">
            Directed by {{ movie.Director }}
          </li>
          <li v-if="movie.Rated != 'N/A'">Rated {{ movie.Rated }}</li>
          <li v-if="movie.Runtime != 'N/A'">{{ movie.Runtime }}</li>
          <li v-if="movie.Genre != 'N/A'">{{ movie.Genre }}</li>
          <p></p>
        </ul>
      </div>
      <p v-if="movie.Plot != 'N/A'" class="movie-plot">{{ movie.Plot }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    movie: {
      type: [Object, String],
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.movie-card {
  max-width: 600px;
  border-top: 2px solid #235789;
  padding: 20px 0;
  h3 {
    margin-bottom: 5px;
  }
  .movie {
    display: flex;
    p {
      margin: 0;
    }
    .movie-poster {
      width: 150px;
      img {
        width: 100%;
        height: 100%;
        object-fit: scale-down;
      }
    }
    .movie-info {
      flex: 1;
      margin: 5px 0 0 5px;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
    }
  }
}
</style>
