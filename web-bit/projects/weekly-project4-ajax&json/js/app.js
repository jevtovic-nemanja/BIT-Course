$(function () {
    const url = "http://api.tvmaze.com/shows";
    $.getJSON(url, array => {
        let items = [];
        for (let i = 0; i < 50; i++) {
            items[i] = array[i];
        }
        $.each(items, (index, value) => {
            const id = value.id;
            $("#main").append(`<div class=\"card\"><a data-show-id = \"${id}\" href=\"single.html\"><img class=\"card-img-top\" src=\"${value.image.medium}\"><div class=\"card-block\"><h3 class=\"card-title\">${value.name}</h3></div></a></div>`);
        })
    })
});