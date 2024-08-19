import React, { useState } from 'react';
import { IonContent, IonModal, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonButton, IonIcon } from '@ionic/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { heart, heartOutline } from 'ionicons/icons';
import 'swiper/css';
import './Music.css';
import newGalaxyBackground from '../assets/newgalaxy.jpg';

const Music: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<{ id: string; title: string; url: string } | null>(null);
  const [isHelpModalOpen, setIsHelpModalOpen] = useState(false);

  const videos = [
    { id: 'video1', title: 'Alien Funk Jam', url: 'https://www.youtube.com/embed/7WWxB4xNeO8' },
    { id: 'video2', title: 'Interstellar Medium', url: 'https://www.youtube.com/embed/nY9yVEspGDY' },
    { id: 'video3', title: 'Dont Panic', url: 'https://www.youtube.com/embed/YpUconhtH3M' },
    { id: 'video4', title: 'Maxwells Demon', url: 'https://www.youtube.com/embed/ogpfEdbeiAY' },
    { id: 'video5', title: 'Warp Drive Failure(FUNKY)', url: 'https://www.youtube.com/embed/7V8Rwr6L9mM' },
    { id: 'video6', title: 'Tachyon Tea', url: 'https://www.youtube.com/embed/xcPHX7__RUI' },
    { id: 'video7', title: 'Orphan Planet', url: 'https://www.youtube.com/embed/0Njiqb1Mwno' },
    { id: 'video8', title: 'Groovin in Space', url: 'https://www.youtube.com/embed/TRWWKuMEUTw' },
    { id: 'video9', title: 'Lost Memories', url: 'https://www.youtube.com/embed/CSOaFbPBLMI' },
  ];

  const handleSlideChange = (swiper: any) => {
    setActiveIndex(swiper.activeIndex);
  };

  const toggleFavorite = (videoId: string) => {
    setFavorites(prevFavorites => 
      prevFavorites.includes(videoId) 
        ? prevFavorites.filter(id => id !== videoId) 
        : [...prevFavorites, videoId]
    );
  };

  const isFavorite = (videoId: string) => favorites.includes(videoId);

  const openVideoModal = (videoId: string) => {
    const video = videos.find(video => video.id === videoId);
    if (video) {
      setSelectedVideo(video);
    }
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
  };

  const openHelpModal = () => {
    setIsHelpModalOpen(true);
  };

  const closeHelpModal = () => {
    setIsHelpModalOpen(false);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="toolbar">
          <div className="logo-title-container">
            <IonTitle className="title">Alien Life Frequency</IonTitle>
            <img src='./images/alienlifefreqapp.png' alt="Alien Life Frequency Logo" className="logo" />
          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent 
        fullscreen 
        style={{ 
          background: `url(${newGalaxyBackground}) no-repeat center center fixed`, 
          backgroundSize: 'cover' 
        }}
      >
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          onSlideChange={handleSlideChange}
          mousewheel={true}
          resistanceRatio={0}
        >
          {videos.map((video, index) => (
            <SwiperSlide key={`slide_${index}`}>
              <IonCard className="ufo-card">
                <IonCardHeader>
                  <IonCardTitle>{video.title}</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <div className="video-container">
                    <iframe
                      width="100%"
                      height="315"
                      src={`${video.url}${activeIndex === index ? '?autoplay=1' : ''}`}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    ></iframe>
                  </div>
                </IonCardContent>
                <IonButton className='favorite-button' fill="clear" onClick={() => toggleFavorite(video.id)}>
                  <IonIcon icon={isFavorite(video.id) ? heart : heartOutline} />
                </IonButton>
                
              </IonCard>
            </SwiperSlide>
          ))}
          <IonButton className='help-button' onClick={openHelpModal}>Need Help?</IonButton>
        </Swiper>
        <IonCard className='ufo-card'>
          <IonCardHeader>
            <IonCardTitle>Favorites</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            {favorites.length > 0 ? (
              favorites.map(favId => {
                const favoriteVideo = videos.find(video => video.id === favId);
                return favoriteVideo ? (
                  <p
                    key={favId}
                    onClick={() => openVideoModal(favoriteVideo.id)}
                    style={{ cursor: 'pointer', textDecoration: 'underline', color: 'green' }}
                  >
                    {favoriteVideo.title}
                  </p>
                ) : null;
              })
            ) : (
              <p>No favorites yet.</p>
            )}
          </IonCardContent>
        </IonCard>

        {/* Modal for displaying the selected video */}
        <IonModal isOpen={!!selectedVideo} onDidDismiss={closeVideoModal}>
          <IonHeader>
            <IonToolbar>
              <IonTitle>{selectedVideo?.title}</IonTitle>
              <IonButton slot="end" onClick={closeVideoModal}>Close</IonButton>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            {selectedVideo && (
              <div className="video-container">
                <iframe
                  width="100%"
                  height="315"
                  src={selectedVideo.url}
                  title={selectedVideo.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </IonContent>
        </IonModal>

        {/* Help Modal */}
        <IonModal isOpen={isHelpModalOpen} onDidDismiss={closeHelpModal}>
          <IonHeader>
            <IonToolbar>
              <IonTitle>Help</IonTitle>
              <IonButton slot="end" onClick={closeHelpModal}>Close</IonButton>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <div style={{ padding: '16px' }}>
              <h2>How to Use the Video Player</h2>
              <p>You can swipe left or right to navigate through the videos. To favorite a video, click the heart icon. Your favorited videos will appear in the favorites list below the player.</p>
            </div>
          </IonContent>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default Music;


