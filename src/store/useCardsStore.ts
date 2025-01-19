import { create } from 'zustand'

interface Card {
  id: number;
  title: string;
}

interface CardsState {
  cards: Card[];
  setCards: (cards: Card[]) => void;
}

export const useCardsStore = create<CardsState>((set) => ({
  cards: [],
  setCards: (cards: Card[]) => set({ cards }),
}))
