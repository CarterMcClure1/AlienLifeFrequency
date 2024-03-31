import { IonContent, IonHeader, IonItem, IonIcon, IonPage, IonTitle, IonToolbar, IonToggle, IonButton, useIonRouter, IonMenu, IonMenuButton, IonSplitPane, IonMenuToggle, IonRouterOutlet, IonCard, IonCardTitle, IonCardContent, IonCardHeader } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { Route, useHistory } from 'react-router-dom';
import { homeOutline, newspaperOutline, logOutOutline, menuOutline, megaphoneOutline} from 'ionicons/icons'
import './Home.css';
import Menu from "./Menu"
import Intro from './Intro';

const Home: React.FC = () => {

  const paths = [
    { name: 'Home', url: 'app/home', icon: homeOutline },
    { name: 'Intro', url: 'app/intro', icon: newspaperOutline }
]

const announcements = [
  { id: 1, title: 'New Album Release!', content: 'Our new album "Dreamscape" is out now. Listen on all major platforms.' },
  { id: 2, title: 'Upcoming Tour', content: 'Exciting news! We\'re going on tour next month. Stay tuned for dates and locations.' },
  { id: 3, title: 'Exclusive Merch', content: 'Check out our exclusive merchandise collection available now on our website.' },
];

  const navigation = useIonRouter();
  const history = useHistory(); // Initialize useHistory

  // Function to handle button click and navigate to Intro page
  const goToIntroPage = () => {
    navigation.push('/intro', 'forward', 'replace')
  };
  

  return (
    
    <IonPage>
      
       {/* Include the Menu component here? */}
      <IonHeader>
      <IonToolbar className="toolbar">
      <div className="logo-title-container">
    <IonTitle className="title">Alien Life Frequency
    </IonTitle>
    <img src='./images/alienlifefreqapp.png' alt="image" className="logo" />
    
   {/*<IonToggle class="toggle">Light Mode</IonToggle>*/}

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
          
        </div>
      
        <IonCard className="customOrbitronFont" color = "dark">
  <IonCardHeader>
    <IonCardTitle>Check Out Our Most Popular Song!</IonCardTitle>
  </IonCardHeader>
  <IonCardContent>
    <audio src="./assets/audio/test.mp3" controls></audio>
  </IonCardContent>
</IonCard>
      
<IonCard>
        <IonHeader>
          <IonCardTitle>Watch Our Most Recent Video!</IonCardTitle>
        </IonHeader>
        <IonCardContent>
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/7WWxB4xNeO8?si=G-iJ2tWyS-R6Gw11"
       title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
       referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

        </IonCardContent>
      </IonCard> 
        
      </IonContent>
      
      
      
    </IonPage>
    
  );
};

export default Home;

