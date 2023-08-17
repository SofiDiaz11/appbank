import shareValues from "../constants/shareValues.js";

export const formatAsMoney = (number) => `$ ${number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`

export const getShareValue = (symbol) => shareValues.find((shareValue) => shareValue.symbol === symbol).price;

export const totalCapital = (shares) => {
	let total = 0;
	shares.forEach((share) => {
		total += share.number * getShareValue(share.symbol)
	});
	return total;
};

export const getCurrentMember = (members, currentUser) => members.find(({id}) => id === currentUser) ?? {};
export const getCurrentMemberIndex = (members, currentUser) => members.findIndex(({id}) => id === currentUser) ?? {};

export const getShare = (symbol) => [...shareValues].find(shareValue => shareValue.symbol === symbol);
