<template>
  <main class="container">
        <section 
            class="image"
            :style="`background : url(/${currentItem.img}) no-repeat center center`">
        </section>
        
        <section class="details">
            <h1>{{currentItem.item}}</h1>
            <h3>price : ${{currentItem.price}}</h3>
            <div class="quantity">
                <input type="number" min="1" v-model="count">
                <button class="primary" @click="addToCart">Add to Cart - ${{updatedPrice}}</button>
            </div>

            <fieldset v-if="currentItem.options">
                <legend>
                    <h3>Options</h3>
                </legend>
                <div v-for="option of currentItem.options" :key="option">
                    <input 
                        type="radio"
                        name="option"
                        v-model="itemOptions"
                        :id="option"
                        :value="option">
                    <label for="option">{{option}}</label>
                </div>
            </fieldset>

            <fieldset v-if="currentItem.addOns">
                <legend>
                    <h3>Add Ons</h3>
                </legend>
                <div v-for="addon in currentItem.addOns" :key="addon">
                    <input
                        type="checkbox"
                        name="addon"
                        :id="addon"
                        :value="addon"
                        v-model="itemAddons"
                    />
                    <label :for="addon">{{ addon }}</label>
                </div>
            </fieldset>
            <Toast v-if="orderSubmitted" />
        </section>

        <section class="options">
            <h3>Description</h3>
            <p>{{ currentItem.description }}</p>
        </section>
  </main>
</template>

<script>
import { mapState } from 'vuex';

export default {
    data() {
        return {
            id: this.$route.params.id,
            count : 1,
            itemOptions: "",
            itemAddons: [],
            itemSizeAndCost: [],
            orderSubmitted : false
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
        },

        updatedPrice(){
            let price =  this.currentItem.price * this.count
            return price.toFixed(2)
        }
    },

    methods: {
        addToCart() {
            this.orderSubmitted = true
        }
    },
}
</script>

<style lang="scss" scoped>
.container {
  width: 1000px;
  margin: 100px auto;
  display: grid;
  grid-template-columns: 400px 1fr;
  grid-template-rows: 400px 1fr;
  grid-column-gap: 60px;
  grid-row-gap: 60px;
  line-height: 2;
  padding-bottom: 70px;
}
.image {
  grid-area: 1 / 1 / 2 / 2;
  background-size: cover;
}
.details {
  grid-area: 1 / 2 / 2 / 3;
  position: relative;
}
.options {
  grid-area: 2 / 1 / 3 / 2;
}
</style>