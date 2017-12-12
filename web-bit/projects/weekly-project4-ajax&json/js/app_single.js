$(function () {
    const id = sessionStorage.getItem("id");
    const url = `http://api.tvmaze.com/shows/${id}?embed[]=cast&embed[]=seasons`;
    $.getJSON(url, object => {
        $(".title").text(object.name);
        $(".showTitle").text(object.name);
        $("#image").attr("src", object.image.original);
        $("#seasonsNum").append(object._embedded.seasons.length);
        const seasons = object._embedded.seasons;
        $.each(seasons, (index, season) => {
            $("#seasons").append(`<li>${season.premiereDate} - ${season.endDate}</li>`);
        });
        const cast = object._embedded.cast;
        $.each(cast, (index, actor) => {
            $("#cast").append(`<li>${actor.person.name}</li>`);
        });
        $("#summary").append(object.summary);
    });
});