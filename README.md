# url()

A simple, lightweight url parser for jQuery (~1.2 Kb minified, ~0.5Kb gzipped).


## Examples

```html
http://www.domain.com/path/index.html?query1=test&silly=willy#test=hash&chucky=cheese
```

```javascript
url();            // http://www.domain.com/path/index.html?query1=test&silly=willy#test=hash&chucky=cheese
url('domain');    // www.domain.com
url('host');      // domain.com
url('tld');       // com
url('sub');       // www
url('.0')         // (an empty string)
url('.1')         // www
url('.2')         // domain
url('.-1')        // com
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


## Resources

* [jQuery Plugin Development Boilerplate](http://www.websanova.com/tutorials/jquery/jquery-plugin-development-boilerplate)
* [The Ultimate Guide to Writing jQuery Plugins](http://www.websanova.com/tutorials/jquery/the-ultimate-guide-to-writing-jquery-plugins)


## License

MIT licensed

Copyright (C) 2011-2012 Websanova http://www.websanova.com