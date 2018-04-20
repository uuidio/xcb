<template lang="html">
    <Panel title="枝速领券" class="panel">
        <section class="content">
            <router-link :to="{ name: 'home' }">
                <img src="~img/5a421756N2416c88f.png" style="width:100%;" alt="">
            </router-link>
        </section>
    </Panel>
</template>

<script>
import Panel from "../core/panel.vue"

export default {
  components: {
    Panel,
  },
}
</script>

<style lang="scss" scoped>
@import "../../assets/css/element.scss";
.panel {
  @include panel;
  .content {
    padding-bottom: 80px;
    img {
      display: block;
      width: 100%;
    }
  }
}
</style>
