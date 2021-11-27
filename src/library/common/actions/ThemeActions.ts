export enum themeActionTypes {
  CHANGE_THEME = "CHANGE_THEME",
}

export function changeTheme() {
  return {
    type: themeActionTypes.CHANGE_THEME,
  };
}
