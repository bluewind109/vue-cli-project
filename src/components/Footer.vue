<template>
<footer>
  <p>{{copyrights}} {{title}}</p>
</footer>
</template>

<script>
import {
  bus
} from '../main';

export default {
  props: {
    title: {
      type: String
    }
  },
  data() {
    return {
      copyrights: 'Copyright 2018'
    }
  },
  created() {
    bus.$on('titleChanged', (data) => {
      this.title = data;
    });
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
