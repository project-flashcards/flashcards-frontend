import { useEffect, useState } from 'react';
import axios from '../api/axiosClient';
import { deleteCard } from '../api/cardsApi';
import { CreateCardModal } from './modals/CreateCardModal';

type Tag = {
  id: string;
  name: string;
};
interface Card {
  title: string;
  description: string;
  tags: Tag[];
  id: string;
}

export default function CardsList() {
  const [cards, setCards] = useState<Card[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    axios.get('api/v1/cards/')
      .then(response => {
        setCards(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the cards!", error);
      });
    console.log('cards', cards)
  }, []);

  return (
    <div className="px-4 sm:px-6 lg:px-8 w-full">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold text-gray-900">Cards</h1>
          <p className="mt-2 text-sm text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            onClick={() => setIsModalOpen(true)}
            type="button"
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add Card
          </button>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Title
                  </th>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3">
                    Tags
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Description
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  </th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-3">
                    <span className="sr-only">Delete</span>

                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {cards && cards.map((card) => (
                  <tr key={card.id} className="even:bg-gray-50">
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                      {card.title}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 flex gap-1 items-center">
                      {card.tags.map((tag) => (
                        <span key={tag.id}>{tag.name}</span>
                      ))}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{card.description}</td>
                    {/* <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{card.role}</td> */}
                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
                      <a href="#" onClick={() => {
                        deleteCard(card.id).then(() => {
                          setCards(cards.filter(c => c.id !== card.id));
                        });
                      }} className="text-indigo-600 hover:text-indigo-900">
                        Delete<span className="sr-only">, {card.title}</span>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <CreateCardModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}