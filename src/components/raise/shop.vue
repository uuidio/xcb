<template>
  <div class="all">
    <Prduct></Prduct>
    <Novice></Novice>
    <Borrow></Borrow>
  </div>
</template>

<script>
import Prduct from "./product"
import Novice from "./novice"
import Borrow from "./borrow"
export default {
  components: {
    Prduct,
    Novice,
    Borrow
  }
}
</script>

<style scoped>

</style>
