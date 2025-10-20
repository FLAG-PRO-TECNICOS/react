const categories = ["Fashion", "Toys", "Videogames", "Electronics"];

function SimpleMenu() {
  return (
    <>
      {/* <ul>
        <li><a href="#">Fashion</a></li>
        <li><a href="#">Toys</a></li>
        <li><a href="#">Videogames</a></li>
        <li><a href="#">Electronics</a></li>
      </ul> */}

      <ul>
        {categories.map(function (value) {
          return (
            <>
              <li>
                <a href="#">{value}</a>
              </li>
            </>
          );
        })}
      </ul>
    </>
  );
}

export default SimpleMenu;
