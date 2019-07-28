function getStartDate(state) {
    /*
    compute the startDate
    */
    const userData = state["userData"];
    let startDate = null;
    /*
    iterate date from today to back
    find the start of the most recend Period date
    whitch is the startDate
    */
    for (const date of Object.keys(userData).sort()) {
        if (userData[date]["Blood"] === 0) { 
        // not in period
            if (startDate !== null) {
                return startDate;
            } 
        // if it is none, continue to find the most recend period date    
        } else {    
        // in period, update startDate
            startDate = date;
        }
    }
}

export default getStartDate;