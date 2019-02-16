$('.dropButton').click(function(event){
    var elem = $(event.target).closest('div').find('.dropContent');
    elem.fadeToggle('slow');
});