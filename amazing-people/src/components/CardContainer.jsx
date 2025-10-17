import Card from "./Card";

function CardContainer() {
  return (
    <>
      <ul>
        <li>
          <Card
            image="https://placecage.lucidinternets.com/80/80"
            name="John Doe"
            job="Builder"
            intro="Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Consequuntur, id enim qui sed blanditiis porro ut exercitationem
          dignissimos aliquam facere praesentium assumenda placeat ipsa
          similique maiores accusamus incidunt, necessitatibus voluptatem."
            link="#"
          />
        </li>
        <li>
          <Card
            image="https://placekittens.com/50/50"
            name="Joe Cat"
            job="Napper"
            intro="Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Consequuntur, id enim qui sed blanditiis porro ut exercitationem"
            link="#"
          />
        </li>
        <li>
          <Card
            image="https://placekittens.com/50/50"
            name="Joe Cat"
            job="Napper"
            intro="Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Consequuntur, id enim qui sed blanditiis porro ut exercitationem"
            link="#"
          />
        </li>
      </ul>
    </>
  );
}

export default CardContainer;
