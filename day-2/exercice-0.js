export const my_display_forever_42 = (nbr) => {
    if (arguments.length < 1)
        return 42;
    if (typeof(nbr) != "number")
        return 42;
    return nbr;
}