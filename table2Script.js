$(document).ready(function() {
    // Setup - add a text input to each footer cell
    $('#example tfoot th').each( function () {
        var title = $(this).text();
        $(this).html( '<input type="text" placeholder="Search '+title+'" />' );
    } );
 
    // DataTable
    var table = $('#example').DataTable({
        initComplete: function () {
            // Apply the search
            this.api().columns().every( function () {
                var that = this;
 
                $( 'input', this.footer() ).on( 'keyup change clear', function () {
                    if ( that.search() !== this.value ) {
                        that
                            .search( this.value )
                            .draw();
                    }
                } );
            } );
        }
    });
 
} );

$(function() {
    $("td[colspan=5]").find(".hidden").hide();
    $(".view").click(function(event) {
        event.stopPropagation();
        var $target = $(event.target);
        if ( $target.closest("tr").attr("colspan") > 1 ) {
            $target.closest("tr").prev().find(".hidden").slideUp();
            $([document.documentElement,document.body]).animate({
                scrollTop: $(".display").offset().top - 30
            }, 500);
        } else {
            $target.closest("tr").next().find(".hidden").fadeToggle();
            $([document.documentElement,document.body]).animate({
                scrollTop: $(this).offset().top - 15
            }, 500);
        }                    
    });
});