$(document).ready(function(){
    /* affix the navbar after scroll below header */
    $(".parks").affix({offset: {top: $("header").outerHeight(true)} });	
});