$(document).ready(function(){
    $(".delete_modal").on("click", function () { 
        let deleteModalID = $(this).attr("data-modal")
        cash("#"+deleteModalID).modal("show");
    });
})