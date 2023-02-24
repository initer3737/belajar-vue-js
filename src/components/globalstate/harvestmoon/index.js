import { defineStore } from "pinia";

export const harvest = defineStore('harvest', {
    state: () => (
        { 
         utils: ['pacul','kapak','sambit'],
         name: 'Petani tebu',
         house_level:3,
         wife:'popuri',
         season:'winter',
         exp:0,
        }
    ),
    getters: {
        get_wife(state){
            return state.wife
        },
        get_name(state){
            return state.name
        },
        get_house(state){
            return state.house_level
        },
        get_utils_list(state){
            return state.utils
        },
        get_exp(state){
            return state.exp
        },
        get_season(state){
            return state.season
        },
    },
    actions: {
        incrementExp(set){
            return this.$state.exp+=Math.round(Math.random()*set)
        },
        decrementExp(set){
            return this.$state.exp-=set
        }
    },
  })