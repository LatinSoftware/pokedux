import SearchInput from './components/SearchInput';
import PokemonList from './components/PokemonList';

import { Col, Spin } from 'antd';
import { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { fetchPokemonsWithDetails } from './slices/dataSlice';


import './App.css';

const logoUrl = "https://raw.githubusercontent.com/musartedev/curso-redux/27298f5dd3e37caf2a90a7a82580cd2905fcab31/src/statics/logo.svg";

//App({pokemons, setPokemons})
function App() {

  const pokemons = useSelector(state => state.data.pokemons, shallowEqual);
  const loading = useSelector(state => state.ui.loading);
  // const pokemons = useSelector(state => state.getIn(['data','pokemons'], shallowEqual)).toJS();
  // const loading = useSelector(state => state.getIn(['ui', 'loading']));
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("dentro del useEffecto")
    //dispatch(fetchPokemonsWithDetails);
    dispatch(fetchPokemonsWithDetails());

  }, []);

  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logoUrl} alt='Pokedux' />
      </Col>
      <Col span={8} offset={8}>
        <SearchInput />
      </Col>
      {loading ? <Col offset={12}>
        <Spin spinning size='large' />
      </Col> :
        <PokemonList pokemons={pokemons} />
      }
    </div>
  );
}


// const mapStateToProps = (state) => ({
//   pokemons: state.pokemons
// })

// const mapDispatchToProps = (dispatch) => ({
//   setPokemons: (value) => dispatch(setPokemonsAction(value))
// })

// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;
