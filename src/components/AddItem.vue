<template>
<div class="flex flex-col">
  <div class="ml-2 mt-5">
  <label>name
  <input type="text" v-model="inputs.name">

</label>
  </div>
  <div class="ml-2 mt-5">
  <label>family
    <input type="text" v-model="inputs.url">
  </label>
  </div>
  <button @click="sumbit" class="flex  items-center ml-10 mt-5 bg-green-500 text-white  justify-center w-32 rounded-full hover:bg-red-500 h-20" type="sumbit">add</button>
</div>
</template>

<script lang="ts">
import {reactive} from 'vue'
import {useCartStore} from "../store/cart";
export default{
setup(){
  const inputs=reactive({
    name: '',
    url: ''
  })
  const cart=useCartStore()
  cart.addItem({...inputs})
  inputs.name=''
  inputs.url=''
  const sumbit=()=>{}
  return{sumbit,inputs}
}
}
</script>

<style scoped>

</style>