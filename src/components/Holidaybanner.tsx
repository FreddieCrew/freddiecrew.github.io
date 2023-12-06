"use client"
import React, { useState, useEffect } from 'react';
import HolidayBanner from './Holidaycheck';
import { isAfter, isBefore, isSameDay } from 'date-fns';
import Cookies from 'js-cookie';

const COOKIE_NAME = 'holidayBannerClosed';

const HolidayBannerController: React.FC = () => {
  const [isBannerVisible, setIsBannerVisible] = useState(false);

  useEffect(() => {
    const isClosed = Cookies.get(COOKIE_NAME);
    setIsBannerVisible(!isClosed);
  }, []);

  const closeBanner = () => {
    setIsBannerVisible(false);
    Cookies.set(COOKIE_NAME, 'true', { expires: 365 });
  };

  const isThanksgiving = () => {
    const currentDate = new Date();
    const thanksgivingStart = new Date(currentDate.getFullYear(), 10, 23);

    return isSameDay(currentDate, thanksgivingStart);
  };

  const isChristmas = () => {
    const currentDate = new Date();
    const christmasStart = new Date(currentDate.getFullYear(), 11, 25);
    const christmasEnd = new Date(currentDate.getFullYear(), 11, 26);

    return isAfter(currentDate, christmasStart) && isBefore(currentDate, christmasEnd);
  };

  const renderBanner = () => {
    if (isBannerVisible && (isThanksgiving() || isChristmas())) {
      return (
        <div className="relative">
          <HolidayBanner holiday={isThanksgiving() ? 'thanksgiving' : 'christmas'} />
          <button
            className="absolute top-0 right-2 mt-4 cursor-pointer"
            onClick={closeBanner}
            title="Close"
          >
            X
          </button>
        </div>
      );
    }

    return null;
  };

  return (
    <div style={{ visibility: isBannerVisible ? 'visible' : 'hidden' }}>
      {renderBanner()}
    </div>
  );
};

export default HolidayBannerController;
