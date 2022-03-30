import React from "react";
import styled from "styled-components";
import { useField } from "formik";


const Control =  styled.div`
    margin-top: 20px;
`

const Label = styled.label`
    color: #000;
    display:  block;
    margin-top: 5px;
`

const MyInput = styled.input`
    outline: none;
    padding: 8px;
    border: solid 1px #b1b3b5;
    border-radius: 4px;
    width: 100%;
    margin-bottom: 5px;
`

const ErrorMessage = styled.div`
    color: #f00
`

const Input : React.FC<{name: string, label: string}> = ({label, ...props}) => {
    const [field, meta] = useField(props);
    return (
        <Control>
            <Label>{label}</Label>
            <MyInput {...field} {...props}/>
            {meta.touched && meta.error ? (
                <ErrorMessage>{meta.error}</ErrorMessage>
            ) : null}
        </Control>
    )
}

export default Input;