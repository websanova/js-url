(function() {

var url = 'http://rob:abcd1234@www.domain.com/path/index.html?query1=test&silly=willy#test=hash&chucky=cheese';

test('jQuery', function() {
  equal( $.url( 'domain', url ), 'domain.com' );
  equal( $.url( 'path', url ), '/path/index.html' );
  equal( $.url( '?silly', url ), 'willy' );
  equal( $.url( '#poo', url ), null );
});

}());