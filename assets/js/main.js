$( document ).ready(function() {
    console.log( "ready!" );

    $('.carousel').carousel()
    $('.carousel').carousel({
        interval: 1,
    })
    $('#carousel').on('slid.bs.carousel', function () {
        console.log($(this).find('.active .container'))
        $(this).find('.active .container').show()
        $(this).find('.active .container').animate({
            width: "100%",
            opacity: 1,
            fontSize: "1em",
            borderWidth: "10px"
        }, 100 );
    })

    function includeHTML() {
        var z, i, elmnt, file, xhttp;
        z = document.getElementsByTagName("*");
        for (i = 0; i < z.length; i++) {
            elmnt = z[i];
            file = elmnt.getAttribute("include-html");
            if (file) {
                xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function() {
                    if (this.readyState == 4) {
                        if (this.status == 200) {elmnt.innerHTML = this.responseText;}
                        if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
                        /* Remove the attribute, and call this function once more: */
                        elmnt.removeAttribute("include-html");
                        includeHTML();
                    }
                }
                xhttp.open("GET", file, true);
                xhttp.send();
                return;
            }
        }
    }
    includeHTML();
});

