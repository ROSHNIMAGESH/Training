import React, { useContext } from 'react'
import { ThemeProvider } from '../UseContext';

const StudentResult = () => {
    var result = useContext(ThemeProvider);
    return (
        <div>
            <h1>CGPA is {result.cgpa} and GPA is {result.gpa}</h1>
        </div>
    )
}

export default StudentResult
//CreateContext is used at Parent component
//UseContext is used at Child Components where ever needed