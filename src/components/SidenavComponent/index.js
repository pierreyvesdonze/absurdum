import React, { useRef, useEffect } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "./use-dimensions";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";

const sidebar = {
	open: (height = 1000) => ({
		clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
		transition: {
			type: "spring",
			stiffness: 20,
			restDelta: 2
		}
	}),
	closed: {
		clipPath: "circle(30px at 40px 40px)",
		transition: {
			delay: 0.5,
			type: "spring",
			stiffness: 400,
			damping: 40
		}
	}
};

const SidenavComponent = ({ onItemClick, checkQuestCompleted, onToggle }) => {
	const [isOpen, toggleOpen] = useCycle(false, true);
	const containerRef         = useRef(null);
	const { height }           = useDimensions(containerRef);

	useEffect(() => {
        onToggle(isOpen); // Appeler la fonction de rappel lorsque isOpen change
    }, [isOpen, onToggle]);


	return (
		<div className="sidenav">
			<motion.nav
				initial={false}
				animate={isOpen ? "open" : "closed"}
				custom={height}
				ref={containerRef}
				id="sidenav-nav"
			>
				<motion.div className="sidenav-menu-background" variants={sidebar} />
				<Navigation
					onItemClick={onItemClick}
					checkQuestCompleted={checkQuestCompleted}
				/>
				<MenuToggle toggle={() => toggleOpen()} />
			</motion.nav>
		</div>
	);
};

export default SidenavComponent;