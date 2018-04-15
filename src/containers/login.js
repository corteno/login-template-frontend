import React, {Component} from 'react';
import './login.css';
import FormInput from '../components/formInput';

class Login extends Component {

    state = {
        isFormLogin: true,
        email: '',
        username: '',
        password: ''
    };

    toggleForm = () => {
        this.setState({isFormLogin: !this.state.isFormLogin});
    };
    
    onInputChange = (e) => {
        console.log(e.target.value);
    };

    onFormSubmit = () => {
        //Submit form
    };

    render() {
        return (
            <main className={'page-wrapper'}>
                <form action="" className="login-form box-shadow col" onSubmit={() => {this.onFormSubmit()}}>
                    <h1 className="form-title">
                        {this.state.isFormLogin
                            ? 'Login'
                            : 'Register'
                        }
                    </h1>
                    <section className="login-form-content col">

                        <label htmlFor="" className={"form-label col"}>
                            E-mail
                            <FormInput
                                placeholder={"something@domain.com"}
                                value={this.state.email}
                                onChange={event => this.onInputChange(event)}
                            />
                        </label>

                        {!this.state.isFormLogin ?
                            <label htmlFor="" className="form-label col">
                                Username
                                <FormInput
                                    placeholder={"Username"}
                                    value={this.state.username}
                                    onChange={event => this.onInputChange(event)}
                                />
                            </label>
                            :''
                        }

                        <label htmlFor="" className="form-label col">
                            Password
                            <FormInput
                                placeholder={"Password"}
                                type={'password'}
                                value={this.state.password}
                                onChange={event => this.onInputChange(event)}
                            />
                        </label>

                        <hr className={'form-divider'}/>
                        <FormInput
                            className={'form-submit'}
                            type={'submit'}
                            value={this.state.isFormLogin ? 'Login' : 'Register'}
                        />

                        <p className="login-register" onClick={() => {
                            this.toggleForm()
                        }}>Register</p>
                    </section>
                </form>
            </main>
        );
    }
}

export default Login;