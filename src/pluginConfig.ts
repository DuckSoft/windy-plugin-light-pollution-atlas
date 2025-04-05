import type { ExternalPluginConfig } from '@windy/interfaces';

const config: ExternalPluginConfig = {
    name: 'windy-plugin-light-pollution-atlas',
    version: '0.3.0',
    icon: '🌌',
    title: 'Light Pollution Atlas Plugin',
    description: 'Show light pollution atlas on Windy map.',
    author: 'DuckSoft',
    repository: 'https://github.com/DuckSoft/windy-plugin-light-pollution-atlas',
    desktopUI: 'embedded',
    mobileUI: 'small',
    routerPath: '/light-pollution-atlas',
};

export default config;
