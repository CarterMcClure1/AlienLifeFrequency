import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import React, { useEffect, useState } from 'react';
import Home from './pages/Home';
import Intro from './pages/Intro';
import Login from "./pages/Login"
import Register from "./pages/Register"

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
import Menu from './pages/Menu';


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
        <IonRouterOutlet onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
         <Route exact path="/" component={Home} />
         <Route exact path="/intro" component={Intro} />
         <Route exact path="/login" component={Login}  />
         <Route exact path="/register" component={Register}  />
         <Route path="/app" component={Menu} />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

