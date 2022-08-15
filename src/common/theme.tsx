import { DefaultTheme } from 'styled-components';

export const calcRem = (px: number) => `${px / 16}rem`;

export const theme: DefaultTheme = {
  palette: {
    main: {
      orange: '#DA6C31',
      grey: '#272727',
      white: '#FFFFFF',
    },
  },
  transition: {
    onHover: '0.125s all ease-in',
    onFocus: '0.125s all ease-in',
  },
  typo: {
    fixed: {
      Navbar_T_17_EB: `font-family: 'Pretendard';font-size: ${calcRem(
        17
      )};line-height: 100%;font-weight: 800;`,
      TabName_T_21_EB: `font-family: 'Pretendard';font-size: ${calcRem(
        21
      )};line-height: 100%;font-weight: 800;`,
      HomeTitle_T_24_EB: `font-family: 'Pretendard';font-size: ${calcRem(
        24
      )};line-height: 100%;font-weight: 800;`,
      HomeSubtitle_T_16_EB: `font-family: 'Pretendard';font-size: ${calcRem(
        16
      )};line-height: 100%;font-weight: 800;`,
      Footer_S_12_M: `font-family: 'Pretendard';font-size: ${calcRem(
        12
      )};line-height: 100%;font-weight: 300;`,
      EmptyText_S_16_M: `font-family: 'Pretendard';font-size: ${calcRem(
        16
      )};line-height: 100%;font-weight: 500;`,
    },
    text: {
      T_21_EB: `font-family: 'Pretendard';font-size: ${calcRem(
        21
      )};line-height: 100%;font-weight: 800;`,
      T_18_EB: `font-family: 'Pretendard';font-size: ${calcRem(
        18
      )};line-height: 100%;font-weight: 800;`,
      T_16_EB: `font-family: 'Pretendard';font-size: ${calcRem(
        16
      )};line-height: 100%;font-weight: 800;`,
      T_14_EB: `font-family: 'Pretendard';font-size: ${calcRem(
        14
      )};line-height: 100%;font-weight: 800;`,
      S_14_M: `font-family: 'Pretendard';font-size: ${calcRem(
        14
      )};line-height: 100%;font-weight: 500;`,
      T_12_EB: ` font-family: 'Pretendard';font-size: ${calcRem(
        12
      )};line-height: 100%;font-weight: 800;`,
      S_12_M: `font-family: 'Pretendard';font-size: ${calcRem(
        12
      )};line-height: 100%;font-weight: 500;`,
    },
    button: {
      Primary_T_15_EB: `font-family: 'Pretendard';font-size: ${calcRem(
        15
      )};line-height: 100%;font-weight: 500;`,
      Secondary_T_13_EB: `font-family: 'Pretendard';font-size: ${calcRem(
        13
      )};line-height: 100%;font-weight: 500;`,
      UnderlinedText_14_EB: `font-family: 'Pretendard';font-size: ${calcRem(
        14
      )};line-height: 100%;font-weight: 800;`,
      Text_T_14_EB: `font-family: 'Pretendard';font-size: ${calcRem(
        14
      )};line-height: 100%;font-weight: 800;`,
      Title_T_14_EB: `font-family: 'Pretendard';font-size: ${calcRem(
        14
      )};line-height: 100%;font-weight: 800;`,
      InnerText_T_12_EB: `font-family: 'Pretendard';font-size: ${calcRem(
        12
      )};line-height: 100%;font-weight: 800;`,
      InnerText_T_15_EB: `font-family: 'Pretendard';font-size: ${calcRem(
        15
      )};line-height: 100%;font-weight: 800;`,
    },
    bottomSheet: {
      T_21_EB: `font-family: 'Pretendard';font-size: ${calcRem(
        21
      )};line-height: 100%;font-weight: 800;`,
      T_14_EB: `font-family: 'Pretendard';font-size: ${calcRem(
        14
      )};line-height: 100%;font-weight: 800;`,
      S_12_R: `font-family: 'Pretendard';font-size: ${calcRem(
        12
      )};line-height: 100%;font-weight: 400;`,
    },
    tag: {
      T_12_EB: `font-family: 'Pretendard';font-size: ${calcRem(
        12
      )};line-height: 100%;font-weight: 800;`,
      T_8_EB: `font-family: 'Pretendard';font-size: ${calcRem(
        8
      )};line-height: 100%;font-weight: 800;`,
    },
  },
};