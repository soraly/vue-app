<template>
    <ul>
            <li v-for='(item) in goodsList' :class='{"empty": !item.stock}'>
                <span>
                    {{item.title}}
                </span>
                —
                <i>
                    ${{item.price}}
                </i>
                <p>
                    <button :disabled='!item.stock' @click='addProductToCart(item)'>add to cart</button>
                </p>
            </li>
        </ul>
</template>

<script>
import {mapMutations, mapState, mapActions} from 'vuex'

export default {
    computed: {
        ...mapState({
            goodsList: state=>state.product.all
        })
    },    
    methods: {
        ...mapActions('product',[
            'addProductToCart'
        ])
    },
    created() {
        this.$store.dispatch('product/getAllProducts')
    },

}
</script>