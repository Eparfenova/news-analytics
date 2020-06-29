import "./pages/index.css";
import { NewsApi } from './NewsApi';
import { NEWS_API_URL, NEWS_API_KEY } from "./js/constants/constants";
import { NewsCard } from "./js/components/NewsCard";
import { NewsCardList } from "./js/components/CommitCardList";
import { DataStorage } from "./js/modules/DataStorage";
import { SearchInput } from "./js/components/SearchInput";

const config = {url: NEWS_API_URL,  apiKey: NEWS_API_KEY};
const newsApi = new NewsApi(config);
const page = document.querySelector('.page');
const searchContent = page.querySelector('.search-content');
const dataStorage = new DataStorage();
const searchInput = new SearchInput(searchContent, newsApi, dataStorage);


const createCard = (dataCard, container) => {
    const card = new NewsCard(dataCard, container);
    card.create();
    return card;
  }

  const newCardList = new NewsCardList(resultCards, createCard, dataStorage);
