import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

export const Navigation = ({ onItemClick, checkQuestCompleted, onCloseClick  }) => (
  <motion.ul variants={variants}>
    {itemIds.map(i => (
      <MenuItem 
      i={i}
      key={i}
      isCheckedState={checkQuestCompleted(i) }
      onItemClick={onItemClick}/>
    ))}
  </motion.ul>
);

const itemIds = [0, 1, 2, 3, 4, 5];
