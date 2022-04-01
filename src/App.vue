<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup


import {useCartStore} from "./store/cart";
export default {

  setup(){
    const store=useCartStore()
    return{
     store
    }
  }
}
</script>

<template>
<div class=" flex flex-col items-center mt-10 justify-center ">
  <button class="text-white p-5 bg-red-500 w-2/12" @click="store.addItem">{{store.cart}}</button>
  <button class="text-white p-5 mt-5 bg-red-500 w-2/12" @click="store.$reset()">reset</button>
</div>

</template>

<style>

</style>
