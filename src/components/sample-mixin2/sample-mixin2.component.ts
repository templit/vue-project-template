import { Vue, Options } from 'vue-class-component';

import { OtherComponent } from '../other';

@Options({
  components: { OtherComponent },
})
export default class SampleMixin2Component extends Vue {
  protected mixinMessage2: string = 'Mixin2';
}
