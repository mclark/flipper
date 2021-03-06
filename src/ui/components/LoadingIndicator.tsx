/**
 * Copyright 2018-present Facebook.
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 * @format
 */

import styled from 'react-emotion';
import {keyframes} from 'react-emotion';

const animation = keyframes({
  '0%': {
    transform: 'rotate(0deg)',
  },
  '100%': {
    transform: 'rotate(360deg)',
  },
});

const LoadingIndicator = styled('div')((props: {size: number}) => ({
  animation: `${animation} 1s infinite linear`,
  width: props.size,
  height: props.size,
  minWidth: props.size,
  minHeight: props.size,
  borderRadius: '50%',
  border: `${props.size / 6}px solid rgba(0, 0, 0, 0.2)`,
  borderLeftColor: 'rgba(0, 0, 0, 0.4)',
}));

LoadingIndicator.defaultProps = {
  size: 50,
};

export default LoadingIndicator;
