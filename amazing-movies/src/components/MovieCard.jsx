import Actor from "./Actor";

function MovieCard({
  poster,
  title = "missing movie...",
  releaseYear = "0",
  leadActorAvatar,
  leadActorName,
  supportingActorAvatar,
  supportingActorName,
}) {
  return (
    <>
      <div className="movieCard">
        <img src={poster} />
        <h2>
          {title} <span>{releaseYear}</span>
        </h2>
        <Actor avatar={leadActorAvatar} name={leadActorName} />
        <Actor avatar={supportingActorAvatar} name={supportingActorName} />
      </div>
    </>
  );
}

export default MovieCard;
