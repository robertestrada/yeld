import React from 'react';
import SearchBar from './SearchBar/SearchBar';
import '../../styles/LandingPage.css';
import yeldData from '../../data/yeldData';

const LandingPage = () => {
  const logoUrl = yeldData.landingPage.logoUrl;
  const { landingPage: { bannerData } } = yeldData;
  const randomIdx = Math.floor(Math.random() * 8);
  const bannerId = bannerData.banners[randomIdx].id;
  const randomBannerUrl = `${bannerData.bannerBaseUrl}${bannerId}${bannerData.bannerExtension}`;

  return (
    <div className="LandingPage" style={{ backgroundImage: `url(${randomBannerUrl})` }}>
      <div className="LandingPage__content">
          <div className="LandingPage__logo-container">
            <h1 className="LandingPage__logo" style={{ backgroundImage: `url(${logoUrl})` }}>
              <a href="/">Yeld</a>
            </h1>
          </div>
          <SearchBar />
      </div>
    </div>
  )
}

export default LandingPage;