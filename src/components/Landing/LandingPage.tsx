import React, { useState, useEffect } from 'react';
import AutoComplete from '@material-ui/lab/AutoComplete';
import yeldData from '../../data/data';

const LandingPage = () => {
  const bannerData = yeldData.homepage.bannerData;
  const baseUrl = bannerData.bannerBaseUrl;
  const randomIdx = Math.floor(Math.random() * 8);
  const bannerId = bannerData.banners[randomIdx].id;
  const randomBannerUrl = `${baseUrl}${bannerId}${bannerData.bannerExtension}`;

  


  return (
    <div className="LandingPage">
      <img src={randomBannerUrl} alt=''/>
    </div>
  )
}

export default LandingPage;