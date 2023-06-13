import { REQUEST_FAILED, REQUEST_STARTED, REQUEST_SUCCESSFUL } from '../actions'


const INITIAL_STATE = {
  characterInfo: '',
  loading: false,
}

const reducer = (state = INITIAL_STATE, actions) => {
  switch(actions.type) {
    case REQUEST_STARTED:
      return { ...state, loading: true }

    case REQUEST_FAILED:
      return { ...state }

    case REQUEST_SUCCESSFUL:
      return {
        ...state,
        characterInfo: actions.payload,
        loading: false,
      }

    default: return { ...state };
  }
}


export default reducer