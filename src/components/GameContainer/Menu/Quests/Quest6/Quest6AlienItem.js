import * as React from "react";
import { useMotionValue, Reorder } from "framer-motion";
import { useRaisedShadow } from "../Quest4/useRaisedShadow";

const Quest6AlienItem = ({ item }) => {
    const y         = useMotionValue(0);
    const boxShadow = useRaisedShadow(y);

    return (
        <Reorder.Item value={item} id={item} style={{ boxShadow, y }} className="quest6-reorder-li">
            <span>{item}</span>
        </Reorder.Item>
    );
};

export default Quest6AlienItem;