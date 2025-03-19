import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { endpoints } from '../api';
import ExperienceCard from '../components/ExperienceCard';

const HeroSection = styled.div`
  height: 90vh;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
              url('https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80') center/cover;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  margin-bottom: 4rem;
`;

const HeroContent = styled.div`
  max-width: 800px;
  padding: 0 2rem;

  h1 {
    font-size: 4rem;
    margin-bottom: 1.5rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    font-weight: 700;
    line-height: 1.2;
    color: #fff;
  }

  p {
    font-size: 1.5rem;
    margin-bottom: 2.5rem;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
    line-height: 1.6;
    font-weight: 300;
    color: #fff;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2.5rem;
    }
    p {
      font-size: 1.2rem;
    }
  }
`;

const Button = styled(Link)`
  display: inline-block;
  padding: 1.2rem 2.5rem;
  background: #4a90e2;
  color: white;
  text-decoration: none;
  border-radius: 50px;
  font-size: 1.2rem;
  font-weight: 500;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;

  &:hover {
    background: #357abd;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(74, 144, 226, 0.3);
  }
`;

const CTASection = styled.section`
  background: #f8f9fa;
  padding: 4rem 0;
  text-align: center;
  margin-bottom: 4rem;
`;

const CTAContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;

  h2 {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 1.5rem;
  }

  p {
    font-size: 1.2rem;
    color: #666;
    margin-bottom: 2rem;
    line-height: 1.6;
  }
`;

const Section = styled.section`
  max-width: 1200px;
  margin: 0 auto 4rem;
  padding: 0 1rem;
`;

const SectionTitle = styled.h2`
  text-align: center;
  color: #333;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  position: relative;
  padding-bottom: 1rem;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background: #4a90e2;
  }
`;

const CarouselContainer = styled.div`
  position: relative;
  overflow: hidden;
  margin-bottom: 2rem;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
`;

const CarouselTrack = styled.div`
  display: flex;
  gap: 2rem;
  transition: transform 0.5s ease;
`;

const CarouselItem = styled.div`
  flex: 0 0 calc(20% - 1.6rem);
  min-width: 300px;
`;

const CarouselButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.9);
  color: #333;
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  transition: all 0.3s ease;
  z-index: 1;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    background: white;
    transform: translateY(-50%) scale(1.1);
  }

  &.prev {
    left: 1rem;
  }

  &.next {
    right: 1rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

const Home = () => {
  const { data: experiences, loading, error } = useFetch(endpoints.experiences);
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (!Array.isArray(experiences)) return;
    setCurrentSlide(prev => (prev + 1) % experiences.length);
  };

  const prevSlide = () => {
    if (!Array.isArray(experiences)) return;
    setCurrentSlide(prev => (prev - 1 + experiences.length) % experiences.length);
  };

  if (loading) {
    return <div>Chargement...</div>;
  }

  if (error) {
    return <div>Une erreur est survenue lors du chargement des expériences.</div>;
  }

  if (!Array.isArray(experiences)) {
    return <div>Aucune expérience disponible pour le moment.</div>;
  }

  // Trier les expériences par rating et prendre les 5 meilleures
  const topExperiences = [...experiences]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 5);

  return (
    <div>
      <HeroSection>
        <HeroContent>
          <h1>Bienvenue chez ZharZen</h1>
          <p>Découvrez l'harmonie parfaite entre le yoga et la culture marocaine</p>
          <Button to="/experiences">Découvrir nos expériences</Button>
        </HeroContent>
      </HeroSection>

      <CTASection>
        <CTAContent>
          <h2>Transformez votre vie avec le yoga</h2>
          <p>Découvrez nos cours adaptés à tous les niveaux, dans un cadre unique inspiré de la culture marocaine. Une expérience de bien-être complète qui nourrit le corps et l'esprit.</p>
          <Button to="/experiences">Voir nos cours</Button>
        </CTAContent>
      </CTASection>

      <Section>
        <SectionTitle>Nos Meilleures Expériences</SectionTitle>
        <CarouselContainer>
          <CarouselButton className="prev" onClick={prevSlide}>‹</CarouselButton>
          <CarouselButton className="next" onClick={nextSlide}>›</CarouselButton>
          <CarouselTrack style={{ transform: `translateX(-${currentSlide * 20}%)` }}>
            {topExperiences.map(experience => (
              <CarouselItem key={experience.id}>
                <ExperienceCard experience={experience} />
              </CarouselItem>
            ))}
          </CarouselTrack>
        </CarouselContainer>
      </Section>

      <Section>
        <SectionTitle>Nos Expériences</SectionTitle>
        <Grid>
          {experiences.slice(0, 6).map(experience => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </Grid>
      </Section>
    </div>
  );
};

export default Home; 