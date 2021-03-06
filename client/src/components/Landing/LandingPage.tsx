import { useState, useEffect } from 'react';
import SearchBar from './LandingComponents/SearchBar';
import { getIP } from '../../utilities/ip';
import '../../styles/LandingPage.css';
import yeldData from '../../data/yeldData';

const LandingPage = () => {
  const [userLocation, setUserLocation] = useState('');
  const logoUrl = yeldData.landingPage.logoUrl;
  const { landingPage: { bannerData } } = yeldData;

  // Switch banners randomly on each window reload
  const randomIdx = Math.floor(Math.random() * 8);
  const bannerSelection = bannerData.banners[randomIdx];
  const bannerId = bannerSelection.id;
  const randomBannerUrl = `${bannerData.bannerBaseUrl}${bannerId}${bannerData.bannerExtension}`;

  // Get user's location and store it
  useEffect(() => {
    getIP()
      .then(res => {
        if (typeof res === 'object' && res !== null) {
          setUserLocation(`${res.city}, ${res.state}`);
        }
      })
  }, []);

  return (
    <div className="LandingPage" style={{ backgroundImage: `url(${randomBannerUrl})` }}>
      <div className="LandingPage__content">
          <div className="LandingPage__logo-container">
            <h1 className="LandingPage__logo" style={{ backgroundImage: `url(${logoUrl})` }}>
              <a href="/">Yeld</a>
            </h1>
          </div>
          <div className="LandingPage__search">
            <SearchBar userLocation={ userLocation } />
          </div>
          <div className="LandingPage__banner-info-container">
            <div className="LandingPage__banner-info">
              <strong>{bannerSelection.title}</strong>
            <div className="LandingPage__banner-owner">{bannerData.creditText} <strong>{bannerSelection.owner}</strong></div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default LandingPage;