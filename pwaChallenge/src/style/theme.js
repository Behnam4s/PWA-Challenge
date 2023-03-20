import EstedadBold from '../assets/fonts/Estedad-Bold.woff2';
import {createTheme} from "@mui/material";

const fontFamily = [
    'EstedadBold',
  ].join(',')

const theme = createTheme({
    direction: 'rtl',
    typography: {
      fontFamily ,
    },
  });

  export default theme;