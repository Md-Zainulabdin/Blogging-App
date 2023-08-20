export const greeting = () => {
    let greet;
    let date = new Date();
    let hour = date.getHours();

    if (hour > 12) {
        greet = 'Good Noon'
    }
    else if (hour > 17) {
        greet = 'Good Evening'
    }
    else if (hour > 20) {
        greet = 'Good Night'
    } else {
        greet = 'Good Morning'
    }

    return greet;
}

