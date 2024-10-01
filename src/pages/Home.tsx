import React from 'react';
import { IonContent, IonHeader, IonItem, IonIcon, IonPage, IonTitle, IonToolbar, IonButton, IonCard, IonCardTitle, IonCardContent, IonCardHeader } from '@ionic/react';
import { megaphoneOutline, logoFacebook, logoInstagram, logoYoutube, cartOutline, musicalNotesOutline } from 'ionicons/icons';
import './Home.css'; 
import alienLifeFreqLogo from '../assets/images/alienlifefreqapp.png';



const Home: React.FC = () => {

  const announcements = [
    { id: 1, title: 'New Album Release!', content: 'Our new album "Veni Vidi Vici" is out now. Listen on all major platforms.' },
    { id: 2, title: 'Upcoming Tour', content: 'Exciting news! We\'re going on tour next month. Stay tuned for dates and locations.' },
    { id: 3, title: 'New Merch', content: 'Check out our exclusive merchandise collection available now on our website (Link Below).' },
  ];

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

        <IonCard className = "homeicons">
          <IonCardHeader>
            <IonCardTitle className="box-title2">Check Out Our Merch Store!</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonButton href="https://iagomediaproduction.threadless.com/collections/alien-life-frequency" target="_blank" className="social-icon" fill="clear">
              <IonIcon icon={cartOutline} style={{ fontSize: '80px', color: 'black' }} />
            </IonButton>
          </IonCardContent>
        </IonCard>

        <IonCard className = "homeicons">
          <IonCardHeader>
            <IonCardTitle className="box-title2">Support us on Other Platforms!</IonCardTitle>
          </IonCardHeader>
          <IonCardContent className="social-icons-container">
            <IonButton href="https://www.facebook.com/AlienLifeFrequency/" target="_blank" className="social-icon" fill="clear">
              <IonIcon icon={logoFacebook} style={{ fontSize: '50px', color: 'blue' }} />
            </IonButton>
            <IonButton href="https://www.instagram.com/alienlifefrequency/" target="_blank" className="social-icon" fill="clear">
              <IonIcon icon={logoInstagram} style={{ fontSize: '50px', color: '#C13584' }} />
            </IonButton>
            <IonButton href="https://www.youtube.com/@AlienLifeFrequency" target="_blank" className="social-icon" fill="clear">
              <IonIcon icon={logoYoutube} style={{ fontSize: '50px', color: '#FF0000' }} />
            </IonButton>
            <IonButton href="https://alienlifefrequency.bandcamp.com/album/alien-life-frequency-2" target="_blank" className="social-icon" fill="clear">
              <IonIcon icon={musicalNotesOutline} style={{ fontSize: '50px', color: 'black' }} />
            </IonButton>
          </IonCardContent>
        </IonCard>

      </IonContent>
    </IonPage>
  );
};

export default Home;


