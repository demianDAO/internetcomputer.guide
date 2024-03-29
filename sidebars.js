/*
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  docs: [
    {
      type: 'category',
      label: '新手指南',
      collapsed: true,
      items: [
        'guides/ic-overview',
        'guides/ic-vision',
        'guides/dapp-canister',
        'guides/ic-0-1-end',
        'guides/ic-0-1-end-en',
        'guides/ic-0-1-nfts',
        'guides/ic-0-1-nfts-en',
        'guides/sns-tokenization'
      ]
    },
    {
      type: 'category',
      label: 'IC经济模型',
      items: ['guides/ic-circulating-staked']
    },
    {
      type: 'category',
      label: 'IC生态白皮书',
      collapsed: false,
      items: [
        'whitepaper/openchat-whitepaper',
        'whitepaper/kinic-whitepaper',
        'whitepaper/emc-whitepaper'
      ]
    }
  ],
  // whitepaper: [
  // {
  //   type: 'category',
  //   label: 'IC生态白皮书',
  //   items: ['whitepaper/oc']
  // }
  // {
  //   type: 'category',
  //   label: 'Schedule Task',
  //   collapsed: false,
  //   items: ['guides/schedule-configuration', 'guides/dependency-task']
  // }
  // ],
  // whitepaper: [
  //   {
  //     type: 'category',
  //     label: 'IC生态白皮书',
  //     collapsed: false,
  //     items: ['whitepaper/openchat-whitepaper']
  //   }
  // ],
  training: [
    {
      type: 'category',
      label: '基础开发教程',
      collapsed: false,
      items: [
        'training/icp-101',
        'training/web-speed',
        'training/web-serving',
        'training/https-outcalls',
        'training/parallelism',
        'training/glossary',
        'training/fix-bug'
      ]
    }
  ],
  sample: [
    {
      type: 'category',
      label: '代码事例',
      collapsed: false,
      items: [
        'sample/hello',
        'sample/host-a-website',
        'sample/dex',
        'sample/nfts',
        'sample/daos',
        'sample/notes',
        'sample/token-transfer',
        'sample/host-unity-webgl',
        'sample/hackathon-projects'
      ]
    }
  ]
};
