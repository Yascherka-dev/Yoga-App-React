import styled from 'styled-components';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const FooterContainer = styled.footer`
  background-color: #333;
  color: white;
  padding: 3rem 2rem;
  margin-top: 4rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FooterTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: #4a90e2;
`;

const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #4a90e2;
  }
`;

const FooterText = styled.p`
  color: #ccc;
  line-height: 1.6;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #ccc;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialLink = styled.a`
  color: #fff;
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: #4a90e2;
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #444;
  color: #ccc;
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h3 {
    color: #333;
    margin-bottom: 1rem;
  }

  a {
    color: #666;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #4a90e2;
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterTitle>À propos de ZharZen</FooterTitle>
          <FooterText>
            ZharZen Yoga est votre espace de bien-être et de relaxation.
            Nous vous proposons des expériences de yoga adaptées à tous les niveaux
            dans un environnement paisible et apaisant.
          </FooterText>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Liens rapides</FooterTitle>
          <FooterLinks>
            <Link to="/">Accueil</Link>
            <Link to="/experiences">Expériences</Link>
            <Link to="/about">À propos</Link>
            <Link to="/contact">Contact</Link>
          </FooterLinks>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Contact</FooterTitle>
          <FooterLinks>
            <a href="tel:+33123456789">+33 1 23 45 67 89</a>
            <a href="mailto:contact@zharzen.com">contact@zharzen.com</a>
            <p>123 Rue du Yoga<br />75001 Paris, France</p>
          </FooterLinks>
          <SocialLinks>
            <SocialLink href="#" aria-label="Facebook">
              <i className="fab fa-facebook"></i>
            </SocialLink>
            <SocialLink href="#" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </SocialLink>
            <SocialLink href="#" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </SocialLink>
          </SocialLinks>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Horaires</FooterTitle>
          <FooterText>
            Lundi - Vendredi: 7h - 21h<br />
            Samedi: 8h - 20h<br />
            Dimanche: 9h - 18h
          </FooterText>
        </FooterSection>
      </FooterContent>

      <Copyright>
        © {new Date().getFullYear()} ZharZen Yoga. Tous droits réservés.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer; 