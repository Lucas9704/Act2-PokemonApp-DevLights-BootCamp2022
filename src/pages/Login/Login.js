import { useNavigate } from "react-router-dom";
import { LoginForm } from "./LoginForm";
// import { useDashboard } from "../../hooks/useDashboard";
import { useContext, useEffect } from "react";
import { ListContext } from "../../contexts/ListContext";
import logo from "./icons/PokeDev.jpg";

import "./Login.css";

export default function Login( ) {
	const navigate = useNavigate();
	const listContext = useContext(ListContext);
	// const { onSuccess } = useDashboard();

		function onLoginFormSuccess() {
    listContext.onSuccess();
		navigate("/");
	}

	useEffect(() => {if (listContext.isLogged) {navigate("/")}});

	return ( 
    <>
		<main className="Login">
			<section className="LoginHeroContainer">
				<img src="" alt="PokeDev" />
			</section>
			<section className="LoginFormContainer">
			<img src={logo} alt="PokeDev" />
				<LoginForm onSuccess={onLoginFormSuccess} />
			</section>
		</main>
    </>
	);
}