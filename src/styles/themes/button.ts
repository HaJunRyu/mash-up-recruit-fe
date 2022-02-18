import { css } from '@emotion/react';
import { fonts } from '@/styles/themes/fonts';
import { colors } from '@/styles/themes/colors';

export const button = {
  type: {
    primary: css`
      ${fonts.kr.medium16};
      height: 5.6rem;
      padding: 1.6rem 1.95rem;
      color: ${colors.white};
      background: ${colors.purple70};
      border: 0;
      border-radius: 1.6rem;
      transition: 0.3s;

      &:hover {
        background: ${colors.purple80};
      }

      &:disabled {
        background: ${colors.purple40};
      }
    `,
    primaryLine: css`
      ${fonts.kr.medium16};
      height: 5.6rem;
      padding: 1.6rem 1.95rem;
      color: ${colors.purple70};
      background: ${colors.purple10};
      border: 0.1rem solid ${colors.purple60};
      border-radius: 1.6rem;
      transition: 0.3s;

      &:hover {
        background: ${colors.purple20};
      }

      &:disabled {
        color: ${colors.purple40};
        background: ${colors.purple10};
        border-color: ${colors.purple20};
      }
    `,
    defaultLine: css`
      ${fonts.kr.medium16};
      height: 5.6rem;
      padding: 1.6rem 1.95rem;
      color: ${colors.gray70};
      background: ${colors.white};
      border: 0.1rem solid ${colors.gray40};
      border-radius: 1.6rem;
      transition: 0.3s;

      &:hover {
        background: ${colors.gray10};
      }

      &:disabled {
        color: ${colors.gray50};
        background: ${colors.gray10};
        border-color: ${colors.gray30};
      }
    `,
  },
};

export type ButtonTheme = typeof button;