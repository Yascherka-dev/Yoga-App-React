export const endpoints = {
  experiences: 'https://zharzen.b2.celiabourial.com/api/v1/experiences',
  reservations: 'https://zharzen.b2.celiabourial.com/api/v1/reservations',
  categories: 'https://zharzen.b2.celiabourial.com/api/v1/categories'
};

export const getExperiences = async () => {
  try {
    const response = await fetch(endpoints.experiences);
    if (!response.ok) {
      throw new Error('Erreur lors de la récupération des expériences');
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
};

export const createReservation = async (reservationData) => {
  try {
    const response = await fetch(endpoints.reservations, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reservationData)
    });
    
    if (!response.ok) {
      throw new Error('Erreur lors de la création de la réservation');
    }
    
    return await response.json();
  } catch (error) {
    throw error;
  }
}; 