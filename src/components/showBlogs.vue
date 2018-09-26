<template>
<div id="show-blogs">
  <h1>All Blog Articles</h1>
  <input type="text" v-model="search" placeholder="search blogs">
  <div v-for="blog in filteredBlogs" class="single-blog">
    <h2>{{blog.title | to-uppercase}}</h2>
    <p>{{blog.body | snippet}}</p>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      blogs: [],
      search: ''
    }
  },
  methods: {

  },
  created() {
    this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(data) {
      this.blogs = data.body.slice(0, 10);
    });
  },
  computed: {
    filteredBlogs: function() {
      return this.blogs.filter((blog) => {
        return blog.title.match(this.search);
      });
    }
  }
}
</script>

<style scoped lang="scss">
#show-blogs {
    max-width: 800px;
    margin: 0 auto;
}

.single-blog {
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
}

h2 {
    color: darkblue;
}

input {
    width: 100%;
}
</style>
