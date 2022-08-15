import styled from 'styled-components';
import Footer from './Footer';

interface TemplateProps {
  children: React.ReactNode;
  variant: string;
}

function Template({ children, variant }: TemplateProps) {
  return (
    <Wrapper>
      <Container>
        {children}
        <Footer />
      </Container>
    </Wrapper>
  );
}

export default Template;

const Wrapper = styled.div`
  height: calc(var(--vh, 1vh) * 100);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  background-color: #121212;
  /* pc 모바일 목업 화면 */
  width: auto;
  box-sizing: content-box;
  /* 탭바 */
  position: relative;
  /* 임시 높이 확인용 보더 */
  // border: 1px solid white;
`;
