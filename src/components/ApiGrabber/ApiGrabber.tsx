import React, { useCallback, useState } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import { Button, Card, TextField } from '@material-ui/core';
import { MonsterStats, StatCard } from '../StatCard/StatCard';


// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: '100%',
//   },
//   // heading: {
//   //   fontSize: theme.typography.pxToRem(15),
//   //   fontWeight: theme.typography.fontWeightRegular,
//   // },
//   // summary: {
//   //   height: 400,
//   // },
//   statsCard: {
//     width: 400,
//     height: 600,
//     paddingTop: 20,
//   },
// }));

export const ApiGrabber: React.FC = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [item, setItem] = useState({} as MonsterStats);
  // const classes = useStyles();
  const [search, setSearch] = useState('inital');


  const handleClick = useCallback((search) => {
    console.log('Clicked! - search term:', search)
    fetch(`https://api.open5e.com/monsters/${search}`)
    // fetch("http://localhost:5000/monsters")
      .then(res => res.json())
      .then(
        (result) => {
          console.log('api - ', result)
          setIsLoaded(true);
          setItem(result);
        },
        (error) => {
          console.log('api error -', error)
          setIsLoaded(true);
          setError(error);
        }
      )
  }, []);

  console.log('test - (item, isLoaded, error, !!item)', item, isLoaded, error, !!item);

  return (
    <div className="">
      <form className="" noValidate autoComplete="off">
          <TextField
            id="outlined-basic"
            label="Add Monster"
            variant="outlined"
            onChange={(evt) => {
              setSearch(evt.target.value)
            }}
          />
      </form>
      <Button
        variant="contained"
        color="primary" 
        onClick={() => {
            handleClick(search);
        }}
      >
        Search For Monster
      </Button>
      {/* ToDo: Return the live result slugified below as part of DND-8 */}
      <h2>Slugified - [{search}]</h2>
      {!error ?? (<div>Error: </div>)}
      {/* {(item && isLoaded) ?
        (<Card>
          <h1>{item.name}</h1>
          <p>Armor Class: {item.armor_class}</p>
        </Card>) : (<div>Enter a Monster name like 'goblin'</div>)
      } */}
      {(!!item && isLoaded) ?
        (<StatCard {...item}/>) : (<div>Enter a Monster name like 'goblin'</div>)
      }
    </div>
  );
};

