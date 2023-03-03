import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  appBar: {
    borderRadius: 15,
    margin: "30px 0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    color: "rgba(0,183,255, 1)",
  },
  crossheading: {
    display: "flex",
    alignContent: "flex-start",
    color: "black",
  },
  image: {
    marginLeft: "15px",
  },
}));
