import React from "react";
import "./sidebar.css";
import {
	Assessment,
	AttachMoney,
	Ballot,
	Feedback,
	LineStyle,
	Mail,
	Message,
	Person,
	Receipt,
	Timeline,
	TrendingUp,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
	return (
		<div className="sidebar">
			<div className="sidebarWrapper">
				<div className="sidebarMenu">
					<h3 className="sidebarTitle"> Dashboard</h3>
					<ul className="sidebarList">
						<Link to="/" className="link">
							<li className="sidebarListItem active">
								<LineStyle className="sidebarIcon" />
								Home
							</li>
						</Link>
						<li className="sidebarListItem">
							<Timeline className="sidebarIcon" />
							Analytics
						</li>
						<li className="sidebarListItem">
							<AttachMoney className="sidebarIcon" />
							Sales
						</li>
					</ul>
					<h3 className="sidebarTitle"> Quick Menu</h3>
					<ul className="sidebarList">
						<Link to="/users" className="link">
							<li className="sidebarListItem">
								<Person className="sidebarIcon" />
								Users
							</li>
						</Link>

						<li className="sidebarListItem">
							<Ballot className="sidebarIcon" />
							Products
						</li>
						<li className="sidebarListItem">
							<Receipt className="sidebarIcon" />
							Transactions
						</li>
						<li className="sidebarListItem">
							<Assessment className="sidebarIcon" />
							Reports
						</li>
					</ul>
					<h3 className="sidebarTitle"> Notifications</h3>
					<ul className="sidebarList">
						<li className="sidebarListItem">
							<Mail className="sidebarIcon" />
							Mail
						</li>
						<li className="sidebarListItem">
							<Feedback className="sidebarIcon" />
							Feedback
						</li>
						<li className="sidebarListItem">
							<Message className="sidebarIcon" />
							Messages
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
