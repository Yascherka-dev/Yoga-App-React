import { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useFetch } from '../hooks/useFetch';
import { endpoints } from '../api';
import Reservation from '../components/Reservation';
import '../styles/ExperienceDetailPage.css';

const DetailContainer = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1rem;
`;

const ExperienceHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 400px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    height: 300px;
  }
`;

const InfoContainer = styled.div`
  padding: 2rem;

  h1 {
    margin: 0 0 1rem;
    font-size: 2rem;
    color: #333;
  }

  .price {
    font-size: 1.5rem;
    color: #4a90e2;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  .category {
    display: inline-block;
    background: #e3f2fd;
    color: #4a90e2;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    margin-bottom: 1rem;
  }

  .description {
    color: #666;
    line-height: 1.6;
    margin-bottom: 2rem;
  }
`;

const BookButton = styled.button`
  padding: 1rem 2rem;
  background: #4a90e2;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background 0.3s ease;
  width: 100%;
  margin-top: 1rem;

  &:hover {
    background: #357abd;
  }
`;

const ExperienceDetail = () => {
  const { id } = useParams();
  const { data: experience, loading, error } = useFetch(`${endpoints.experiences}/${id}`);
  const [showReservation, setShowReservation] = useState(false);
  const [reservationSuccess, setReservationSuccess] = useState(false);

  const handleBookClick = () => {
    console.log('Experience avant ouverture du modal:', experience);
    setShowReservation(true);
  };

  const handleReservationSuccess = () => {
    setShowReservation(false);
    setReservationSuccess(true);
  };

  if (loading) {
    return <div>Chargement...</div>;
  }

  if (error) {
    return <div>Une erreur est survenue lors du chargement de l'expérience.</div>;
  }

  if (!experience) {
    return <div>Expérience non trouvée.</div>;
  }

  return (
    <DetailContainer>
      <ExperienceHeader>
        <ImageContainer>
          <img src={experience.image} alt={experience.title} />
        </ImageContainer>
        <InfoContainer>
          <h1>{experience.title}</h1>
          <div className="price">{experience.price} €</div>
          <div className="category">{experience.category}</div>
          <p className="description">{experience.description}</p>
          <BookButton onClick={() => setShowReservation(true)}>
            Réserver cette expérience
          </BookButton>
        </InfoContainer>
      </ExperienceHeader>

      {showReservation && (
        <Reservation
          experience={experience}
          onClose={() => setShowReservation(false)}
          onSuccess={handleReservationSuccess}
        />
      )}

      {reservationSuccess && (
        <div style={{ 
          position: 'fixed', 
          top: '20px', 
          right: '20px', 
          background: '#4CAF50', 
          color: 'white', 
          padding: '1rem', 
          borderRadius: '5px',
          zIndex: 1000 
        }}>
          Réservation effectuée avec succès !
        </div>
      )}
    </DetailContainer>
  );
};

export default ExperienceDetail; 