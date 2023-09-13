import { ChangeEvent, FormEvent, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PrimaryButton, Input } from '../components/ui';
import { EyeIcon } from '../assets';
import useAuthContext from '../application/controllers/useAuthContext';
import notify from '../components/ui/notification/notify';

const LoginFormContainer = () => {
	const [inputs, setInputs] = useState({ email: '', password: '' });
	const [isVisible, setIsVisible] = useState(false);

	const { authDispatch } = useAuthContext();

	const navigate = useNavigate();

	const updateInputs = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => {
			const name = e.target.name;
			const value = e.target.value;

			setInputs((prevValue) => ({ ...prevValue, [name]: value }));
		},
		[setInputs]
	);

	const showPassword = useCallback(() => {
		setIsVisible((prev) => !prev);
	}, [setIsVisible]);

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();

		const { email, password } = inputs;
		const emailRegex = /^([a-zA-Z0-9-_.]+)@([a-zA-Z-_.]+)\.([a-zA-Z]{2,5})/;
		if (!email) {
			notify('Please email field must not be empty', 'error');
			return;
		}

		if (!password) {
			notify('Please password field must not be empty', 'error');
			return;
		}

		if (!emailRegex.test(email)) {
			notify('Please email enter a valid email', 'error');
			return;
		}

		if (password.length < 8) {
			notify('Please enter more than 8 password characters', 'error');
			return;
		}

		authDispatch({ type: 'auth/login', payload: { email, password } });
		notify('Login successful', 'success');
		navigate('/profile');
	};

	return (
		<form onSubmit={handleSubmit}>
			<section className="flex flex-col gap-y-6">
				<Input type="text" name="email" value={inputs.email} onChange={updateInputs} label="Email" />
				<Input
					type={isVisible ? 'text' : 'password'}
					label="Password"
					name="password"
					value={inputs.password}
					onChange={updateInputs}
					icon={() => <EyeIcon />}
					onclick={showPassword}
				/>
			</section>
			<div className="mt-12">
				<PrimaryButton value="Login" type="submit" customClass="bg-secondary w-full rounded-3xl" />
			</div>
		</form>
	);
};

export default LoginFormContainer;
