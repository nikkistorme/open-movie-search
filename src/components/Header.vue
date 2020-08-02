<template>
  <header>
    <nav>
      <ul>
        <h3><router-link to="/">Search</router-link></h3>
        <h3><router-link to="/history">History</router-link></h3>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
header {
  margin-bottom: 30px;
  ul {
    padding: 20px 0;
    display: flex;
    justify-content: space-evenly;
    background-color: #235789;
    color: #fdfffc;
  }
}
</style>
