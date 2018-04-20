<template lang="html">
    <div>
        <Top/>
        <Welfare/>
        <!-- <Service/> -->
        <Navbar/>
    </div>
</template>

<script>
import Heador from "../public/header"
import Navbar from "../public/navbar"
import Slider from "./islider"
import Welfare from "./welfare"
import Service from "./service"
import Top from "./top"
export default {
  components: {
    Heador,
    Slider,
    Welfare,
    Service,
    Navbar,
    Top,
  },
}
</script>
