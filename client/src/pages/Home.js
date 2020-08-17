import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class Home extends React.Component {
	constructor() {
		super();

		this.style = {
			jumbotron: {
				marginTop: '5%'
			}
		};

		this.state = {
			name: '',
			email: '',
			password: ''
		};
	}

	handleInputChange = (e) => {
		const { name, value } = e.target;

		this.setState({
			[name]: value
		});
	};

	handleFormSubmit = (e) => {
		e.preventDefault();

		// make api request
		fetch('/auth', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(this.state)
		})
			.then(res => res.json())
			.then(data => {
				console.log(data);

				sessionStorage.setItem('user', JSON.stringify(data));
				window.location.replace('/about');
			});
	};

	componentDidMount() {
		if (this.props.user) {
			window.location.replace('/about');
		}
	}

	render() {
		return (
			<Jumbotron style={this.style.jumbotron}>
				<h1>Sign into Furlong Feasts</h1>
				<p>No pre-existing account is required, just enter your information along with the password that was shared with you.</p>
	
				<Form>
					<Form.Group controlId='name'>
						<Form.Label>Name</Form.Label>
						<Form.Control onChange={this.handleInputChange} type='text' name='name' placeholder='First Last' required />
					</Form.Group>

					<Form.Group controlId='email'>
						<Form.Label>Email address</Form.Label>
						<Form.Control onChange={this.handleInputChange} type='email' name='email' placeholder='Enter email' required />
					</Form.Group>
	
					<Form.Group controlId='password'>
						<Form.Label>Password</Form.Label>
						<Form.Control onChange={this.handleInputChange} type='password' name='password' placeholder='Password' required />
					</Form.Group>

					<button className='btn btn-primary' type='submit' onClick={this.handleFormSubmit}>Sign in</button>
					{/* <Button onClick={this.handleFormSubmit} variant='primary' type='submit'>Sign in</Button> */}
				</Form>
			</Jumbotron>
		);
	};
}

export default Home;