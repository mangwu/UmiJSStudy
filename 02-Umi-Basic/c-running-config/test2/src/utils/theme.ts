/*
 * @Author: mangwu                                                             *
 * @File: index.ts                                                             *
 * @Date: 2022-02-21 17:11:40                                                  *
 * @LastModifiedDate: 2022-02-21 17:11:47                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

import cssVars from 'css-vars-ponyfill';

export type ThemeType = keyof typeof THEME;

export const THEME = {
  Light: {
    '--font-high-emphasis': 'rgba(1, 8, 30, 1)',
    '--font-primary': 'rgba(36, 174, 143, 1)',
  },
  Dark: {
    '--font-high-emphasis': 'rgba(255, 255, 255, 1)',
    '--font-primary': 'rgba(237, 110, 114, 1)',
  },
};

export const setTheme = (themeKey: ThemeType) => {
  const themeKeys = Object.keys(THEME);
  let KEY: ThemeType;
  if (themeKeys.includes(themeKey)) {
    KEY = themeKey;
  } else {
    KEY = (localStorage.getItem('theme') as ThemeType | undefined) || 'Light';
  }
  localStorage.setItem('theme', KEY);

  let styleLink = document.getElementById('theme-style') as HTMLLinkElement;
  let hrefSrc = '/theme/normal.css';
  if (KEY === 'Light') {
    hrefSrc = '/theme/normal.css';
  } else if (KEY === 'Dark') {
    hrefSrc = '/theme/dark.css';
  }

  if (styleLink) {
    styleLink.href = hrefSrc;
  } else {
    styleLink = document.createElement('link');
    styleLink.type = 'text/css';
    styleLink.rel = 'stylesheet';
    styleLink.id = 'theme-style';
    styleLink.href = hrefSrc;
    document.body.append(styleLink);
  }
  cssVars({
    onlyLegacy: false,
    variables: THEME[KEY],
    onError() {
      cssVars({
        onlyLegacy: false,
        variables: THEME[KEY],
      });
    },
  });
};
