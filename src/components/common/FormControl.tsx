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

interface IPropsCheckbox {
    children: string
    name: string,
    }

export const MyCheckbox = ({ children, ...props }: IPropsCheckbox) => {
    // We need to tell useField what type of input this is
    // since React treats radios and checkboxes differently
    // than inputs/select/textarea.
    const [field, meta]: any = useField({ ...props, type: 'checkbox' });
    return (
        <>
            <label className="checkbox">
                <input type="checkbox" {...field} {...props} />
                {children}
            </label>
        </>
    );
};