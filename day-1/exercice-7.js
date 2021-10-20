export const my_is_posi_neg = (nbr) => {
    if (nbr === undefined || nbr === null || nbr > 0)
        return "POSITIF";
    else if (nbr < 0)
        return "NEGATIF";
    else
        return "NEUTRAL";
}