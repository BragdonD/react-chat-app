import React, { useState } from "react";

export const Input = ( { placeholder, type, callback } ) => {
    /**
     * 
     * @param {InputEvent} e 
     */
    const handleChange = (e) => {
        callback(e.target.value);
    };

    const handleClick = () => {
        if(type === "submit") { 
            callback(true);
        }
    }

    return (
        <div>
            <input type={type} placeholder={placeholder} onChange={handleChange} onClick={handleClick}></input>
        </div>
    )
}