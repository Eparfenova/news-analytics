import { NEWS_FORMAT_DATE } from '../constants/constants';

export class DateUtils {
    formatDate() {
        let todayDate = new Date();
        todayDate.setDate(todayDate.getDate() - this.config.dateLag);
        return todayDate.format(NEWS_FORMAT_DATE);
    }
}