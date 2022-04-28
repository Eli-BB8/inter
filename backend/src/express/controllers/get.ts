import { Request, Response } from 'express';
import * as service from '../services/get';

export const getVacations = async (req: Request, res: Response): Promise<void> => {
    if (req.headers.accept === 'text/event-stream') {

        res.writeHead(200, {
            'Cache-Control': 'no-cache',
            Connection: 'keep-alive',
            'Content-Type': 'text/event-stream',
        });

        const sseId = new Date().toDateString();

        const { group_size, ski_site, from_date, to_date } = req.query;

        const group_size_num = parseInt(group_size as string);
        const ski_site_num = parseInt(ski_site as string);
        const from_date_dateType = new Date(from_date as string);
        const to_date_dateType = new Date(to_date as string);

        const vacations = await service.getVacations(group_size_num, ski_site_num, from_date_dateType, to_date_dateType);

        await Promise.all(
            vacations.map(async (vacationReq) => {
                const vacation = await vacationReq();
                console.log(vacation);
                
                writeEvent(res, sseId, JSON.stringify(vacation))
            }),
        );

        res.end();
    } else {
        res.json({ message: 'Ok' });
    }
};

const writeEvent = (res: Response, sseId: string, data: string) => {
    res.write(`id: ${sseId}\n`);
    res.write(`data: ${data}\n\n`);
};
