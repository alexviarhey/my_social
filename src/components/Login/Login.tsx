import React from 'react'
import s from './Login.module.css'
import {useFormik} from 'formik'
import * as Yup from 'yup';
import {useDispatch, useSelector} from "react-redux";
import {login} from '../../redux/auth-reducer';
import {AppStateType} from '../../redux/store';
import {Redirect} from 'react-router-dom';


const Login = () => {
    let {errMessage, isAuth, captcha} = useSelector((state: AppStateType) => {
        return {
            errMessage: state.authPage.errorLoginMessage,
            isAuth: state.authPage.isAuth,
            captcha: state.authPage.captchaUrl
        }
    });

    let dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            captcha: ''
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Invalid email')
                .required('Required'),
            password: Yup.string()
                .required('Required'),
        }),
        onSubmit: values => dispatch(login(values.email, values.password, values.captcha))
    });

    if (isAuth) return <Redirect to='profile'/>

    return (
        <div className={s.outer}>
            <div className={s.title}>Login</div>
            <form className={s.form} onSubmit={formik.handleSubmit}>
                <input className={s.input}
                       type="email"
                       placeholder='email@gmail.com'
                       value={formik.values.email}
                       onChange={formik.handleChange}
                       name='email'
                       onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email ?
                    <div className={s.error}>{formik.errors.email}</div> : null
                }
                <input
                    className={s.input}
                    type="password"
                    placeholder='password'
                    name='password'
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.password}
                />
                {formik.touched.password && formik.errors.password ?
                    <div className={s.error}>{formik.errors.password}</div> : null
                }
                {captcha && <img className={s.captcha} src={captcha} alt='captcha'/>}
                {captcha && <input type="text"
                                   value={formik.values.captcha}
                                   onBlur={formik.handleBlur}
                                   onChange={formik.handleChange}
                                   name='captcha'
                                   placeholder='write a symbols'
                                   className={s.input}
                />}
                {errMessage ? <div className={s.error}>{errMessage}</div> : null}
                <button className={s.submit} type='submit'>Login</button>
            </form>
        </div>

    )
};


export default Login