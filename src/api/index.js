import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';


export const fetchedtData = async (country) => {

    let changeableURL = url;

    if(country){
        changeableURL = `${url}/countries/${country}`;
    }

    try {
        const {data: {confirmed,recovered,deaths,lastUpdate}} = await axios.get(changeableURL);

        const getPct = (value,confirmed) => {
            let pct = (value * 100)/confirmed;
            
            return pct;
        }

        const pctDeaths = getPct(deaths.value,confirmed.value);
        const pctRecovered = getPct(recovered.value,confirmed.value);


        return { confirmed, recovered, deaths, lastUpdate, pctDeaths, pctRecovered};
        
    } catch (error) {
        console.log(error);
    }
}

export const fetchDailyData = async () => {
    try {
        const {data} = await axios.get(`${url}/daily`);


        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,

        }));  

        return modifiedData;

    } catch (error) {
        console.log(error);
    }
}

export const fetchCountries = async () => {
    try {
        const {data: {countries}} = await axios.get(`${url}/countries`);

        return countries.map((country) => country.name);

    } catch (error) {
        console.log(error);
    }
}