
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Footer from "./components/navbar/Footer";
import Vorstand from "./components/vorstand/Vorstand";
import Header from "./components/navbar/Header";
import Startseite from "./components/startseite/Startseite";
import Geschichte from "./components/geschichte/Geschichte";
import {Image} from "react-bootstrap";

import platz from "./fussballplatz.png"
import Infos from "./components/infos/Infos";
import Datenschutz from "./components/datenschutz/Datenschutz";
import Impressum from "./components/impressum/Impressum";
import Turnen from "./components/sparten/turnen/Turnen";
import Leichtathletik from "./components/sparten/leichtathletik/Leichtathletik";
import MaennerFb from "./components/sparten/faustball/Herren/MaennerFb";
import FrauenFb from "./components/sparten/faustball/Frauen/FrauenFb";
import JugendFb from "./components/sparten/faustball/Jugend/JugendFb";
import Beitritt from "./components/beitritt/Beitritt";
import Foerderverein from "./components/foederverein/Foerderverein";
import KidsFb from "./components/sparten/faustball/Kids/KidsFb";
import WeitereSeiten from "./components/infos/WeitereSeiten";


const kalenderdata = [
    {
        year: 2021,
        day: 22,
        month: 1,
        time: "11:30",
        name: "Vereinsfest",
        place: "Thiersheim",
        group: "Alle"
    },
    {
        year: 2021,
        day: 23,
        month: 1,
        time: "11:15",
        name: "Spieltag Kids",
        place: "Thiersheim",
        group: "Kids Faustball"
    },
    {
        year: 2021,
        day: 22,
        month: 1,
        time: "19:00",
        name: "Spieltag",
        place: "Thiersheim",
        group: "Frauen Faustball"
    }
];


function App() {
  return (
      <>
        <Image src={platz} fluid />
        <Header/>
        <Router>
              <Route path={"/startseite"}>
                <Startseite/>
              </Route>
              <Route path={"/verein/geschichte"}>
                <Geschichte/>
              </Route>
            <Route path={"/verein/aktuelles"}>
                <WeitereSeiten/>
            </Route>
              <Route path={"/verein/vorstand"}>
                <Vorstand/>
              </Route>
            <Route path={"/verein/informationen"}>
                <Infos kalenderdata={kalenderdata}/>
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
                <MaennerFb kalenderdata={kalenderdata}/>
            </Route>
            <Route path={"/sparten/faustball/frauen"}>
                <FrauenFb kalenderdata={kalenderdata}/>
            </Route>
            <Route path={"/sparten/faustball/jugend"}>
                <JugendFb kalenderdata={kalenderdata}/>
            </Route>
            <Route path={"/sparten/faustball/kids"}>
                <KidsFb kalenderdata={kalenderdata}/>
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
