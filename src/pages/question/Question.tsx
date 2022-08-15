import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { axiosRequest } from '../../apis/axios';
import Button from '../../components/button/Button';
import SelectButton from '../../components/button/SelectButton';
import QuestionBox from '../../components/question/QuestionBox';
import QuestionList from '../../components/question/QuestionBox';
import Template from '../../components/Template';
import { IQuestion } from '../../types/IQuestion';
// import styled from 'styled-components';

function Question() {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState<IQuestion[]>();
  const [answers, setAnswers] = useState<string>();

  useEffect(() => {
    //!!!!실 서버 데이터!!!!
    // axiosRequest
    //   .get<IQuestion>('/landingpage')
    //   .then((res) => setQuestions(res.data));

    //더미 데이터 지정, 삭제필요
    setQuestions([
      {
        question_id: 1,
        title: '시끌벅적한 술집보다 조용한 술집을 선호한다.',
        attribute: 'IE',
      },

      {
        question_id: 2,
        title: '칵테일의 이름의 뜻이 궁금했던 적이 있다.',
        attribute: 'NS',
      },

      {
        question_id: 3,
        title:
          '특정 칵테일과 관련된 추억(또는 기억)이 음료 선정에 영향을 끼친다.',
        attribute: 'FT',
      },

      {
        question_id: 4,
        title: '술을 마실때 새로운 사람들과 합석하는 것이 어렵지 않다.',
        attribute: 'EI',
      },

      {
        question_id: 5,
        title: '시끌벅적한 술집보다 조용한 술집을 선호한다.',
        attribute: 'IE',
      },

      {
        question_id: 6,
        title: '칵테일의 이름의 뜻이 궁금했던 적이 있다.',
        attribute: 'NS',
      },
      {
        question_id: 7,
        title:
          '특정 칵테일과 관련된 추억(또는 기억)이 음료 선정에 영향을 끼친다.',
        attribute: 'FT',
      },

      {
        question_id: 8,
        title: '술을 마실때 새로운 사람들과 합석하는 것이 어렵지 않다.',
        attribute: 'EI',
      },
    ]);

    setAnswers('0'.repeat(questions?.length ?? 0));

    console.log(questions);
    console.log(answers);
  }, []);

  return (
    <Template variant="질문">
      <Wrapper>
        {/* <SizedBox /> */}
        {questions?.map((elem, index) => {
          return (
            <QuestionBox
              key={index}
              elem={questions[index]}
              handler={setAnswers}
            ></QuestionBox>
          );
        })}
        <Button
          onClick={() => {
            navigate('/result');
          }}
        ></Button>
      </Wrapper>
    </Template>
  );
}

export default Question;

const Wrapper = styled.div`
  margin-top: 53px;
  margin: 0 29px 0 29px;
`;
