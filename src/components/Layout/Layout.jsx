import { Outlet } from 'react-router-dom';
import { Container } from 'components/GlobalStyles';

const Layout = () => {
  return (
    <main>
      <Container>
        <Outlet />
      </Container>
    </main>
  );
};

export default Layout;