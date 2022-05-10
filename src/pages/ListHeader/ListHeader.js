import { useContext } from "react";
import { ListContext } from "../../contexts/ListContext";

export function ListHeader() {
  const { onLogout } = useContext(ListContext);

	return (<>
    <h1>👲Welcome pokemon trainer {window.localStorage.getItem("name")}☜(ﾟヮﾟ☜)</h1>
    <h3>Email: {window.localStorage.getItem("email")}</h3>
    <h2>Your Pokemon List</h2>
    <button onClick={onLogout}>Logout</button>
  </>
	);
}
