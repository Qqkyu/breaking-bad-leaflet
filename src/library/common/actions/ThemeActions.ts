export enum ThemeActionTypes {
  CHANGE_THEME = "CHANGE_THEME",
}

export function changeTheme() {
  return {
    type: ThemeActionTypes.CHANGE_THEME,
  };
}
