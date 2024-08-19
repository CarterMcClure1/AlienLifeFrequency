import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import React, { useEffect, useState } from 'react';
import Home from './pages/Home';
import Intro from './pages/Intro';
import Extras from "./pages/Extras"
import Register from "./pages/Register"
import { IonIcon, IonLabel } from '@ionic/react';
import { homeOutline, personOutline, settingsOutline, listOutline, logInOutline, musicalNote } from 'ionicons/icons';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Music from "./pages/Music"


setupIonicReact();

const App: React.FC = () => {
  const [firstTimeUser, setFirstTimeUser] = useState<boolean>(false);

  useEffect(() => {
    // Check local storage for the first time user flag
    const isFirstTime = localStorage.getItem('firstTimeUser');

    // If first time user flag is not set, set it and update state
    if (!isFirstTime) {
      setFirstTimeUser(true);
      localStorage.setItem('firstTimeUser', 'true');
    }
  }, []);

  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            <Route exact path="/home" component={Home} />
            <Route exact path="/intro" component={Intro} />
            <Route exact path="/Extras" component={Extras} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/music" component={Music} />
            <Route exact path="/" render={() => <Redirect to="/home" />} />
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="home" href="/home">
              <IonIcon icon={homeOutline} />
              <IonLabel>Home</IonLabel>
            </IonTabButton>
            <IonTabButton tab="Music" href="/music">
              <IonIcon icon={musicalNote} />
              <IonLabel>Music</IonLabel>
            </IonTabButton>
            <IonTabButton tab="extras" href="/extras">
              <IonIcon icon={settingsOutline} />
              <IonLabel>Extras</IonLabel>
            </IonTabButton>
            
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};


export default App;

