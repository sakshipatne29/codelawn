import { useState } from "react";
import DeployIcon from "./AppIcons/DeployIcon";

function ActionIcons(props) {

  const [myIcon, setMyIcon] = useState("");
  if(myIcon.length === 0) {
    setMyIcon(<DeployIcon />)
  }
  return (
    <span >
      {myIcon}
    </span>
  );
}

export default ActionIcons;
