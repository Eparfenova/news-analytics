export class GithubApi {
    constructor(config) {
        this.config = config;
    }
    getCommits() {
        return fetch(`${this.config.url}/repos/${this.config.owner}/${this.config.repo}/commits`)
          .then(res => {
            if (res) {
              let arr = res.json();
              let result = [].map.call(arr, function(element) {
                  let map = new Map();
                  map.set('name', element.commit.committer.name);
                  map.set('email', element.commit.committer.email);
                  map.set('date', element.commit.committer.date);
                  map.set('message', element.commit.message);
                  map.set('avatar_url', element.author.avatar_url);
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