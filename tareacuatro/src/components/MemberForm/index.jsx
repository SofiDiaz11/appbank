import React, {useState} from "react";

// eslint-disable-next-line react/prop-types
const MemberForm = ({onSubmit}) => {
	const [data, setData] = useState({});

	const handleInputChange = (event) => {
		setData({...data, [event.target.name]: event.target.value});
	};

	const handleOnSubmit = (event) => {
		event.preventDefault();
		onSubmit(data);
		setData({});
	};

	return (
		<form className="form-signin w-100 m-auto" onSubmit={handleOnSubmit}>
			<h2>Agrega Usuario</h2>
			<label htmlFor="name">Nombre</label>
			<input
				placeholder="Ingresa Nombre"
				name="name"
				className="member-form__input"
				value={data.name}
				onChange={handleInputChange}
			/>
			<label htmlFor="username">Usuario</label>
			<input
				placeholder="Ingresa Usuario"
				name="username"
				className="member-form__input"
				value={data.user}
				onChange={handleInputChange}
			/>
			<label htmlFor="password">Contraseña</label>
			<input
				placeholder="Ingresa Contraseña"
				name="password"
				className="member-form__input"
				value={data.password}
				onChange={handleInputChange}
			/>
			<label htmlFor="funds">Fondos</label>
			<input
				placeholder="Ingresa tus fondos"
				name="funds"
				className="member-form__input"
				value={data.funds}
				onChange={handleInputChange}
			/>
			<button className="member-form__input" type="submit">
				Registrar
			</button>

		</form>
	);

};

MemberForm.defaultProps = {
	onSubmit: () => {
	}
};

export default MemberForm;
