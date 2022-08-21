// convert git api date into readable formate 
// return date in toDateString formate
export const ToDateStr = (dateStr) => {
    const oldDate = new Date(dateStr);
    const newDate = oldDate.toDateString()
    return newDate
}


// isValid check is api array kay is empty or not
// if api array key is empty then return 'Not Available'
// else nothing change and return same value
export const isValid = (data) => {
    if (data === null || data === '') {
        return 'Not Available'
    }
    else {
        return data
    }
}

// after isValid fun call this 
// isAvailableSocial is fun to get a valid link tag
export const isAvailableSocial=(state, fullLink, linkName, theme)=> {
    if (state === 'Not Available') {
        return <span style={{ opacity: .5 }}>Not Available</span>
    } else {
        return (
            <a
                href={fullLink}
                target='_blank'
                rel="noreferrer"
                className={`social-link ${theme}-txt`}
            >{linkName}</a>
        )
    }
}