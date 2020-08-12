import {
  NotificationActions,
  Notification,
  SHOW_NOTIFICATION,
  HIDE_NOTIFICATION,
} from '../type'

const initialState: Notification = {
  message: '',
  type: null,
}

export function notification(
  state: Notification = initialState,
  action: NotificationActions
): Notification {
  switch (action.type) {
    case SHOW_NOTIFICATION:
      return {
        ...state,
        message: action.payload.message,
        type: action.payload.type,
      }
    case HIDE_NOTIFICATION:
      return {
        ...state,
        message: '',
        type: null,
      }
    default:
      return state
  }
}
