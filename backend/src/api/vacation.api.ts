import axios from 'axios';
import config from '../config';

export const getVacation = async (group_size: number, ski_site: number, from_date: string, to_date: string) => {
    const vacations = await axios.post(config.api.vacation, {
        query: {
            ski_site,
            from_date,
            to_date,
            group_size,
        },
    });

    return vacations.data.body.accommodations;
}
