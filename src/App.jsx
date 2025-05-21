import MainWindow from './components/MainWindow';
import NewsFeed from './components/NewsFeed';
import DateTime from './components/DateTime';
import MainNews from './components/MainNews';
import newsData from './config/newsData';
import FinancialIndicators from './components/FinancialIndicators';
import quotes from './config/quotes';
import InfoBanner from './components/InfoBanner';
import SearchBar from './components/SearchBar';
import menuItems from './config/menuItems';
import MoviePoster from './components/MoviePoster';
import BottomWidgets from './components/BottomWidgets';
import WeatherWidget from './components/WeatherWidget';
import BroadcastWidget from './components/BroadcastWidget';
import broadcastData from './config/broadcastData';
import HotLinks from './components/HotLinks';
import linksData from './config/linksData';
import TelevisionProgram from './components/TelevisionProgram';
import programsData from './config/programsData';
import './App.css';
import TravelWidget from './components/TravelWidget';

function App() {
  return (
    <MainWindow>
      <NewsFeed
        nowMediaSrc="#"
        nowMediaText="Сейчас в СМИ"
        foreignMediaSrc="#"
        foreignMediaText="в Германии"
        recommendSrc="#"
        recommendText="Рекомендуем"
      >
        <DateTime isoDate="2023-07-31T02:32:00" dateFormat={"d MMMM, EEEE HH:mm"} />
      </NewsFeed>
      <MainNews news={newsData} />
      <InfoBanner title="Работа над ошибками" description="Смотрите на Яндексе и запоминайте" imageUrl="#" />
      <FinancialIndicators stockQuotes={quotes} />
      <SearchBar categories={menuItems} logoLink="#" logoUrl="#" exampleLink="#" exampleTitle="фаза луны сегодня" />
      <MoviePoster
        imageUrl="#"
        title="Форсаж Хоббс и Шоу" 
        releaseDate="В кино с 1 августа"
        trailerUrl="#"
      />
      <BottomWidgets columns={3}>
        <WeatherWidget
          weatherImg={"#"}
          currentWeather={"+17"}
          morningWeather={"+17"}
          afternoonWeather={"+20"}
        />
        <TravelWidget title={"Карта Германии"} linkName={"Расписания"} link={"#"} />
        <BroadcastWidget data={broadcastData} />
        <HotLinks links={linksData} />
        <TelevisionProgram programs={programsData}>
          <DateTime />
        </TelevisionProgram>
      </BottomWidgets>
    </MainWindow>
  );
}

export default App;
