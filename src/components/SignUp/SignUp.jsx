import React from 'react';
import style from './SignUp.module.css';
import { NavLink } from 'react-router-dom';
import App from "./../../App";
import ReactDOM from 'react-dom';
import Registration from '../registration/Registration';
import { BrowserRouter, Route } from 'react-router-dom';



const SignUp = (props) =>{

    let onclickLink = () => {
        props.state.classNameAnimation = "divAnimationLeft";
        ReactDOM.render(
        <React.StrictMode>
            <App state = {props.state}/>
        </React.StrictMode>,
        document.getElementById('root')
        );
        setTimeout(() =>{
            props.state.classNameAnimation = "divAnimationRight";
            ReactDOM.render(
                <React.StrictMode>
                    <BrowserRouter>
                        <Registration state = {props.state}/>
                    </BrowserRouter>
                </React.StrictMode>,
                document.getElementById('root')
            );
        },250);
    }

    return (
        <div className={props.state.classNameAnimation}>
            <div className={style.form}>
                <div className={style.form_name}>Вход</div>
                <div className={style.form_user_email}>
                    <input type='email' placeholder='E-mail'/>
                </div>
                <div className={style.form_user_password}>
                    <input type='password' placeholder='Password'/>
                </div>
                <div className={style.form_checkbox_remember_me}>
                    <input type="checkbox" name="" id=""/><label>Запомнить меня</label>
                </div>
                <div className={style.form_button}>
                    <button>Войти</button>
                </div>
                <div className={style.from_forgot_password}>
                    <NavLink to=''>Восстановить пароль</NavLink>
                </div>
            </div>
            <div className={style.form_link}>
               <NavLink to='' onClick={onclickLink} ><span>Зарегистрируйтесь</span> для полного спектра услуг</NavLink> 
            </div>
        </div>
    );
};

export default SignUp;