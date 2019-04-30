import styled from '@emotion/styled';

export const Paragraph = styled.p(props => ({
  margin: '0',
  width: '100%',
  color: props.theme.bodyColor,
  fontSize: '1rem',
  transition: 'color 0.25s',
}));
