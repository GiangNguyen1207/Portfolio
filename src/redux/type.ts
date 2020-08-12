export const SHOW_NOTIFICATION = 'SHOW_NOTIFICATION'
export const HIDE_NOTIFICATION = 'HIDE_NOTIFICATION'

export type NotificationType = 'success' | 'failure' | null;

export type Notification = {
  message: string;
  type: NotificationType;
};

export type ShowNotification = {
  type: typeof SHOW_NOTIFICATION;
  payload: Notification;
};

export type HideNotification = {
  type: typeof HIDE_NOTIFICATION;
};

export type NotificationActions = ShowNotification | HideNotification;
