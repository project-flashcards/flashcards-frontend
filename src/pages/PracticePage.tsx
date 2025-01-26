import { GetRandomCard } from "../api/cardsApi"
import { useEffect, useState } from "react";

function PracticePage() {
  const [card, setCard] = useState<{ title: string; description: string } | null>(null);
  const [isHideDescription, setIsHideDescription] = useState(true);

  const fetchRandomCard = () => {
    GetRandomCard()
      .then(response => {
        setCard(response);
      })
      .catch(error => {
        console.error("There was an error fetching the cards!", error);
      })
      .finally(() => {
        setIsHideDescription(true);
      });
  };

  useEffect(() => {
    fetchRandomCard();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Practice Page</h1>
      <p>Practice page</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={fetchRandomCard}>
        Random Card </button>
      <div className="mt-8 border-red-100 border-2 p-4 rounded-md">
        {card && <>
          <div className="flex flex-col gap-4 items-center min-h-20">
            <h2 className="text-lg font-semibold cursor-pointer border-b-2 w-full text-center p-2" onClick={() => setIsHideDescription(false)}>{card.title}</h2>
            <p className={isHideDescription ? 'hidden' : ''}>{card.description}</p>
          </div>
        </>}
      </div>
    </div>
  )
}

export default PracticePage
