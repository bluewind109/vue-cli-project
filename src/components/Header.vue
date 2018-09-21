<template>
  <header>
    <h1 @click="changeTitle">{{title}}</h1>
  </header>
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
      title: 'Characters'
    }
  },
  methods: {
    changeTitle: function() {
      this.title = 'Vue Wizards'
    }
  }
}
</script>

<style scoped lang="scss">
header {
  background: lightblue;
  padding: 10px;
}

h1 {
  color: #222;
  text-align: center;
}
</style>
