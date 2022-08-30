import { Base } from "../common/base.js";

export class Home extends Base {
  constructor(appJSON) {
    super();
    this.appJSON = appJSON;
  }
  _test(){
    console.log("connected")
  }
  
}
