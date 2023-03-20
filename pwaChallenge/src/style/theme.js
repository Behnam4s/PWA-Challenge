import EstedadBold from '../assets/fonts/Estedad-Bold.woff2';
import {createTheme} from "@mui/material";

const fontFamily = [
    'EstedadBold',
  ].join(',')

const theme = createTheme({
    direction: 'rtl',
    palette: {
        background: {
            default: "#F2F2F3"
        }
    },
    typography: {
      fontFamily ,
    },
  });

  export default theme;