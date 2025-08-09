import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Spinner from 'react-bootstrap/Spinner'
import { ethers } from 'ethers'

import Alert from './Alert'

const account = '0x0...'

const Deposit = () => {
	return (
		<div>
			<Card style={{ maxWidth: '450px' }} className='mx-auto px-4'>
				{account ? (
					<Form style={{ maxWidth: '450px', margin: '50px auto' }}>
						<Row>
							<Form.Text className='text-end my-2' muted>
								Balance:
							</Form.Text>
							<InputGroup>
								<Form.Control
									type="number"
									placeholder="0.0"
									min="0.0"
									step="any"
									id="token1"
								/>
								<InputGroup.Text style={{ width: "100px" }} className="justify-content-center"></InputGroup.Text>
							</InputGroup>
						</Row>
						<Row className='my-3'>
							<Form.Text className='text-end my-2' muted>
								Balance:
							</Form.Text>
							<InputGroup>
								<Form.Control
									type="number"
									placeholder="0.0"
									step="any"
									id="token2"
								/>
								<InputGroup.Text style={{ width: "100px" }} className="justify-content-center"></InputGroup.Text>
							</InputGroup>
						</Row>
						<Row className='my-3'>
							<Button type='submit'>Deposit</Button>
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

export default Deposit;
