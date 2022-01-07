import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ApiGrabber } from './components/ApiGrabber/ApiGrabber';
import { MonsterStats, StatCard } from './components/StatCard/StatCard';

import './App.css';    
import { StarterExample } from './components/StarterExample';
import { NavBar } from './components/NavBar';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

function App() {
  const classes = useStyles();
  // const samplething = {"slug":'ello', "name":'bob', "size": 'pop'} as MonsterStats;
  const [content, setContent] = useState('monsters');

  console.log('content:', content)

  return (
    <div className="App">
      <header className="App-header">
        <h1>DnD App</h1>
        <NavBar handleClick={setContent}/>

        { content === 'monsters' &&
          <ApiGrabber />
        }
        { content === 'characters' &&
          // <StatCard />
          <h2>test</h2>
        }
        { content === 'encounters' &&
          <div>
            <p>Encounters</p>
            <StarterExample />
          </div>
        }

        {/* <ExampleCard props={"slug":'ello', "name":'bob', "size": 'pop'}/> */}
      </header>
    </div>
  );
}

export default App;
