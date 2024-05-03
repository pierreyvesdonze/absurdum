import * as React from "react";
import { useMotionValue, Reorder } from "framer-motion";
import { useRaisedShadow } from "./useRaisedShadow";

const Quest4ReorderItem = ({ item }) => {
    const y         = useMotionValue(0);
    const boxShadow = useRaisedShadow(y);

    return (
        <Reorder.Item value={item} id={item} style={{ boxShadow, y }} className="quest4-reorder-li">
            <span>{item}</span>
        </Reorder.Item>
    );
};

export default Quest4ReorderItem;