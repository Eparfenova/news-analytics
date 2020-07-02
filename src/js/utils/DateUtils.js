import { NEWS_FORMAT_DATE, NEWS_API_DATE_LAG } from '../constants/constants';

export class DateUtils {
    static formatDate() {
        let todayDate = new Date();
        todayDate.setDate(todayDate.getDate() - NEWS_API_DATE_LAG);
        return `${todayDate.toISOString().slice(0,10)}`;
    }

    static sliceDate(date) {
         let dateNews = new Date(date);
        return dateNews.toLocaleString("ru-ru", {
            year: 'numeric',
            month: 'long',
            day: 'numeric'});
    }


}