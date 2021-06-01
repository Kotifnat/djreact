import 'antd/dist/antd.css';
import {BrowserRouter as Router} from 'react-router-dom';
import {connect} from "react-redux";
import BaseRouter from './routes';
import CustomLayout from './containers/Layout'
import * as actions from './store/actions/auth';
import {useEffect} from 'react';

function App(props) {

    useEffect(() => {
        props.onTryAutoSignup();
    })
    return (
        <div>
            <Router>
                <CustomLayout {...props}>
                    <BaseRouter />
                </CustomLayout>
            </Router>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.token !== null
    }

}

const mapDispatchToProps = dispatch => {
    return {
        onTryAutoSignup: () => dispatch(actions.authChekState())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
