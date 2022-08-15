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
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow-y: scroll;
`;

const Container = styled.div`
  width: 375px;
  background-color: #121212;
  /* pc 모바일 목업 화면 */
  box-sizing: content-box;
  /* 탭바 */
  /* 임시 높이 확인용 보더 */
  // border: 1px solid white;
`;
