import { Link } from 'react-router-dom';
import styled from 'styled-components';
import '../styles/Navbar.css';

const Nav = styled.nav`
  background-color: #ffffff;
  padding: 1rem 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  color: #333;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  a {
    color: #333;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;

    &:hover {
      color: #4a90e2;
    }
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <NavContainer>
        <Logo to="/">ZharZen Yoga</Logo>
        <NavLinks>
          <Link to="/">Accueil</Link>
          <Link to="/experiences">Expériences</Link>
          <Link to="/about">À propos</Link>
          <Link to="/contact">Contact</Link>
        </NavLinks>
      </NavContainer>
    </Nav>
  );
};

export default Navbar; 