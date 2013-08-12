# url()

A simple, lightweight url parser for JavaScript (~1.6 Kb minified, ~0.6Kb gzipped).

* [View the url demo](http://url.websanova.com)
* [Download the lastest version of url](https://github.com/websanova/url/tags)


## Notes

For path(1) and path(-1) will always act as if the path is in the form `/some/path/` regardless of whether the original path was `/some/path` or `/some/path/`.


## Examples

```html
http://rob:abcd1234@www.example.com/path/index.html?query1=test&silly=willy#test=hash&chucky=cheese
```

```js
url();            // http://rob:abcd1234@www.example.com/path/index.html?query1=test&silly=willy#test=hash&chucky=cheese
url('domain');    // example.com
url('hostname');  // www.example.com
url('sub');       // www
url('.0')         // (an empty string)
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
url('3');         // (an empty string)
url('-1');        // index.html
url(1);           // path
url(2);           // index.html
url(-1);          // index.html
url('?');         // query1=test&silly=willy
url('?silly');    // willy
url('?poo');      // null
url('#');         // test=hash&chucky=cheese
url('#chucky');   // cheese
url('#poo');      // null
```

We can also pass a url in and use all the same options on it:

```js
url('domain', 'test.www.example.com/path/here');            // example.com
url('hostname', 'test.www.example.com/path/here');          // test.www.example.com
url('sub', 'test.www.example.com/path/here');               // test.www
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
* [Websanova JavaScript Extensions Project](http://websanova.com/extensions)
* [jQuery Plugin Development Boilerplate](http://wboiler.websanova.com)
* [The Ultimate Guide to Writing jQuery Plugins](http://www.websanova.com/blog/jquery/the-ultimate-guide-to-writing-jquery-plugins)


## License

MIT licensed

Copyright (C) 2011-2012 Websanova http://www.websanova.com