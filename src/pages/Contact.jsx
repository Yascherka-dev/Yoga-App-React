import styled from 'styled-components';
import { useState } from 'react';

const ContactContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const HeroSection = styled.div`
  text-align: center;
  padding: 4rem 0;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80');
  background-size: cover;
  background-position: center;
  color: white;
  margin-bottom: 3rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #ffffff;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto;
  color: #ffffff;
`;  

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div`
  h2 {
    color: #333;
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`;

const InfoItem = styled.div`
  margin-bottom: 2rem;

  h3 {
    color: #4a90e2;
    margin-bottom: 0.5rem;
  }

  p {
    color: #666;
    line-height: 1.6;
  }
`;

const ContactForm = styled.form`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  h2 {
    color: #333;
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;

  label {
    display: block;
    margin-bottom: 0.5rem;
    color: #333;
  }

  input,
  textarea {
    width: 100%;
    padding: 0.8rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;

    &:focus {
      outline: none;
      border-color: #4a90e2;
    }
  }

  textarea {
    min-height: 150px;
    resize: vertical;
  }
`;

const SubmitButton = styled.button`
  background: #4a90e2;
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #357abd;
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Ajouter la logique pour envoyer le formulaire à l'API
    // Réinitialiser le formulaire après envoi
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    // Afficher un message de succès (à implémenter)
  };

  return (
    <ContactContainer>
      <HeroSection>
        <Title>Contactez-nous</Title>
        <Subtitle>
          Nous sommes là pour répondre à toutes vos questions et vous accompagner dans votre pratique
        </Subtitle>
      </HeroSection>

      <Grid>
        <ContactInfo>
          <h2>Informations de Contact</h2>
          <InfoItem>
            <h3>Adresse</h3>
            <p>123 Rue du Yoga<br />75001 Paris, France</p>
          </InfoItem>
          <InfoItem>
            <h3>Téléphone</h3>
            <p>+33 1 23 45 67 89</p>
          </InfoItem>
          <InfoItem>
            <h3>Email</h3>
            <p>contact@zharzen.com</p>
          </InfoItem>
          <InfoItem>
            <h3>Horaires d'ouverture</h3>
            <p>Lundi - Vendredi : 7h00 - 21h00<br />
            Samedi : 8h00 - 19h00<br />
            Dimanche : 9h00 - 17h00</p>
          </InfoItem>
        </ContactInfo>

        <ContactForm onSubmit={handleSubmit}>
          <h2>Envoyez-nous un message</h2>
          <FormGroup>
            <label htmlFor="name">Nom complet</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="subject">Sujet</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <SubmitButton type="submit">Envoyer le message</SubmitButton>
        </ContactForm>
      </Grid>
    </ContactContainer>
  );
};

export default Contact; 