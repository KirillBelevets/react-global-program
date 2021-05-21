import React from 'react'
import '../global.scss'
import {bindActionCreators} from "redux"
import {postMovie, saveEditMovie} from "../store/actions"
import {connect} from "react-redux"
import {Form, Formik, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'

function MovieForm({movie = null, buttonSubmitText, postMovie, saveEditMovie}) {

    return (
        <Formik
            initialValues={{
                id: movie?.id || undefined,
                title: movie?.title || '',
                release_date: movie?.release_date || '',
                poster_path: movie?.poster_path || '',
                genres: movie?.genres || ["Drama"],
                overview: movie?.overview || '',
                runtime: movie?.runtime || ''
            }}
            validationSchema={Yup.object({
                title: Yup.string()
                    .max(25, 'Must be 25 characters or less')
                    .required('Required'),
                release_date: Yup.string()
                    .max(10, 'Must be 10 characters or less')
                    .required('Required'),
                poster_path: Yup.string()
                    .max(100, 'Must be 100 characters or less')
                    .required('Required'),
                overview: Yup.string()
                    .max(400, 'Must be 400 characters or less')
                    .required('Required'),
                runtime: Yup.number().positive().integer().required('Required')
            })}
            onSubmit={(values, {setSubmitting}) => {
                if (movie) {
                    saveEditMovie(values)
                } else {
                    postMovie(values)
                }
                setSubmitting(false)
            }}
        >
            <Form>
                {movie &&
                <>
                    <label className="modal-label">movie id</label>
                    <Field type="number" className="modal-input" name="id"/>
                </>
                }
                <label htmlFor="title" className="modal-label">title</label>
                <Field type="text" className="modal-input" name="title"/>
                <ErrorMessage name="title"/>

                <label className="modal-label">release date</label>
                <Field type="date" className="modal-input" name="release_date"/>
                <ErrorMessage name="release_date"/>

                <label className="modal-label">url</label>
                <Field type="url" className="modal-input" name="poster_path"/>
                <ErrorMessage name="poster_path"/>

                <label className="modal-label">genre</label>
                <Field as="select" className="modal-input-select" placeholder="Select genre" name="genres"
                       multiple={true}>
                    <option value="" disabled>Select genre</option>
                    <option value="Drama">Drama</option>
                    <option value="Comedy">Comedy</option>
                    <option value="Documentary">Documentary</option>
                </Field>
                <ErrorMessage name="genres"/>

                <label className="modal-label">movie overview</label>
                <Field className="modal-input" type="text" name="overview"/>
                <ErrorMessage name="overview"/>

                <label className="modal-label">runtime</label>
                <Field className="modal-input" type="number" name="runtime"/>
                <ErrorMessage name="runtime"/>

                <div className="btn-wrapper display-flex">
                    <button className="btn btn-reset text-uppercase">reset</button>
                    <button type="submit" className="btn btn-submit text-uppercase">{buttonSubmitText}</button>
                </div>
            </Form>
        </Formik>
    )
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({postMovie: postMovie, saveEditMovie: saveEditMovie}, dispatch)
}

export default connect(null, mapDispatchToProps)(MovieForm)
