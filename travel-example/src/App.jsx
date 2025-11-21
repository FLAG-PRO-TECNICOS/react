import data from "./assets/data.json";
import { Link, Route, Switch } from "wouter";
import HomeView from "./views/HomeView";
import CityView from "./views/CityView";

// const menuItems = [
//   { label: "Home" },
//   { label: "Cities" },
//   { label: "Traveler" },
//   { label: "..." },
// ];

function App() {
  return (
    <>
      <ul>
        {data.map((value) => (
          <li>
            <Link href={value.url}>{value.city}</Link>
          </li>
        ))}
      </ul>

      <Switch>
        <Route path="/" component={HomeView} />
        <Route path="/cities/:cityname" component={CityView} />
      </Switch>
    </>
  );
}

export default App;
