import { NEWS_FORMAT_DATE } from '../constants/constants';

export class NewsApi {
    constructor(config) {
        this.config = config;
    }
    getNews(searchInput) {
        return fetch(`${this.config.url}?q=${searchInput}&from=${this.getDate()}&sortBy=publishedAt&apiKey=${this.config.apiKey}`)
          .then(res => {
            if (res.status === "ok") {
              return res.articles.json();
            }
            return Promise.reject("Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.");
          })    
          .catch((err) => {
            console.log(err);
          });
    }

    getDate() {
        let todayDate = new Date();
        todayDate.setDate(todayDate.getDate() - this.config.dateLag);
        return todayDate.format(NEWS_FORMAT_DATE);
    }
}