import React, { useState } from 'react';
import { IonContent, IonInput, IonButton, IonPage, IonHeader, IonToolbar, IonTitle, IonAlert, useIonRouter } from '@ionic/react';
import './Home.css';

const Login: React.FC = () => {
    const navigation = useIonRouter();
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showAlert, setShowAlert] = useState<boolean>(false);
  
  const handleLogin = () => {
    // Perform your login logic here
    // For demonstration purposes, I'm just checking if username and password are 'admin'
    if (username === 'admin' && password === 'admin') {
      // Redirect to home page or perform necessary actions upon successful login
      navigation.push('/', 'forward', 'replace')
    } else {
      setShowAlert(true);
    }
  };

  return (
    <IonPage>
      <IonHeader>
      <IonToolbar className="toolbar">
      <div className="logo-title-container">
    <IonTitle className="title">Alien Life Frequency
    </IonTitle>
    <img src='./images/alienlifefreqapp.png' alt="image" className="logo" />
  </div>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-text-center ion-padding-vertical">
        <div className="login-form">
        <IonTitle>Login</IonTitle>
        <IonInput
          placeholder="Username"
          value={username}
          onIonChange={(e) => setUsername(e.detail.value!)}
        ></IonInput>
        <IonInput
          type="password"
          placeholder="Password"
          value={password}
          onIonChange={(e) => setPassword(e.detail.value!)}
        ></IonInput>
        <IonButton expand="full" onClick={handleLogin}>Login</IonButton>
        </div>
      </IonContent>
      <IonAlert
        isOpen={showAlert}
        onDidDismiss={() => setShowAlert(false)}
        header={'Invalid Credentials'}
        message={'Please enter valid username and password.'}
        buttons={['OK']}
      />
    </IonPage>
  );
};

export default Login;
