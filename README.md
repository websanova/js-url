# url()

A simple, lightweight url parser for JavaScript (~1.7 Kb minified, ~0.7Kb gzipped).

* [Change Log](https://github.com/websanova/js-url/wiki/Change-Log)
* [View the url demo](http://url.websanova.com)
* [Download the lastest version of url](https://github.com/websanova/js-url/tags)

Also available for Node.js.

* [On GitHub as node-url](https://github.com/websanova/node-url)
* [On Npm as wurl](https://www.npmjs.com/package/wurl)

## Notes

For path(1) and path(-1) will always act as if the path is in the form `/some/path/` regardless of whether the original path was `/some/path` or `some/path/`.

## Tld

There are two versions, `url.min.js` and `url-tld.min.jd`. The `tld` version contains a list of valid tld's making the file about 2kb larger. If you don't need support for it just use domain parts arguments (`url('-1')`) to get the tld pieces you need.

## Examples

```html
http://rob:abcd1234@www.example.co.uk/path/index.html?query1=test&silly=willy&field[0]=zero&field[2]=two#test=hash&chucky=cheese
```

```js
url();            // http://rob:abcd1234@www.example.com/path/index.html?query1=test&silly=willy#test=hash&chucky=cheese
url('tld');       // co.uk
url('domain');    // example.co.uk
url('hostname');  // www.example.com
url('sub');       // www
url('.0')         // undefined
url('.1')         // www
url('.2')         // example
url('.-1')        // com
url('auth')       // rob:abcd1234
url('user')       // rob
url('pass')       // abcd1234
url('port');      // 80
url('protocol');  // http
url('path');      // /path/index.html
url('file');      // index.html
url('filename');  // index
url('fileext');   // html
url('1');         // path
url('2');         // index.html
url('3');         // undefined
url('-1');        // index.html
url(1);           // path
url(2);           // index.html
url(-1);          // index.html
url('query');     // query1=test&silly=willy
url('?');         // {query1: 'test', silly: 'willy'}
url('?silly');    // willy
url('?poo');      // null
url('field[0]')   // zero
url('field')      // ['zero', undefined, 'two']
url('hash');      // test=hash&chucky=cheese
url('#');         // {test: 'hash', chucky: 'cheese'}
url('#chucky');   // cheese
url('#poo');      // undefined
```

Also supports `mailto`.

```js
url('protocol', 'mailto:rob@websanova.com'); // mailto
url('email', 'mailto:rob@websanova.com');    // rob@websanova.com

```

We can also pass a url in and use all the same options on it:

```js
url('hostname', 'test.www.example.com/path/here');          // test.www.example.com
url('protocol', 'www.example.com/path/here');               // http
url('path', 'http://www.example.com:8080/some/path');       // /some/path
url('port', 'http://www.example.com:8080/some/path');       // 8080
url('protocol', 'https://www.example.com:8080/some/path');  // https
etc...
```

## jQuery

Also include is a jQuery version of the plugin that can be called via $.url() with all the same options.  If you're already using jQuery it may be better to use the jQuery version to avoid namespacing issues.

## Grunt.js

If you want to use Grunt you will need to install the required plugins locally using `npm install` in the root folder of your project.  If you need to setup Grunt on your system you can follow my [Setting up Grunt.js](http://www.websanova.com/blog/javascript/how-to-setup-grunt) guide.

## Resources

* [More jQuery plugins by Websanova](http://websanova.com/plugins)
* [jQuery Plugin Development Boilerplate](http://wboiler.websanova.com)
* [The Ultimate Guide to Writing jQuery Plugins](http://www.websanova.com/blog/jquery/the-ultimate-guide-to-writing-jquery-plugins)

## License

MIT licensed

Copyright (C) 2011-2012 Websanova http://www.websanova.com
