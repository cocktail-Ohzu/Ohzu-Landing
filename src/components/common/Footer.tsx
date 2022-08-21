import styled from 'styled-components';
import { ReactComponent as Instagram } from '../../assets/icons/instagram.svg';
import { ReactComponent as AppStroe } from '../../assets/icons/appstore.svg';
import { ReactComponent as PlayStore } from '../../assets/icons/playstore.svg';
import { ReactComponent as Github } from '../../assets/icons/github.svg';

const Footer = () => {
  return (
    <Wrapper>
      <p>© Ohzu. 2022 All rights reserved</p>
      <SecondRow>
        {/* <a href="" target="_blank" rel="noreferrer noopener"> */}
        <a>
          <AppStroe />
        </a>
        {/* <a href="" target="_blank" rel="noreferrer noopener"> */}
        <a>
          <PlayStore />
        </a>
        {/* <a href="" target="_blank" rel="noreferrer noopener"> */}
        <a>
          <Instagram />
        </a>
        <a
          href="https://github.com/cocktail-Ohzu/Ohzu-FrontEnd"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Github />
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
