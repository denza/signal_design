import $ from 'jquery';

(function(){
    $("#login_form").on("submit", function(e) {

        e.preventDefault(); // avoid to execute the actual submit of the form.
    
        let form = $(this);
        let url = window.location.href
        
        $.ajax({
               type: "POST",
               url: url,
               data: form.serialize(), // serializes the form's elements.
        }).done(function (data){
            if (data.redirectUrl) {
                $("#error").addClass("hidden")
                window.location.pathname = data.redirectUrl
            } else {
                $("#error").removeClass("hidden")
            }
        })
    });
})()
