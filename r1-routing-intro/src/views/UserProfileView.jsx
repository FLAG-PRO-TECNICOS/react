function UserProfileView({ params }) {
  return (
    <>
      <h1>SOME GUY!</h1>
      <h2>hello {params.username}</h2>
    </>
  );
}

export default UserProfileView;
