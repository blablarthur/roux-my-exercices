import { my_display_alpha } from "./exercise-1.js";

export const my_display_alpha_reverse = () => {
    var str = my_display_alpha();
    var strReverse = "";
    for (var i = 0; i < 26; i++) {
        strReverse += str[25 - i];
    }
    return strReverse;
}