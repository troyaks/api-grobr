export function findTicketByID (id, URL) {

    const primaryURL = `https://api.movidesk.com/public/v1`;
    const secondaryURL = `${URL}`;
    const thirdURL = `token=39cbc1bb-ffa6-491e-84f4-eb9687902e5e`;
    const parameterID = `${id}`;
    const ticketResourcePath = `${primaryURL}/${secondaryURL}?${thirdURL}&id=${parameterID}`;
    
    return ticketResourcePath;
}