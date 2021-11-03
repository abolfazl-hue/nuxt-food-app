<template>
  <main class="container">
    <AppHeader/>
    <AppRestaurantInfo :fooddata="fooddata"/>
  </main>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState([
      'fooddata',
    ])
  },
};
</script>

