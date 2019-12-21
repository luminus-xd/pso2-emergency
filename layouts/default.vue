<template>
  <div>
    <ResponsiveHeader />
    <nuxt />
    <footer class="text-center p-4 bg-gray-900">
      <p class="text-gray-300">©2019 PSO2 EQ Notice</p>
    </footer>
  </div>
</template>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>

<script>
import ResponsiveHeader from '../components/ResponsiveHeader'

export default {
  components: {
    ResponsiveHeader
  }
}
</script>
