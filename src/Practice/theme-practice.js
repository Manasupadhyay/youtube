import { createTheme } from "@material-ui/core";
import { green } from "@material-ui/core/colors";

export const theme = createTheme( {
    palette:{
        primary:{
            main:green[600],
        },
    },
    myButton:{
        backgroundColor:"hsl(160,50%,60%)",
        color: "white",
        border: "1px solid black",
    }
})