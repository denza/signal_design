import $ from 'jquery';

(function(){
    $(".column-header").on("click", function () { 
        let i = $(this).find("i")
        let type = i.attr("data-sort")
        if (type != "") {
            if (type == "asc") {
                i.removeClass().addClass("sort bi bi-chevron-up")
                i.attr("data-sort","desc")
            } else if (type == "desc") {
                i.removeClass().addClass("sort bi bi-chevron-expand")
                i.attr("data-sort","")
            }
        } else {
            i.removeClass().addClass("sort bi bi-chevron-down")
            i.attr("data-sort","asc")
        }

        let sortParam = ""
        let length = $(".sort").filter(function(i){
            return $(this).attr("data-sort") != "";
        }).length
        //select all columns that are to be sorted by, and the data-sort attribute describes asc/desc, 
        //column name in the database while the id of the element coresponds to the 
        $(".sort").filter(function(i){
            return $(this).attr("data-sort") != "";
        }).each(function(index){
            let type = $(this).attr("data-sort")
            let column
            if (type=="asc"){
                if (index == length-1){
                    column = $(this).attr("id")
                } else {
                    column = $(this).attr("id") + ","
                }
                sortParam += column
            } else if (type=="desc"){
                if (index == length-1){
                    column = "-" + $(this).attr("id")
                } else {
                    column = "-" + $(this).attr("id") + ","
                }
                sortParam += column
            } 
        })

        let searchParams = new URLSearchParams(window.location.search)
        searchParams.set("sort",sortParam)
        let url = window.location.protocol + "//" + window.location.host + window.location.pathname + '?' + searchParams.toString();
        
        $.ajax({
            type: "GET",
            dataType: "json",
            url: url,
        }).done(function(data){
            window.history.pushState('page2', 'Title', url);
            $("#list_body").empty()
            
            data.Models.forEach(function(model) {
                AppendListItem(model)
            })

        })

    });


    $("#page_limit").on( "change", function (){
        let searchParams = new URLSearchParams(window.location.search)
        searchParams.set("limit",$(this).val())
        let url = window.location.protocol + "//" + window.location.host + window.location.pathname + '?' + searchParams.toString();

        $.ajax({
            type: "GET",
            dataType: "json",
            url: url,
        }).done(function(data){
            window.history.pushState('page2', 'Title', url);
            $("#list_body").empty()
            
            data.Models.forEach(function(model) {
                AppendListItem(model)
            })
            PaginatorUpdate(data.Paginator)
        })
    })

    $(".pagination__link").on("click", function(){
        if ($(this).hasClass("pagination__link--active")){
            return
        }
        
        let searchParams = new URLSearchParams(window.location.search)
        searchParams.set("p",$(this).attr("data-page"))
        let url = window.location.protocol + "//" + window.location.host + window.location.pathname + '?' + searchParams.toString();
        
        $.ajax({
            type: "GET",
            dataType: "json",
            url: url,
        }).done(function(data){
            window.history.pushState('page2', 'Title', url);
            $("#list_body").empty()
            
            data.Models.forEach(function(model) {
                AppendListItem(model)
            })
            PaginatorUpdate(data.Paginator)
            
        })
    })

    $("#table_filter_form").on("submit", function(e){
        e.preventDefault();
        FilterSearch(false);
    });

    $("#table_filter_form").on("reset", function(e){
        $("#table_filter_value").text("")
        FilterSearch(true);
    });
    
})()

function AppendListItem(model){
    let list_item = $("#hidden_list_item").clone().removeClass("hidden").removeAttr("id").hide()
    Object.keys(model).forEach(function (key){
        /* check if the field is an object and than loop trough it's fields  */
        if (typeof model[key] === 'object' && model[key] !== null){
            let child = model[key]
            Object.keys(child).forEach(function (key){
                if (key.includes("Link")){
                    list_item.find("#" + key).attr("href", child[key])
                } else if (key.includes("img")){
                    list_item.find("#" + key).attr("src", child[key])
                } else if (key == "Id"){
                } else {
                    list_item.find("#" + key).text(child[key])
                }
            })
        } else {
            if (key.includes("Link")){
                list_item.find("#" + key).attr("href", model[key])
            } else if (key.includes("img")){
                list_item.find("#" + key).attr("src", model[key])
            } else if (key == "Id"){
                list_item.find("#" + key).text(model[key])
            } else {
                list_item.find("#" + key).text(model[key])
            }
        }
    })
    $("#list_body").append(list_item);
    $(list_item).fadeIn("slow");
}

function PaginatorUpdate(paginator){
    $(".pagination__link--active").text(paginator.CurrentPage)
    $(".paginator").hide();
    if (paginator.HasPrev) {
        
        $("#previous_page").attr("data-page", paginator.PreviousPage)
        $("#previous_page_number").attr("data-page", paginator.PreviousPage).text(paginator.PreviousPage)
        $("#first_page").attr("data-page", paginator.FirstPage)
        $(".prev_pagination").removeClass("hidden")
    } else {
        $(".prev_pagination").addClass("hidden")
    }

    if (paginator.HasNext) {
        
        $("#next_page").attr("data-page", paginator.NextPage)
        $("#next_page_number").attr("data-page", paginator.NextPage).text(paginator.NextPage)
        $("#last_page").attr("data-page", paginator.LastPage)
        $(".next_pagination").removeClass("hidden")
    } else {
        $(".next_pagination").addClass("hidden")
    }

    $(".paginator").fadeIn(300);
}

function NoResult(){
    noResult = '<div class="pristine-error text-primary-3 mt-2 intro-y"> No results for given filter </div>'
    $("#list_body").append(noResult)
}

function FilterSearch(isReset){
    let column = $("#table_filter_column").val()
    let filterType = $("#table_filter_type").val()
    let filterValue
    if (!isReset){
        filterValue = $("#table_filter_value").val()
    } else {
        filterValue = ""
    }
    
    let url
    if (filterValue != ""){
        let filterParam = column + "__" + filterType + "::" + filterValue
        
        let searchParams = new URLSearchParams(window.location.search)
        searchParams.set("filter",filterParam)
        url = window.location.protocol + "//" + window.location.host + window.location.pathname + '?' + searchParams.toString()
        
    } else {          
        let searchParams = new URLSearchParams(window.location.search)
        searchParams.delete("filter")
        url = window.location.protocol + "//" + window.location.host + window.location.pathname + '?' + searchParams.toString()
    }
    $.ajax({
        type: "GET",
        dataType: "json",
        url: url,
    }).done(function(data){
        window.history.pushState('page2', 'Title', url);
        $("#list_body").empty()
        
        if (data.Models){
            data.Models.forEach(function(model) {
                AppendListItem(model)
            })
            PaginatorUpdate(data.Paginator)
        } else {
            NoResult()
            PaginatorUpdate(data.Paginator)
        }
        
    })
}