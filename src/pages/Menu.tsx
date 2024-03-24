import { IonContent, IonHeader, IonMenu, IonPage, IonItem, IonTitle, IonToolbar, IonSplitPane, IonRouterOutlet, IonMenuToggle, IonIcon, IonButton, IonMenuButton } from '@ionic/react';
import React from 'react'; 
import { homeOutline, newspaperOutline, logOutOutline, menuOutline} from 'ionicons/icons'
import Intro from './Intro';
import Home from './Home';
import { Route } from 'react-router';


const Menu: React.FC = () => {

    const paths = [
        { name: 'Home', url: 'app/home', icon: homeOutline },
        { name: 'Intro', url: 'app/intro', icon: newspaperOutline }
    ]
  return(
    <IonPage>
    <IonSplitPane contentId="main-content">
    <IonMenu contentId="main-content">
        <IonHeader>

            <IonToolbar>
                <IonTitle></IonTitle>
            </IonToolbar>
        </IonHeader>

        <IonContent>
            {paths.map((item, index) => (
                <IonMenuToggle key={index}>
                    <IonItem routerLink ={item.url} routerDirection="none">
                        <IonIcon icon={item.icon} slot = "start"></IonIcon>
                {item.name}
                </IonItem>
                </IonMenuToggle>
            ))} 
            <IonButton routerLink = '/' routerDirection='back' expand = 'full'>
                <IonIcon icon = {logOutOutline} slot = "start"></IonIcon>
                Logout
            </IonButton>
        </IonContent>
    </IonMenu>
    
        

    <IonRouterOutlet id="main-content" onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                <Route exact path = "/app/intro" component={Intro} />
                <Route exact path = "/app/home" component={Home} />

        
    </IonRouterOutlet>
    
  </IonSplitPane>

  <IonMenuButton slot="start">
                <IonIcon icon={menuOutline} />
            </IonMenuButton>

  </IonPage>
  );
};

export default Menu;
