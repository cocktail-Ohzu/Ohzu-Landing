import styled from 'styled-components';

interface TemplateProps {
  children: React.ReactNode;
  variant: string;
}

function Template({ children, variant }: TemplateProps) {
  return (
    <Wrapper>
      <h1>dd</h1>
      {children}
      <span>{variant}</span>
    </Wrapper>
  );
}

export default Template;

const Wrapper = styled.div`
  width: 100%;
  background: black;
`;
