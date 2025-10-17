import Avatar from "./Avatar";

function Card({ image, name, job, intro, link }) {
  return (
    <>
      <div className="card">
        <Avatar image={image} />
        <div>{name}</div>
        <div>{job}</div>
        <div>{intro}</div>
        <a href={link}>more...</a>
      </div>
    </>
  );
}

export default Card;
