import React, { useState } from 'react';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import cityData from './citySelect.json';


const SignupSchema = Yup.object().shape({
    username: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('*'),
    email: Yup.string().email('Invalid email').required('*'),
    website: Yup.string().url('Must be URL'),
    github: Yup.string().url('Must be URL'),
    linkedin: Yup.string().url('Must be URL').required('*'),
    jsExp: Yup.number().required('*'),
    cssExp: Yup.number().required('*'),
    htmlExp: Yup.number().required('*'),
    salary: Yup.number().required('*'),
});

const Form = () => {

    const [stepCount, setStepCount] = useState(1);

    const nextHandler = () => {
        if (stepCount < 3) {
            setStepCount(stepCount + 1);
        } else {
            return;
        }
    }
    const prevHandler = () => {
        if (stepCount === 1) {
            return;
        } else {
            setStepCount(stepCount - 1);
        }
    }


    return (
        <div className='container mt-3' >
            <h1>Form</h1>
            <div className="col-md-12 d-flex justify-content-end  align-items-center mb-3">
                {stepCount !== 1 ? <button className='button-56' type='button' onClick={prevHandler} > ← Prev</button> : null}

                <h4 className='mx-3 m-0' > {stepCount}/3 </h4>
            </div>
            <Formik
                initialValues={{ username: '', email: '', city: "", town: "", address: '', website: '', github: '', linkedin: '', jsExp: '', cssExp: '', htmlExp: '', salary: '', }}
                validationSchema={SignupSchema}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setStepCount(1);
                        setSubmitting(false);
                    }, 400);
                    resetForm();
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                }) => (
                    <form onSubmit={handleSubmit}>

                        {/* STEP 1  */}

                        {stepCount === 1 ?
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h3>User Informations</h3>
                                    </div>
                                </div>
                                <div className="row d-flex align-items-center mb-3">
                                    <div className='col-md-3 mb-4 mb-md-0' >
                                        <div className="form-floating input-label">
                                            <input
                                                type="text"
                                                name='username'
                                                className="form-control"
                                                id="floatingInput"
                                                placeholder="name@example.com"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.username} />
                                            <label>Username  {errors.username && touched.username && errors.username}</label>

                                        </div>
                                    </div>
                                    <div className='col-md-3 mb-4 mb-md-0' >
                                        <div className="form-floating input-label">
                                            <input type="email" name='email' className="form-control" id="floatingInput" placeholder="name@example.com"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.email} />

                                            <label>Email {errors.email && touched.email && errors.email}</label>
                                        </div>
                                    </div>
                                    <div className='col-md-3 mb-4 mb-md-0' >
                                        <Field
                                            name="city"
                                            as="select"
                                            className="form-select"
                                        >
                                            <option selected value="1">Select City</option>
                                            {cityData?.map((city, i) => <option value={city.il} > {city.il} </option>)}
                                        </Field>
                                    </div>
                                    <div className='col-md-3' >
                                        <Field
                                            name="town"
                                            as="select"
                                            className="form-select">
                                            <option value="1">Select Town</option>
                                            {cityData?.find(c => c.il === values.city)?.ilceleri.map((town, i) => <option value={town} > {town} </option>)}
                                        </Field>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-floating mb-3 input-label">
                                            <textarea name='address' className="form-control" id="floatingInput" placeholder="name@example.com"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.address} />
                                            <label>Address {errors.address && touched.address && errors.address}</label>

                                        </div>
                                    </div>
                                </div>
                                {stepCount === 3 ? null : <button className='button-56' type='button' disabled={errors.address || errors.username || errors.email || errors.city || errors.town || values.username === ""} onClick={nextHandler}  > Next → </button>}

                            </div> : null}

                        {/* STEP 2  */}

                        {stepCount === 2 ?
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h3>Accounts</h3>
                                    </div>
                                </div>
                                <div className="row d-flex align-items-center mb-3">
                                    <div className='col-md-4 mb-4 mb-md-0' >
                                        <div className="form-floating input-label">
                                            <input
                                                type="url"
                                                name='website'
                                                className="form-control"
                                                id="floatingInput"
                                                placeholder="name@example.com"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.website} />
                                            <label>Website Link  {errors.website && touched.website && errors.website}</label>

                                        </div>
                                    </div>
                                    <div className='col-md-4 mb-4 mb-md-0' >
                                        <div className="form-floating input-label">
                                            <input type="url" name='github' className="form-control" id="floatingInput" placeholder="name@example.com"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.github} />

                                            <label>Github Link {errors.github && touched.github && errors.github}</label>
                                        </div>
                                    </div>
                                    <div className='col-md-4 mb-4 mb-md-0' >
                                        <div className="form-floating input-label">
                                            <input type="url" name='linkedin' className="form-control" id="floatingInput" placeholder="name@example.com"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.linkedin} />

                                            <label>LinkedIn Link {errors.linkedin && touched.linkedin && errors.linkedin}</label>
                                        </div>
                                    </div>

                                </div>
                                {stepCount === 3 ? null : <button className='button-56' type='button' disabled={errors.linkedin || values.linkedin === ""} onClick={nextHandler}  > Next → </button>}
                            </div> : null}

                        {/* STEP 3  */}

                        {stepCount === 3 ?
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6 ">
                                        <h3>Experience & Expectation</h3>
                                    </div>
                                </div>
                                <div className="row d-flex align-items-center mb-3">
                                    <div className='col-md-4 mb-4 mb-md-0' >
                                        <div className="form-floating input-label">
                                            <input
                                                type="number"
                                                name='jsExp'
                                                className="form-control"
                                                id="floatingInput"
                                                placeholder="name@example.com"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.jsExp} />
                                            <label>JS Experience (Years)  {errors.jsExp && touched.jsExp && errors.jsExp}</label>

                                        </div>
                                    </div>
                                    <div className='col-md-4 mb-4 mb-md-0' >
                                        <div className="form-floating input-label">
                                            <input
                                                type="number"
                                                name='cssExp'
                                                className="form-control"
                                                id="floatingInput"
                                                placeholder="name@example.com"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.cssExp} />
                                            <label>CSS Experience (Years)  {errors.cssExp && touched.cssExp && errors.cssExp}</label>

                                        </div>
                                    </div>
                                    <div className='col-md-4 mb-4 mb-md-0' >
                                        <div className="form-floating input-label">
                                            <input
                                                type="number"
                                                name='htmlExp'
                                                className="form-control"
                                                id="floatingInput"
                                                placeholder="name@example.com"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.htmlExp} />
                                            <label>HTML Experience (Years)  {errors.htmlExp && touched.htmlExp && errors.htmlExp}</label>

                                        </div>
                                    </div>
                                    <div className='col-md-4 mt-0 mt-md-4' >
                                        <div className="form-floating input-label">
                                            <input
                                                type="number"
                                                name='salary'
                                                className="form-control"
                                                id="floatingInput"
                                                placeholder="name@example.com"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.salary} />
                                            <label>Salary Expectation {errors.salary && touched.salary && errors.salary}</label>

                                        </div>
                                    </div>


                                </div>
                                {stepCount === 3 ? null : <button className='button-56' type='button' disabled={errors.address || errors.username || errors.email || errors.city || errors.town || values.salary === ""} onClick={nextHandler}  > Next → </button>}

                            </div> : null}
                        {stepCount === 3 ? <button className='button-56' type="submit" disabled={isSubmitting}>
                            Submit
                        </button> : null}


                    </form>
                )}
            </Formik>

            {/* <div className="row mt-5">
                <div className="col-md-4">
                    <button className='button-56' > Next! </button>
                </div>

            </div> */}

        </div>
    )
};





export default Form;