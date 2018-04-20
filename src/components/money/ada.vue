<template lang="html">
    <Panel title="神劵满" :class="$style.panel">
        <section :class="$style.content">
            <img src="@/assets/img/597a95d4Ne01da140.png" alt="">
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

<style lang="scss" module>
@import "../../assets/css/element.scss";
.panel {
  @include panel;
  > h4 {
    display: none;
  }
  .content {
    img {
      margin: 0 auto;
      width: 90%;
      display: block;
    }
  }
}
</style>
