import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css";
import Home from "./components/pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./components/pages/userList/UserList";
import User from "./components/pages/user/User";
import NewUser from "./components/pages/newUser/NewUser";

function App() {
	return (
		<Router>
			<Topbar />
			<div className="container">
				<Sidebar />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/users">
						<UserList />
					</Route>
					<Route path="/users/:userId">
						<User />
					</Route>
					<Route path="/newuser">
						<NewUser />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
