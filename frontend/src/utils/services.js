import axios from 'axios';

export const getWeatherService = async (location) => {
    try {
        // const response = await axios.get('http://localhost:4000/dublin');
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=90d9cb7748e3233b66c21f772bd65445`);
        return response.data;
    } catch (error) {
        console.error(
            "There has been a problem with your fetch operation:",
            error.message
        );
        return error.message ? error : new Error("Network error");
    }
};

export const updateState = (data) => {
    const tempDays = [];
    const dayIndices = getDayIndices(data);

    for (let i = 0; i < 5; i++) {
        const currentData = data.list[dayIndices[i]];
        tempDays.push({
            date: currentData.dt_txt,
            weather_desc: currentData.weather[0].description,
            icon: currentData.weather[0].icon,
            temp: currentData.main.temp,
        });
    }
    return tempDays;
};
// returns array with Indices of the next five days in the list from the API data (every day at 12:00 pm)
const getDayIndices = (data) => {
    let dayIndices = [0];
    let currentDay = data.list[0].dt_txt.slice(8, 10);

    for (let i = 1; i < data.list.length; i++) {
        let day = data.list[i].dt_txt.slice(8, 10);
        let hour = data.list[i].dt_txt.slice(11, 13);

        if (day !== currentDay && hour === "15") {
            dayIndices.push(i);
            currentDay = day;

            // Stop after finding 4 different days
            if (dayIndices.length === 5) {
                break;
            }
        }
    }
    return dayIndices;
};
// const days = updateState(data);

// const weatherBoxes = days.slice(1).map((day) => (
//     <WeatherBox {...day} key={new Date(day.date).getDay()} />
// ));


export const loginService = async (username, password) => {
    try {
        const response = await axios.post('http://localhost:4000/login', {
            username,
            password
        });
        return response.data;
    } catch (err) {
        throw err;
    }
};

export const registerService = async (username, password) => {
    try {
        const response = await axios.post('http://localhost:4000/register', {
            username,
            password
        });
        return response.data;
    } catch (err) {
        throw err;
    }
};

export const changePasswordService = async (username, oldPassword, newPassword) => {
    const token = localStorage.getItem('token');
    if (!token) {
        throw new Error("No token found");
    }

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    };

    const response = await axios.post('http://localhost:4000/user/change-password', 
    { username, oldPassword, newPassword }, 
    { headers }
    );
    return response.data;
};
