import React from 'react';

import {Cards, Chart, CountryPicker} from './components';
import  styles from './App.module.css';
import {fetchedtData} from './api';

import covidImage from './images/coronavirus.svg';

class App extends React.Component{

    state = {
        data: {},
        country: '',
    }

    async componentDidMount() {
        const data = await fetchedtData();

        this.setState({ data: data });
    }

    handleCountryChange = async (country) => {
        const data = await fetchedtData(country);

        this.setState({
            data: data,
            country: country,
        });
    }

    render() {
        const {data, country} = this.state;

        return(
            <div>
                <div className={styles.header}>
                    <img className={styles.image} alt="covid-19" src={covidImage}/>
                    <h1 className={styles.title}>COVID-19</h1>
                </div>
                <div className={styles.container}>
                    
                    <Cards data={data}/>
                    <CountryPicker handleCountryChange={this.handleCountryChange}/>
                    <Chart data={data} country={country}/>
                    
                </div>
                
            </div>
            
        );
    }
}

export default App;