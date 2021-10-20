export const my_display_alpha = () => {
    var str = "";
    for (var i = 0; i < 26; i++) {
        str += String.fromCharCode(97 + i);
    }
    return str;
}