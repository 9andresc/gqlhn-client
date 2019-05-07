import Color from 'color';
import styled from '@emotion/styled';

type Props = {
  kind?: 'default' | 'primary' | 'primaryLight';
};

export const Button = styled.button<Props>(props => {
  let backgroundColor: string;
  let color: string;
  switch (props.kind) {
    case 'primary':
      backgroundColor = props.theme.primaryColor;
      color = props.theme.whiteColor;
      break;

    case 'primaryLight':
      backgroundColor = props.theme.primaryLightColor;
      color = props.theme.whiteColor;
      break;

    default:
      backgroundColor = props.theme.greyLightColor;
      color = props.theme.greyColor;
      break;
  }

  return {
    display: 'flex',
    alignItems: 'center',
    height: '2rem',
    justifyContent: 'center',
    padding: '0 0.5rem',
    backgroundColor,
    border: 'none',
    borderRadius: '3px',
    boxShadow: `0 4px 10px ${Color(props.theme.greyDarkColor).fade(0.7)}`,
    WebkitAppearance: 'none',
    color,

    '&:active': {
      backgroundColor: `${Color(backgroundColor).darken(0.3)}`,
    },

    '&:disabled': {
      opacity: 0.5,
      cursor: 'not-allowed',
      pointerEvents: 'none',
    },

    '&:hover': {
      cursor: 'pointer',
    },
  };
});
