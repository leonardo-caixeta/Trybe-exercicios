export const REQUEST_STARTED = 'REQUEST_STARTED';
export const REQUEST_SUCCESSFUL = 'REQUEST_SUCCESSFUL';
export const REQUEST_FAILED = 'REQUEST_FAILED';

export const getStarted = () => ({
  type: REQUEST_STARTED
});

export const getDone = (characterInfo) => ({
  type: REQUEST_SUCCESSFUL,
  payload: characterInfo
});

export const getFailed = () => ({
  type: REQUEST_FAILED
});

export const fetchCharacter = (character) => async (dispatch) => {
  try {
    const API = `https://anapioficeandfire.com/api/characters?name=${character}`;
    dispatch(getStarted());
    const response = await fetch(API);
    const data = await response.json();
    dispatch(getDone(data));
    console.log(data);
  } catch (error) {
    dispatch(getFailed());
  }

};
