import { useState } from 'react';
import styled from 'styled-components';
import { createReservation } from '../api';
import '../styles/Reservation.css';

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  width: 90%;
  max-width: 500px;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #666;
  
  &:hover {
    color: #333;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #4a90e2;
  }
`;

const TextArea = styled.textarea`
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  min-height: 100px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: #4a90e2;
  }
`;

const SubmitButton = styled.button`
  padding: 1rem;
  background: #4a90e2;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s ease;
  
  &:hover {
    background: #357abd;
  }
`;

const ErrorMessage = styled.div`
  color: #dc3545;
  margin-top: 0.5rem;
  font-size: 0.9rem;
`;

const SuccessMessage = styled.div`
  color: #28a745;
  margin-top: 0.5rem;
  font-size: 0.9rem;
`;

const Reservation = ({ experience, onClose }) => {
  const [formData, setFormData] = useState({
    userName: '',
    userEmail: '',
    reservationDate: '',
    notes: ''
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    try {
      const reservationData = {
        experienceId: experience.id,
        ...formData
      };

      await createReservation(reservationData);
      setSuccess('Réservation créée avec succès !');
      setTimeout(() => {
        onClose();
      }, 2000);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Modal>
      <ModalContent>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <h2>Réserver {experience.title}</h2>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="userName"
            placeholder="Votre nom"
            value={formData.userName}
            onChange={handleChange}
            required
          />
          <Input
            type="email"
            name="userEmail"
            placeholder="Votre email"
            value={formData.userEmail}
            onChange={handleChange}
            required
          />
          <Input
            type="date"
            name="reservationDate"
            value={formData.reservationDate}
            onChange={handleChange}
            required
          />
          <TextArea
            name="notes"
            placeholder="Informations supplémentaires (allergies, préférences...)"
            value={formData.notes}
            onChange={handleChange}
          />
          {error && <ErrorMessage>{error}</ErrorMessage>}
          {success && <SuccessMessage>{success}</SuccessMessage>}
          <SubmitButton type="submit">Réserver</SubmitButton>
        </Form>
      </ModalContent>
    </Modal>
  );
};

export default Reservation; 