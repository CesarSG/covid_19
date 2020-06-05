import React from 'react';
import { Card, CardContent, Typography, Grid, StylesProvider } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './Cards.module.css';

const Cards = ({ data: {confirmed, recovered, deaths, lastUpdate}}) => {

    if(!confirmed){
        return "Loading..." ;
    }

    return(
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected, styles.cardColor)}>
                    <CardContent>
                        <p>Infected</p>
                        <h5>
                            <CountUp
                                start={0}
                                end={confirmed.value}
                                duration={2.5}
                                separator=","
                            />
                        </h5>
                        <p className={styles.date}>{new Date(lastUpdate).toDateString()}</p>
                        <p>Number of recovieries from COVID-19</p>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths, styles.cardColor)}>
                    <CardContent>
                        <p>Deaths</p>
                        <h5>
                            <CountUp
                                start={0}
                                end={deaths.value}
                                duration={2.5}
                                separator=","
                            />
                        </h5>
                        <p className={styles.date}>{new Date(lastUpdate).toDateString()}</p>
                        <p>Number of deaths caused by COVID-19</p>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered, styles.cardColor)}>
                    <CardContent>
                        <p>Recovered</p>
                        <h5>
                            <CountUp
                                start={0}
                                end={recovered.value}
                                duration={2.5}
                                separator=","
                            />
                        </h5>
                        <p className={styles.date}>{new Date(lastUpdate).toDateString()}</p>
                        <p>Number of active cases of COVID-19</p>
                    </CardContent>
                </Grid>
            </Grid>

        </div>
    );
}

export default Cards;


