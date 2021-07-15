import { Vue, Options } from 'vue-class-component';

import { OtherComponent } from '../other';

@Options({
  components: { OtherComponent },
})
export default class SampleMixin1Component extends Vue {
  protected mixinMessage1: string = 'Mixin1';
}
