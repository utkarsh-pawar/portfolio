import React,{ Suspense, lazy} from 'react'
// import Header from "./components/Header";
import { Switch, Route } from "react-router-dom";
import BriefInfo from './components/BriefInfo';
import Skills from './components/Skills';
import styles from "./styles/App.module.css";
const Header = lazy(() => import('./components/Header'))
const Home = lazy(() => import('./components/Home'))
// import Home from "./components/Home";
// import Contact from "./components/Contact";
const Error = lazy(() => import('./components/Error') )
const Contact = lazy(() => import('./components/Contact'))
const Projects = lazy(() => import('./components/Projects'))

function App() {
  return (
    <Suspense fallback = {<div style={{'width':'100vw','height':'100vh','display':'grid','place-content':'center','font-size':'2.5rem'}}>Loading...</div>}>
    <div className={styles.app}>
      <Header />
      <Switch>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/">
          <Home />
          <BriefInfo />
          <Skills />
          <Projects />
        </Route>
        <Route>
          <Error />
        </Route>
      </Switch>
    </div>
    </Suspense>
  );
}

export default App;
