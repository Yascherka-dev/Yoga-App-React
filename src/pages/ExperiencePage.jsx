import { useState } from 'react';
import styled from 'styled-components';
import ExperienceCard from '../components/ExperienceCard';
import { useFetch } from '../hooks/useFetch';
import { endpoints } from '../api';
import '../styles/ExperiencePage.css';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1rem;
`;

const Title = styled.h1`
  text-align: center;
  color: #333;
  margin-bottom: 2rem;
`;

const FilterContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const FilterButton = styled.button`
  padding: 0.5rem 1rem;
  border: 1px solid #4a90e2;
  background: ${props => props.$isActive ? '#4a90e2' : 'white'};
  color: ${props => props.$isActive ? 'white' : '#4a90e2'};
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.$isActive ? '#357abd' : '#e3f2fd'};
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

const ExperiencePage = () => {
  const { data: experiences, loading, error } = useFetch(endpoints.experiences);
  const [selectedCategory, setSelectedCategory] = useState('all');

  if (loading) {
    return <div>Chargement...</div>;
  }

  if (error) {
    return <div>Une erreur est survenue lors du chargement des expériences.</div>;
  }

  const categories = ['all', ...new Set(experiences?.map(exp => exp.category) || [])];
  const filteredExperiences = selectedCategory === 'all'
    ? experiences
    : experiences?.filter(exp => exp.category === selectedCategory);

  return (
    <PageContainer>
      <Title>Nos Expériences</Title>
      <FilterContainer>
        {categories.map(category => (
          <FilterButton
            key={category}
            $isActive={selectedCategory === category}
            onClick={() => setSelectedCategory(category)}
          >
            {category === 'all' ? 'Toutes' : category}
          </FilterButton>
        ))}
      </FilterContainer>
      <Grid>
        {filteredExperiences?.map(experience => (
          <ExperienceCard key={experience.id} experience={experience} />
        ))}
      </Grid>
    </PageContainer>
  );
};

export default ExperiencePage; 