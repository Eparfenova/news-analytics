import { DateUtils } from '../utils/DateUtils';

export class NewsApi {
    constructor(config) {
        this.config = config;
    }
    
    getNews(searchInput) {
      if (searchInput) {
        return fetch(`${this.config.url}?q=${searchInput}&from=${DateUtils.formatDate()}&sortBy=publishedAt&apiKey=${this.config.apiKey}`)
          .then(res => {
            if (res.status !== 200) {
              return Promise.reject("Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.");
            }    
            return res;       
          })
          .then(res => { return res.json() })
          .then(res => {
            let arr = res.articles;
            let result = [].map.call(arr, function(element) {
              let map = {
                title: element.title,
                name: element.source.name,
                date: DateUtils.sliceDate(element.publishedAt),
                description: element.description,
                imageUrl: element.urlToImage
              }
              return map;
            });
             return result;
          })    
          .catch((err) => {
            console.log(err);
          });
        }
    }

   
}