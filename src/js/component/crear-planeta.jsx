import React from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';


export const CrearPlaneta = () => {

	const formik = useFormik({
		initialValues: {
			name: '',
			population: '',
            diameter: ''
		},
		validationSchema: Yup.object({
			name: Yup.string().min(4,'4 characters').required('Required'),
			population: Yup.string().required('Required'),
			diameter: Yup.string().required('Required')
		}),
		onSubmit: values => {
			alert(JSON.stringify(values, null, 2));
		},
	});


	return (

		<div className="container text-center mb-3 border border-3 border-info rounded">
			<h3 className="fw-semibold text-info text-opacity-50">Create planet</h3>
			<form onSubmit={formik.handleSubmit}>
				<div className="mb-3">
					<label for="InputName1" className="form-label text-info">Planet Name</label>
					<input type="text" className="form-control" id="InputName1" name="name" aria-describedby="nameHelp"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.name} />
					{formik.touched.name && formik.errors.name ? (
						<div className="text-danger">{formik.errors.name}</div>
					) : null}
				</div>
				<div className="mb-3">
					<label for="InputPopulation1" className="form-label text-info">Population</label>
					<input type="text" className="form-control" name="population" id="InputPopulation1"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.population} />
					{formik.touched.population && formik.errors.population ? (
						<div className="text-danger">{formik.errors.population}</div>
					) : null}
				</div>
				{<div className="mb-3">
					<label for="InputDiameter1" className="form-label text-info">Diameter</label>
					<input type="text" className="form-control" name="eye_color" id="InputDiameter1"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.diameter} />
					{formik.touched.diameter && formik.errors.diameter ? (
						<div className="text-danger">{formik.errors.diameter}</div>
					) : null}
				</div>}
				<button type="submit" className="btn btn-primary">Save</button>
			</form>

		</div>

	)

};