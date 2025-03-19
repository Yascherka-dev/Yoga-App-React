import styled from 'styled-components';
import { Link } from 'react-router-dom';
import '../styles/Hero.css';

const HeroSection = styled.section`
  height: 80vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
              url('/yoga-spa.png') center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
`;

const HeroContent = styled.div`
  max-width: 800px;
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  font-weight: 700;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const CTAButton = styled(Link)`
  display: inline-block;
  padding: 1rem 2rem;
  background-color: #4a90e2;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-weight: 600;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #357abd;
  }
`;

const Hero = () => {
  return (
    <HeroSection>
      <HeroContent>
        <Title>Bienvenue chez ZharZen Yoga</Title>
        <Subtitle>
          Découvrez l'harmonie du corps et de l'esprit à travers nos expériences de yoga uniques
        </Subtitle>
        <CTAButton to="/experiences">
          Découvrir nos expériences
        </CTAButton>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero; 