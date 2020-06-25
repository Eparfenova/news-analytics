import "./pages/index.css";
import { NewsApi } from './NewsApi';
import { NEWS_API_URL, NEWS_API_KEY } from "./js/constants/constants";

const config = {url: NEWS_API_URL,  apiKey: NEWS_API_KEY};
const newsApi = new NewsApi(config);

const page = document.querySelector('.page');
const searchContent = page.querySelector('.search-content');




