import React, { useState } from "react";
import { motion } from "framer-motion";
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import CloseIcon from '@mui/icons-material/Close';
import { Typography } from "@mui/material";

const variants = {
	open: {
		y: 0,
		opacity: 1,
		transition: {
			y: { stiffness: 1000, velocity: -100 }
		}
	},
	closed: {
		y: 50,
		opacity: 0,
		transition: {
			y: { stiffness: 1000 }
		}
	}
};

const colors      = ["#0e2137", "#1a2f49", "#26475a", "#325e6c", "#3d758e", "#4487a0"];
const questsTitle = ["Cogito, ergo sum", "Tempus ", "Affectus ", "Monstrum", "Morbus", "Absurdum",];

export const MenuItem = ({ i, isCheckedState, onItemClick }) => {
	const style                     = { border: `2px solid ${colors[i]}` };
	const [isChecked, setIsChecked] = useState(isCheckedState);

	const handleItemClick = (questTitle) => {
		onItemClick(i);
	};

	return (
		<motion.li
			variants   = {variants}
			whileHover = {{ scale: 1.1 }}
			whileTap   = {{ scale: 0.95 }}
			onClick    = {handleItemClick}
		>
			<div className="sidenav-icon-placeholder" style={style}>
				{isChecked ? (<DoneOutlineIcon style={{
					position: "absolute",
					color: "#6c8b2c",
					fontSize: 40,
					top: -5,
					left: 5,
				}}
				/>
				) : (
					<CloseIcon style={{
						position: "absolute",
						color: "#8b1616",
						fontSize: 40,
					}}
					/>
				)}
			</div>
			<div className="sidenav-text-placeholder" style={style}>
				<Typography className="menu-item-title">
					{questsTitle[i]}
				</Typography>
			</div>
		</motion.li>
	);
};
