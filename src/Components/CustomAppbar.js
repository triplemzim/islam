import React from 'react';
import { withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PublicIcon  from '@material-ui/icons/Public';
import PropTypes from 'prop-types';
import * as col from '../Res/Color';


const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: col.primary,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
});

class CustomAppbar extends React.Component {
    handleLogin = () => {
        window.location.href = "https://www.google.com";
    }
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
            <AppBar position="static" 
            className = {classes.root}
            color="inherit">
                <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu" label="Home">
                    <PublicIcon/>
                </IconButton>
                <div>
                    <Button>
                       Home 
                    </Button>
                    <Button>
                       Our Mission 
                    </Button>
                    <Button>
                       Gallery 
                    </Button>
                    <Button>
                        About Us
                    </Button>
                </div>
                <Typography variant="h6" className={classes.title}>
                </Typography>

                <Button color="inherit"
                onClick={this.handleLogin}>Login</Button>
                </Toolbar>
            </AppBar>
            </div>
        );
    }
};

CustomAppbar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles) (CustomAppbar);