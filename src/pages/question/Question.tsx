import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { axiosRequest } from '../../apis/axios';
import Button from '../../components/button/Button';
import QuestionBox from '../../components/question/QuestionBox';
import ScrollProgress from '../../components/scroll/ScrollProgress';
import Template from '../../components/common/Template';
import { IAnswer } from '../../types/IAnswer';
import { IQuestion, IQuestionList } from '../../types/IQuestion';
import { TSelect } from '../../types/TSelect';
import AnimatedPage from '../../components/common/AnimatedPage';
import { ToastsStore } from 'react-toasts';
// import styled from 'styled-components';

function Question() {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState<IQuestion[]>([]);
  const [answers, setAnswers] = useState<TSelect[]>([]);
  const requestUrl = '/landingpage/question';

  const useToast = () => {
    ToastsStore.info('아직 선택하지 않은 선택지가 있습니다');
  };

  useEffect(() => {
    try {
      document.body.scrollTop = 0;
    } catch (err) {
      console.log(err);
    }

    axiosRequest.get<IQuestionList>(requestUrl).then((res) => {
      // console.log(res.data.data);
      setQuestions(res.data.data);
    });
  }, []);

  // useEffect(() => {
  //   console.log('questions -> ', questions);
  // }, [questions]);

  const handleSubmit = () => {
    let data: string = answers
      .map((elem, index) => {
        /* 선택 안함 */
        if (elem == -1) {
          console.log('아직 선택 하지 않은 항목이 있음');
        } else if (elem == 1) {
          /* 예 선택 */
          return questions[index].attribute[0] ?? 'X';
        } else if (elem == 0) {
          /* 아니오 선택 */
          return questions[index].attribute[1] ?? 'X';
        }
        return 'X';
      })
      .toString()
      .replaceAll(',', '');

    // console.log(data);
    if (data.indexOf('X') > -1) {
      console.log('잘못된 요청');
      useToast();
      return;
    }

    let prop: IAnswer = {
      data: data,
    };

    navigate('/result', { state: JSON.stringify(prop) });
  };

  return (
    <AnimatedPage>
      <Template variant="질문">
        <ScrollProgress />
        <Wrapper>
          {/* <SizedBox /> */}
          {questions?.map((elem, index) => {
            return (
              <QuestionBox
                key={index}
                elem={questions[index]}
                answers={answers}
                index={index}
                handler={setAnswers}
              ></QuestionBox>
            );
          })}
          <SubmitContainer>
            <Button
              onClick={() => {
                handleSubmit();
              }}
              label={'결과 확인하기'}
            ></Button>
          </SubmitContainer>
        </Wrapper>
      </Template>
    </AnimatedPage>
  );
}

export default Question;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 53px;
  margin: 0 29px 0 29px;
`;

const SubmitContainer = styled.div`
  margin-top: 100px;
  margin-bottom: 50px;
`;
