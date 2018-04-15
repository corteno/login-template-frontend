import React from 'react';

const FormInput = (props) => {



    return (
        <input type={props.type === undefined ? 'text' : props.type}
               className={"form-input " + props.className}
               placeholder={props.placeholder}
               onChange={props.onChange}
        />
    );

};

export default FormInput;