
import './App.css';
import AddBanner from './Components/AddBanner';
import Banner from './Components/Banner/Banner';
import Footer from './Components/Footer/Footer';
import Furniture from './Components/Furnithure/Furnithure';
import Header from './Components/Header/Header';
import Review from './Components/Review/Review';
import SearchItem from './Components/SearchesItem/SearchItem';
import TodayHotDeal from './Components/TodayDeal/TodayHotDeal';

function App() {
  return (
    <div className="App ">
      <Header/>
      <Banner/>
      <AddBanner />
      <TodayHotDeal/>
      <SearchItem/>
      <AddBanner/>
      <Furniture/>
      <Review/>
      <Footer/>
    </div>
  );
}

export default App;
