$(document).ready(function () {
    var $listItems = $("#list-items"); // Save reference to local storage object.

    if (localStorage.getItem("list-items")) {
        $listItems.html(localStorage.getItem("list-items")); // Check if anythig is in local storage.
    }

    // Adding items.
    $(".add").click(function (event) {
        event.preventDefault(); // Prevent default event.

        var item = $("#todo-list-item").val(); // Get item value.

        if (item) {
            // ********** CHALLENGE: ADD "DANCE" EASTER EGG **********
            if (item === "dance") {
                $listItems.append("<li><input type='checkbox'/><img src='http://i.giphy.com/qPZ64DDFAUQU0.gif'><a class='remove'>x</a><hr></li>");
            // **********
            } else {
                $listItems.append("<li><input type='checkbox'/>" + item + "<a class='remove'>x</a><hr></li>");
            }
            localStorage.setItem("list-items", $listItems.html()); // Update local storage.
            $("#todo-list-item").val("");
        }
    });

    // Completing Items.
    $(document).on("change", "input[type='checkbox']", function () {
        if ($(this).attr("checked")) { // Persist checkbox.
            $(this).removeAttr("checked");
        } else {
            $(this).attr("checked", "checked");
        }

        $(this).parent().toggleClass("completed"); // Strike-through task.
        localStorage.setItem("list-items", $listItems.html()); // Update local storage.
    });

    // Removing Items.
    $(document).on("click", ".remove", function (event) {
        event.preventDefault(); // Prevent default event.
        // ********** CHALLENGE: ADD ANIMATE TO ITEM REMOVAL **********
        var itemToremove = $(this).parent();
        itemToremove.fadeOut("slow", function() {
            itemToremove.remove();
        });
        // **********
        localStorage.setItem("list-items", $listItems.html()); // Update local storage.
    });
});
