import { combineReducers } from 'redux'

import { notification } from 'redux/reducer/notification'

const rootReducer = combineReducers({
  notification,
})

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer
