<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
html {
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: inherit;
}
html, body {
  height: 100%;
}
body {
  margin: 0;
  background: transparent url("./assets/space.jpeg") no-repeat left bottom;
  background-size: cover;
  background-attachment: fixed;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
input[type=text] {
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
}

$spacingSize: 10px;
$spacingTypes: (margin, padding);
$spacingDirections: (top, right, left, bottom);
@each $type in $spacingTypes {
  .u-#{$type} {
    #{$type}: $spacingSize;
  }

  @each $direction in $spacingDirections {
    .u-#{$type}-#{$direction} {
      #{$type}: $spacingSize;
    }
  }
}
</style>
