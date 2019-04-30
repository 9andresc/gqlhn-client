import styled from '@emotion/styled';

export const H1 = styled.h1(props => ({
  margin: '0',
  width: '100%',
  color: props.theme.bodyColor,
  fontSize: '2rem',
  transition: 'color 0.25s',
}));

export const H2 = styled.h2(props => ({
  margin: '0',
  width: '100%',
  color: props.theme.bodyColor,
  fontSize: '1.5rem',
  transition: 'color 0.25s',
}));

export const H3 = styled.h3(props => ({
  margin: '0',
  width: '100%',
  color: props.theme.bodyColor,
  fontSize: '1.2rem',
  transition: 'color 0.25s',
}));
