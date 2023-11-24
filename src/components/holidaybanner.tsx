"use client"
import React, { useState, useEffect } from 'react';
import HolidayBanner from './holidaycheck';
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
    const thanksgivingStart = new Date(currentDate.getFullYear(), 10, 22);
    const thanksgivingEnd = new Date(currentDate.getFullYear(), 10, 30);

    return isAfter(currentDate, thanksgivingStart) && isBefore(currentDate, thanksgivingEnd);
  };

  const isChristmas = () => {
    const currentDate = new Date();
    const christmasDay = new Date(currentDate.getFullYear(), 11, 25);

    return isSameDay(currentDate, christmasDay);
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