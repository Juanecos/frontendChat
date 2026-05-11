import { useState } from "react";

export const useLoginHooks = () => {

	const [mode, setMode] = useState('login');

	const showLogin = () => setMode('login');
	const showRegister = () => setMode('register');
	const showForget = () => setMode('forget');

	return {
		mode,
		showLogin,
		showRegister,
		showForget
	};
};