import CardItem from "../components/CardItem"
import { useEffect, useState } from "react";
import axios from "../api/axiosClient";

function CardsPage() {
      const [card, setCard] = useState<{ title: string; description: string } | null>(null);

      useEffect(() => {
        axios.get('/cards/ff32e99f-575b-473f-bc82-ca2fb46ae76c')
          .then(response => {
            setCard(response.data);
          })
          .catch(error => {
            console.error("There was an error fetching the cards!", error);
          });
          console.log('card', card)
      }, []);

      return (
    <div className="p-4 flex flex-col w-full gap-4 items-center">
      <h1 className="text-xl font-bold">Cards Page</h1>
      <p>Cards page</p>
      {card && <CardItem title={card.title} description={card.description} />}
    </div>
  )
}

export default CardsPage
