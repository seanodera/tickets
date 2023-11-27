const getAbbreviation = (num) => {

    if (num === 1 || num === 21 || num === 31) {
        return num.toString() + 'st'
    } else {
        return num.toString() + 'th'
    }
}

const monthString = (num) => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    return months[num];
}

const monthStringShort = (num) => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    return months[num];
}

export const dayStringShort = (num) => {
    const days = [ "Sun",  "Mon",  "Tue",  "wed",  "thu",  "Fri",  "Sat", ]
    return days[num];
}


export {getAbbreviation, monthString, monthStringShort}