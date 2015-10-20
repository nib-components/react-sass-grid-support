# @nib-components/react-sass-grid-support

Make [React](https://facebook.github.io/react/) support the custom attributes (`g-xs`, `g-sm`, `g-md`, `g-lg`, `g-xl`) used by our pre-compiled [sass-grid](https://github.com/nib-styles/sass-grid).

The current version of React doesn't support custom attributes on elements without the `data-` prefix. 
The React developers [plan on removing this restriction](https://github.com/facebook/react/issues/140#issuecomment-67029693) but haven't got round to it yet.

## Installation

    npm install --save @nib-components/react-sass-grid-support
    
## Usage
    
    require('@nib-components/react-sass-grid-support');
    var React = require('react');
    var ReactDOM = require('react-dom/server');
    
    var HelloWorld = React.createClass({
      render: function() {
        return React.DOM.div({'g-xs': 'text:left', 'g-xl': 'text:right'}, 'Hello World!'); //now you can use the grid custom attributes
      }
    });
    
    console.log(ReactDOM.renderToStaticMarkup(React.createElement(HelloWorld))); //prints <div g-xs="text:left" g-xl="text:right">Hello World!</div>
    