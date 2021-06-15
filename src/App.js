import logo from './logo.svg';
import './App.css';
import {Switch, Route, Link, useLocation} from 'react-router-dom';
import {AnimatePresence, motion} from 'framer-motion';

const ComponentOne = () => {

  return(
    <motion.div
    initial={{ scaleY: 0 }}
    animate={{ scaleY: 1 }}
    exit={{ scaleY: 0 }}
    transition={{ duration: 0.2 }}>
      <div style={{...styles.page, ...styles.page1}}>
        <Link to='/page2' style={{...styles.text}}>Go to page 2</Link>
      </div>
    </motion.div>
  )
}

const ComponentTwo = () => {

  return(
    <motion.div
    initial={{ scaleY: 0 }}
    animate={{ scaleY: 1 }}
    exit={{ scaleY: 0 }}
    transition={{ duration: 0.2 }}>
      <div style={{...styles.page, ...styles.page2}}>
        <Link to='/page1' style={{...styles.text}}>Go to page 1</Link>
      </div>
    </motion.div>
  )
}

function App() {

  const location = useLocation();

  return (
    <div className="App">
    <AnimatePresence exitBeforeEnter initial={false}>
      <Switch location={location} key={location.pathname}>
        <Route path='/page1'>
          <ComponentOne />
        </Route>
        <Route path='/page2'>
          <ComponentTwo />
        </Route>
      </Switch>
    </AnimatePresence>
    </div>
  );
}

export default App;


const styles = {
  page: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100vw'
  },
  page1: {
    background: 'lightblue'
  },
  page2: {
    background: 'salmon'
  },
  text: {
    textDecoration: 'none',
    fontSize: '48px',
    color: 'white',
    fontWeight: 'bold'
  }
}