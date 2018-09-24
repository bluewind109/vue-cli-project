<!-- ROOT component -->

<template>
<div>
  <add-blog></add-blog>
</div>
</template>

<script>
import addBlog from './components/addBlog.vue'

export default {
  //Local components
  components: {
    'add-blog': addBlog
  },
  data() {
    return {}
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">

</style>
