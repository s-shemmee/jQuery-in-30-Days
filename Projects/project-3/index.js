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
            $listItems.append("<li><input type='checkbox'/>" + item + "<a class='remove'>x</a><hr></li>");
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
        $(this).parent().remove();
        localStorage.setItem("list-items", $listItems.html()); // Update local storage.
    });
});
