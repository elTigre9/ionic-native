import { Injectable } from '@angular/core';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';
@Plugin({
  pluginName: 'IBeaconPlugin',
  plugin: 'cordova-plugin-ibeacon-ios-plugin',
  pluginRef: 'IBeaconPlugin',
  repo:
    'https://github.com/ibeacon-ios-plugin',
  platforms: ['iOS']
})
@Injectable()
export class IBeaconPlugin extends IonicNativePlugin {
 /**
  * Your plugin plugin functions go here. 
  * Function names should match the ones in your .swift & .js files.
  * Otherwise you won't be able to execute them.
  */
@Cordova({
  successIndex: 0,
  errorIndex: 1
})
beaconDelegate(): Promise<any> {
  return;
}

@Cordova({
  successIndex: 0,
  errorIndex: 1
})
authManager(): Promise<any> {
    return;
}

@Cordova({
  successIndex: 1,
  errorIndex: 2
})
rangeBeacons(beaconList: String): Promise<any> {
    return;
}

}