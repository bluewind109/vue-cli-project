<!-- ROOT component -->

<template>
<div>
  <show-blogs></show-blogs>
</div>
</template>

<script>
import addBlog from './components/addBlog.vue'
import showBlogs from './components/showBlogs.vue'

export default {
  //Local components
  components: {
    'add-blog': addBlog,
    'show-blogs': showBlogs
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
