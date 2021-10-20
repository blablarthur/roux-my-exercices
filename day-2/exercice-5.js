export const my_display_combv2 = () => {
    var arrNumber = [];
    var cmpt = 0;
    for (var i = 0; i <= 7; i++) {
        for (var j = i + 1; j <= 8; j++) {
            for (var k = j + 1; k <= 9; k++) {
                arrNumber[cmpt] = 
                    i + " " + j + " " + k;
                cmpt++;
            }
        }
    }
    return arrNumber;
}