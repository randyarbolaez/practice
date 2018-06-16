// $('body').hide();

var numberOfItems = $('#loop .list-group').length;
var limitPerPage = 4;
var totalPages = Math.round(numberOfItems / limitPerPage);

// alert(totalPages);

$('#loop .list-group:gt(' + (limitPerPage - 1) + ')').hide();

$('.pagination').append(
  "<li class='current-page active'><a href='javascript:void(0)'>" +
    1 +
    '</a></li>'
);

for (var i = 2; i <= totalPages; i++) {
  $('.pagination').append(
    "<li class='current-page'><a href='javascript:void(0)'>" + i + '</a></li>'
  );
}

$('.pagination li.current-page ').on('click', function() {
  // var currentPage = $(this).index();
  // alert(currentPage);

  if ($(this).hasClass('active')) {
    return false;
  } else {
    var currentPage = $(this).index();
    $('.pagination li').removeClass('active');
    $(this).addClass('active');
    $('#loop .list-group').hide();

    var grandTotal = limitPerPage * currentPage;

    for (var i = grandTotal - limitPerPage; i < grandTotal; i++) {
      $('#loop .list-group:eq(' + i + ')').show();
    }
  }
});
