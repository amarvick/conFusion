$(document).ready(function() {
    $('#loginModalLink').click(function() {
        $('#loginModal').modal('show');
    });

    $('.loginModalClose').click(function() {
        $('#loginModal').modal('hide');
    });

    $('#reserveModalLink').click(function() {
        $('#reserveModal').modal('show');
    });

    $('.reserveModalClose').click(function() {
        $('#reserveModal').modal('hide');
    });

    $("#nonSmoking").click(function() {
        $(this).addClass('active');
        $("#smoking").removeClass('active');
    });

    $("#smoking").click(function() {
        $(this).addClass('active');
        $("#nonSmoking").removeClass('active');
    });

    $("#carousel-button").click(function(){
        if ($("#carousel-button").children("span").hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');
            $("#carousel-button").children("span").removeClass('fa-pause');
            $("#carousel-button").children("span").addClass('fa-play');
        }
        else if ($("#carousel-button").children("span").hasClass('fa-play')){
            $("#mycarousel").carousel('cycle');
            $("#carousel-button").children("span").removeClass('fa-play');
            $("#carousel-button").children("span").addClass('fa-pause');                    
        }
    });
});