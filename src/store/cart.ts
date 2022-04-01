import { defineStore } from 'pinia'
export const useCartStore = defineStore('cart',{

    state: () => ({
       cart:0
    }),
    getters: {
       itemCount:(state)=>state.cart*2
    },
    actions: {
        addItem(){
            this.cart++
        },

    }
})