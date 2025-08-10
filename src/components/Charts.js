import { useSelector, useDispatch } from 'react-redux'
import Table from 'react-bootstrap/Table'
import { useEffect } from 'react'
import { ethers } from 'ethers'

import Loading from './Loading'

import { loadAllSwaps } from '../store/interactions'

const Charts = () => {
	const provider = useSelector(state => state.provider.connection)

	const tokens = useSelector(state => state.tokens.contracts)
	const symbols = useSelector(state => state.tokens.symbols)

	const amm = useSelector(state => state.amm.contract)

	const dispatch = useDispatch()

	useEffect(() => {
		if(provider && amm){
			loadAllSwaps(provider, amm, dispatch)
		}
	}, [provider, amm, dispatch])

	return (
		<Table striped bordered hover>
			<thead>
				<tr>
					<th>Transaction Hash</th>
					<th>Token Give</th>
					<th>Amount Give</th>
					<th>Token Get</th>
					<th>Amount Get</th>
					<th>User</th>
					<th>Time</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Transaction Hash</td>
					<td>Token Give</td>
					<td>Amount Give</td>
					<td>Token Get</td>
					<td>Amount Get</td>
					<td>User</td>
					<td>Time</td>
				</tr>
			</tbody>
		</Table>
	);
}

export default Charts;
