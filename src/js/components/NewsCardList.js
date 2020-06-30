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
        let min = this.cardsCount;
        let max = this.cardsCount + 3;
        const newsCards = this.dataStorage.getData('newsData');
      for (let i = min; i < max; i++) {
        if (newsCards && i < newsCards.length) {
            this.render(newsCards[i]);
        } 
      }
      this.cardsCount += 3;
    }

    clear() {
        this.cardsCount = 0;
        this.container.querySelectorAll('.result__card').forEach( e => e.remove() );
    }
  }