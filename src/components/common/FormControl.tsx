import React from 'react';
import {useField} from 'formik';

interface IProps {
    type: string
    name: string,
    label?: string
    placeholder?: string ,
    className?: string
}
export const MyTextInput = ({label,...props}: IProps) => {
    const [field, meta]: any = useField(props);
    return (
        <>
            <label htmlFor={props.name}>{label}</label>
            <input id={props.name} {...props} {...field} />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </>
    );
};