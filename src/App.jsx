import MainWindow from './components/MainWindow';
import NewsFeed from './components/NewsFeed';
import DateTime from './components/DateTime';
import MainNews from './components/MainNews';
import FinancialIndicators from './components/FinancialIndicators';
import InfoBanner from './components/InfoBanner';
import SearchBar from './components/SearchBar';
import './App.css';

const quotes = [
  {
    asset: 'USD',
    stockMarket: 'MOEX',
    value: '63.52',
    trend: '+0.09'
  },
  {
    asset: 'EUR',
    stockMarket: 'MOEX',
    value: '70.86',
    trend: '+0.14'
  },
  {
    asset: 'НЕФТЬ',
    value: '64.90',
    trend: '+1.63%'
  }
];

const newsdata = [
  {
    mediaSrc: '#',
    logoSrc: '#',
    articleLink: '#',
    title: 'Правительство упростило получение автомобильных номеров'
  },
  {
    mediaSrc: '#',
    logoSrc: '#',
    articleLink: '#',
    title: 'Кошки не могут жить без рыбы'
  },
  {
    mediaSrc: '#',
    logoSrc: '#',
    articleLink: '#',
    title: 'В Бейруте открыли памятник макаронному монстру'
  },
  {
    mediaSrc: '#',
    logoSrc: '#',
    articleLink: '#',
    title: 'Спанч Боб поссорился с Патриком'
  },
  {
    mediaSrc: '#',
    logoSrc: '#',
    articleLink: '#',
    title: 'С птиц будут собирать налог на перья'
  }
];

const menuItems = [
  {
    title: "Видео",
    link: "#"
  },
  {
    title: "Картинки",
    link: "#"
  },
  {
    title: "Новости",
    link: "#"
  },
  {
    title: "Карты",
    link: "#"
  },
  {
    title: "Маркет",
    link: "#"
  },
  {
    title: "Переводчик",
    link: "#"
  },
  {
    title: "Эфир",
    link: "#"
  },
  {
    title: "ещё",
    link: "#"
  }
];

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
        <DateTime isoDate="2023-07-31T02:32:00" />
      </NewsFeed>
      <MainNews news={newsdata} />
      <InfoBanner title="Работа над ошибками" description="Смотрите на Яндексе и запоминайте" imageUrl="#" />
      <FinancialIndicators stockQuotes={quotes} />
      <SearchBar categories={menuItems} logoLink="#" logoUrl="#" exampleLink="#" exampleTitle="фаза луны сегодня" />
    </MainWindow>
  );
}

export default App;
