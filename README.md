# url()

A simple, lightweight url parser for JavaScript (~1.6 Kb minified, ~0.6Kb gzipped).


## Examples

```html
http://rob:abcd1234@www.domain.com/path/index.html?query1=test&silly=willy#test=hash&chucky=cheese
```

```javascript
url();            // http://rob:abcd1234@www.domain.com/path/index.html?query1=test&silly=willy#test=hash&chucky=cheese
url('domain');    // domain.com
url('hostname');  // www.domain.com
url('tld');       // com
url('sub');       // www
url('.0')         // (an empty string)
url('.1')         // www
url('.2')         // domain
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
url('domain', 'test.www.domain.com/path/here');            // domain.com
url('hostname', 'test.www.domain.com/path/here');          // test.www.domain.com
url('sub', 'test.www.domain.com/path/here');               // test.www
url('protocol', 'www.domain.com/path/here');               // http
url('path', 'http://www.domain.com:8080/some/path');       // /some/path
url('port', 'http://www.domain.com:8080/some/path');       // 8080
url('protocol', 'https://www.domain.com:8080/some/path');  // https
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