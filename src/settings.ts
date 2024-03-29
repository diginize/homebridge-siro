import {PlatformConfig} from 'homebridge';

/**
 * This is the name of the platform that users will use to register the plugin in the Homebridge config.json
 */
export const PLATFORM_NAME = 'HomebridgeSiro';

/**
 * This must match the name of your plugin as defined the package.json
 */
export const PLUGIN_NAME = 'homebridge-siro';

export interface PluginConfig extends PlatformConfig {
    bridgeIp: string;
    bridgeKey: string;
}
