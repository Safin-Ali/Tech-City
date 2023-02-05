export const takaToDollers = (taka) => {
    const dollers = parseInt(Math.round(taka/108));
    if(dollers <= 5) return 5;
    return dollers;
};