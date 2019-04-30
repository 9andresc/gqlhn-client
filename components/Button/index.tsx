import color from 'color';
import styled from '@emotion/styled';

export const Button = styled.button(props => ({
  display: 'flex',
  height: '2rem',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0 0.5rem',
  backgroundColor: props.theme.primaryLightColor,
  border: 'none',
  borderRadius: '3px',
  boxShadow: `0 4px 10px ${color(props.theme.greyDarkColor).fade(0.85)}`,
  WebkitAppearance: 'none',
  color: props.theme.whiteColor,

  '&:active': {
    backgroundColor: props.theme.primaryDarkColor,
  },

  '&:hover': {
    cursor: 'pointer',
  },
}));
