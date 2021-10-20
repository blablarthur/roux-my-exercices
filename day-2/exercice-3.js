const isCharANumber = (char) => {
    return char >= '0' && char <= '9';
}

export const my_string_is_number = (str) => {
    for (var i = 0; i < str.length; i++) {
        if (isCharANumber(str[i]))
            return true;
    }
    return false;
}