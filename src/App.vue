<!-- ROOT component -->

<template>
<div>
  <form-helper>
    <div slot="form-header">
      <h3>Form Title</h3>
      <p>Form infomation</p>
    </div>
    <div slot="form-fields">
      <input type="text" placeholder="name" required>
      <input type="password" placeholder="password" required>
    </div>
      <div slot="form-controls">
        <button type="button" @click="handleSubmit">Submit</button>
      </div>
  </form-helper>
</div>
</template>

<script>
import formHelper from './components/formHelper.vue';

export default {
  //Local components
  components: {
    'form-helper': formHelper
  },
  data() {
    return {
      title: 'I am the slot title'
    }
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">

</style>
