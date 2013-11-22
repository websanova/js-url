(function() {

var url = 'http://rob:abcd1234@www.domain.com/path/index.html?query1=test&silly=willy#test=hash&chucky=cheese';
var urlHttps = 'https://rob:abcd1234@www.domain.com/path/index.html?query1=test&silly=willy#test=hash&chucky=cheese';
var urlIp = 'https://rob:abcd1234@1.2.3.4/path/index.html?query1=test&silly=willy#test=hash&chucky=cheese';

module('url');

test('url', function() {
  deepEqual( window.url( ), window.location.href );
});

test('domain', function() {
  deepEqual( window.url( 'domain', url ), 'domain.com' );
  deepEqual( window.url( 'domain', urlIp ), '1.2.3.4' );
});

test('hostname', function() {
  deepEqual( window.url( 'hostname', url ), 'www.domain.com' );
});

test('sub', function() {
  deepEqual( window.url( 'sub', url ), 'www' );
});

test('domain parts', function() {
  deepEqual( window.url( '.0', url ), '' );
  deepEqual( window.url( '.1', url ), 'www' );
  deepEqual( window.url( '.2', url ), 'domain' );
  deepEqual( window.url( '.-1', url ), 'com' );
});

test('auth', function() {
  deepEqual( window.url( 'auth', url ), 'rob:abcd1234' );
});

test('user', function() {
  deepEqual( window.url( 'user', url ), 'rob' );
});

test('pass', function() {
  deepEqual( window.url( 'pass', url ), 'abcd1234' );
});

test('port', function() {
  deepEqual( window.url( 'port', url ), '80' );
  deepEqual( window.url( 'port', url.toUpperCase() ), '80' );
  deepEqual( window.url( 'port', "http://example.com:80" ), '80' );
  deepEqual( window.url( 'port', urlHttps ), '443' );
  deepEqual( window.url( 'port', urlHttps.toUpperCase() ), '443' );
  deepEqual( window.url( 'port', "https://example.com:443" ), '443' );
});

test('protocol', function() {
  deepEqual( window.url( 'protocol', url ), 'http' );
});

test('path', function() {
  deepEqual( window.url( 'path', url ), '/path/index.html' );
  deepEqual( window.url( 'path', 'http://www.domain.com/first/second' ), '/first/second' );
  deepEqual( window.url( 'path', 'http://www.domain.com/first/second/' ), '/first/second/' );
  deepEqual( window.url( 'path', 'http://www.domain.com:8080/first/second' ), '/first/second' );
  deepEqual( window.url( 'path', 'http://www.domain.com:8080/first/second/' ), '/first/second/' );
  deepEqual( window.url( 'path', 'http://www.domain.com/first/second?test=foo' ), '/first/second' );
  deepEqual( window.url( 'path', 'http://www.domain.com/first/second/?test=foo' ), '/first/second/' );
  deepEqual( window.url( 'path', 'http://www.domain.com/path#anchor' ), '/path' );
  deepEqual( window.url( 'path', 'http://www.domain.com/path/#anchor' ), '/path/' );
  deepEqual( window.url( 'path', 'http://www.domain.com' ), '' );
  deepEqual( window.url( 'path', 'http://www.domain.com/' ), '/' );
  deepEqual( window.url( 'path', 'http://www.domain.com#anchor' ), '' );
  deepEqual( window.url( 'path', 'http://www.domain.com/#anchor' ), '/' );
  deepEqual( window.url( 'path', 'http://www.domain.com?test=foo' ), '' );
  deepEqual( window.url( 'path', 'http://www.domain.com/?test=foo' ), '/' );
  deepEqual( window.url( 'path', 'http://www.domain.com:80' ), '' );
  deepEqual( window.url( 'path', 'http://www.domain.com:80/' ), '/' );
  deepEqual( window.url( 'path', 'http://www.domain.com:80#anchor' ), '' );
  deepEqual( window.url( 'path', 'http://www.domain.com:80/#anchor' ), '/' );
  deepEqual( window.url( 'path', 'http://www.domain.com:80?test=foo' ), '' );
  deepEqual( window.url( 'path', 'http://www.domain.com:80/?test=foo' ), '/' );
});

test('file', function() {
  deepEqual( window.url( 'file', url ), 'index.html' );
  deepEqual( window.url( 'filename', url ), 'index' );
  deepEqual( window.url( 'fileext', url ), 'html' );
});

test('url parts', function() {
  deepEqual( window.url( '1', url ), 'path' );
  deepEqual( window.url( 1, url ), 'path' );

  deepEqual( window.url( '2', url ), 'index.html' );
  deepEqual( window.url( '3', url ), '' );
  deepEqual( window.url( '-1', url ), 'index.html' );

  deepEqual( window.url( '1', 'http://www.domain.com/first/second' ), 'first' );
  deepEqual( window.url( '1', 'http://www.domain.com/first/second/' ), 'first' );
  deepEqual( window.url( '-1', 'http://www.domain.com/first/second?test=foo' ), 'second' );
  deepEqual( window.url( '-1', 'http://www.domain.com/first/second/?test=foo' ), 'second' );
});

test('query string', function() {
  deepEqual( window.url( '?', url ), 'query1=test&silly=willy' );
  deepEqual( window.url( '?silly', url ), 'willy' );
  deepEqual( window.url( '?poo', url ), null );

  deepEqual( window.url( '?poo', 'http://domain.com?poo=' ), '' );
  deepEqual( window.url( '?poo', 'http://domain.com/?poo' ), '' );
  deepEqual( window.url( '?poo', 'http://domain.com?poo' ), '' );
  deepEqual( window.url( '?poo', 'http://domain.com?' ), null );
  deepEqual( window.url( '?poo', 'http://domain.com' ), null );
});

test('url fragment', function() {
  deepEqual( window.url( '#', url ), 'test=hash&chucky=cheese' );
  deepEqual( window.url( '#chucky', url ), 'cheese' );
  deepEqual( window.url( '#poo', url ), null );

  deepEqual( window.url( '#poo', 'http://domain.com#poo=' ), '' );
  deepEqual( window.url( '#poo', 'http://domain.com/#poo' ), '' );
  deepEqual( window.url( '#poo', 'http://domain.com#poo' ), '' );
  deepEqual( window.url( '#poo', 'http://domain.com#' ), null );
  deepEqual( window.url( '#poo', 'http://domain.com' ), null );
});

if (typeof jQuery !== 'undefined') {
  test('jQuery', function() {
    deepEqual( $.url( 'domain', url ), 'domain.com' );
    deepEqual( $.url( 'path', url ), '/path/index.html' );
    deepEqual( $.url( '?silly', url ), 'willy' );
    deepEqual( $.url( '#poo', url ), null );
  });
}

}());