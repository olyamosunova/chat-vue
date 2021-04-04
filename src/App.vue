<template>
  <div id="app">
    <Main />
  </div>
</template>

<script>
import Main from "./components/main/Main";
export default {
  name: 'App',
  components: {
    Main
  }
}
</script>

<style lang="scss">
  body {
    display: block;
    min-width: 320px;
    min-height: 100vh;
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: "Ubuntu", Arial, sans-serif;
    font-size: 16px;
    line-height: 20px;
    font-weight: 400;
    overflow-x: hidden;
    color: #ffffff;
  }

  #app {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    background-color: #1c2930;
  }

  .container {
    width: 100%;
    max-width: 1170px;
    margin: 0 auto;
    padding: 0 16px;
  }
</style>
