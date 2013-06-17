## View Helpers

exposed methods from passport for usage in handlebars templates\n isAuthenticated and isUnauthenticated

## Installation

```sh
$ npm install hbs-passport-helpers
```

or specify in package.json as dependency

## Usage

with express

```js
var helpers = require('hbs-passport-helpers')
app.use(helpers())
```

### API

* `isAuthenticated` - boolean returned
* `isUnauthenticated` - boolean returned


## License
(The MIT License)

Copyright (c) 2013 Zlati Pehlivanov < [zlati.pehlivanov@gmail.com](mailto:zlati.pehlivanov@gmail.com) >

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
