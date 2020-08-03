import { UserActionType } from "./userActionType";

export const setCurrentUser = (user) => ({
  type: UserActionType.SET_CURRENT_USER,
  payload: user,
});
