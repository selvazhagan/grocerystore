import * as Actions from './app.actions';

const initialState = {
  customer: {
    name: {
      firstName: '',
      lastName: ''
    }
  },
  isLoggedIn : false
};
export function appReducer(state = initialState, action: Actions.AppActions) {
    switch (action.type) {
        case Actions.CUSTOMER :
        return {
            ...state,
            customer : action.payload
        };
        default :
            return state;
    }
}
