<template>
  <div>
      <sample-comp :title="title"/>
  </div>
</template>

<script>
import SampleComp from '../../src/sample-comp.vue'

export default {
  components: {
      SampleComp
  },
  data() {
    return {
      title: 'This is a title!'
    }
  }
}
</script>