function Card({ image, children }) {
  return (
    <>
      <div>
        <h1>I am card</h1>
        <div>{children}</div>
      </div>
    </>
  );
}

export default Card;
