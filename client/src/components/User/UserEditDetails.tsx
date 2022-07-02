import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "src/config/config";
import { editUserData } from "src/redux/actions";
import styles from "./../Styles/UserEditDetail.module.css";

export default function UserEditDetails() {
	let dataUser = useSelector((state: any) => state.userDetails);
	let [editDataUser, setEditDataUser] = useState({
		name: dataUser.name,
		phone: dataUser.phone,
		email: dataUser.email,
		avatar: dataUser.avatar,
	});
	let [existImg, setExistImg] = useState(true);
	let dispatch = useAppDispatch();
	console.log(dataUser);
	let handleDataChange = (event) => {
		setEditDataUser((prevState) => {
			let objAux = { ...prevState };
			objAux[event.target.id] = event.target.value;
			return objAux;
		});
	};
	let handleSubmit = (event) => {
		event.preventDefault();
		const objDataUserComplete = {
			...dataUser,
			...editDataUser,
		};
		dispatch(editUserData(dataUser.id, objDataUserComplete));
	};

	// useEffect(() => {

	// }, [editDataUser.avatar]);

	console.log(editDataUser, "STATE");
	if (dataUser) {
		return (
			<div className={styles.containerEdit}>
				<form action="" onSubmit={handleSubmit}>
					<div className={styles.containerInputs}>
						<input
							type="text"
							defaultValue={editDataUser.name}
							id="name"
							onChange={(event) => handleDataChange(event)}
						/>
						<input
							type="number"
							defaultValue={editDataUser.phone}
							id="phone"
							onChange={(event) => handleDataChange(event)}
						/>
						{/* <input
              type="text"
              defaultValue={editDataUser.email}
              id="email"
              onChange={(event) => handleDataChange(event)}
            /> */}
						<input
							type="text"
							defaultValue={editDataUser.avatar}
							id="avatar"
							onChange={(event) => handleDataChange(event)}
						/>
						<button type="submit">Cambiar datos</button>
					</div>
					<div className={styles.previewAvatar}>
							<img src={editDataUser.avatar} alt="profile" />
					</div>
				</form>
			</div>
		);
	}
}
