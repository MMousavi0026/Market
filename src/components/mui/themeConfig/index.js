import {createTheme, lighten} from "@mui/material";

const theme = createTheme({
    direction: "rtl",
    components: {
        MuiButton: {
            styleOverrides: {
                root: {borderRadius: "20rem"}
            }
        },
        MuiTypography: {
            defaultProps: {
                variant: "span"
            }
        }
    },
    palette: {
        white: {
            main: "#ffffff"
        },
        black: {
            main: "#000"
        },
        primary: {
            main: "#122d40",
        },
        secondary: {
            main: "#01e281"
        },
        tertiary: {
            main: "#1c3e56"
        }
    },

})

export default theme;