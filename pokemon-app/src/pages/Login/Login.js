import { useNavigate } from "react-router-dom";
import { LoginForm } from "./LoginForm";
// import { useDashboard } from "../../hooks/useDashboard";
import "./Login.css";
import { useEffect } from "react";

export default function Login( {onSuccess, isLogged} ) {
	const navigate = useNavigate();
	// const { onSuccess } = useDashboard();

	/* 	function onLoginFormSuccess() {
		navigate("/");
        onSuccess();
	} */

	function onSuccess() {
    navigate("/")
	}

  useEffect(() => {if (!isLogged) {navigate("/");}});

	return ( 
    <>
      <main className="Login">
			<section className="LoginHeroContainer"></section>
			<section className="LoginFormContainer">
				<LoginForm onSuccess={onSuccess} />
			</section>
		</main>
    </>
	);
}