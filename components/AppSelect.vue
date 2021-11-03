<template>
  <div>
      <label for="food">Wich is your favorite food ?</label>

      <select name="food" id="food" v-model="selectedFood" @change="chosenfood">
          <option value disabled>-- please select a food !</option>
          <option v-for="option in selectedOptions" :key="option" :value="option">{{option}}</option>
      </select>

  </div>
</template>

<script>
export default {
    data() {
        return {
            selectedOptions: ['tacos', 'pizza', 'dim sum'],
            selectedFood : ''
        }
    },

    methods: {
        chosenfood() {
            this.$emit('selectedFood', this.selectedFood)
        }
    },
}
</script>

<style>

</style>