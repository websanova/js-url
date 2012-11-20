(function() {

var url = 'http://rob:abcd1234@www.domain.com/path/index.html?query1=test&silly=willy#test=hash&chucky=cheese';

module('js-url');

test('url', function() {
  equal( window.url( ), window.location.href );
});

test('domain', function() {
  equal( window.url( 'domain', url ), 'domain.com' );
});

test('hostname', function() {
  equal( window.url( 'hostname', url ), 'www.domain.com' );
});

test('tld', function() {
  equal( window.url( 'tld', url ), 'com' );
});

test('sub', function() {
  equal( window.url( 'sub', url ), 'www' );
});

test('domain parts', function() {
  equal( window.url( '.0', url ), '' );
  equal( window.url( '.1', url ), 'www' );
  equal( window.url( '.2', url ), 'domain' );
  equal( window.url( '.-1', url ), 'com' );
});

test('auth', function() {
  equal( window.url( 'auth', url ), 'rob:abcd1234' );
});

test('user', function() {
  equal( window.url( 'user', url ), 'rob' );
});

test('pass', function() {
  equal( window.url( 'pass', url ), 'abcd1234' );
});

test('port', function() {
  equal( window.url( 'port', url ), 80 );
});

test('protocol', function() {
  equal( window.url( 'protocol', url ), 'http' );
});

test('path', function() {
  equal( window.url( 'path', url ), '/path/index.html' );
});

test('file', function() {
  equal( window.url( 'file', url ), 'index.html' );
  equal( window.url( 'filename', url ), 'index' );
  equal( window.url( 'fileext', url ), 'html' );
});

test('url parts', function() {
  equal( window.url( '1', url ), 'path' );
  equal( window.url( 1, url ), 'path' );

  equal( window.url( '2', url ), 'index.html' );
  equal( window.url( '3', url ), '' );
  equal( window.url( '-1', url ), 'index.html' );
});

test('query string', function() {
  equal( window.url( '?', url ), 'query1=test&silly=willy' );
  equal( window.url( '?silly', url ), 'willy' );
  equal( window.url( '?poo', url ), '' );
});

test('url fragment', function() {
  equal( window.url( '#', url ), 'test=hash&chucky=cheese' );
  equal( window.url( '#chucky', url ), 'cheese' );
  equal( window.url( '#poo', url ), '' );
});

}());