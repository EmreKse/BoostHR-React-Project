import * as React from 'react';
import { createTheme, darken, lighten } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

// TODO v5: remove
function getThemePaletteMode(palette) {
  return palette.type || palette.mode;
}

export const defaultTheme = createTheme();
export const useStyles = makeStyles(
  (theme) => {
    const getBackgroundColor = (color) =>
      getThemePaletteMode(theme.palette) === 'dark' ? darken(color, 0.6) : lighten(color, 0.6);

    const getHoverBackgroundColor = (color) =>
      getThemePaletteMode(theme.palette) === 'dark' ? darken(color, 0.5) : lighten(color, 0.5);

    return {
      root: {
        '& .super-app-theme--header': {
          backgroundColor: getBackgroundColor(theme.palette.primary.dark)
        },
        '& .super-app-theme--Open': {
          backgroundColor: getBackgroundColor(theme.palette.info.main),
          '&:hover': {
            backgroundColor: getHoverBackgroundColor(theme.palette.info.main)
          }
        },
        '& .super-app-theme--Filled': {
          backgroundColor: getBackgroundColor(theme.palette.success.main),
          '&:hover': {
            backgroundColor: getHoverBackgroundColor(theme.palette.success.main)
          }
        },
        '& .super-app-theme--PartiallyFilled': {
          backgroundColor: getBackgroundColor(theme.palette.warning.main),
          '&:hover': {
            backgroundColor: getHoverBackgroundColor(theme.palette.warning.main)
          }
        },
        '& .super-app-theme--Rejected': {
          backgroundColor: getBackgroundColor(theme.palette.error.main),
          '&:hover': {
            backgroundColor: getHoverBackgroundColor(theme.palette.error.main)
          }
        }
      }
    };
  },
  { defaultTheme }
);
