import Header from '@/components/cards';
import Toast from '@/components/Toast';
import Navbar from '@/components/Nav';

export default function Home() {

  return (
    <div className='root'>
      <Toast />
      <Navbar />
      <Header />
    </div>
  )
}
