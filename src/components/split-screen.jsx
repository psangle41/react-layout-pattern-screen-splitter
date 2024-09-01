import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

const Panel = styled.div`
  flex: ${(p) => p.flex};
`;

const SplitScreen = ({ children, leftwidth = 1, rightWidth = 1 }) => {
  const [left, right] = children;
  return (
    <Container>
      <Panel flex={leftwidth}>{left}</Panel>
      <Panel flex={rightWidth}>{right}</Panel>
    </Container>
  );
};

export default SplitScreen;
