// input form by user to enter the type of book they are looking to read next

import React from 'react';

const Form = () => {

    return (
        <>
            <form className="form">
                <label className="label">Choose A Genre:</label>
                <br />
                <div className="labels">
                    <select className="option">
                        <option hidden disabled selected value>select an option</option>
                        <option value="Contemporary">Contemporary</option>
                        <option value="Fantasy">Fantasy</option>
                        <option value="Historical">Historical</option>
                        <option value="Romance">Romance</option>
                        <option value="Science Fiction">Science Fiction</option>
                        <option value="Thriller">Thriller</option>
                    </select>
                </div>
                <br />
                <label className="label">Choose A Market:</label>
                <br />
                <div className="labels">
                    <select>
                        <option hidden disabled selected value>select an option</option>
                        <option value="Middle Grade">Middle Grade</option>
                        <option value="Young Adult">Young Adult</option>
                        <option value="Adult">Adult</option>
                    </select>
                </div>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </>
    )
}

export default Form;