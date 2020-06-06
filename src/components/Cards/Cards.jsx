import React from 'react';
import { Card, CardContent, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './Cards.module.css';

import alert from '../../images/alert.svg';
import patient from '../../images/patient.svg';
import bandage from '../../images/bandage.svg';

const Cards = ({ data: {confirmed, recovered, deaths, lastUpdate}}) => {

    if(!confirmed){
        return "Loading..." ;
    }

    return(
        <div className={styles.container}>
            <Grid container spacing={0} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.cardColor)}>
                    <CardContent>
                        <img className={styles.iconCard} alt="covid-19" src={patient}/>
                        <p className={styles.cardTitle}>Infected</p>
                        <h5 className={styles.infected}>
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
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.cardColor)}>
                    <CardContent>
                        <img className={styles.iconCard} alt="covid-19" src={alert}/>
                        <p className={styles.cardTitle}>Deaths</p>
                        <h5 className={styles.deaths}>
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
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.cardColor)}>
                    <CardContent>
                        <img className={styles.iconCard} alt="covid-19" src={bandage}/>
                        <p className={styles.cardTitle}>Recovered</p>
                        <h5 className={styles.recovered}>
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


