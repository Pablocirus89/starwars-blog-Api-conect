import React from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';


export const CrearPersonaje = () => {

	const formik = useFormik({
		initialValues: {
			name: '',
			gender: '',
            eye_color: ''
		},
		validationSchema: Yup.object({
			name: Yup.string().min(4,'4 characters').required('Required'),
			gender: Yup.string().required('Required'),
			eye_color: Yup.string().required('Required')
		}),
		onSubmit: values => {
			alert(JSON.stringify(values, null, 2));
		},
	});


	return (

		<div className="container text-center mb-3 border border-3 border-info rounded">
            <h3 className="fw-semibold text-info text-opacity-50">Create character</h3>
			<form onSubmit={formik.handleSubmit}>
				<div className="mb-3">
					<label for="InputName1" className="form-label text-info">Character Name</label>
					<input type="text" className="form-control" id="InputName1" name="name" aria-describedby="nameHelp"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.name} />
					{formik.touched.name && formik.errors.name ? (
						<div className="text-danger">{formik.errors.name}</div>
					) : null}
				</div>
				<div className="mb-3">
					<label for="InputGender1" className="form-label text-info">Gender</label>
					<input type="text" className="form-control" name="gender" id="InputGender1"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.gender} />
					{formik.touched.gender && formik.errors.gender ? (
						<div className="text-danger">{formik.errors.gender}</div>
					) : null}
				</div>
				{<div className="mb-3">
					<label for="InputEyeColor1" className="form-label text-info">Eyes Color</label>
					<input type="text" className="form-control" name="eye_color" id="InputEyeColor1"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.eye_color} />
					{formik.touched.eye_color && formik.errors.eye_color ? (
						<div className="text-danger">{formik.errors.eye_color}</div>
					) : null}
				</div>}
				<button type="submit" className="btn btn-primary">Save</button>
			</form>

		</div>

	)

};