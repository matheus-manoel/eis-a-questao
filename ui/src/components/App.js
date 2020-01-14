import React, { useState } from 'react';
import ExpansionPanel from './ExpansionPanel';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  listContainer: {
    marginTop: theme.spacing(10),
  }
}));

export default function App() {
  const classes = useStyles();
  const [questions, setQuestions] = useState([
    {
      _id: 1,
      title: 'Qual a raíz quadrada de 4?',
      option_a: '2',
      option_b: '3',
      option_c: '4',
      option_d: '5',
      answer: 'a'
    },{
      _id: 2,
      title: 'Quantos anos tem uma década',
      option_a: '2',
      option_b: '3',
      option_c: '10',
      option_d: '5',
      answer: 'c'
    },{
      _id: 3,
      title: 'Qual ator/atriz tem um nome com as iniciais BP?',
      option_a: 'Brandon London',
      option_b: 'Antônia Mineira',
      option_c: 'Lucas Luco',
      option_d: 'Brad Pit',
      answer: 'd'
    }
  ]);

  const ExpansionPanelList = questions.map((question) => {
    return (
      <ExpansionPanel
        key={question._id}
        question={question}
      /> 
    );
  });

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            C ou não C: eis a questão!
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md">
        <Paper elevation={3} className={classes.listContainer}>
          {ExpansionPanelList}
        </Paper>
      </Container>
    </div>
  );
}
