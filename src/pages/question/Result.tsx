import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';
import Template from '../../components/common/Template';
import { IResult } from '../../types/IResult';
import { ReactComponent as AppStore } from '../../assets/icons/on_appstore_line.svg';
import { ReactComponent as PlayStore } from '../../assets/icons/on_playstore_line.svg';
import { axiosRequest } from '../../apis/axios';
import AnimatedPage from '../../components/common/AnimatedPage';
import { ToastsStore } from 'react-toasts';

function Result() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [result, setResult] = useState<IResult>();
  const playstoreUrl = '';
  const appstoreUrl = '';

  useEffect(() => {
    try {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    } catch (err) {
      console.log(err);
    }

    if (!state || state == null) {
      navigate('/');
      useToast('잘못된 접근입니다');
    } else {
      axiosRequest
        .post<IResult>('/landingpage/result', state)
        .then((res) => setResult(res.data));
    }
  }, []);

  const useToast = (msg: string) => {
    ToastsStore.info(msg);
  };

  const openInNewTab = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <AnimatedPage>
      <Template variant="홈">
        <Wrapper>
          <Title>
            <p>당신과 가장 잘 어울리는 칵테일은</p>
            <p>{result?.cocktail} 입니다~!</p>
          </Title>
          <ResultImage>
            <img src={result?.cocktail_url}></img>
          </ResultImage>
          <Detail>
            {result?.desc.split('||').map((elem, index) => {
              return (
                <div key={index}>
                  <li></li>
                  <p>{elem}</p>
                </div>
              );
            })}
          </Detail>
          <Title>
            <p>다른 칵테일과의 궁합</p>
          </Title>
          <MatchingWrapper>
            <Matching>
              <p>천생연분</p>
              <img src={result?.fit_cocktail_url}></img>
              <p>{result?.fit_cocktail}</p>
            </Matching>
            <Matching>
              <p>조금 안맞을수도..?</p>
              <img src={result?.unfit_cocktail_url}></img>
              <p>{result?.unfit_cocktail}</p>
            </Matching>
          </MatchingWrapper>
          <SubTitle>
            <p>모든 기능을 사용하고 싶다면?</p>
            {/* <p>오쥬 다운 받으러 가기~!</p> */}
          </SubTitle>
          <AppStoreWrapper>
            <AppStore
              width={232}
              height={67}
              onClick={() => {
                // openInNewTab(appstoreUrl);
                useToast('준비 중입니다 :)');
              }}
            />
            <PlayStore
              width={232}
              height={67}
              onClick={() => {
                // openInNewTab(playstoreUrl);
                useToast('준비 중입니다 :)');
              }}
            />
          </AppStoreWrapper>
        </Wrapper>
      </Template>
    </AnimatedPage>
  );
}

export default Result;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  // align-items: center;
  margin: 53px 29px 0 29px;
`;

const Title = styled.div`
  & p {
    ${({ theme }) => theme.typo.text.T_21_EB}
    line-height: 130%;
    font-weight: 500;
    color: ${({ theme }) => theme.palette.main.white};
  }
`;

const ResultImage = styled.div`
  margin-top: 33px;
  width: 100%;
  height: 328px;
  display: flex;
  justify-content: center;
  align-items: center;

  & > img {
    width: 313px;
    height: 328px;
  }
`;

const Detail = styled.div`
  background-color: ${({ theme }) => theme.palette.main.grey};
  border: ${({ theme }) => {
    return css`
      1px solid ${theme.palette.main.orange};
    `;
  }};
  margin-top: 33px;
  margin-bottom: 74px;
  border-radius: 8px;
  padding: 30px 18px 30px 18px;
  & div {
    & li {
      margin-right: -3px;
    }
    display: flex;
    ${({ theme }) => theme.typo.text.T_16_EB}
    line-height: 150%;
    font-weight: 300;
    color: ${({ theme }) => theme.palette.main.white};
    margin-bottom: 15px;
  }
  & div:last-child {
    margin-bottom: 0;
  }
`;

const MatchingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.main.grey};
  border: ${({ theme }) => {
    return css`
      1px solid ${theme.palette.main.orange};
    `;
  }};
  margin-top: 19px;
  margin-bottom: 70px;
  border-radius: 8px;
  padding: 40px 24px 40px 24px;
`;

const Matching = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  & > img {
    margin-top: 15px;
    margin-bottom: 11px;
    width: 120px;
    height: auto;
  }
  & > p:first-child {
    ${({ theme }) => theme.typo.text.T_16_EB}
    line-height: 130%;
    font-weight: 500;
    color: ${({ theme }) => theme.palette.main.white};
  }
  & > p:last-child {
    ${({ theme }) => theme.typo.text.T_14_EB}
    line-height: 130%;
    font-weight: 400;
    color: ${({ theme }) => theme.palette.main.white};
  }
`;

const SubTitle = styled.div`
  & p {
    ${({ theme }) => theme.typo.text.T_18_EB}
    line-height: 130%;
    font-weight: 500;
    color: ${({ theme }) => theme.palette.main.white};
  }
`;

const AppStoreWrapper = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  // flex-direction: column;
  gap: 10px;
  margin-top: 15px;
  margin-bottom: 100px;
`;
