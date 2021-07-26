import React from 'react';
import SearchBar from './SearchBar/SearchBar';
import yeldData from '../../data/yeldData';

const LandingPage = () => {

  const { landingPage: { bannerData } } = yeldData;
  const randomIdx = Math.floor(Math.random() * 8);
  const bannerId = bannerData.banners[randomIdx].id;
  const randomBannerUrl = `${bannerData.bannerBaseUrl}${bannerId}${bannerData.bannerExtension}`;

  return (
    <div className="LandingPage">
      <SearchBar />
      <img src={randomBannerUrl} alt=''/>
    </div>
  )
}

export default LandingPage;