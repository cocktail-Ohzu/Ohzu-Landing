import React, { HTMLAttributes, useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { theme } from '../../common/theme';
import { EMbti } from '../../types/IAnswer';
import { IQuestion } from '../../types/IQuestion';
import { TSelect } from '../../types/TSelect';
import Button from '../button/Button';
import SelectButton from '../button/SelectButton';

interface QuestionProps extends HTMLAttributes<HTMLButtonElement> {
  elem: IQuestion;
  answers: TSelect[];
  index: number;
  handler: React.Dispatch<React.SetStateAction<TSelect[]>>;
}

function QuestionBox({
  elem,
  index,
  answers,
  handler,
  ...props
}: QuestionProps) {
  const navigate = useNavigate();
  const [answer, setAnswer] = useState<boolean | null>(null);

  useEffect(() => {
    if (answer == true) answers[index] = 1;
    else if (answer == false) answers[index] = 0;
    else answers[index] = -1;
    console.log(answers);
  }, [answer]);

  const handleState = (state: boolean) => {
    setAnswer(state);
  };

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
          <SelectButton
            label={'예'}
            onClick={() => handleState(true)}
            isSelected={answer}
          ></SelectButton>
          <SizedBox />
          <SelectButton
            label={'아니오'}
            onClick={() => handleState(false)}
            isSelected={answer == null ? null : !answer}
          ></SelectButton>
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
