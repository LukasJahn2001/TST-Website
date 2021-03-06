
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Footer from "./components/navbar/Footer";
import Vorstand from "./components/verein/vorstand/Vorstand";
import Header from "./components/navbar/Header";
import Startseite from "./components/startseite/Startseite";
import Geschichte from "./components/verein/geschichte/Geschichte";
import {Alert, Image} from "react-bootstrap";

import platz from "./fussballplatz.png"
import Datenschutz from "./components/impressumDatenschutz/Datenschutz";
import Impressum from "./components/impressumDatenschutz/Impressum";
import Foerderverein from "./components/verein/förderverein/Foerderverein";
import Kalender from "./components/informationen/kalender/Kalender";
import Mitgliedschaft from "./components/verein/mitgliedschaft/Mitgliedschaft";
import Partner from "./components/verein/partner/Partner";
import Sportanlagen from "./components/informationen/sportanlagen/Sportanlagen";
import Dateien from "./components/informationen/dateien/Dateinen";
import DM from "./components/DM/DM";


function App() {
  return (
      <>
          <Alert variant={"warning"}>
              <Alert.Heading>Hinweis!</Alert.Heading>
              Diese Website ist noch nicht 100% fertiggestellt und nicht alle Informationen sind korrekt!
          </Alert>
        <Image src={platz} fluid />
        <Header/>
        <Router>
            <Switch>
              <Route exact path={"/"}>
                <Startseite/>
              </Route>
              <Route path={"/verein/geschichte"}>
                <Geschichte/>
              </Route>
            <Route path={"/verein/vorstand"}>
                <Vorstand/>
            </Route>
            <Route path={"/informationen/dateien"}>
                <Dateien/>
            </Route>
            <Route path={"/informationen/kalender"}>
                <Kalender/>
            </Route>
            <Route path={"/informationen/sportanlagen"}>
                <Sportanlagen/>
            </Route>
            <Route path={"/website/datenschutz"}>
                <Datenschutz/>
            </Route>
            <Route path={"/website/impressum"}>
                <Impressum/>
            </Route>
            <Route path={"/verein/mitgliedschaft"}>
                <Mitgliedschaft/>
            </Route>
            <Route path={"/verein/partner"}>
                <Partner/>
            </Route>
            <Route path={"/verein/foerderverein"}>
                <Foerderverein/>
            </Route>
            <Route path={"/dm2023"}>
                <DM/>
            </Route>
            </Switch>
        </Router>
        <Footer/>
      </>
  );
}

export default App;
