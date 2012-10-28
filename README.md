# url()

A simple, lightweight url parser for JavaScript (~1.6 Kb minified, ~0.6Kb gzipped).


## Examples

```html
http://rob:abcd1234@www.example.com/path/index.html?query1=test&silly=willy#test=hash&chucky=cheese
```

```javascript
url();            // http://rob:abcd1234@www.example.com/path/index.html?query1=test&silly=willy#test=hash&chucky=cheese
url('domain');    // example.com
url('hostname');  // www.example.com
url('tld');       // com
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
url('?poo');      // (an empty string)
url('#');         // test=hash&chucky=cheese
url('#chucky');   // cheese
url('#poo');      // (an empty string)
```

We can also pass a url in and use all the same options on it:

```javascript
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


## Resources

* [jQuery Plugin Development Boilerplate](http://www.websanova.com/tutorials/jquery/jquery-plugin-development-boilerplate)
* [The Ultimate Guide to Writing jQuery Plugins](http://www.websanova.com/tutorials/jquery/the-ultimate-guide-to-writing-jquery-plugins)


## License

MIT licensed

Copyright (C) 2011-2012 Websanova http://www.websanova.com