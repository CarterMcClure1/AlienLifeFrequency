import { IonContent, IonHeader, IonPage, IonItem, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonMenu, IonMenuToggle, IonList, IonSplitPane, IonIcon, IonButton, IonRouterOutlet } from '@ionic/react';
import React from 'react'; 
import { homeOutline, newspaperOutline, logOutOutline, menuOutline} from 'ionicons/icons'
import './Intro.css';
import { megaphoneOutline } from 'ionicons/icons';
import { Route } from 'react-router';

import Home from './Home';

const Intro: React.FC = () => {
  const paths = [
    { name: 'Home', url: 'app/home', icon: homeOutline },
    { name: 'Intro', url: 'app/intro', icon: newspaperOutline }
]

const announcements = [
  { id: 1, title: 'New Album Release!', content: 'Our new album "Dreamscape" is out now. Listen on all major platforms.' },
  { id: 2, title: 'Upcoming Tour', content: 'Exciting news! We\'re going on tour next month. Stay tuned for dates and locations.' },
  { id: 3, title: 'Exclusive Merchandise', content: 'Check out our exclusive merchandise collection available now on our website.' },
];

return (
  <IonPage>
    {/* Include the Menu component if needed */}
    <IonHeader>
      <IonToolbar>
        <div className="logo-title-container">
          <IonTitle className="title">Alien Life Frequency</IonTitle>
          <img src='./images/alienlifefreqapp.png' alt="image" className="logo" />
        </div>
      </IonToolbar>
    </IonHeader>
    <IonContent fullscreen>
        <div className="announcements-box">
          <IonIcon icon={megaphoneOutline} className="announcement-icon" />
          <h2 className="box-title">Announcements</h2>
          {announcements.map((announcement) => (
            <IonItem key={announcement.id} className="announcement-item">
              <h3>{announcement.title}</h3>
              <p>{announcement.content}</p>
            </IonItem>
          ))}
          <IonButton expand="block" color="secondary" routerLink="/announcements">View All Announcements</IonButton>
        </div>
      </IonContent>
  </IonPage>
);
};

export default Intro;
