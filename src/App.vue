<template>
  <div>
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  components: {
    Header
  }
};
</script>

<style lang="scss">
body {
  font-family: "Montserrat", sans-serif;
  box-sizing: border-box;
  margin: 0;
}

h1,
h2,
h3 {
  margin: 0;
}

ul {
  padding-left: 20px;
  margin: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

.main-container {
  padding: 0 2em;
  margin: auto;
  max-width: 600px;
}

.page-heading {
  margin-bottom: 34px;
}

.history {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
</style>
