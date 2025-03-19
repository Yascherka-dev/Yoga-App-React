import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Card = styled.div`
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 1.5rem;
`;

const Title = styled.h3`
  margin: 0 0 1rem;
  font-size: 1.5rem;
  color: #333;
`;

const Description = styled.p`
  color: #666;
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const Details = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
`;

const Price = styled.span`
  font-weight: bold;
  color: #4a90e2;
  font-size: 1.2rem;
`;

const Category = styled.span`
  background: #e3f2fd;
  color: #4a90e2;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.9rem;
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #ffd700;
  font-weight: 500;
  margin: 0.5rem 0;
`;

const RatingNumber = styled.span`
  color: #666;
  font-size: 0.9rem;
`;

const Button = styled(Link)`
  display: block;
  width: 100%;
  padding: 0.8rem;
  background: #4a90e2;
  color: white;
  text-align: center;
  text-decoration: none;
  border-radius: 5px;
  transition: background 0.3s ease;
  
  &:hover {
    background: #357abd;
  }
`;

const ExperienceCard = ({ experience }) => {
  return (
    <Card>
      <Image src={experience.image} alt={experience.title} />
      <Content>
        <Title>{experience.title}</Title>
        <Description>{experience.description}</Description>
        <Details>
          <Price>{experience.price}€</Price>
          <Category>{experience.category}</Category>
        </Details>
        <Rating>
          {'★'.repeat(Math.round(experience.rating))}
          {'☆'.repeat(5 - Math.round(experience.rating))}
          <RatingNumber>({experience.rating})</RatingNumber>
        </Rating>
        <Button to={`/experiences/${experience.id}`}>
          Voir les détails
        </Button>
      </Content>
    </Card>
  );
};

export default ExperienceCard; 