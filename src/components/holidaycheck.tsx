interface HolidayBannerProps {
    holiday: 'thanksgiving' | 'christmas';
  }
  
  const HolidayBanner: React.FC<HolidayBannerProps> = ({ holiday }) => {
    const getBannerText = () => {
      switch (holiday) {
        case 'thanksgiving':
          return '🎉 Happy Thanksgiving Day!';
        case 'christmas':
          return '🎉 Merry christmas!';
        default:
          return '';
      }
    };
  
    return (
      <div className="bg-yellow-300 p-4 text-center font-bold">
        <p>{getBannerText()}</p>
      </div>
    );
  };
  
  export default HolidayBanner;