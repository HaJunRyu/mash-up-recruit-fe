import { css } from '@emotion/react';
import styled from '@emotion/styled';
import HappyMinsooSvg from '@/assets/svg/happy-minsoo.svg';

export const Dialog = styled.div`
  ${({ theme }) => css`
    z-index: ${theme.zIndex.dialog};
    width: 100%;
    max-width: 50rem;
    background: ${theme.colors.white};
    border-radius: 2rem;

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      max-width: 29rem;
    }
  `}
`;

export const DialogInner = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    padding: 2.4rem;
    border-radius: 2rem 2rem 0 0;

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      padding: 2.4rem 2.4rem 1.6rem;
    }
  `}
`;

export const HappyMinsoo = styled(HappyMinsooSvg)`
  ${({ theme }) => css`
    @media (max-width: ${theme.breakPoint.media.mobile}) {
      width: 10rem;
      height: 10rem;
    }
  `}
`;

export const Heading = styled.h2`
  ${({ theme }) => css`
    ${theme.fonts.kr.bold22};
    margin-top: 2.4rem;
    color: ${theme.colors.gray80};
    white-space: pre-wrap;

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      ${theme.fonts.kr.bold18};
      margin-top: 0.8rem;
      text-align: center;
      word-break: keep-all;
    }
  `}
`;

export const Paragraph = styled.p`
  ${({ theme }) => css`
    ${theme.fonts.kr.regular16}
    margin: 1.2rem auto 0;
    color: ${theme.colors.gray60};
    white-space: pre-wrap;

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      ${theme.fonts.kr.medium14};
      width: 19rem;
      margin-top: 0.8rem;
      text-align: center;
      word-break: keep-all;
    }
  `}
`;

export const Form = styled.form`
  width: 100%;
`;

export const PlaceHolderLabel = styled.label`
  ${({ theme }) => css`
    ${theme.fonts.kr.bold16};
    display: block;
    width: 100%;
    margin-top: 2.4rem;
    padding: 1.2rem 1.6rem;
    color: ${theme.colors.green70};
    background: ${theme.colors.green20};
    border-radius: 0.8rem;

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      ${theme.fonts.kr.medium14};
      margin-top: 0.8rem;
    }
  `}
`;

interface InputProps {
  isError: boolean;
}

export const Input = styled.input<InputProps>`
  ${({ theme, isError }) => css`
    ${theme.input.size.md};
    width: 100%;
    margin-top: 0.8rem;
    color: ${theme.colors.gray80};
    background: ${isError ? theme.colors.red10 : 'initial'};
    border: 0.2rem solid ${isError ? theme.colors.red50 : theme.colors.purple40};
    border-radius: 0.8rem;
    outline: 0;

    &:focus {
      border-color: ${isError ? theme.colors.red50 : theme.colors.purple70};
    }

    &::placeholder {
      color: ${theme.colors.gray50};
    }

    @media (hover: hover) {
      &:hover {
        border-color: ${isError ? theme.colors.red50 : theme.colors.purple70};
      }
    }

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      ${theme.fonts.kr.regular14};
    }
  `}
`;

export const ErrorMessage = styled.span`
  ${({ theme }) => css`
    ${theme.fonts.kr.regular15};
    display: block;
    width: 100%;
    margin-top: 0.4rem;
    color: ${theme.colors.red50};
  `}
`;

export const DialogFooter = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: flex-end;
    padding: 1.6rem 2.4rem;
    background: ${theme.colors.gray10};
    border-radius: 0 0 2rem 2rem;
  `}
`;

export const CancelButton = styled.button`
  ${({ theme }) => css`
    ${theme.fonts.kr.medium16};
    position: relative;
    padding: 1.3rem 2rem;
    color: ${theme.colors.gray80};
    white-space: nowrap;
    background: ${theme.colors.gray40};
    border: 0;
    border-radius: 1.2rem;

    @media (hover: hover) {
      &:hover {
        & > div {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.3);
          border-radius: 1.2rem;
        }
      }
    }

    &:active {
      & > div {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.3);
        border-radius: 1.2rem;
      }
    }

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      ${theme.fonts.kr.medium15};
    }
  `}
`;

export const ApprovalButton = styled.button`
  ${({ theme }) => css`
    ${theme.fonts.kr.medium16};
    position: relative;
    margin-left: 1.2rem;
    padding: 1.3rem 2rem;
    color: ${theme.colors.white};
    white-space: nowrap;
    background: ${theme.colors.purple70};
    border: 0;
    border-radius: 1.2rem;

    @media (hover: hover) {
      &:hover {
        & > div {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.3);
          border-radius: 1.2rem;
        }
      }

      &:active {
        & > div {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.3);
          border-radius: 1.2rem;
        }
      }
    }

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      ${theme.fonts.kr.medium15};
    }
  `}
`;
