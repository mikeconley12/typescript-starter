import { ParentProvider } from './parent.provider';
import { OtherProvider } from './other.provider';

// @Injectable()
export class ChildProvider extends ParentProvider {
  constructor(otherProvider: OtherProvider) {
    console.log("otherProvider", otherProvider);
    super(null);
  }
}
