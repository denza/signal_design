import $ from 'jquery';

(function(){

    let searchParams = new URLSearchParams(window.location.search)
    if (searchParams.has('limit')) {
        let value = searchParams.get('limit')
        $("#page_limit").val(value)
    }

    if (searchParams.has('sort')){
        let sortParam = searchParams.get('sort')
        let sort = sortParam.split(',')
        if (sort[0] != "") {
            sort.forEach(function (item){
                if (item.charAt(0)=="-"){
                    item = item.substring(1)
                    $("#"+item).removeClass().addClass("sort bi bi-chevron-up")
                    $("#"+item).attr('data-sort', 'desc')   
                } else {
                    $("#"+item).removeClass().addClass("sort bi bi-chevron-down")
                    $("#"+item).attr('data-sort', 'asc') 
                }
            })
        }
        
    }

    $(".delete_modal").on("click", function () { 
        let deleteModalID = $(this).attr("data-modal")
        cash("#"+deleteModalID).modal("show");
    });
})()