import React, { HTMLAttributes, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { theme } from '../../common/theme';
import { IQuestion } from '../../types/IQuestion';
import Button from '../button/Button';
import SelectButton from '../button/SelectButton';

interface QuestionProps extends HTMLAttributes<HTMLButtonElement> {
  elem?: IQuestion | null;
  handler?: Function | React.Dispatch<React.SetStateAction<String>>;
}

function QuestionBox({ elem, handler, ...props }: QuestionProps) {
  const navigate = useNavigate();

  if (elem == null) return null;
  return (
    <>
      <Wrapper>
        <Order>
          <p>{elem.question_id}/8</p>
        </Order>
        <Title>
          <p>{elem.title}</p>
        </Title>
        <ButtonWrapper>
          <SelectButton label={'예'}></SelectButton>
          {/* <SizedBox /> */}
          <SelectButton label={'아니오'}></SelectButton>
        </ButtonWrapper>
      </Wrapper>
    </>
  );
}

export default QuestionBox;

const Wrapper = styled.div`
  margin-top: 53px;
`;

const Order = styled.div`
  margin-bottom: 8px;
  & p {
    ${({ theme }) => theme.typo.text.T_16_EB}
    font-weight: 500;
    color: ${({ theme }) => theme.palette.main.orange};
  }
`;

const Title = styled.div`
  margin-bottom: 26px;
  & p {
    ${({ theme }) => theme.typo.text.T_16_EB}
    font-weight: 200;
    color: ${({ theme }) => theme.palette.main.white};
  }
`;

const ButtonWrapper = styled.div`
  margin-bottom: 26px;
  display: flex;
  justify-content: space-between;
`;

const SizedBox = styled.div`
  width: 27px;
`;
