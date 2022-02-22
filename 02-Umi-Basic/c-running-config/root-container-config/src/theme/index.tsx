/*
 * @-Author: mangwu                                                             *
 * @-File: theme.ts                                                             *
 * @-Date: 2022-02-18 16:20:55                                                  *
 * @-Last-Modified-Date: 2022-02-22 16:06:41
 * @-Modified-By: mangwu                                                         *
 * -----------------------                                                     *
 * -Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @-H-I-S-T-O-R-Y:                                                                   *
 * -Date   	            -By 	    -Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

export const theme = {
  'primary-color': '#1da57a',
  'info-color': '#13c2c2',
  'body-background': '#000',
  'component-background': '#141414',
  'text-color': 'fade(@white, 85%)',
  'text-color-secondary': 'fade(@white, 45%)',
  'text-color-inverse': '@white',
  'icon-color-hover': 'fade(@white, 75%)',
  'heading-color': 'fade(@white, 85%)',
  'icon-color': '@white',
  // 表格颜色
  'table-header-bg': '#1d1d1d',
  'table-body-sort-bg': 'fade(@white, 1%)',
  'table-row-hover-bg': '#262626',
  'table-header-cell-split-color': 'fade(@white, 8%)',
  'table-header-sort-bg': '#262626',
  'table-header-filter-active-bg': '#434343',
  'table-header-sort-active-bg': '#303030',
  'table-fixed-header-sort-active-bg': '#222',
  'table-filter-btns-bg': '#1f1f1f',
  'table-expanded-row-bg': '#1d1d1d',
  'table-filter-dropdown-bg': '#1f1f1f',
  'table-expand-icon-bg': 'transparent',
  // 分页
  'pagination-item-bg': 'transparent',
  'pagination-item-bg-active': 'transparent',
  'pagination-item-link-bg': 'transparent',
  'pagination-item-disabled-bg-active': 'fade(@white, 25%)',
  'pagination-item-disabled-color-active': '@black',
  'pagination-item-input-bg': '@pagination-item-bg',
  // page-header
  'page-header-back-color': '@icon-color',
  'page-header-ghost-bg': 'transparent',
};
