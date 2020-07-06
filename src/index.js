import "./pages/index.css";
import { NewsApi } from './js/modules/NewsApi';
import { NEWS_API_URL, NEWS_API_KEY } from "./js/constants/constants";
import { NewsCard } from "./js/components/NewsCard";
import { NewsCardList } from "./js/components/NewsCardList";
import { DataStorage } from "./js/modules/DataStorage";
import { SearchInput } from "./js/components/SearchInput";


const config = {url: NEWS_API_URL,  apiKey: NEWS_API_KEY};
const newsApi = new NewsApi(config);
const page = document.querySelector("#main");
const dataStorage = new DataStorage();



const createCard = (dataCard, container) => {
    const card = new NewsCard(dataCard, container);
    card.create();
    return card;
}
const resultCards = page.querySelector('.result').querySelector('.result__content').querySelector('.result__cards');
const newCardList = new NewsCardList(resultCards, createCard, dataStorage);
const searchInput = new SearchInput(page, newsApi, dataStorage, newCardList);
searchInput.setEvenListeners();

