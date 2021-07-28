import React from 'react';
import SearchBar from './SearchBar/SearchBar';
import HotAndNew from './HotAndNew/HotAndNew';
import Categories from './Categories/Categories';
import '../../styles/LandingPage.css';
import yeldData from '../../data/yeldData';

const LandingPage = () => {
  const logoUrl = yeldData.landingPage.logoUrl;
  const { landingPage: { bannerData } } = yeldData;
  const randomIdx = Math.floor(Math.random() * 8);
  const bannerSelection = bannerData.banners[randomIdx];
  const bannerId = bannerSelection.id;
  const randomBannerUrl = `${bannerData.bannerBaseUrl}${bannerId}${bannerData.bannerExtension}`;


  return (
    <div className="LandingPage" style={{ backgroundImage: `url(${randomBannerUrl})` }}>
      <div className="LandingPage__content">
          <div className="LandingPage__logo-container">
            <h1 className="LandingPage__logo" style={{ backgroundImage: `url(${logoUrl})` }}>
              <a href="/">Yeld</a>
            </h1>
          </div>
          <div className="LandingPage__search">
            <SearchBar />
          </div>
          <div className="LandingPage__banner-info-container">
            <div className="LandingPage__banner-info">
              <strong>{bannerSelection.title}</strong>
            <div className="LandingPage__banner-owner">{bannerData.creditText} <strong>{bannerSelection.owner}</strong></div>
            </div>
          </div>
          <div className="LandingPage__hot-and-new">
            <HotAndNew />
          </div>
          <div className="LandingPage__categories">
            <Categories />
          </div>
      </div>
    </div>
  )
}

export default LandingPage;