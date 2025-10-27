function Movie({ info }) {
  return (
    <>
      <div>
        <div>{info.title}</div>
        <div>{info.episode_id}</div>
        <div>{info.director}</div>
        <div>{info.release_date.substring(0, 4)}</div>
        <hr />
      </div>
    </>
  );
}

export default Movie;
