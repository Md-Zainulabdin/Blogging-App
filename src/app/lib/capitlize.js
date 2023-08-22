export const capitlize = (character) => {
    let data = character.split(" ");
    let capitalWords = data.map((val) => val.charAt(0).toUpperCase() + val.slice(1));
    return capitalWords.join(" ");
}
