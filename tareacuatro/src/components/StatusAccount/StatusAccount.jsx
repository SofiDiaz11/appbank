import {Table} from "react-bootstrap";
import shareValues from "../../constants/shareValues.js";
import {
	formatAsMoney,
	getShareValue,
	totalCapital,
	getCurrentMember,
} from "../../utils/utils.js";

const StatusAccount = ({members, currentUser}) => {
	// eslint-disable-next-line react/prop-types
	const currentMember = getCurrentMember(members, currentUser) ?? {}
	const shares = currentMember.shares ?? [];

	return (
		<>
			<h2>{currentMember.name} - <span className="text-secondary">{currentMember.username}</span></h2>
			<p className="h4">Fondos: {formatAsMoney(currentMember.funds)}</p>
			<p className="h4">Capital Invertido: {formatAsMoney(totalCapital(shares))}</p>
			<h3 className="text-center">Acciones</h3>

			<Table striped bordered hover variant="dark" size="small">
				<thead>
				<tr>
					<th>Nombre</th>
					<th>Cantidad</th>
					<th>Valor</th>
				</tr>
				</thead>
				<tbody>
				{
					shares.map((share) =>
						<tr key={share.symbol}>
							<td>{share.symbol}</td>
							<td>{share.number}</td>
							<td>{formatAsMoney(getShareValue(share.symbol) * share.number)}</td>
						</tr>
					)
				}
				</tbody>
			</Table>
		</>
	);
};

export default StatusAccount
