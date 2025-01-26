import axiosClient from './axiosClient';

export const getCard = async (id: string) => {
  const response = await axiosClient.get(`/api/v1/cards/${id}`);
  return response.data;
};

export const createCard = async (newCard: any) => {
  console.log('axios', newCard);
  const response = await axiosClient.post('/api/v1/cards/', newCard);
  return response.data;
};

export const deleteCard = async (id: string) => {
  const response = await axiosClient.delete(`/api/v1/cards/${id}`);
  return response.data;
}