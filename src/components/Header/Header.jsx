import { Container, Head, Link } from './Header.styled';

const Header = () => {
  return (
    <Container>
      <Head>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Head>
      {/* <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense> */}
    </Container>
  );
};

export default Header;
