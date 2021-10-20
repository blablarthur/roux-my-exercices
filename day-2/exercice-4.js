export const my_display_comb = () => {
    var arrNumber = [];
    for (var i = 0; i <= 99; i++) {
        for (var j = 0; j <= 99; j++) {
            arrNumber[i * 100 + j] = i + " " + j
        }
    }
    return arrNumber;
}