import {
  SHOW_NOTIFICATION,
  HIDE_NOTIFICATION,
  NotificationActions,
  NotificationType,
} from '../type'

export function showNotification(
  message: string,
  type: NotificationType
): NotificationActions {
  return {
    type: SHOW_NOTIFICATION,
    payload: {
      message,
      type,
    },
  }
}

export function hideNotification(): NotificationActions {
  return {
    type: HIDE_NOTIFICATION,
  }
}
