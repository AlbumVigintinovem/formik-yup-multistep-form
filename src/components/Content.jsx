import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Form from './Form';


const Content = () => {

    return (
        <>
            <Routes>
                <Route path='/' element={<Form />} />
            </Routes>
        </>

    )
}

export default Content