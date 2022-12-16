document.addEventListener('DOMContentLoaded', function() {

    // highlighting the current tab

    let tabs = document.getElementsByClassName("subnavtab");
    let title = document.getElementsByClassName("subnavtitle");

    for (let i = 0; i < tabs.length; i++) {

        if (tabs.item(i).getAttribute("href").split("/").pop() === window.location.pathname.split("/").pop()) {
            tabs.item(i).style["text-decoration-color"] = "rgba(0,0,0,1)";
        }

        /*tabs.item(i).addEventListener("mouseover", (e) => {
            e.target.style["text-decoration"] = "underline";
        });
        tabs.item(i).addEventListener("mouseout", (e) => {
            e.target.style["text-decoration"] = "none";
        });*/
    }

    if (title.item(0).getAttribute("href").split("/").pop() === window.location.pathname.split("/").pop()) {
        title.item(0).style["text-decoration-color"] = "rgba(0,0,0,1)";
    }
}, false);
