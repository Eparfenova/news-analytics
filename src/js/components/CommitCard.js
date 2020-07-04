export class CommitCard {
    constructor(dataCard, container) {
      this.container = container;
      this.dataCard = dataCard;
    }

    create() {
        const card = document.createElement('div');
        card.classList.add("comments__card");
        const date = document.createElement('p');
        date.classList.add("comments__date");
        date.textContent = this.dataCard.date;
        const aboutAuthor = document.createElement('div');
        aboutAuthor.classList.add("comments__about-author");
        const avatar = document.createElement('img');
        avatar.classList.add("comments__avatar");
        avatar.setAttribute("src", `${this.dataCard.avatar_url}`);
        avatar.setAttribute("alt", "Изображение не найдено");
        const paragraph = document.createElement('div');
        paragraph.classList.add("comments__paragraph");
        const author = document.createElement('h2');
        author.classList.add("comments__author");
        author.textContent = this.dataCard.name;
        const mail = document.createElement('h3');
        mail.classList.add("comments__mail");
        mail.textContent = this.dataCard.email;
        const comment = document.createElement('p');
        comment.classList.add("comments__text");
        comment.textContent = this.dataCard.message;

        card.appendChild(date);
        card.appendChild(aboutAuthor);
        aboutAuthor.appendChild(avatar);
        aboutAuthor.appendChild(paragraph);
        paragraph.appendChild(author);
        paragraph.appendChild(mail);
        card.appendChild(comment);
        this.card = card;
      }
      
      getCard() {
        return this.card;
      }

}