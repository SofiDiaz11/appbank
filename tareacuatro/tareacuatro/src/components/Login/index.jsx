import {useState} from "react";
import "./login.css";
import {Alert, Button} from "react-bootstrap";

// eslint-disable-next-line react/prop-types
const Login = ({setCurrentUser, members, setCurrentPage, currentUser}) => {
	const [message, setMessage] = useState('');
	const [currentMember, setCurrentMember] = useState({});

	const hasValidUser = currentMember.id ?? false;

	if(currentUser !== 0){
		setCurrentPage('member');
	}

	const onLoginSubmit = (event) => {
		setMessage('Procesando...');
		event.preventDefault();
		const formElement = event.target;
		if(!hasValidUser){
			const usernameInput = formElement.querySelector('input[name=username]').value ?? '';

			if(0 === usernameInput.length){
				setMessage('Usuario es requerido')
				return;
			}

			const foundMember = (members ?? []).find(({username}) => username === usernameInput);
			if(!foundMember){
				setMessage('Usuario no encontrado');
			} else{
				setCurrentMember(foundMember);
				setMessage('');
			}
		} else{
			const passwordInput = formElement.querySelector('input[name=password]').value ?? '';
			// This is completely unsafe XD
			if(0 === passwordInput.length){
				setMessage('Password es requerido')
				return;
			}

			if(passwordInput === currentMember.password){
				setCurrentUser(currentMember.id);
				setCurrentPage('statusAccount');
			} else{
				setMessage('Password incorrecto')
			}
		}
	}

	const MessagesAlert = <Alert key={'login-error'} variant="warning">{message}</Alert>

	const Form =
		<form className="form-signin w-100 m-auto" onSubmit={onLoginSubmit}>
			<h1 className="h3 mb-3 fw-normal">Log in</h1>
			{message.length > 0 && MessagesAlert}
			{
				!hasValidUser &&
				<div className="form-floating">
					<input type="text" name="username" className="form-control" id="floatingInput" placeholder="Usuario"/>
					<label htmlFor="floatingInput">Usuario</label>
				</div>
			}
			{
				hasValidUser &&
				<>
					<h3>Bienvenido {currentMember.name}</h3>
					<div className="form-floating">
						<input type="password" name="password" className="form-control" id="floatingPassword" placeholder="Contraseña"/>
						<label htmlFor="floatingPassword">Contraseña</label>
					</div>
				</>
			}
			<br/>
			<button className="btn btn-primary w-100 py-2" type="submit" name="login">{hasValidUser ? 'Entrar' : 'Siguiente'}</button>
			<br/>
			<br/>
			<button className="btn btn-secondary w-100 py-2" type="submit" name="register" onClick={() => {setCurrentPage('register')}} >Registro</button>
			<br/>
			<p className="mt-5 mb-3 text-body-secondary text-center">1998 - {(new Date).getFullYear()}</p>
		</form>

	return Form;
};
export default Login
