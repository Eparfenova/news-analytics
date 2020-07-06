import { NEWS_ROW_COUNT } from '../constants/constants';
export class NewsCardList {
    constructor(container, createCard, dataStorage) {
      this.container = container;
      this.createCard = createCard;
      this.dataStorage = dataStorage;
      this.cardsCount = 0;
    }
  
    addCard(dataCard) {
      const newCard = this.createCard(dataCard, this.container);
      this.container.appendChild(newCard.getCard());
    }
  
    render(element) {
        this.addCard(element);
    }
  
    getCards() {
        const min = this.cardsCount;
        const max = this.cardsCount + NEWS_ROW_COUNT;
        const newsCards = this.dataStorage.getData('newsData');
      for (let i = min; i < max; i++) {
        if (newsCards && i < newsCards.length) {
            this.render(newsCards[i]);
        } 
      }
      this.cardsCount += NEWS_ROW_COUNT;
    }

    clear() {
        this.cardsCount = 0;
        this.container.querySelectorAll('.result__card').forEach( element => element.remove() );
    }

    getsCardCount() {
      const resultCardList =this.container.querySelectorAll('.result__card')
      return resultCardList ? resultCardList.length : 0;
    }

    
  }