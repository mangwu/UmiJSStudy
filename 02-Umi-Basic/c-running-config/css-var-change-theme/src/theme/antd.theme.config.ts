/*
 * Author: mangwu                                                             *
 * File: antd.config.ts                                                       *
 * Date: 2022-02-21 22:47:09                                                  *
 * LastModifiedDate: 2022-02-22 14:29:36                                      *
 * ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */
/**
 * description 自定义的antd颜色 拥有两套配色
 */
export const antdTheme = {
  primaryColor: '#ff1518', // 全局主色
  linkColor: '#ff1518', // 链接色
  infoColor: '#1890ff', // 信息色
  successColor: '#9e9fc8', // 成功色
  warningColor: '#faad14', // 警告色
  errorColor: '#f5222d', // 错误色
  headingColor: 'rgba(0, 0, 0, 0.85)', // 标题色
  textColor: 'rgba(0, 0, 0, 0.65)', // 次文本色
  textColorSecondary: 'rgba(0, 0, 0, 0.45)', // 失效色
  borderColorBase: '#d9d9d9', // 边框色
  boxShadowBase:
    '0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08),\
  0 9px 28px 8px rgba(0, 0, 0, 0.05)', // 浮层阴影
  componentBackground: '#fff',
  // 表格样式
  tableHeaderBg: 'hsv(0, 0, 98%)',
  tableBodySortBg: '#fafafa',
  tableRowHoverBg: 'hsv(0, 0, 98%)',
  tableHeaderCellSplitColor: 'rgba(0, 0, 0, 0.06)',
  tableHeaderSortBg: 'hsv(0, 0, 96%)',
  tableHeaderFilterActiveBg: 'rgba(0, 0, 0, 0.04)',
  tableHeaderSortActiveBg: 'rgba(0, 0, 0, 0.04)',
  tableFixedHeaderSortActiveBg: 'hsv(0, 0, 96%)',
  tableFilterBtnsBg: 'inherit',
  tableExpandedRowBg: '#fbfbfb',
  tableFilterDropdownBg: '#fff',
  tableExpandIconBg: '#fff',
};

export const antdDarkTheme = {
  primaryColor: '#18E8FF', // 全局主色
  linkColor: '#18E8FF', // 链接色
  infoColor: '#18E8FF', // 信息色
  successColor: '#1ABFC4', // 成功色
  warningColor: '#FA9314', // 警告色
  errorColor: '#FF4DEF', // 错误色
  headingColor: 'fade(@white, 85%)', // 标题色
  textColor: 'rgba(255, 255, 255, 0.75)', // 次文本色
  textColorSecondary: 'rgba(155, 155, 155, 0.45)', // 失效色
  borderColorBase: '#fafafa', // 边框色
  boxShadowBase:
    '0 3px 6px -4px rgba(88, 88, 88, 0.12), 0 6px 16px 0 rgba(88, 88, 88, 0.08),\
  0 9px 28px 8px rgba(88, 88, 88, 0.05)', // 浮层阴影
  bodyBackground: '#000',
  componentBackground: '#141414',
  textColorInverse: '@white',
  iconColorHover: 'fade(@white, 75%)',
  iconColor: '@white',
  // 表格颜色
  tableHeaderBg: '#1d1d1d',
  tableBodySortBg: 'fade(@white, 1%)',
  tableRowHoverBg: '#262626',
  tableHeaderCellSplitColor: 'fade(@white, 8%)',
  tableHeaderSortBg: '#262626',
  tableHeaderFilterActiveBg: '#434343',
  tableHeaderSortActiveBg: '#303030',
  tableFixedHeaderSortActiveBg: '#222',
  tableFilterBtnsBg: '#1f1f1f',
  tableExpandedRowBg: '#1d1d1d',
  tableFilterDropdownBg: '#1f1f1f',
  tableExpandIconBg: 'transparent',
  // 分页
  paginationItemBg: 'transparent',
  paginationItemBgActive: 'transparent',
  paginationItemLinkBg: 'transparent',
  paginationItemDisabledBgActive: 'fade(@white, 25%)',
  paginationItemDisabledColorActive: '@black',
  paginationItemInputBg: '@pagination-item-bg',
  // page-header
  pageHeaderBackColor: '@icon-color',
  pageHeaderGhostBg: 'transparent',
};
