import $ from 'jquery';
window.$ = window.jQuery = $;

$(document).ready(function(){
    var activeTab = $("#active_tab").text()
    $(("#" + activeTab)).addClass("side-menu--active")
})