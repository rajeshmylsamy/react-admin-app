import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { React, useState } from "react";
import "./userList.css";
import { userRows } from "./../../../dummyData";
import { Link } from "react-router-dom";

export default function UserList() {
	const [data, setData] = useState(userRows);
	function handleDelete(id) {
		setData(data.filter((item) => item.id !== id));
	}
	const columns = [
		{ field: "id", headerName: "ID", width: 90 },
		{
			field: "userName",
			headerName: "User name",
			width: 200,
			renderCell: (param) => {
				return (
					<div className="userListUser">
						<img src={param.row.avatar} alt="" className="userListImg" />
						{param.row.userName}
					</div>
				);
			},
		},
		{ field: "email", headerName: "Email", width: 200 },
		{
			field: "status",
			headerName: "Status",
			width: 120,
		},
		{
			field: "transaction",
			headerName: "Transaction",
			width: 160,
		},
		{
			field: "action",
			headerName: "Action",
			width: 120,
			renderCell: (param) => {
				return (
					<>
						<Link to={"/users/" + param.row.id}>
							<button className="userListEdit"> Edit </button>
						</Link>
						<DeleteOutline
							className="userListDelete"
							onClick={() => handleDelete(param.row.id)}
						/>
					</>
				);
			},
		},
	];

	return (
		<div className="userList">
			<div className="userTitleContainer">
				<h1 className="userTitle">Users</h1>
				<Link to="/newuser">
					<button className="userButton">Create</button>
				</Link>
			</div>
			<div className="usersTable">
				<DataGrid
					className="usersTable"
					rows={data}
					disableSelectionOnClick
					columns={columns}
					pageSize={5}
					checkboxSelection
				/>
			</div>
		</div>
	);
}
