export const my_array_alpha = (str) => {
    var charArray = [];
    var i = 0;
    while (str[i] != undefined) {
        charArray.push(str[i])
        i++;
    }
    return charArray;
}