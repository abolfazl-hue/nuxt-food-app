<template>
  <section class="restaurantinfo">
      <div v-for="store of fooddata" :key="store.id">
          <h2>{{ store.name }}</h2>
          <p>delivery time{{store.deliveryTime}}</p>
          <p>rating {{store.rating}}</p>
          <p v-if="store.freeDelivery" class="label">
              <span>Free delivery</span>
          </p>
          <div class="row">
              <div
                v-for="menuItem of store.menu"
                :key="menuItem.id"
                class="items"
                :style="`background : url(${menuItem.img}) no-repeat center center`">
                    <div class="iteminfo">
                        <div>
                            <h4>{{menuItem.item}}</h4>
                            <p>${{menuItem.price}}</p>
                        </div>
                        <button class="ghost">View item ></button>
                    </div>
               </div>
          </div>
      </div>
  </section>
</template>

<script>

export default {
  props: {
    fooddata: {
      type: Array,
      required : true
    },
  },
}
</script>

<style>
.iteminfo p{
    margin-top: 5px;
}
</style>
