$(document).ready(function(){
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

            $("div").removeClass("has-error")
            $("div.pristine-error").remove()
            Object.keys(formErrors).forEach(function (input){
                formError = '<div class="pristine-error text-primary-3 mt-2 intro-y">'+ formErrors[input] +'</div>'
                $("#"+input).closest("div").addClass("has-error").append(formError)
            })
        })
    });
})