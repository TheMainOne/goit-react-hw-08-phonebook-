import { Outlet } from 'react-router-dom';
import { Container } from 'components/GlobalStyles';
import { MainContainer } from './Layout.styled';

const Layout = () => {
  return (
    <MainContainer>
      <Container>
        <Outlet />
      </Container>
    </MainContainer>
  );
};

export default Layout;