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
        'guides/ic-0-1-nfts-en'
      ]
    },
    {
      type: 'category',
      label: 'IC经济模型',
      items: ['guides/ic-circulating-staked']
    }
  ],
  schedule: [
    // {
    //   type: 'ref',
    //   id: 'guides/scheduler'
    // }
    // {
    //   type: 'category',
    //   label: 'Schedule Task',
    //   collapsed: false,
    //   items: ['guides/schedule-configuration', 'guides/dependency-task']
    // }
  ],
  training: [
    {
      type: 'category',
      label: '基础开发教程',
      collapsed: false,
      items: ['training/icp-101', 'training/glossary', 'training/fix-bug']
    }
  ]
};
