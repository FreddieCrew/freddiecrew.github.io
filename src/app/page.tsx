import Header from '@/components/cards';
import Toast from '@/components/Toast';
import Navbar from '@/components/Nav';
import HolidayBanner from '@/components/holidaybanner';

export default function Home() {

  return (
    <div className='root'>
      <Toast />
      <HolidayBanner />
      <Navbar />
      <Header />
    </div>
  )
}
