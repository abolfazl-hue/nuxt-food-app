<template>
  <div>
      <h3>{{currentItem}}</h3>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    data() {
        return {
            id: this.$route.params.id
        }
    },

    computed: {
        ...mapState([
            'fooddata',
        ]),

        currentItem(){
            for (let i = 0; i < this.fooddata.length; i++) {
                for (let j = 0; j < this.fooddata[i].menu.length; j++) {
                    if (this.fooddata[i].menu[j].id === this.id) return this.fooddata[i].menu[j]
                }
            }
        }
    },
}
</script>

<style>

</style>