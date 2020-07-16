import React from 'react';
import style from './Registration.module.css';
import { NavLink } from 'react-router-dom';

const Registration = (props) =>{
    return (
        <div>
            <div className={style.form}>
                <div className={style.form_name}>Регистрация</div>
                <div className={style.form_user_name}>
                    <input type='text' placeholder='Имя'/>
                </div>
                <div className={style.form_user_phone_number}>
                    <input type='tel' placeholder='Телефон'/>
                </div>
                <div className={style.form_user_email}>
                    <input type='email' placeholder='E-mail'/>
                </div>
                <div className={style.form_user_password}>
                    <input type='password' placeholder='Password'/>
                </div>
                <div className={style.form_checkbox_gender}>
                    <div className={style.form_checkbox_gender_man}>
                        <input type='checkbox'/><label for="man">Мужчина</label>
                    </div>
                    <div className={style.form_checkbox_gender_woman}>
                        <input type='checkbox'/><label for="woman">Женщина</label>
                    </div>
                </div>  
                <div className={style.form_button}>
                    <button>Зарегистрироваться</button>
                </div>
            </div>
            <div className={style.form_link}>
               <NavLink to='/signup'>Уже зарегистрировались?<span>Войти</span></NavLink> 
            </div>
        </div>
    );
};

export default Registration;