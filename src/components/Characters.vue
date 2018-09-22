<template>
<div id="characters">
  <h1>List of characters</h1>
  <ul>
    <li v-for="character in characters" @click="character.show = !character.show">
      <h2>{{character.name}}</h2>
      <h3 v-show="character.show">{{character.speciality}}</h3>
    </li>
  </ul>
  <button type="button" name="button" @click="deleteCharacter">Delete character</button>
</div>
</template>

<script>
export default {
  props: {
    characters: {
      type: Array,
      required: true
    }
  },
  data() {
    return {

    }
  },
  methods: {
    deleteCharacter: function() {
      this.characters.pop();
    }
  },
  beforeCreate() {
    alert('beforeCreate');
  },
  created() {
    alert('created');
  },
  beforeMount() {
    alert('beforeMount');
  },
  mounted() {
    alert('mounted');
  },
  beforeUpdate() {
    alert('beforeUpdate');
  },
  updated() {
    alert('updated');
  }
}
</script>

<style scoped lang="scss">
#characters {
    width: 100%;
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
    box-sizing: border-box;
}
ul {
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
}
li {
    flex-grow: 1;
    flex-basis: 300px;
    text-align: center;
    padding: 30px;
    border: 1px solid #222;
    margin: 10px;
}
</style>
