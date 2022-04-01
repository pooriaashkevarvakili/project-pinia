<template>
<div v-for="item in cart.items" :key="item.id">
<div>
  <a :href="item.url">
    {{item.name}}
  </a>
</div>
  <div>
    <button @click="cart.removeItem(item)"></button>
  </div>
</div>
</template>

<script >
import {useCartStore} from "../store/cart";

export default {
  name: "itemsList",
  setup(){
const cart=useCartStore()
    return{
  cart
    }
  }
}
</script>

<style scoped>

</style>