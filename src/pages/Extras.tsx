import React, { useState } from 'react';
import { IonContent, IonInput, IonButton, IonPage, IonHeader, IonToolbar, IonMenuButton, IonButtons, IonTitle, IonAlert, useIonRouter, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonLabel, IonList, IonToggle, IonIcon } from '@ionic/react';
import { callOutline, helpCircleOutline, informationCircleOutline, logInOutline, optionsOutline } from 'ionicons/icons';
import './Home.css';
import alienLifeFreqLogo from '../assets/images/alienlifefreqapp.png';

const Extras: React.FC = () => {
  const navigation = useIonRouter();
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showAlert, setShowAlert] = useState<boolean>(false);
  
  const handleLogin = () => {
    // Perform your login logic here
    // For demonstration purposes, I'm just checking if username and password are 'admin'
    if (username === 'admin' && password === 'adminpass!') {
      // Redirect to home page or perform necessary actions upon successful login
      navigation.push('/', 'forward', 'replace');
    } else {
      setShowAlert(true);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="toolbar">
          <div className="logo-title-container">
            <IonTitle className="title">Alien Life Frequency</IonTitle>
            <img src={alienLifeFreqLogo} alt="Logo" className="logo" />
          </div>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>About the Band</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>We are Alien Life Frequency, Tab on bass and Francesco on keyboard, original beats, effects, and video. Sometimes we may have free-style, impromptu videos posted. Our music is original, created beat by beat and copyrighted. We provide an audio-visual creative experience. Our music is inspired by the universe and life beyond our own.</p>
          </IonCardContent>
        </IonCard>

        

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Preferences</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonList>
              <IonItem>
                <IonLabel>Enable Notifications</IonLabel>
                <IonToggle slot="end" />
              </IonItem>
              <IonItem>
                <IonLabel>Dark Mode</IonLabel>
                <IonToggle slot="end" />
              </IonItem>
            </IonList>
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Contact Us</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonItem>
              <IonIcon icon={callOutline} slot="start" />
              <IonLabel>(123) 456-7890</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>Email: contact@alienlifefrequency.com</IonLabel>
            </IonItem>
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Help</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonItem>
              <IonIcon icon={helpCircleOutline} slot="start" />
              <IonLabel>Frequently Asked Questions</IonLabel>
            </IonItem>
            <IonItem>
              <IonIcon icon={informationCircleOutline} slot="start" />
              <IonLabel>Support</IonLabel>
            </IonItem>
          </IonCardContent>
        </IonCard>

       
      </IonContent>
    </IonPage>
  );
};

export default Extras;

