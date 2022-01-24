import $ from 'jquery';
$(document).ready(function(){
    let activeTab = $("#active_tab").text()
    if (activeTab != ""){
        $(("#" + activeTab)).addClass("nav_item--active")
    }
})