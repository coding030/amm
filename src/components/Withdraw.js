import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Spinner from 'react-bootstrap/Spinner'
import { ethers } from 'ethers'

import Alert from './Alert'

const Withdraw = () => {
	const provider = useSelector(state => state.provider.connection)
	const account = useSelector(state => state.provider.account)

	const shares = useSelector(state => state.amm.shares)

	const tokens = useSelector(state => state.tokens.contracts)
	const balances = useSelector(state => state.tokens.balances)

	const withdrawHandler = async (e) => {
		e.preventDefault()

		console.log("withdrawHandler...")
	}

	return (
		<div>
			<Card style={{ maxWidth: '450px' }} className='mx-auto px-4'>
				{account ? (
					<Form onSubmit={withdrawHandler} style={{ maxWidth: '450px', margin: '50px auto' }}>
						<Row>
							<Form.Text className='text-end my-2' muted>
								Shares: {shares}
							</Form.Text>
							<InputGroup>
								<Form.Control
									type="number"
									placeholder="0.0"
									min="0.0"
									step="any"
									id="shares"
								/>
								<InputGroup.Text style={{ width: "100px" }} className="justify-content-center">
									Shares
								</InputGroup.Text>
							</InputGroup>
						</Row>
						<Row className='my-3'>
							<Button type='submit'>Withdraw</Button>
						</Row>
						<hr />
						<Row>
							<p><strong>DAPP Balance:</strong> {balances[0]}</p>
							<p><strong>USD Balance:</strong> {balances[1]}</p>
						</Row>
					</Form>
				) : (
					<p
						className='d-flex justify-content-center align-items-center'
						style={{ height: '300px' }}
					>
						Please connect wallet
					</p>
				)}
			</Card>

		</div>
	);
}

export default Withdraw;
