import { DateUtils } from '../utils/DateUtils';

export class GithubApi {
    constructor(config) {
        this.config = config;
    }
    getCommits() {
        return fetch(`${this.config.url}/repos/${this.config.owner}/${this.config.repo}/commits`)         
        .then(res => {
          if (res.status !== 200) {
            return Promise.reject("Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.");
          }    
          return res;       
        })
        .then(res => { return res.json() })
        .then(res => {
            if (res) {
              const arr = res;
              const result = [].map.call(arr, function(element) {
                  const map = {
                  name: element.commit.committer.name,
                  email: element.commit.committer.email,
                  date: DateUtils.sliceDate(element.commit.committer.date),
                  message: element.commit.message,
                  avatar_url: element.author && element.author.avatar_url
                }
                return map;
              });
              return result;
            }
            return Promise.reject("Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.");
          })    
          .catch((err) => {
            console.log(err);
          });
    }

 }