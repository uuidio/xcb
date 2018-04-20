<template lang="html">
    <div>
        <Heador/>
        <!-- <Product/> -->
        <!-- <Slider/> -->
        <Manlist/>
        <!-- <Novice/> -->
        <!-- <Borrow/> -->
        <Navbar/>
    </div>
</template>

<script>
import Heador from "../public/header.vue"
import Navbar from "../public/navbar.vue"
import Slider from "./hslider.vue"
import Novice from "./novice.vue"
import Borrow from "./borrow.vue"
import Money from "./money.vue"
import Product from "./product.vue"
import Life from "./life.vue"
import Manlist from "./manlist.vue"
export default {
  components: {
    Heador,
    Slider,
    Novice,
    Borrow,
    Money,
    Product,
    Life,
    Navbar,
    Manlist
  },
}
</script>
