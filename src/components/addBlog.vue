<template>
<div id="add-blog">
  <h2>Add a new blog post</h2>
  <form>
    <label for="">Blog Title:</label>
    <input type="text" v-model.lazy="blog.title" required>
    <label for="">Blog Content:</label>
    <textarea rows="8" v-model.lazy="blog.content" cols="80"></textarea>
    <div id="checkboxes">
      <label>Wizards</label>
      <input type="checkbox" value="wizards" v-model="blog.categories" />
      <label>Warriors</label>
      <input type="checkbox" value="warriors" v-model="blog.categories" />
      <label>Rogues</label>
      <input type="checkbox" value="rogues" v-model="blog.categories" />
    </div>
  </form>
  <div id="preview">
    <h3>Preview Blog</h3>
    <p>Blog Title: {{blog.title}}</p>
    <p>Blog Content:</p>
    <p>{{blog.content}}</p>
    <p>Blog Categories:</p>
    <ul>
      <li v-for="category in blog.categories">{{category}}</li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  //Local components
  components: {},
  data() {
    return {
      blog: {
        title: '',
        content: '',
        categories: []
      }
    }
  },
  methods: {

  }
}
</script>

<style>
#add-blog * {
  box-sizing: border-box;
}

#add-blog {
  margin: 20px auto;
  max-width: 500px;
}

label {
  display: block;
  margin: 20px 0 10px;
}

input[type="text"],
textarea {
  display: block;
  width: 100%;
  padding: 8px;
}

#preview {
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}

h3 {
  margin-top: 10px;
}

#checkboxes input {
  display: inline-block;
  margin-right: 10px;
}

#checkboxes label {
  display: inline-block;
}
</style>
