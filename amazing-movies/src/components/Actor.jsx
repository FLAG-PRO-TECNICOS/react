function Actor({ avatar, name }) {
  return (
    <>
      <div className="actor">
        <img src={avatar} />
        <div>{name}</div>
      </div>
    </>
  );
}

export default Actor;
