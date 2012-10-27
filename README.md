# $.uri()

A jQuery $.uri() method for quickly parsing a uri.


## Examples

```html
http://www.domain.com/path/index.html?query1=test&silly=willy#test=hash&chucky=cheese
```

```javascript
$.uri();            // http://www.domain.com/path/index.html?query1=test&silly=willy#test=hash&chucky=cheese
$.uri('domain');    // www.domain.com
$.uri('host');      // domain.com
$.uri('tld');       // com
$.uri('sub');       // www
$.uri('port');      // 80
$.uri('protocol');  // http
$.uri('path');      // /path/index.html
$.uri('file');      // index.html
$.uri('filename');  // index
$.uri('fileext');   // html
$.uri('1');         // path
$.uri('2');         // index.html
$.uri('3');         // (an empty string)
$.uri('-1');        // index.html
$.uri('?');         // query1=test&silly=willy
$.uri('?silly');    // willy
$.uri('?poo');      // (an empty string)
$.uri('#');         // test=hash&chucky=cheese
$.uri('#chucky');   // cheese
$.uri('#poo');      // (an empty string)
```

We can also pass a domain in and use all the same options on it:

```javascript
$.uri('path', 'www.domain.com/path/here');                     // /path/here
$.uri('sub', 'https://test.www.domain.com:8080/some/path');    // test.www
$.uri('port', 'https://test.www.domain.com:8080/some/path');   // 8080
etc...
```


## Resources

* [jQuery Plugin Development Boilerplate](http://www.websanova.com/tutorials/jquery/jquery-plugin-development-boilerplate)
* [The Ultimate Guide to Writing jQuery Plugins](http://www.websanova.com/tutorials/jquery/the-ultimate-guide-to-writing-jquery-plugins)


## License

MIT licensed

Copyright (C) 2011-2012 Websanova http://www.websanova.com