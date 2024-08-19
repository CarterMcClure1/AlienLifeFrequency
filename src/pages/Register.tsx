import React, { useState } from 'react';
import { IonContent, IonInput, IonButton, IonPage, IonHeader, IonToolbar, IonTitle, IonAlert, useIonRouter, IonText } from '@ionic/react';
import './Home.css';

const Register: React.FC = () => {
    const navigation = useIonRouter();
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [showAlert, setShowAlert] = useState<boolean>(false);
  
  const handleLogin = () => {
    if (username.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
      setShowAlert(true);
      return;
    }

    if (password !== confirmPassword) {
      setShowAlert(true);
      return;
    }

    // Perform your registration logic here
    // For demonstration purposes, just navigate to home page upon successful registration
    navigation.push('/', 'forward', 'replace');
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
        <IonTitle>Register</IonTitle>
        <IonInput
          placeholder="Email"
          //value={username}
          //onIonChange={(e) => setUsername(e.detail.value!)}
        ></IonInput>
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
        <IonInput
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onIonChange={(e) => setConfirmPassword(e.detail.value!)}
          ></IonInput>
        <IonButton expand="full" onClick={handleLogin}>Register</IonButton>
        <IonText className="create-account-link">
            Press <a href="/login">here</a> to go back to login
          </IonText>
        </div>
      </IonContent>
      <IonAlert
        isOpen={showAlert}
        onDidDismiss={() => setShowAlert(false)}
        header={'Invalid Input'}
        message={'Please fill all fields and ensure passwords match.'}
        buttons={['OK']}
      />
    </IonPage>
  );
};

export default Register;
