import $ from 'jquery';

(function(){
    $("#form").on("submit", function(e) {

        e.preventDefault(); // avoid to execute the actual submit of the form.
    
        let form = $(this);
        let url = window.location.href
        
        $.ajax({
               type: "POST",
               url: url,
               data: form.serialize(), // serializes the form's elements.
        }).done(function (formErrors){
            if (formErrors.redirectUrl) {
                window.location.pathname = formErrors.redirectUrl
            }

            $(".error").remove()
            Object.keys(formErrors).forEach(function (input){
                let formError = '<span class="error inline-flex text-sm text-red" style="display: none;">'+ formErrors[input] +'</span>'
                $("#"+input).closest("div").append(formError)
                $(".error").fadeIn("slow")
            })
        })
    });
})()