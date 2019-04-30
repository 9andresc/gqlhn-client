import styled from '@emotion/styled';

import { Breakpoints } from '../../utils/theme';

export const Wrapper = styled.div({
  height: '100%',
  width: '100%',
  margin: 'auto',

  [Breakpoints.Tablet]: {
    width: '600px',
  },

  [Breakpoints.Desktop]: {
    width: '900px',
  },
});
