import {
  Injectable
} from '@angular/core';
import {
  Cordova,
  IonicNativePlugin,
  Plugin
} from '@ionic-native/core';

export interface IMonkey {

  pluginMonkey(options: any): Promise<any>;

}

@Plugin({
  pluginName: 'IonicTestPlugin',
  plugin: 'cordova-plugin-ionic-test-plugin',
  pluginRef: 'IonicTestPlugin',
  repo: 'https://github.com/ionic-test-plugin',
  platforms: ['iOS']
})
@Injectable()
export class IonicTestPlugin extends IonicNativePlugin {
  /**
   * Your plugin plugin functions go here. 
   * Function names should match the ones in your .swift & .js files.
   * Otherwise you won't be able to execute them.
   */
  @Cordova({
    successIndex: 0,
    errorIndex: 1
  })
  pluginFunction(): Promise < any > {
    return;
  }


  @Cordova({
    successIndex: 1,
    errorIndex: 2
  })
  pluginFunction2(options: any): Promise < any > {
    return;
  }

  @Cordova({
    successIndex: 1,
    errorIndex: 2
  })
  pluginFunction3(options: any): Promise < any > {
    return;
  }

}
