<template>
  <footer>
    <p>{{copyrights}}</p>
  </footer>
</template>

<script>
export default {
  data () {
    return {
      copyrights: 'Copyright 2018 FlyK'
    }
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
footer {
  background: #222;
  padding: 6px;
}

p {
  color: lightblue;
  text-align: center;
}
</style>
