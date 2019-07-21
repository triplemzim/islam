import React from 'react';
import { withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import CustomAppbar from '../Components/CustomAppbar';
import Homebody from './Homebody';
import * as col from '../Res/Color';
import Allcards from './Allcards';
import Footer from './Footer';

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

class Home extends React.Component {
    handleLogin = () => {
        window.location.href = "https://www.google.com";
    }
    render() {
        const { classes } = this.props;

        return (
            <div>
                <CustomAppbar/>
                <Homebody/>
                <Allcards/>
                <Footer/>
            </div>
        );
    }
};

Home.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles) (Home);