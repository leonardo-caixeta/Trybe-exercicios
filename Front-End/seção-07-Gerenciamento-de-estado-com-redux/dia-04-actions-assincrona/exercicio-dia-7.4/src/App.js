import React from 'react';
import { connect } from 'react-redux';
import { fetchCharacter } from './redux/actions';

class App extends React.Component {
  state = {
    characterName: '',
  }

  handleNameInput = ({ target }) => {
    const { name, value } = target
    this.setState({
      [name] : value
    })
  }

  handleRequestApi = () => {
    const { dispatch } = this.props;
    const { value } = this.state
    dispatch(fetchCharacter(value));
  }

  render() {
    const { loading, characterInfo } = this.props;
    console.log(characterInfo);
    return (
      <div>
        <label htmlFor="name-input">
          <input
            id='name-input'
            type="text"
            name='characterName'
            onChange={ this.handleNameInput }
          />
        </label>
        <label htmlFor="send-input">
          <input
            type="button"
            value="buscar personagem"
            onClick={ this.handleRequestApi }
          />
        </label>
        {
          loading
            ? 'Carregando...'
            : <div>
              funcionou: {characterInfo}
            </div>
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  characterInfo: state.characterInfo,
  loading: state.loading
})

export default connect(mapStateToProps)(App);
