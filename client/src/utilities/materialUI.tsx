import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  paper: {
    transform: 'translateY(-4px)',
    borderTopLeftRadius: '0px',
    borderTopRightRadius: '0px',
    width: "100%",
  }
});

export const useStylesButton = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(0),
    },
  }),
);