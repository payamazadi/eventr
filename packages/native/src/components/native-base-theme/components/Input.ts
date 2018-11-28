// @flow

import variable from '../variables/platform';

export default (variables /*: * */ = variable) => {
  const inputTheme = {
    '.multiline': {
      height: null
    },
    height: variables.inputHeightBase,
    color: variables.inputColor,
    paddingLeft: 5,
    paddingRight: 5,
    flex: 1,
    fontSize: variables.inputFontSize,
    borderColor: '#F79D19',
    borderBottomWidth: 2,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    backgroundColor: 'rgba(255,255,255,0.4)'
  };

  return inputTheme;
};
