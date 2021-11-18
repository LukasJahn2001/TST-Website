
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


const kalenderdata = [
    {
        year: 2022,
        day: 29,
        month: 1,
        monthName: "Jan",
        time: "tbd",
        name: "Bayrische Meisterschaft Halle weibliche U16",
        place: "Wunsiedel",
        group: "Jugend Faustball"
    },
    {
        year: 2022,
        day: 30,
        month: 1,
        monthName: "Jan",
        time: "tbd",
        name: "Bayrische Meisterschaft Halle männliche U16",
        place: "Wunsiedel",
        group: "Jugend Faustball"
    },
    {
        year: 2022,
        day: 12,
        month: 3,
        monthName: "Mär",
        time: "tbd",
        name: "Jahreshauptversammlung der TST",
        place: "Thiersheim",
        group: "All"
    },
    {
        year: 2022,
        day: 4,
        month: 6,
        monthName: "Jun",
        time: "tbd",
        name: "Sommerfest \"10 Jahre TST\" und Vereinsheimeinweihung",
        place: "Thiersheim",
        group: "All"
    },
    {
        year: 2022,
        day: 3,
        month: 9,
        monthName: "Sep",
        time: "tbd",
        name: "TST-Faustball-Gaudi-Tunier",
        place: "Thiersheim",
        group: "All"
    },
    {
        year: 2022,
        day: 10,
        month: 9,
        monthName: "Sep",
        time: "tbd",
        name: "Ausweichtermin TST-Faustball-Gaudi-Tunier",
        place: "Thiersheim",
        group: "All"
    },
    {
        year: 2022,
        day: 27,
        month: 12,
        monthName: "Dez",
        time: "tbd",
        name: "Faustballer-Weihnachtsfeier",
        place: "Thiersheim",
        group: "All"
    },
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
              <Route path={"/verein/vorstand"}>
                <Vorstand/>
              </Route>
            <Route path={"/verein/kalender"}>
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
