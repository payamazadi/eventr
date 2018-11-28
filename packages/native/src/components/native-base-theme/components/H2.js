// @flow

import variable from './../variables/platform';

export default (variables /*: * */ = variable) => {
  const h2Theme = {
    color: 'rgba(255,255,255,0.6)',
    fontSize: variables.fontSizeH2,
    lineHeight: variables.lineHeightH2
  };

  return h2Theme;
};
