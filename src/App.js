import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Stack from "./components/Stack";
import Education from "./components/Education";
import ProExp from "./components/ProExp";
import PersExp from "./components/PersExp";
import Projects from "./components/Projects";
import Links from "./components/Links";

import Resume from "./components/Resume";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/resume">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <Navigation />
      <Header />
      <Stack />
      <Education />
      <ProExp />
      <PersExp />
      <Projects />
      <Links />
    </div>
  );
}

function About() {
  return (
    <div>
      <Resume />
    </div>
  );
}

export default App;
