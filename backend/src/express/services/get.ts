import * as vacationApi from '../../api/vacation.api'
export async function getVacations(group_size: number , ski_site: number , from_date: Date , to_date: Date ) {
    const from_str = from_date.toLocaleDateString();
    const to_str = to_date.toLocaleDateString()

    const requestsForVacation = createVacationsReqs(group_size, ski_site, from_str, to_str);

    return requestsForVacation;
}

function createVacationsReqs(group_size: number, ski_site: number, from_str: string, to_str: string) {
    const reqs: Array<() => Promise<any>> = [];
    const incrementBy = 2;
    
    for (let i = 0; i <= incrementBy; i++) {
        reqs.push(async () => await vacationApi.getVacation(group_size + i, ski_site, from_str, to_str));
    }

    return reqs;
}
