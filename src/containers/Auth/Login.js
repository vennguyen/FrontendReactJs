import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
// import * as actions from "../store/actions";
import * as actions from "../../store/actions";
// import { KeyCodeUtils, LanguageUtils } from "../utils";
import './Login.scss';
// import { FormattedMessage } from 'react-intl';

class Login extends Component {
    // constructor(props) {
    //     super(props);
    // }

    state= {
        username: "",
        password: ""
    }
    handleLogin= () =>{
        let {username, password}= this.state;
        console.log(username)
    }
    render() {
        return (
            <div className='login-background'>
                <div className='login-container'>
                     <div className='login-content'>
                        <div className='col-12 text-login'>Login</div>
                        <div className='col-12 form-group'>
                            <label>Username: </label>
                            <input type='text'
                            placeholder='Enter your username' className='form-control login-input' 
                                value={this.state.username}
                                onChange= {(e)=>{this.setState({username: e.target.value})}}
                            />
                        </div>
                        <div className='col-12 form-group'>
                            <label>Passwoord: </label>
                            <input type='text' placeholder='Enter password' className='form-control login-input' 
                                value={this.state.password}
                                onChange= {(e)=>{this.setState({password: e.target.value})}}
                            />
                        </div>
                        <div className='col-12'>
                            <button className='btn-login'
                                onClick={()=> this.handleLogin()}
                            >Login ASS</button>
                        </div>
                        
                        <div className='col-12'>
                            <span className='forgot-password'>Forget your password</span>
                        </div>
                        <div className='col-12 text-center mt-3'>
                            <span className='text-order-login'>Or login with</span>
                        </div>
                        <div className='col-12 social-login'>
                            <i className="fab fa-google-plus-g google"></i>
                            <i className="fab fa-facebook facebook"></i>
                        </div>
                     </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        adminLoginSuccess: (adminInfo) => dispatch(actions.adminLoginSuccess(adminInfo)),
        adminLoginFail: () => dispatch(actions.adminLoginFail()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
