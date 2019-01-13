// @flow

import variable from './../variables/platform';

export default (variables /*: * */ = variable) => {
  const h3Theme = {
    color: 'rgba(255,255,255,0.6)',
    fontSize: variables.fontSizeH3,
    lineHeight: variables.lineHeightH3
  };

  return h3Theme;
};
