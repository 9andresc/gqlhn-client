import color from 'color';
import styled from '@emotion/styled';
import React from 'react';

type ContainerProps = {
  isDisabled: boolean;
};

const Container = styled.button<ContainerProps>(props => ({
  display: 'flex',
  position: 'relative',
  alignItems: 'center',
  height: '1.5rem',
  justifyContent: 'space-between',
  padding: '0',
  backgroundColor: props.theme.primaryDarkColor,
  border: 'none',
  borderRadius: '100rem',
  boxShadow: `0 4px 10px ${color(props.theme.greyDarkColor).fade(0.85)}`,
  opacity: props.isDisabled ? 0.5 : 1,
  WebkitAppearance: 'none',

  '&:hover': {
    cursor: 'pointer',
  },
}));

const IconContainer = styled.div({
  display: 'flex',
  alignItems: 'center',
  height: '1.5rem',
  justifyContent: 'center',
  width: '1.5rem',
  borderRadius: '100rem',
  backgroundColor: 'transparent',
});

type HandleProps = {
  isOn: boolean;
};

const Handle = styled.div<HandleProps>(props => ({
  position: 'absolute',
  transform: props.isOn ? `translateX(1.5rem)` : 'translateX(0)',
  height: '1.5rem',
  width: '1.5rem',
  borderRadius: '100rem',
  backgroundColor: props.theme.primaryLightColor,
  transition: 'transform 0.25s',
}));

const defaultProps = {
  isOn: false,
  isDisabled: false,
};

type Props = {
  'aria-label': string;
  onIcon: React.ReactNode;
  offIcon: React.ReactNode;
  onChange?: (isOn: boolean) => void;
} & typeof defaultProps;

function Switch(props: Props) {
  const [state, setState] = React.useState({
    isOn: props.isOn,
    isDisabled: props.isDisabled,
  });

  function handleOnClick() {
    setState({ ...state, isOn: !state.isOn });
    if (props.onChange) props.onChange(state.isOn);
  }

  return (
    <Container
      aria-checked={state.isOn}
      aria-label={props['aria-label']}
      isDisabled={state.isDisabled}
      role="switch"
      onClick={state.isDisabled ? undefined : handleOnClick}
    >
      <IconContainer>{props.onIcon}</IconContainer>
      <IconContainer>{props.offIcon}</IconContainer>
      <Handle isOn={state.isOn} />
    </Container>
  );
}

Switch.defaultProps = defaultProps;

export { Switch };
