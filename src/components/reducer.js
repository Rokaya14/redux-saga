import { AGE_UP, AGE_DOWN } from './actions'

const initialState = {
  age: 20,
};

const reducer = (state = initialState, action) => {
  switch (action.type)
  {
    case AGE_UP:
      return { ...state, age: age += action.value };

    case AGE_DOWN:
      return { ...state, age: age -= action.value };

    default:
      return state
  }


}