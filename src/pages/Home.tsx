import { IonContent, IonHeader, IonItem, IonPage, IonTitle, IonToolbar, IonButton, useIonRouter } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { useHistory } from 'react-router-dom';
import './Home.css';

const Home: React.FC = () => {
  const navigation = useIonRouter();
  const history = useHistory(); // Initialize useHistory

  // Function to handle button click and navigate to Intro page
  const goToIntroPage = () => {
    navigation.push('/intro', 'forward', 'replace')
  };
  

  return (
    <IonPage>
      <IonHeader>
      <IonToolbar className="toolbar">
      <div className="logo-title-container">
    <img src='./images/alienlifefreqapp.png' alt="image" className="logo" />
    <IonTitle className="title">Alien Life Frequency</IonTitle>
  </div>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="centered-content">
          
          <IonItem> This will be the home page</IonItem>
        </div>
        <IonButton expand="full" onClick={() => goToIntroPage()}>Go to Intro</IonButton>
        
      </IonContent>
    </IonPage>
  );
};

export default Home;
