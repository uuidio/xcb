<template lang="html">
    <div class="all-down">
        <!-- <Applylist/> -->
        <Daily/>
        <Inhuo/>
        <Navbar></Navbar>
    </div>
</template>

<script>
import Navbar from "../public/navbar"
import Ada from "./ada"
import Money from "./money"
import Adb from "./adb"
import Finance from "./finance"
import Adc from "./adc"
import Applylist from "./applylist"
import Inhuo from "./inhuo"
import Daily from "./daily"
export default {
  components: {
    Ada,
    Money,
    Adb,
    Finance,
    Adc,
    Navbar,
    Applylist,
    Inhuo,
    Daily
  },
}
</script>

<style lang="scss">
.mfooter {
  margin-top: 0 !important;
  ul {
    li:first-child {
      display: none;
    }
  }
}
</style>
