import { Options, mixins } from 'vue-class-component';

import { SampleMixin1ComponentClass } from '../sample-mixin1';
import { SampleMixin2ComponentClass } from '../sample-mixin2';

@Options({
  props: {
    message: { default: 'Message' },
  },
})
export default class SampleComponent extends mixins(
  SampleMixin1ComponentClass,
  SampleMixin2ComponentClass,
) {
  protected message!: string;

  public mounted(): void {
    console.log(this.message);
    console.log(this.mixinMessage1);
    console.log(this.mixinMessage2);
  }
}
