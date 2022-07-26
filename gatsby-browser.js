// custom typefaces
import "typeface-montserrat"
import "typeface-merriweather"
// normalize CSS across browsers
import "./src/normalize.css"
// custom CSS styles
import "./src/style.css"

// Highlighting for code blocks
import "prismjs/themes/prism.css"

import React from 'react';
import mixpanel from 'mixpanel-browser';

import { MixpanelContext } from './src/tracking';

export const wrapRootElement = ({ element }) => {
  mixpanel.init(process.env.YOUR_MIXPANEL_API_TOKEN);
  if (process.env.NODE_ENV !== 'production') {
    mixpanel.disable();
  }

  return (
    <MixpanelContext.Provider value={mixpanel}>
      {element}
    </MixpanelContext.Provider>
  );
};