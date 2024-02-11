import Card from "../Card/Card";

export default function Column({ title }) {
  return (
    <div className="main__column column">
      <div className="column__title">
        <p>{title}</p>
      </div>
      <div className="cards">
        <Card title={"Новая задача"} topic={"Research"} date={"20.10.2022"} />
        <Card
          title={"Еще одна новая задача"}
          topic={"Research"}
          date={"20.10.2023"}
        />
      </div>
    </div>
  );
}
