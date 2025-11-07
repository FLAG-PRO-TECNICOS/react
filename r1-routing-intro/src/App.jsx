import { Route, Switch } from "wouter";
import HomeView from "./views/HomeView";
import AboutView from "./views/AboutView";
import GalleryView from "./views/GalleryView";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import UserProfileView from "./views/UserProfileView";
import PokemonDetailsView from "./views/PokemonDetailsView";
import PokemonView from "./views/PokemonView";

function App() {
  return (
    <>
      <Header />
      <Navigation />
      <Switch>
        <Route path="/" component={HomeView} />
        <Route path="/about" component={AboutView} />
        <Route path="/gallery" component={GalleryView} />
        <Route path="/user/:username" component={UserProfileView} />
        <Route path="/pokemon" component={PokemonView} />
        <Route path="/pokemon/:pokemon" component={PokemonDetailsView} />
      </Switch>
    </>
  );
}

export default App;
