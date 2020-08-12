import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer, { RootState } from 'redux/reducer/index'

const initState: RootState = {
  notification: {
    message: '',
    type: null,
  },
}

export default function makeStore(initialState = initState) {
  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware())
  )

  return store
}
