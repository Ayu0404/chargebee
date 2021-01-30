import {ThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import {orange, green} from '@material-ui/core/colors';

import './App.css';
import NavBar from './NavBar/NavBar'
import FixedBar from './Footer/FixedBar'

function App() {
  const theme = createMuiTheme({
    overrides: {
      MuiCssBaseline: {
        '@global': {
          html: {
            WebkitFontSmoothing: 'auto',
          },
        },
      },
    },
    palette : {
      primary : {
          main : '#500ad2'
      }
    }
  });
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <NavBar />
        <FixedBar />
      </ThemeProvider>
    </div>
  );
}

export default App;
