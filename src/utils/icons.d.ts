/**
 * Copyright 2018-present Facebook.
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 * @format
 */

import {IconSize} from 'src/ui/components/Glyph';

declare function getIconURL(
  name: string,
  size?: IconSize,
  density?: number,
): string;

declare const ICONS: {
  [key: string]: Array<IconSize>;
};
