$(document).ready(function() {
    var apartmentArray = [];

    $.ajax({
        url: "https://api.myjson.com/bins/2sadq?pretty=1",
        dataType: "json",
        success: function(response) {
            $.each( response.apartments, function(i, apartment) {
                var apartmentClass = apartment.city.toLowerCase().replace(" ", "-");

                apartmentArray.push(
                    "<a href='#' id=" + apartment.id + " class='list-group-item listings " + apartmentClass + "'><h4 class='list-group-item-heading'>" +
                    apartment.description + "/" + apartment.bedrooms + "/" + apartment.price +
                    "</h4><p class='list-group-item-text'>" + apartment.neighborhood + "</p></a>"
                );
            });

            $(".apartments").append(apartmentArray);
        }
    });

    $(".filter").click(function() {
        $(".filter").removeClass("active");
        $(this).addClass("active");

        $(".listings").show();

        var city = $(this).attr("id");

        if (city !== "all") {
            $(".listings").not("." + city).css("display", "none");
        }
    });

    $(document).on("click", ".listings", function () {
        var id = $(this).attr("id");
        $.ajax({
            url: "https://api.myjson.com/bins/2sadq?pretty=1",
            dataType: "json",
            success: function(response) {
                var selectedApartment = $.grep(response.apartments, function(apartment) {
                    return apartment.id == id;
                });

                var address = selectedApartment[0].address;

                window.open("http://maps.google.com/?q=" + address);
            }
        });
    });
});

