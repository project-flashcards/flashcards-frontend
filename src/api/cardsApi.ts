import axiosClient from './axiosClient';

export const getCards = async () => {
  const response = await axiosClient.get('/cards');
  return response.data;
};

export const createCard = async (newCard: any) => {
  const response = await axiosClient.post('/cards', newCard);
  return response.data;
};


