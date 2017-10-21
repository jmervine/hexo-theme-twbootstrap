$(window).load(function() {
    $('img.caption').captionjs();

    $('img').each(function(){
    	var $this = $(this);
    	$this.wrap('<a href="' + $this.attr('src') + '"></a>');
	});
});

;(function( $ ) {
    $(function() {
        $( '[data-js="google-search-form"]' ).on( 'submit', function( e ) {
            e.preventDefault();
            var inputVal = $( '[data-js="google-search-input"]' ).val();
            window.location.href = $( this ).attr( 'data-action' ) + ' ' + inputVal;
        });
    });
})( jQuery );