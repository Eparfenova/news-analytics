import { NEWS_FORMAT_DATE, NEWS_API_DATE_LAG } from '../constants/constants';

export class DateUtils {
    static formatDate() {
        let todayDate = new Date();
        todayDate.setDate(todayDate.getDate() - NEWS_API_DATE_LAG);
        return todayDate.toISOString().slice(0,10);
    }
}