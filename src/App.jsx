import { useEffect, useState } from "react";
import "./App.css";
import Column from "./components/Column/Column";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import PopBrowse from "./components/popups/PopBrowse/PopBrowse";
import PopExit from "./components/popups/PopExit/PopExit";
import PopNewCard from "./components/popups/PopNewCard/PopNewCard";
import { cardList } from "./data";

const statusList = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
];

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [cards, setCards] = useState(cardList);

  function onCardAdd() {
    const card = {
      id: cards.length + 1,
      title: "Новая задача",
      topic: "Web Design",
      date: new Date().toLocaleDateString(),
      status: "Без статуса",
    };

    setCards((prev) => [...prev, card]);
  }

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="wrapper">
      <PopExit />
      <PopNewCard />
      <PopBrowse />

      <Header onCardAdd={onCardAdd} />
      <Main>
        {isLoading ? (
          <div>Загрузка...</div>
        ) : (
          <>
            {statusList.map((status) => (
              <Column
                key={status}
                title={status}
                cardList={cards.filter((card) => card.status === status)}
              />
            ))}
          </>
        )}
      </Main>
    </div>
  );
}
