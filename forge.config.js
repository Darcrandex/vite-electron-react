// electron 打包配置
// https://www.electronforge.io/configuration

/* eslint-disable no-undef */
module.exports = {
  packagerConfig: {},
  electronRebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {
        name: 'my_forge',
      },
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin'],
    },
    {
      name: '@electron-forge/maker-deb',
      config: {},
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {},
    },
  ],
  publishers: [],
  plugins: [],
  hooks: {},
  buildIdentifier: 'my-build',
}
