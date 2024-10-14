import React, { useState } from 'react';
import { IonContent, IonPage, IonHeader, IonToolbar, IonTitle, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonLabel, IonIcon } from '@ionic/react';
import { chevronDownOutline, chevronUpOutline, mailOutline, helpCircleOutline } from 'ionicons/icons';
import './Home.css';
import alienLifeFreqLogo from '../assets/images/alienlifefreqapp.png';

const Extras: React.FC = () => {
  const [faq1Expanded, setFaq1Expanded] = useState<boolean>(false);
  const [faq2Expanded, setFaq2Expanded] = useState<boolean>(false);
  const [faq3Expanded, setFaq3Expanded] = useState<boolean>(false);

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
            <IonItem>
              <IonLabel>Enable Notifications</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>Dark Mode</IonLabel>
            </IonItem>
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Contact Us</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonItem>
              <IonIcon icon={mailOutline} slot="start" />
              <IonLabel>contact@alienlifefrequency.com</IonLabel>
            </IonItem>
          </IonCardContent>
        </IonCard>

        {/* FAQ Section */}
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>FAQ</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonItem button onClick={() => setFaq1Expanded(!faq1Expanded)}>
              <IonIcon icon={helpCircleOutline} slot="start" />
              <IonLabel>How can I listen to Alien Life Frequency?</IonLabel>
              <IonIcon icon={faq1Expanded ? chevronUpOutline : chevronDownOutline} slot="end" />
            </IonItem>
            {faq1Expanded && (
              <IonItem>
                <IonLabel>By visiting the Music tab on this app, you can access our video player. Our music is also available on our YouTube, Facebook, and all major streaming platforms.</IonLabel>
              </IonItem>
            )}

            <IonItem button onClick={() => setFaq2Expanded(!faq2Expanded)}>
              <IonIcon icon={helpCircleOutline} slot="start" />
              <IonLabel>How often does the band post new content?</IonLabel>
              <IonIcon icon={faq2Expanded ? chevronUpOutline : chevronDownOutline} slot="end" />
            </IonItem>
            {faq2Expanded && (
              <IonItem>
                <IonLabel>We aim to post new content weekly, with all our new videos being uploaded to YouTube. Follow us on Facebook to keep up to date when a new video releases.</IonLabel>
              </IonItem>
            )}

            <IonItem button onClick={() => setFaq3Expanded(!faq3Expanded)}>
              <IonIcon icon={helpCircleOutline} slot="start" />
              <IonLabel>Can you tell me more about this app and its creation?</IonLabel>
              <IonIcon icon={faq3Expanded ? chevronUpOutline : chevronDownOutline} slot="end" />
            </IonItem>
            {faq3Expanded && (
              <IonItem>
                <IonLabel>This app was created by three senior developers attending SIUE: Carter McClure, Sophia Licko, Gautam Aneja. This app will continue to be updated with new videos and annoucements as the band continues to releases more content! </IonLabel>
              </IonItem>
            )}
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Extras;

