import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import * as col from '../Res/Color';
import Coverphoto from '../static/imgaes/dummy.png';
import 'typeface-roboto';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  container: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    padding: theme.spacing(4),
    margin: 0,

  },
  coverText: {
    padding: theme.spacing(2),
    paddingLeft: theme.spacing(16),
    paddingRight: theme.spacing(16),
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});


class Homebody extends React.Component {
    render() {
        const {classes} = this.props;
        return (
            <div>
                <div className={classes.container}>
                <img alt="Cover Photo" src={Coverphoto}></img>
                </div>
                <div className={classes.coverText}>
                    <Typography
                    variant="h6" component="h2"
                    >
                        Short description of what is the purpose of this website. What we are doing and what the visitor can do
                        with this website. **** dummy text ->   
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                        It has survived not only five centuries, but also the leap into electronic typesetting, 
                        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets 
                        containing Lorem Ipsum passages, and more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                    </Typography>
                </div>
            </div>
        );
    }
}

Homebody.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Homebody);

