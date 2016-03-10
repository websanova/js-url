(function() {

var url = 'http://rob:abcd1234@www.domain.com/path/index.html?query1=test&silly=willy#test=hash&chucky=cheese';
var urlHttps = 'https://rob:abcd1234@www.domain.com/path/index.html?query1=test&silly=willy#test=hash&chucky=cheese';
var urlIp = 'https://rob:abcd1234@1.2.3.4/path/index.html?query1=test&silly=willy#test=hash&chucky=cheese';

module('url');

test('url', function() {
  deepEqual( window.url( ), window.location.href );
});

if (window.url('tld?')) {
  test('obj', function() {
    deepEqual( window.url('{}', url), {
      'auth': 'rob:abcd1234',
      'domain': 'domain.com',
      'file': 'index.html',
      'fileext': 'html',
      'filename': 'index',
      'hash': 'test=hash&chucky=cheese',
      'hostname': 'www.domain.com',
      'pass': 'abcd1234',
      'path': '/path/index.html',
      'port': '80',
      'protocol': 'http',
      'query': 'query1=test&silly=willy',
      'sub': 'www',
      'tld': 'com',
      'user': 'rob'
    });
  });

  test('tld', function() {
    deepEqual( window.url('tld', 'http://sub.www.domain.co.uk'), 'co.uk' );
    deepEqual( window.url('tld', 'http://www.domain.org.uk'), 'org.uk' );
    deepEqual( window.url('tld', 'http://domain.la'), 'la' );
    deepEqual( window.url('tld', 'http://in'), 'in' );
    deepEqual( window.url('tld', 'http://.asia'), 'asia' );
    deepEqual( window.url('tld', 'http://.cao.uk'), undefined );
    deepEqual( window.url('tld', 'http://'), undefined );
    deepEqual( window.url('tld', 'http://domain.zoo'), undefined );
    deepEqual( window.url('tld', url), 'com' );
  });

  test('domain', function() {
    deepEqual( window.url('domain', 'http://sub.www.domain.co.uk'), 'domain.co.uk' );
    deepEqual( window.url('domain', 'http://www.domain.org.uk'), 'domain.org.uk' );
    deepEqual( window.url('domain', 'http://domain.la'), 'domain.la' );
    deepEqual( window.url('domain', 'http://in'), undefined );
    deepEqual( window.url('domain', 'http://.asia'), undefined );
    deepEqual( window.url('domain', 'http://.cao.uk'), undefined );
    deepEqual( window.url('domain', 'http://'), undefined );
    deepEqual( window.url('domain', 'http://domain.zoo'), undefined );
    deepEqual( window.url('domain', url), 'domain.com' );
  });

  test('sub', function() {
    deepEqual( window.url('sub', 'http://sub.www.domain.co.uk'), 'sub.www' );
    deepEqual( window.url('sub', 'http://www.domain.org.uk'), 'www' );
    deepEqual( window.url('sub', 'http://domain.la'), undefined );
    deepEqual( window.url('sub', 'http://in'), undefined );
    deepEqual( window.url('sub', 'http://.asia'), undefined );
    deepEqual( window.url('sub', 'http://.cao.uk'), undefined );
    deepEqual( window.url('sub', 'http://'), undefined );
    deepEqual( window.url('sub', 'http://domain.zoo'), undefined );
    deepEqual( window.url('sub', url), 'www' );
  });
}
else {
  test('obj', function() {
    deepEqual( window.url('{}', url), {
      'auth': 'rob:abcd1234',
      'file': 'index.html',
      'fileext': 'html',
      'filename': 'index',
      'hash': 'test=hash&chucky=cheese',
      'hostname': 'www.domain.com',
      'pass': 'abcd1234',
      'path': '/path/index.html',
      'port': '80',
      'protocol': 'http',
      'query': 'query1=test&silly=willy',
      'user': 'rob'
    });
  });
}

test('mailto', function() {
  deepEqual( window.url( 'email', 'mailto:rob@websanova.com' ), 'rob@websanova.com' );
  deepEqual( window.url( 'protocol', 'mailto:rob@websanova.com' ), 'mailto' );
  deepEqual( window.url( 'email', 'mailto:/rob@websanova.com' ), undefined );
  deepEqual( window.url( 'email', 'mailto://rob@websanova.com' ), undefined );
  deepEqual( window.url( 'protocol', 'mailto:/rob@websanova.com' ), 'http' );
  deepEqual( window.url( 'mailto:', 'mailto:/rob@websanova.com' ), undefined );
});

test('hostname', function() {
  deepEqual( window.url( 'hostname', url ), 'www.domain.com' );
  deepEqual( window.url( 'hostname', urlIp ), '1.2.3.4' );
});

test('domain parts', function() {
  deepEqual( window.url( '.', url ), ['www', 'domain', 'com'] );
  deepEqual( window.url( '.0', url ), undefined );
  deepEqual( window.url( '.1', url ), 'www' );
  deepEqual( window.url( '.2', url ), 'domain' );
  deepEqual( window.url( '.-1', url ), 'com' );
});

test('auth', function() {
  deepEqual( window.url( 'auth', url ), 'rob:abcd1234' );
  deepEqual( window.url( 'user', url ), 'rob' );
  deepEqual( window.url( 'pass', url ), 'abcd1234' );
});

test('port', function() {
  deepEqual( window.url( 'port', url ), '80' );
  deepEqual( window.url( 'port', url.toUpperCase() ), '80' );
  deepEqual( window.url( 'port', 'http://example.com:80' ), '80' );
  deepEqual( window.url( 'port', urlHttps ), '443' );
  deepEqual( window.url( 'port', urlHttps.toUpperCase() ), '443' );
  deepEqual( window.url( 'port', 'https://example.com:443' ), '443' );
  deepEqual( window.url( 'port', 'http://domain.com:400?poo=a:b' ), '400' );
  deepEqual( window.url( 'port', 'https://domain.com:80' ), '80' );
  deepEqual( window.url( 'port', 'http://domain.com:443' ), '443' );
  deepEqual( window.url( 'port', 'http://domain.com' ), '80' );
  deepEqual( window.url( 'port', 'https://domain.com' ), '443' );
  deepEqual( window.url( 'port', 'rob@domain.com' ), '80' );
});

test('protocol', function() {
  deepEqual( window.url( 'protocol', 'http://domain.com' ), 'http' );
  deepEqual( window.url( 'protocol', 'http://domain.com:80' ), 'http' );
  deepEqual( window.url( 'protocol', 'http://domain.com:443' ), 'http' );
  deepEqual( window.url( 'protocol', 'domain.com' ), 'http' );
  deepEqual( window.url( 'protocol', 'domain.com:80' ), 'http' );
  deepEqual( window.url( 'protocol', 'domain.com:443' ), 'https' );
  deepEqual( window.url( 'protocol', 'https://domain.com:443' ), 'https' );
  deepEqual( window.url( 'protocol', 'https://domain.com:80' ), 'https' );
  deepEqual( window.url( 'protocol', 'rob@domain.com' ), 'http' );
});

test('path', function() {
  deepEqual( window.url( 'path', url ), '/path/index.html' );
  deepEqual( window.url( 'path', 'http://www.domain.com/first/second' ), '/first/second' );
  deepEqual( window.url( 'path', 'http://www.domain.com/first/second/' ), '/first/second' );
  deepEqual( window.url( 'path', 'http://www.domain.com:8080/first/second' ), '/first/second' );
  deepEqual( window.url( 'path', 'http://www.domain.com:8080/first/second/' ), '/first/second' );
  deepEqual( window.url( 'path', 'http://www.domain.com/first/second?test=foo' ), '/first/second' );
  deepEqual( window.url( 'path', 'http://www.domain.com/first/second/?test=foo' ), '/first/second' );
  deepEqual( window.url( 'path', 'http://www.domain.com/path#anchor' ), '/path' );
  deepEqual( window.url( 'path', 'http://www.domain.com/path/#anchor' ), '/path' );
  deepEqual( window.url( 'path', 'http://www.domain.com' ), '' );
  deepEqual( window.url( 'path', 'http://www.domain.com/' ), '' );
  deepEqual( window.url( 'path', 'http://www.domain.com#anchor' ), '' );
  deepEqual( window.url( 'path', 'http://www.domain.com/#anchor' ), '' );
  deepEqual( window.url( 'path', 'http://www.domain.com?test=foo' ), '' );
  deepEqual( window.url( 'path', 'http://www.domain.com/?test=foo' ), '' );
  deepEqual( window.url( 'path', 'http://www.domain.com:80' ), '' );
  deepEqual( window.url( 'path', 'http://www.domain.com:80/' ), '' );
  deepEqual( window.url( 'path', 'http://www.domain.com:80#anchor' ), '' );
  deepEqual( window.url( 'path', 'http://www.domain.com:80/#anchor' ), '' );
  deepEqual( window.url( 'path', 'http://www.domain.com:80?test=foo' ), '' );
  deepEqual( window.url( 'path', 'http://www.domain.com:80/?test=foo' ), '' );
});

test('file', function() {
  deepEqual( window.url( 'file', url ), 'index.html' );
  deepEqual( window.url( 'filename', url ), 'index' );
  deepEqual( window.url( 'fileext', url ), 'html' );
  deepEqual( window.url( 'file', 'http://domain.com' ), undefined );
  deepEqual( window.url( 'filename', 'http://domain.com' ), undefined );
  deepEqual( window.url( 'fileext', 'http://domain.com' ), undefined );
});

test('url parts', function() {
  deepEqual( window.url( '/', url ), ['path', 'index.html'] );
  deepEqual( window.url( '0', url ), undefined );
  deepEqual( window.url( '-4', url ), undefined );
  deepEqual( window.url( '1', url ), 'path' );
  deepEqual( window.url( 1, url ), 'path' );
  deepEqual( window.url( '2', url ), 'index.html' );
  deepEqual( window.url( '3', url ), undefined );
  deepEqual( window.url( '-1', url ), 'index.html' );
  deepEqual( window.url( '1', 'http://www.domain.com/first/second' ), 'first' );
  deepEqual( window.url( '1', 'http://www.domain.com/first/second/' ), 'first' );
  deepEqual( window.url( '-1', 'http://www.domain.com/first/second?test=foo' ), 'second' );
  deepEqual( window.url( '-1', 'http://www.domain.com/first/second/?test=foo' ), 'second' );
});

test('query string', function() {
  deepEqual( window.url( 'query', url ), 'query1=test&silly=willy' );
  deepEqual( window.url( '?', url ), {'query1': 'test', 'silly': 'willy'} );
  deepEqual( window.url( '?silly', url ), 'willy' );
  deepEqual( window.url( '?poo', url ), undefined );
  deepEqual( window.url( '?poo', 'http://domain.com?poo=' ), '' );
  deepEqual( window.url( '?poo', 'http://domain.com/?poo' ), '' );
  deepEqual( window.url( '?poo', 'http://domain.com?poo' ), '' );
  deepEqual( window.url( '?poo', 'http://domain.com?' ), undefined );
  deepEqual( window.url( '?poo', 'http://domain.com' ), undefined );
  deepEqual( window.url( '?poo', 'http://domain.com?poo=a+b' ), 'a b' );
  deepEqual( window.url( '?poo', 'http://domain.com?poo=javascript%20decode%20uri%20%2B%20sign%20to%20space' ), 'javascript decode uri + sign to space' );
  deepEqual( window.url( '?key', 'http://domain.com?key=value=va?key2=value' ), 'value=va?key2=value');
  deepEqual( window.url( '?poo', 'http://domain.com:400?poo=a:b' ), 'a:b' );
  deepEqual( window.url( '?poo', 'http://domain.com:400? & & &' ), undefined );
  deepEqual( window.url( '?test', 'http://domain.com?test=45#5' ), '45' );
  deepEqual( window.url( '?test', 'http://domain.com?test=45?5' ), '45?5' );
  deepEqual( window.url( '?', 'http://domain.com?silly=willy&field[0]=zero&field[1]=one' ), {'silly': 'willy', 'field': ['zero', 'one']} );
  deepEqual( window.url( '?', 'http://domain.com?silly=willy&field[0]=zero&field[2]=two' ), {'silly': 'willy', 'field': ['zero', undefined, 'two']} );

  deepEqual( window.url( '?field[0]', 'http://domain.com?field[0]=zero&firled[1]=one' ), 'zero' );
  deepEqual( window.url( '?field', 'http://domain.com?field[0]=zero&field[1]=one&var=test' ), ['zero', 'one'] );
  deepEqual( window.url( '?field', 'http://domain.com?field[0]=zero&field[3]=one&var=test' ), ['zero', undefined, undefined, 'one'] );
  deepEqual( window.url( '?var', 'http://domain.com?field[0]=zero&field[3]=one&var=test' ), 'test' );
  deepEqual( window.url( '?', 'http://domain.com?field[0]=zero&field[1]=one&var=test' ), {'field': ['zero', 'one'], 'var': 'test'} );
});

test('hash string', function() {
  deepEqual( window.url( 'hash', url ), 'test=hash&chucky=cheese' );
  deepEqual( window.url( '#', url ), {'chucky': 'cheese', 'test': 'hash'} );
  deepEqual( window.url( '#chucky', url ), 'cheese' );
  deepEqual( window.url( '#poo', url ), undefined );
  deepEqual( window.url( '#poo', 'http://domain.com#poo=' ), '' );
  deepEqual( window.url( '#poo', 'http://domain.com/#poo' ), '' );
  deepEqual( window.url( '#poo', 'http://domain.com#poo' ), '' );
  deepEqual( window.url( '#poo', 'http://domain.com#' ), undefined );
  deepEqual( window.url( '#poo', 'http://domain.com' ), undefined );
  deepEqual( window.url( '#test', 'http://domain.com#test=45#5' ), '45#5' );

  deepEqual( window.url( '#field[0]', 'http://domain.com#field[0]=zero&firled[1]=one' ), 'zero' );
  deepEqual( window.url( '#field', 'http://domain.com#field[0]=zero&field[1]=one&var=test' ), ['zero', 'one'] );
  deepEqual( window.url( '#field', 'http://domain.com#field[0]=zero&field[3]=one&var=test' ), ['zero', undefined, undefined, 'one'] );
  deepEqual( window.url( '#var', 'http://domain.com#field[0]=zero&field[3]=one&var=test' ), 'test' );
  deepEqual( window.url( '#', 'http://domain.com#field[0]=zero&field[1]=one&var=test' ), {'field': ['zero', 'one'], 'var': 'test'} );
});

test('hash bangs', function() {
  deepEqual( window.url( '?poo', 'http://domain.com/#!?' ), undefined );
  deepEqual( window.url( '?poo', 'http://domain.com/#!/' ), undefined );
  deepEqual( window.url( '-1', 'http://www.domain.com/#!/first/second/?test=foo' ), 'second' );
  deepEqual( window.url( '?', 'http://domain.com/#!/?field[0]=zero&field[1]=one&var=test' ), {'field': ['zero', 'one'], 'var': 'test'} );
  deepEqual( window.url( '?', 'http://domain.com/#!?field[0]=zero&field[1]=one&var=test' ), {'field': ['zero', 'one'], 'var': 'test'} );
  deepEqual( window.url( '#', 'http://domain.com/#!/#field[0]=zero&field[1]=one&var=test' ), {'field': ['zero', 'one'], 'var': 'test'} );
});

if (window.url('tld?')) {
  test('tld', function() {
    deepEqual( window.url( 'tld', 'www.example.ly' ), 'ly' );
    deepEqual( window.url( 'tld', 'www.example.xyz' ), 'xyz' );
  });
}

if (typeof jQuery !== 'undefined') {
  test('jQuery', function() {
    deepEqual( $.url( 'hostname', url ), 'www.domain.com' );
    deepEqual( $.url( 'path', url ), '/path/index.html' );
    deepEqual( $.url( '?silly', url ), 'willy' );
    deepEqual( $.url( '#poo', url ), undefined );
  });
}

}());