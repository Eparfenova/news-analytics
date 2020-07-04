import "../pages/index.css";
import {GITHUB_OWNER, GITHUB_REPO, GITHUB_URL } from "../js/constants/constants";
import { CommitCard } from "../js/components/CommitCard";
import { CommitCardList } from "../js/components/CommitCardList";
import { DataStorage } from "../js/modules/DataStorage";
import { GithubApi } from "../js/modules/GithubApi";

console.warn('I get called from ABOUT!');

const config = {url: GITHUB_URL,  owner: GITHUB_OWNER, repo: GITHUB_REPO};
const githubApi = new GithubApi(config);
const page = document.querySelector("#about");
const dataStorage = new DataStorage();

const createCard = (dataCard, container) => {
    const card = new CommitCard(dataCard, container);
    card.create();
    return card;
}
const resultCards = page.querySelector('.comments').querySelector('.main-carousel');
const commitCardList = new CommitCardList(resultCards, createCard, githubApi);
commitCardList.getCards();
