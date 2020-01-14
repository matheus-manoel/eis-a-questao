import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(20),
    fontWeight: theme.typography.fontWeightRegular,
  },
	details: {
		flexDirection: 'column',
		marginLeft: 120
	},
}));

export default function SimpleExpansionPanel(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-label="Expand"
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <IconButton aria-label="delete" onClick={e => e.stopPropagation()}>
            <DeleteIcon fontSize="small" />
          </IconButton>
          <IconButton aria-label="edit" onClick={e => e.stopPropagation()}>
            <EditIcon fontSize="small" />
          </IconButton>
          <Container>
            <Typography className={classes.heading}>
              <b>{props.question._id})</b> {props.question.title}
            </Typography>
          </Container>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.details}>
          <Typography> <b>a)</b> {props.question.option_a} </Typography>
          <Typography> <b>b)</b> {props.question.option_b} </Typography>
          <Typography> <b>c)</b> {props.question.option_c} </Typography>
          <Typography> <b>d)</b> {props.question.option_d} </Typography>
          <Typography> <b>Resposta:</b> {props.question.answer} </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
