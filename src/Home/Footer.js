import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import * as col from '../Res/Color';
import Coverphoto from '../static/imgaes/dummy.png';
import 'typeface-roboto';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    footer: {
        backgroundColor: col.secondary,
        height: 10,
        marginTop: theme.spacing(10),
    },
    container: {
        flexGrow: 1,
        backgroundColor: col.secondary,
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


class Footer extends React.Component {
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.footer}>
                <div className={classes.container}>
                    <Typography variant="subtitle2"> 
                        This is Footer. Name and declaration of the organization. Contact information.
                    </Typography>
                </div>
            </div>
        );
    }
}

Footer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);

