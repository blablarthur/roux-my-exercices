export const my_display_unicode = (arr) => {
    var i = 0;
    var str = "";
    let alpha = "abcdefghijklmnopqrstuvwxyz";
    let alphaMAJ = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    while (arr[i] != undefined) {
        let char = arr[i];
        if (char >= 97 && char <= 122) {
            str += alpha[char - 97];
        } else if (char >= 48 && char <= 57) {
            str += char - 48;
        } else if (char >= 65 && char <= 90) {
            str += alphaMAJ[char - 65];
        } else if (char === 32) {
            str += ' ';
        }
        i++;
    }
    return str;
}