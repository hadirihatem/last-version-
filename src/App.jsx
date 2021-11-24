import { useContext } from "react";
import Appbar from "./components/navbar/Appbar";
import { ThemeContext } from "./context";

import Produits from "./components/Produits/Produits";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Offres from "./components/Nosoffres/Offres";
import Secteurs from "./components/Secteurs/Secteurs";
import Contact from "./components/Contact/Contact";
import './App.css';
import Home from "./components/home/Home";


const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div   style={{
      backgroundColor: darkMode ? "#222" : "white",
      color: darkMode && "white",
    }} >
      
      <Router>
      
          <Appbar />
         
          <Switch>
          <Route exact path="/" component={Home}/>
           
            <Route path="/offres" component={Offres}/>
            <Route path="/secteurs" component={Secteurs}/>
            <Route path="/produits" component={Produits}/>
            <Route path="/contact" component={Contact}/>
          
          </Switch>
      
      </Router>
    </div>
  );
};

export default App;
