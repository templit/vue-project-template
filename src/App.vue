<template>
  <div>
    This is vue project template.
    <SampleComponent />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

import { SampleComponent } from './components/sample';

@Options({
  components: { SampleComponent },
})
export default class App extends Vue {}
</script>

<style lang="scss">
html, body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
