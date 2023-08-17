import MemberForm from './components/MemberForm';
import Login from './components/Login';
import Register from './components/Login';
import initialMembers from './constants/initialMembers';
import {useEffect, useState} from "react";
import {useLocalStorage} from "usehooks-ts";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import ReviewShares from './components/Dropdowns/ReviewShares';
import SellShares from './components/Dropdowns/SellStyles';
import BuyShares from './components/Dropdowns/BuyShares';
import StatusAccount from './components/StatusAccount/StatusAccount';

function App() {
	const [members, setMembers] = useLocalStorage('members', JSON.stringify(initialMembers));
	const [currentUser, setCurrentUser] = useLocalStorage('currentUser', 0);
	const [currentPage, setCurrentPage] = useLocalStorage('currentPage', 'login');

	useEffect(() => {
		if(0 === currentUser){
			setCurrentPage('login');
		}
	}, [currentUser]);

	const membersArray = JSON.parse(members);
	let mainClasses = [
		'col-lg-8',
		'mx-auto',
		'p-4',
		'py-md-5',
	];

	if('login' === currentPage){
		mainClasses = [
			'login-container',
			'd-flex',
			'align-items-center',
			'py-4',
			'bg-body-tertiary',
			'w-100',
		];
	}

	// const currentMember = (members).find(({id}) => id === currentUser) ?? {};

	return (
		<>
			{'login' !== currentPage && <Header setCurrentPage={setCurrentPage} setCurrentUser={setCurrentUser}/>}
			<main className={mainClasses.join(' ')}>
				{
					'login' === currentPage &&
						<Login
							currentPage={currentPage}
							currentUser={currentUser}
							members={membersArray}
							setCurrentPage={setCurrentPage}
							setCurrentUser={setCurrentUser}
						/>
				}

				{
					'memberForm' === currentPage &&
					<MemberForm
						currentPage={currentPage}
						currentUser={currentUser}
						members={membersArray}
						setCurrentPage={setCurrentPage}
						setCurrentUser={setCurrentUser}
					/>
				}

				{
					'statusAccount' === currentPage &&
					<StatusAccount
						currentPage={currentPage}
						currentUser={currentUser}
						members={membersArray}
						setCurrentPage={setCurrentPage}
						setCurrentUser={setCurrentUser}
					/>
				}
				{
					'reviewShares' === currentPage &&
					<ReviewShares
						currentPage={currentPage}
						currentUser={currentUser}
						members={membersArray}
						setCurrentPage={setCurrentPage}
						setCurrentUser={setCurrentUser}
					/>
				}
				{
					'sellShares' === currentPage &&
					<SellShares
						currentPage={currentPage}
						currentUser={currentUser}
						members={membersArray}
						setMembers={setMembers}
						setCurrentPage={setCurrentPage}
						setCurrentUser={setCurrentUser}
					/>
				}
				{
					'buyShares' === currentPage &&
					<BuyShares
						currentPage={currentPage}
						currentUser={currentUser}
						members={membersArray}
						setMembers={setMembers}
						setCurrentPage={setCurrentPage}
						setCurrentUser={setCurrentUser}
					/>
				}
			</main>
		</>
	)
}

export default App
