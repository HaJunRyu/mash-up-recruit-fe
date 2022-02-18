import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Dialog = styled.div`
  ${({ theme }) => css`
    z-index: ${theme.zIndex.dialog};
    width: 100%;
    max-width: 45.1rem;
    background: ${theme.colors.white};
    border-radius: 2rem;
  `}
`;

export const DialogInner = styled.div`
  padding: 2.4rem;
  border-radius: 2rem 2rem 0 0;
`;

export const Heading = styled.h2`
  ${({ theme }) => css`
    ${theme.fonts.kr.bold22};
    color: ${theme.colors.gray80};
  `}
`;

export const Paragraph = styled.p`
  ${({ theme }) => css`
    ${theme.fonts.kr.medium16}
    margin: 1.6rem auto 0;
    color: ${theme.colors.gray60};
    white-space: pre-wrap;
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

export const ApprovalButton = styled.button`
  ${({ theme }) => css`
    ${theme.fonts.kr.medium16};
    position: relative;
    margin-left: 1.2rem;
    padding: 1.3rem 2rem;
    color: ${theme.colors.white};
    background: ${theme.colors.purple70};
    border: 0;
    border-radius: 1.2rem;

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
  `}
`;