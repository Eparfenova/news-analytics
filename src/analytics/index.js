import "../pages/index.css";
import { DataStorage } from "../js/modules/DataStorage";
import { Statistics } from "../js/components/Statistics";

const dataStorage = new DataStorage();
const page = document.querySelector("#analytics");
const statistics = new Statistics(page, dataStorage);
statistics.getAnalytics();

