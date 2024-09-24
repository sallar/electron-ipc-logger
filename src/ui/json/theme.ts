/*
 * https://github.com/reduxjs/redux-devtools/blob/main/packages/react-json-tree/src/createStylingFromTheme.ts
 *
 * BACKGROUND_COLOR: theme.base00,
 * TEXT_COLOR: theme.base07,
 * STRING_COLOR: theme.base0B,
 * DATE_COLOR: theme.base0B,
 * NUMBER_COLOR: theme.base09,
 * BOOLEAN_COLOR: theme.base09,
 * NULL_COLOR: theme.base08,
 * UNDEFINED_COLOR: theme.base08,
 * FUNCTION_COLOR: theme.base08,
 * SYMBOL_COLOR: theme.base08,
 * LABEL_COLOR: theme.base0D,
 * ARROW_COLOR: theme.base0D,
 * ITEM_STRING_COLOR: theme.base0B,
 * ITEM_STRING_EXPANDED_COLOR: theme.base03,
 *
 * Not that really can customize everything =_=...
 * but it's complemented with custom functions on label/itemString render
 */
export const theme = {
  scheme: 'chrome dev-tools',
  author: 'danikaze (https://github.com/danikaze)',
  // background
  base00: '#FFFFFF',
  base01: '#FF00F1',
  base02: '#FF00F2',
  // expanded array/object/number of keys
  base03: '#777777',
  base04: '#FF00F4',
  base05: '#FF00F5',
  base06: '#FF00F6',
  base07: '#FF00F7',
  // null/undefined/functions
  base08: '#AAAAAA',
  // int/float/NaN
  base09: '#0842a0',
  base0A: '#FF00FA',
  // string values / unexpanded array/object/number of keys
  base0B: '#DC362E',
  base0C: '#FF00FC',
  // key names and arrows
  base0D: '#474747',
  base0E: '#FF00FE',
  base0F: '#FF00FF',
};
