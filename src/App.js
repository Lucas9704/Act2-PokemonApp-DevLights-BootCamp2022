import { Landing, Login, NoMatch, List, View } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { ListProvider } from "./contexts/ListContext";
import { NavBar } from "./components";
import "./App.css";

function App() {
	const [isLogged, setIsLogged] = useState(window.localStorage.getItem("isLogged") === "true");
  const [idPokemon, setIdPokemon] = useState("");

	function onSuccess() {
		setIsLogged(true);
	}

	function onLogout() {
		setIsLogged(false);
		window.localStorage.removeItem("isLogged");
    window.localStorage.removeItem("name");
    window.localStorage.removeItem("email");
	}

	return (
		<section className="App">
      <ListProvider
        value={{
          isLogged,
          onLogout,
          onSuccess,
          idPokemon,
          setIdPokemon
        }}
      >
        <NavBar/>
        <BrowserRouter >
            <Routes>
              <Route path="/" element={isLogged ? <List /> : <Landing />} />
              <Route path="/pokemon/:id" element={<View />}/>
              <Route path="/login" element={<Login />} />
              {/* 404 not found / no match */}
              <Route path="*" element={<NoMatch />} />
            </Routes>
        </BrowserRouter>
      </ListProvider>
			<footer>
				&copy; 2022 Pokemon App - with Devlights BootCamp2022
        All rights reserved
			</footer>
		</section>
	);
}

export default App;
