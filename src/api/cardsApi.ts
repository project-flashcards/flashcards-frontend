import axiosClient from './axiosClient';

export const getCard = async (id: string) => {
  const response = await axiosClient.get(`/cards/${id}`);
  return response.data;
};

export const createCard = async (newCard: any) => {
  const response = await axiosClient.post('/cards', newCard);
  return response.data;
};


