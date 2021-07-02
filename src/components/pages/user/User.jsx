import { Publish } from "@material-ui/icons";
import React from "react";
import "./user.css";

export default function User() {
	return (
		<div className="user">
			<div className="userTitleContainer">
				<h1 className="userTitle">Edit User</h1>
				<button className="userButton">Create</button>
			</div>
			<div className="userContainer">
				<div className="userShow">
					<div className="userShowTop">
						<img
							src="https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584__340.png"
							alt=""
							className="userShowImg"
						/>
						<div className="userShowTopTitle">
							<span className="userShowUserName">Allan Brown</span>
							<span className="userShowTitle">Software Engineer</span>
						</div>
					</div>
					<div className="userShowBottom"></div>
				</div>
				<div className="userUpdate">
					<span className="userUpdateTitle"> Edit </span>
					<form className="userUpdateForm">
						<div className="userUpdateLeft">
							<div className="userUpdateItem">
								<label>Username</label>
								<input
									className="userUpdateInput"
									type="text"
									placeholder="allabrown"
								></input>
							</div>
							<div className="userUpdateItem">
								<label>Full name</label>
								<input
									className="userUpdateInput"
									type="text"
									placeholder="Allan Brown"
								></input>
							</div>
							<div className="userUpdateItem">
								<label>Phone</label>
								<input
									className="userUpdateInput"
									type="text"
									placeholder="9066222"
								></input>
							</div>
							<div className="userUpdateItem">
								<label>Email</label>
								<input
									className="userUpdateInput"
									type="text"
									placeholder="allan@gmail.com"
								></input>
							</div>
							<div className="userUpdateItem">
								<label>Address</label>
								<input
									className="userUpdateInput"
									type="text"
									placeholder="New York"
								></input>
							</div>
						</div>
						<div className="userUpdateRight">
							<div className="userUpdateUpload">
								<img
									src="https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584__340.png"
									alt=""
									className="userUpdateImg"
								/>
								<label htmlFor="file">
									<Publish />
								</label>
								<input
									style={{ display: "none" }}
									type="file"
									id="file"
								></input>
							</div>
							<button className="userUpdateButton">Update</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
