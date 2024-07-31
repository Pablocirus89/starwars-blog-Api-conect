import React from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';


export const CreateCard = () => {

	const formik = useFormik({
		initialValues: {
			email: '',
			password: ''
		},
		validationSchema: Yup.object({
			email: Yup.string().email('Invalid email address').required('Required'),
			password: Yup.string().min(6,'6 characters').required('Required')
		}),
		onSubmit: values => {
			alert(JSON.stringify(values, null, 2));
		},
	});


	return (

		<div className="container text-center">
			<form onSubmit={formik.handleSubmit}>
				<div className="mb-3">
					<label for="exampleInputEmail1" className="form-label text-info">Email address</label>
					<input type="email" className="form-control" id="exampleInputEmail1" name="email" aria-describedby="emailHelp"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.email} />
					{formik.touched.email && formik.errors.email ? (
						<div>{formik.errors.email}</div>
					) : null}
					<div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
				</div>
				<div className="mb-3">
					<label for="exampleInputPassword1" className="form-label text-info">Password</label>
					<input type="password" className="form-control" name="password" id="exampleInputPassword1"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.password} />
					{formik.touched.password && formik.errors.password ? (
						<div>{formik.errors.password}</div>
					) : null}
				</div>
				<button type="submit" className="btn btn-primary">Submit</button>
			</form>

		</div>

	)

};