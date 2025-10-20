const categories = [
  {
    name: "Fashion",
    link: "/fashion",
  },
  {
    name: "Childrens Toys",
    link: "/childrens-toys",
  },
  {
    name: "Videogames",
    link: "/videogames",
  },
  {
    name: "Electronics",
    link: "/electronics",
  },
];

function Menu() {
  return (
    <>
      <ul>
        {categories.map((value) => (
          <li>
            <a href={value.link}>{value.name}</a>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Menu;
