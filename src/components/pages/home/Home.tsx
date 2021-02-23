import React, { useRef } from 'react';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import logoPng from '../../../assets/logo.png';
import { makeStyles } from '@material-ui/core/styles';
import './Home.css';

const useStyles = makeStyles((theme) => {
  return {
    logo: {
      [theme.breakpoints.up('md')]: {
        width: 500,
      },
      width: 250,
    },
    textContainer: {
      backgroundColor: '#F5F5F5',
      padding: 10,
    },
    textCard: {
      margin: 10,
    },
    movingText: {
      color: 'green',
    },
  };
});

const Home: React.FunctionComponent<{}> = () => {
  const homeRef = useRef<HTMLDivElement>(null);
  const classes = useStyles();

  const aboutText = `This is a basic React app meant to demonstrate the use of 
    typed data management using TypeScript and Redux. 
    Custom routes are organized in a dedicated config file for 
    ease of maintenance. All data is pulled using the PokeAPI 
    and the UI laid out using Material UI Design.`;

  const howToUseText = 'Navigate using the menu items on the left side.';

  return (
    <div ref={homeRef}>
      <div ref={homeRef} className="logo-container">
        <CardMedia component="img" image={logoPng} className={classes.logo} />
        <Typography variant="h2">Information App</Typography>
      </div>
      <div className={classes.textContainer}>
        <Card className={classes.textCard}>
          <CardContent>
            <Typography>{aboutText}</Typography>
          </CardContent>
        </Card>
        <Card className={classes.textCard}>
          <CardContent>
            <Typography>{howToUseText}</Typography>
            <div className="bounce">
              <ArrowBackIcon />
              <Typography variant="subtitle2" className={classes.movingText}>
                Explore!
              </Typography>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Home;
