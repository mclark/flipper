/**
 * Copyright 2018-present Facebook.
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 * @format
 */

import {Component} from 'react';
import {Elements, DecorateRow} from './elements';
import {ContextMenuExtension} from 'flipper';
import React from 'react';

export type ElementID = string;

export type ElementSearchResultSet = {
  query: string;
  matches: Set<ElementID>;
};

export type ElementData = {
  [name: string]: {
    [key: string]:
      | string
      | number
      | boolean
      | {
          __type__: string;
          value: any;
        };
  };
};

export type ElementAttribute = {
  name: string;
  value: string;
};

export type ElementExtraInfo = {
  linkedNode?: string; // id of linked node in opposite tree
  expandWithParent?: boolean;
};

export type Element = {
  id: ElementID;
  name: string;
  expanded: boolean;
  children: Array<ElementID>;
  attributes: Array<ElementAttribute>;
  data: ElementData;
  decoration: string;
  extraInfo: ElementExtraInfo;
};

export default class ElementsInspector extends Component<{
  onElementExpanded: (key: ElementID, deep: boolean) => void;
  onElementSelected: (key: ElementID) => void;
  onElementHovered:
    | ((key: ElementID | undefined | null) => any)
    | undefined
    | null;
  onValueChanged: ((path: Array<string>, val: any) => any) | undefined | null;
  selected: ElementID | undefined | null;
  focused?: ElementID | undefined | null;
  searchResults?: ElementSearchResultSet | undefined | null;
  root: ElementID | undefined | null;
  elements: {[key: string]: Element};
  useAppSidebar?: boolean;
  alternateRowColor?: boolean;
  contextMenuExtensions?: Array<ContextMenuExtension>;
  decorateRow?: DecorateRow;
}> {
  static defaultProps = {
    alternateRowColor: true,
  };
  render() {
    const {
      selected,
      focused,
      elements,
      root,
      onElementExpanded,
      onElementSelected,
      onElementHovered,
      searchResults,
      alternateRowColor,
      contextMenuExtensions,
      decorateRow,
    } = this.props;

    return (
      <Elements
        onElementExpanded={onElementExpanded}
        onElementSelected={onElementSelected}
        onElementHovered={onElementHovered}
        selected={selected}
        focused={focused}
        searchResults={searchResults}
        root={root}
        elements={elements}
        alternateRowColor={alternateRowColor}
        contextMenuExtensions={contextMenuExtensions}
        decorateRow={decorateRow}
      />
    );
  }
}
