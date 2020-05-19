import React from 'react';
import { Grid, Paper, Box, Typography, Button } from '@material-ui/core';
import Link from 'next/link';
import AppLayout from '../../layouts/AppLayout';
import calculators from '../../calculators/settings';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
  authorImage: {
    display: 'inline-block',
    width: '30px',
    height: '30px',
    borderRadius: '100%',
    border: '2px solid lightgrey',
    verticalAlign: 'middle',
    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      borderRadius: '100%'
    }
  }
}));
export default function index() {
  const classes = useStyles();
  return (
    <AppLayout>
      <Grid container spacing={3}>
        {calculators.list.map(calculator => (
          <Grid item sm={6} xs={12} key={calculator.slug}>
            <Paper elevation={3}>
              <Box p={2}>
                <Typography variant="caption">{calculator.category}</Typography>
                <Typography variant="h5">{calculator.title}</Typography>
                <Typography variant="body1" paragraph>
                  {calculator.description}
                </Typography>
                <Box mt={5}>
                  <Grid container justify="space-between">
                    <Grid item>
                      <span className={classes.authorImage}>
                        <img
                          src={calculator.author.image}
                          alt={calculator.author.name}
                        />
                      </span>
                      <Box component="span" ml={1}>
                        <Typography component="span" variant="body2">
                          {calculator.author.name}
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item>
                      <Link
                        href={`${calculators.baseFolder}/[slug]`}
                        as={`${calculators.baseFolder}/${calculator.slug}`}
                      >
                        <Button variant="contained" color="primary">
                          Začni
                        </Button>
                      </Link>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </AppLayout>
  );
}
