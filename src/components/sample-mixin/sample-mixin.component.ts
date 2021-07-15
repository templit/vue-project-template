import { Vue, Options } from 'vue-class-component';

import { OtherComponent } from '../other';

@Options({
  components: { OtherComponent },
})
export default class SampleMixinComponent extends Vue {
  protected message: string = 'Mixin Component';
}
