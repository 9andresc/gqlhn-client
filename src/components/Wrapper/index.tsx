import styled from '@emotion/styled';

import { Breakpoints } from '../../utils/theme';

export const Wrapper = styled.div({
  height: '100%',
  margin: 'auto',
  width: '100%',

  [Breakpoints.Tablet]: {
    width: '600px',
  },
});
