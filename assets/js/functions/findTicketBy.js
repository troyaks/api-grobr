export function findTicketByID (id) {

    const primaryURL = `https://api.movidesk.com/public/v1`;
    const secondaryURL = `tickets?token=39cbc1bb-ffa6-491e-84f4-eb9687902e5e`;
    const parameterID = `${id}`;
    const ticketResourcePath = `${primaryURL}/${secondaryURL}&id=${parameterID}`;
    
    return ticketResourcePath;
}