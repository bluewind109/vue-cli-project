<template>
  <footer>
    <p>{{copyrights}} {{title}}</p>
  </footer>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    }
  },
  data () {
    return {
      copyrights: 'Copyright 2018'
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
