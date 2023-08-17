import shareValues from "../../constants/shareValues.js";
import {Button, Form} from "react-bootstrap";
import {InputGroup} from "react-bootstrap";
import {formatAsMoney, getCurrentMember, getCurrentMemberIndex, getShare, totalCapital} from "../../utils/utils.js";
import {useEffect, useState} from "react";

import "./indexSell.css";

// eslint-disable-next-line react/prop-types
function BuyShares({members, currentUser, setMembers}) {
	// eslint-disable-next-line react/prop-types
	const currentMember = getCurrentMember(members, currentUser) ?? {};
	const [amount, setAmount] = useState(0);
	const [share, setShare] = useState(shareValues[0]);
	const [message, setMessage] = useState('');

	const [newMember, setNewMember] = useState(getCurrentMember(members, currentUser));

	useEffect(() => {
		const index = getCurrentMemberIndex(members, currentUser);
		const newMembers = [...members];
		newMembers[index] = newMember;
		setMembers(JSON.stringify(newMembers));
	}, [newMember]);

	const handleBuy = () => {
		if(amount * share.price > currentMember.funds){
			setMessage('Fondos insuficientes');
			return;
		}

		const newShares = [...currentMember.shares];
		const foundShare = newShares.find(({symbol}) => symbol === share.symbol);
		if(foundShare){
			foundShare.number += parseInt(amount);
		} else{
			newShares.push({
				symbol: share.symbol,
				number: parseInt(amount),
				buyPrice: parseInt(share.price),
			});
		}

		const newFunds = currentMember.funds - (amount * share.price);

		setNewMember({
			...currentMember,
			shares: newShares,
			funds: newFunds,
		});

		// setFunds(newFunds);
		// setAmount(1);
		setMessage('');
	};
	const shares = currentMember.shares ?? [];

	return (
		<>
			<h1>Comprar Acciones</h1>
			<h4>Fondos Disponibles {formatAsMoney(currentMember.funds)}</h4>
			<p className="h4">Capital Invertido: {formatAsMoney(totalCapital(shares))}</p>
			{message.length > 0 && <p className="text-danger">{message}</p>}

			<Form className="w-50">
				<InputGroup>
					<Form.Select onChange={event => setShare(getShare(event.target.value))}>
						{[...shareValues].map((shareValue) =>
							<option key={shareValue.symbol} value={shareValue.symbol}>{shareValue.symbol}</option>
						)}
					</Form.Select>
					<Form.Control
						type="number"
						min={1}
						value={amount}
						onChange={(event) => setAmount(event.target.value)}
					/>
					<InputGroup.Text className="w-25">{formatAsMoney(amount * share.price)}</InputGroup.Text>
					<Button onClick={handleBuy}>Comprar</Button>
				</InputGroup>
			</Form>
		</>
	)
}

export default BuyShares
