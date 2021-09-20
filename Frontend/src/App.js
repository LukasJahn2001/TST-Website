
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Footer from "./components/footer/Footer";
import Vorstand from "./components/vorstand/Vorstand";
import Navb from "./components/navbar/Navb";
import Startseite from "./components/startseite/Startseite";
import Geschichte from "./components/geschichte/Geschichte";
import {Image} from "react-bootstrap";

import platz from "./fussballplatz.png"
import Kalender from "./components/kalender/kalender";
import Datenschutz from "./components/datenschutz/Datenschutz";
import Impressum from "./components/impressum/Impressum";
import Turnen from "./components/sparten/turnen/Turnen";
import Leichtathletik from "./components/sparten/leichtathletik/Leichtathletik";
import MaennerFb from "./components/sparten/faustball/Herren/MaennerFb";
import FrauenFb from "./components/sparten/faustball/Frauen/FrauenFb";
import JugendFb from "./components/sparten/faustball/Jugend/JugendFb";
import Beitritt from "./components/beitritt/Beitritt";
import Foerderverein from "./components/foederverein/Foerderverein";


function App() {
  return (
      <>
          <Image src={platz} fluid />
        <Navb/>
        <Router>
              <Route path={"/startseite"}>
                <Startseite/>
              </Route>
              <Route path={"/verein/geschichte"}>
                <Geschichte/>
              </Route>
              <Route path={"/verein/vorstand"}>
                <Vorstand/>
              </Route>
            <Route path={"/verein/kalender"}>
                <Kalender/>
            </Route>
            <Route path={"/website/datenschutz"}>
                <Datenschutz/>
            </Route>
            <Route path={"/website/impressum"}>
                <Impressum/>
            </Route>
            <Route path={"/sparten/turnen"}>
                <Turnen/>
            </Route>
            <Route path={"/sparten/leichtathletik"}>
                <Leichtathletik/>
            </Route>
            <Route path={"/sparten/faustball/maenner"}>
                <MaennerFb/>
            </Route>
            <Route path={"/sparten/faustball/frauen"}>
                <FrauenFb/>
            </Route>
            <Route path={"/sparten/faustball/jugend"}>
                <JugendFb/>
            </Route>
            <Route path={"/verein/beitritt"}>
                <Beitritt/>
            </Route>
            <Route path={"/verein/foerderverein"}>
                <Foerderverein/>
            </Route>
        </Router>
        <Footer/>
      </>
  );
}

export default App;
