import { keyframes } from '@emotion/core';
import styled from '@emotion/styled';

const scale = keyframes`
  0% {
    transform: scale(0);
    opacity: 0;
  }

  50% {
    transform: scale(0.7);
    opacity: 1;
  }

  100% {
    transform: scale(1);
    opacity: 0;
  }
`;

export const Spinner = styled.div(props => ({
  position: 'relative',
  height: '4rem',
  width: '4rem',

  '&:before, &:after': {
    left: '0px',
    display: 'block',
    position: 'absolute',
    top: '0px',
    height: '4rem',
    width: '4rem',
    border: `4px solid ${props.theme.primaryColor}`,
    borderRadius: '100rem',
    content: '""',
  },

  '&:before': {
    animation: `${scale} 1s linear 0s infinite`,
  },

  '&:after': {
    opacity: 0,
    animation: `${scale} 1s linear 0.5s infinite`,
  },
}));
