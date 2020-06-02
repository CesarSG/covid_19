import React from 'react';

import {Cards, Chart, CountryPicker} from './components';
import  styles from './App.module.css';
import {fetchedtData} from './api';

class App extends React.Component{

    state = {
        data: {},
    }

    async componentDidMount() {
        const data = await fetchedtData();

        this.setState({ data: data });
    }

    render() {
        const {data} = this.state;

        return(
            <div className={styles.container}>
                <Cards data={data}/>
                <CountryPicker/>
                <Chart/>
                

            </div>
        );
    }
}

export default App;