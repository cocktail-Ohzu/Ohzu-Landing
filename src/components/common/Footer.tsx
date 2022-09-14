import styled from 'styled-components';
import { ReactComponent as Instagram } from '../../assets/icons/instagram.svg';
import { ReactComponent as AppStore } from '../../assets/icons/appstore.svg';
import { ReactComponent as PlayStore } from '../../assets/icons/playstore.svg';
import { ReactComponent as Github } from '../../assets/icons/github.svg';
import { ToastsStore } from 'react-toasts';

const Footer = () => {
  const useToast = (msg: string) => {
    ToastsStore.info(msg);
  };

  return (
    <Wrapper>
      <p>© Ohzu. 2022 All rights reserved</p>
      <SecondRow>
        <a
          href="https://apps.apple.com/us/app/%EC%98%A4%EC%A5%AC/id1643634105"
          target="_blank"
          rel="noreferrer noopener"
        >
          <AppStore width={20} height={20} />
        </a>
        <a
          href="https://play.google.com/store/apps/details?id=com.ohzu.ohzu"
          target="_blank"
          rel="noreferrer noopener"
        >
          <PlayStore width={20} height={20} />
        </a>
        {/* <a href="" target="_blank" rel="noreferrer noopener"> */}
        <a onClick={() => useToast('준비 중입니다 :)')}>
          <Instagram width={20} height={20} />
        </a>
        <a
          href="https://github.com/cocktail-Ohzu/Ohzu-FrontEnd"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Github width={20} height={20} />
        </a>
      </SecondRow>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.div`
  width: 100%;
  height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 44px;
    margin-bottom: 20px;
  }
  & p {
    ${({ theme }) => theme.typo.fixed.Footer_S_12_M}
    font-weight: 200;
    color: ${({ theme }) => theme.palette.main.white};
  }
`;

const SecondRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 12px;
  margin-top: 12px;
  & > a {
    z-index: 11;
  }
`;
