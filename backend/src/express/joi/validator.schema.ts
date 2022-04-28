import * as Joi from 'joi';
import resorts from '../../config/resorts';

export const vacationSchema = Joi.object({
    query: {
        group_size: Joi.number().min(1).max(10),
        ski_site: Joi.number().valid(...resorts.map(resort => resort.id)),
        from_date: Joi.date(),
        to_date: Joi.date(),
    },
});
