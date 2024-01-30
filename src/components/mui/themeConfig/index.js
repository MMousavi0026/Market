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
        primary: {
            main: "#122d40",
            light: lighten("#122d40", .05)
        },
        secondary: {
            main: "#01e281"
        },
        tertiary: {
            main: "#1c3e56"
        },
        quaternary: {
            main: "#fff"
        },
    },

})

export default theme;