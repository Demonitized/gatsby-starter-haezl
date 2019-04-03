import * as React from "react"
import Fab from "@material-ui/core/Fab"
import ArrowBackIcon from "@material-ui/icons/ArrowBack"
import CONFIG from "../../config"

const FabButton = ({ onClickHandler }: { onClickHandler: () => void }) => (
  <Fab
    style={{
      position: "absolute" as any,
      marginTop: 20,
      marginLeft: 20,
      zIndex: 50,
      color: CONFIG.fabButton.color || "#059ce2",
      backgroundColor: CONFIG.fabButton.backgroundColor || "white",
    }}
    aria-label="Back"
    onClick={onClickHandler}
  >
    <ArrowBackIcon />
  </Fab>
)

export default FabButton
