import { useState } from "react";
import DeployIcon from "./AppIcons/DeployIcon";
import EditIcon from "./AppIcons/EditIcon";
import StartIcon from "./AppIcons/StartIcon";
import StopIcon from "./AppIcons/StopIcon";

function ActionIcons(props) {

  const [myIcon, setMyIcon] = useState("");
 if(myIcon.length === 0) {
    console.log(props.iconName);
    if(props.iconName === "deploy") {
      setMyIcon(<DeployIcon />)
    }
    else if(props.iconName === "edit") {
      setMyIcon(<EditIcon />) 
    }
    
    else if(props.iconName === "start") {
      setMyIcon(<StartIcon />)
    }
    else if(props.iconName === "stop"){
      setMyIcon(<StopIcon />)
    }
 }
  return (
    <span >
      {myIcon}
    </span>
  );
}

export default ActionIcons;
