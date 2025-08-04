import { useContext, useState } from "react";
import MainContext from "../MainContext";


function LeaveComponentText() {
  const { position } = useContext(MainContext)

  return (
    <div className="leave-comment-text" style={{ position: "fixed", left: position.x + 20, top: position.y }}>
      Yorum yazmak için tıkla
    </div>
  );
}
export default LeaveComponentText;