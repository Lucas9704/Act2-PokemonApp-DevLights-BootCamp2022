import { Landing, Login, NoMatch, List, View } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { ListProvider } from "./contexts/ListContext";

function App() {
	const [isLogged, setIsLogged] = useState(window.localStorage.getItem("isLogged") === "true");

	function onSuccess() {
		setIsLogged(true);
	}

	function onLogout() {
		setIsLogged(false);
		window.localStorage.removeItem("isLogged");
	}

	return (
		<>
			<header>
				<p>Pokemon App</p>
			</header>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={isLogged ? <List /> : <Landing />}>
						<Route
							path="/pokemon/:id"
							element={isLogged ? <View /> : <Login />}
						/>
					</Route>
					<Route path="/login" element={<Login onSuccess={onSuccess} isLogged={isLogged} />} />
          {/* 404 not found / no match */}
					<Route path="*" element={<NoMatch />} />
				</Routes>
			</BrowserRouter>
			<footer>
				<p>Pokemon App</p> - ReactJS - 2020
			</footer>
		</>
	);
}

export default App;
