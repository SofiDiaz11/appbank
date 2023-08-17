import {useState} from "react";
import {Alert} from "react-bootstrap";

// eslint-disable-next-line react/prop-types
const Register = ({setCurrentUser, members, setCurrentPage, currentUser}) => {
	const [message, setMessage] = useState('');
	const [currentMember, setCurrentMember] = useState({});

	const hasValidUser = currentMember.id ?? false;

	if(currentUser !== 0){
		setCurrentPage('member');
	}

	const onLoginSubmit = (event) => {
		event.preventDefault();
		const formElement = event.target;
		const usernameInput = formElement.querySelector('input[name=username]').value ?? '';
	}

	const MessagesAlert = <Alert key={'login-error'} variant="warning">{message}</Alert>

	const Form =
		<form className="form-signin w-100 m-auto" onSubmit={onLoginSubmit}>
			<h1 className="h3 mb-3 fw-normal">Registro</h1>
			{message.length > 0 && MessagesAlert}
			<div className="form-floating">
				<input type="text" name="name" className="form-control" id="name" placeholder="Usuario"/>
				<label htmlFor="name">Nombre</label>
			</div>
			<div className="form-floating">
				<input type="text" name="username" className="form-control" id="user" placeholder="Usuario"/>
				<label htmlFor="user">Usuario</label>
			</div>
			<div className="form-floating">
				<input type="email" name="email" className="form-control" id="email" placeholder="Usuario"/>
				<label htmlFor="email">Email</label>
			</div>
			<div className="form-floating">
				<input type="number" min={0} name="email" className="form-control" id="fondos" placeholder="Usuario"/>
				<label htmlFor="fondos">Fondos</label>
			</div>
			<div className="form-floating">
				<input type="password" name="password" className="form-control" id="password" placeholder="Contraseña"/>
				<label htmlFor="password">Contraseña</label>
			</div>
			<br/>
			<button className="btn btn-primary w-100 py-2" type="submit" name="register">Registro</button>
			<p className="mt-5 mb-3 text-body-secondary text-center">1998 - {(new Date).getFullYear()}</p>
		</form>

	return Form;
};
export default Register
