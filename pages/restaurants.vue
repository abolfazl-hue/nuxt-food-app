<template>
  <main class="container restaurant">
    <div class="restaurantheading">
      <h1>Restaurants</h1>

      <AppSelect @selectedFood="filterData"/>
    </div>
    
    <AppRestaurantInfo :fooddata="filteredFoodData" />
  </main>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      chosenFood: ''
    }
  },

  computed: {
    ...mapState([
      'fooddata',
    ]),

    filteredFoodData(){
      return this.chosenFood ? this.fooddata.filter(el => el.name.toLowerCase().includes(this.chosenFood)) : this.fooddata
    }
  },

  methods: {
    filterData(taken) {
      this.chosenFood = taken
    }
  },
};

</script>

<style>

</style>
