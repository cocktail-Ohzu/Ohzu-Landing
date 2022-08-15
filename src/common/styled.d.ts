import 'styled-components';
import { clacRem } from '@lib/styles/theme';
import { StringLiteralLike } from 'typescript';

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      main: {
        orange: '#DA6C31';
        grey: '#272727';
        white: '#FFFFFF';
      };
    };
    transition: {
      onHover: '0.125s all ease-in';
      onFocus: '0.125s all ease-in';
      onSelect: '0.3s all ease-in';
      onScroll: '0.15s all linear';
    };
    typo: {
      fixed: {
        Navbar_T_17_EB: string;
        TabName_T_21_EB: string;
        HomeTitle_T_24_EB: string;
        HomeSubtitle_T_16_EB: string;
        Footer_S_12_M: string;
        EmptyText_S_16_M: string;
      };
      text: {
        T_21_EB: string;
        T_18_EB: string;
        T_16_EB: string;
        T_14_EB: string;
        S_14_M: string;
        T_12_EB: string;
        S_12_M: string;
      };
      button: {
        Primary_T_15_EB: string;
        Secondary_T_13_EB: string;
        UnderlinedText_14_EB: string;
        Text_T_14_EB: string;
        Title_T_14_EB: string;
        InnerText_T_12_EB: string;
        InnerText_T_15_EB: string;
      };
      bottomSheet: {
        T_21_EB: string;
        T_14_EB: string;
        S_12_R: string;
      };
      tag: {
        T_12_EB: string;
        T_8_EB: string;
      };
    };
  }
}
