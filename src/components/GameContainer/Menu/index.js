import React, { useState } from "react";
import { Fade, Slide } from "@mui/material";
import SidenavComponent from "../../SidenavComponent";
import QuestSession from "../../QuestSession";
import QuestsSummary from "./QuestsSummary";
import UserQuestResult from "./Quests/UserQuestResult";

const Menu = () => {
	const { checkQuestCompleted, initializeSession } = QuestSession();
	const [selectedQuest, setSelectedQuest]          = useState(null);
	const [isOpen, setIsOpen]                        = useState(false);
	const isQuestComplete                            = checkQuestCompleted(4);

	const handleMenuItemClick = (menuItem) => {
		setSelectedQuest(menuItem);
	};

	const handleToggle = (isOpen) => {
		setIsOpen(isOpen);
	};
	
	return (
		<div className="menu">
			<>
				<Slide direction="right" in={true} timeout={1700}>
					<div>
						<SidenavComponent
							onItemClick={handleMenuItemClick}
							checkQuestCompleted={checkQuestCompleted}
							onToggle={handleToggle}
						/>
					</div>
				</Slide>
				{isOpen ? (
					<Fade in={true} timeout={1200}>
						<div className={isQuestComplete ? 'menu-gameboard-end' : 'menu-gameboard'}>
							<div className="user-quest-results-menu">
								<UserQuestResult questSession={QuestSession} />
							</div>
							{selectedQuest !== null && (
								<QuestsSummary
									questId={selectedQuest}
									isVisible={selectedQuest !== null}
									key={selectedQuest}
								 	checkQuestCompleted={checkQuestCompleted}
								/>
							)}
						</div>
					</Fade>
				) : (
					<Fade in={true} timeout={1200}>
						 <div className={isQuestComplete ? 'menu-gameboard-end' : 'menu-gameboard'}>
							<div className="user-quest-results-menu">
								<UserQuestResult questSession={QuestSession} />
							</div>
						</div>
					</Fade>
				)}
			</>
		</div>
	);
};

export default Menu;
