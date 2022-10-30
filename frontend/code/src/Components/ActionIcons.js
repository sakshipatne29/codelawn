import DeployIcon from "./AppIcons/DeployIcon";

function ActionIcons(props) {
    function handleOnLoad (event) {
      console.log(event);
        // return (
        //   <DeployIcon />
        // )
    }
    // 
    // var icondiv = document.getElementById("icon");
    // if (icondiv !== null) {
    //     document.getElementById("icon").innerHTML = "<DeployIcon />"
    // }
    // console.log(document.getElementById("icon"));
  return (
    <>
    <div id="icon" onLoad={handleOnLoad}>
    </div>
    </>
  );
}

export default ActionIcons;
