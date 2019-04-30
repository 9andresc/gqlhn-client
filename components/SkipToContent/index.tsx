import styled from '@emotion/styled';

const Link = styled.a(props => ({
  display: 'flex',
  left: '-1000px',
  position: 'absolute',
  top: '0',
  height: '2rem',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0 0.5rem',
  borderRadius: '3px',
  backgroundColor: props.theme.whiteColor,
  color: props.theme.primaryColor,
  fontSize: '1rem',
  overflow: 'hidden',

  '&:focus': {
    left: '0',
  },
}));

export function SkipToContent() {
  return <Link href="#main">Skip to content</Link>;
}
