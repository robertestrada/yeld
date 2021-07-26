import React, { useState, useEffect } from 'react';
import yeldData from '../../data/data';

const LandingPage = () => {
  const [bannerUrl, setBannerUrl] = useState('');

  const getRandomBannerUrl = async () => {
    const bannerData = yeldData.homepage.bannerData;
    const baseUrl = await bannerData.bannerBaseUrl;
    const randomId = Math.floor(Math.random() * 8) + 1;
    const bannerId = await bannerData.banners[randomId].id;
    const randomBannerUrl = `${baseUrl}${bannerId}${bannerData.bannerExtension}`;
    await setBannerUrl(randomBannerUrl);
  }

  useEffect(() => {
    getRandomBannerUrl();
  }, []);

  return (
    <div className="LandingPage">
      <img src={bannerUrl} alt=''/>
    </div>
  )
}

export default LandingPage;