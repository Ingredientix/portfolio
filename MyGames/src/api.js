const base_url = 'https://api.rawg.io/api/';

const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1;
    if (month < 10) {
        return `0${month}`;
    } else {
        return month;
    }
};
const getCurrentDay = () => {
    const day = new Date().getDate();
    if (day < 10) {
        return `0${day}`;
    } else {
        return day;
    }
};
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYearDate = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYearDate = `${currentYear + 1}-${currentMonth}-${currentDay}`;

const popular_games = `games?dates=${lastYearDate},${currentDate}&ordering=-rating`;
const upcoming_games = `games?dates=${currentDate},${nextYearDate}&ordering=-added`;
const new_games = `games?dates=${lastYearDate},${currentDate}&ordering=-released`;

export const popularGamesURL = (quantity) => `${base_url}${popular_games}&page_size=${quantity}`;
export const upcomingGamesURL = (quantity) => `${base_url}${upcoming_games}&page_size=${quantity}`;
export const newGamesURL = (quantity) => `${base_url}${new_games}&page_size=${quantity}`;
export const currentGameURL = (id) => `${base_url}games/${id}`;


