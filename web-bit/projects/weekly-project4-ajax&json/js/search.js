$(function () {
    $(document).on("keyup input change", "#search", function () {
        $(".searchList").html("");
        const $this = $(this);
        setTimeout(() => {
            const search = $this.val();
            if (!search) {
                $(".searchList").html("");
                return;
            }
            const searchUrl = `http://api.tvmaze.com/search/shows?q=${search}`;
            $.getJSON(searchUrl, array => {
                let items = [];
                if (array.length < 10) {
                    for (let i = 0; i < array.length; i++) {
                        items[i] = array[i];
                    }
                } else {
                    for (let i = 0; i < 10; i++) {
                        items[i] = array[i];
                    }
                }
                $.each(items, (index, value) => {
                    const id = value.show.id;
                    $(".searchList").append(`<li><a data-show-id=\"${id}\" href=\"single.html\">${value.show.name}</a></li>`);
                });
            });
        }, 0)
    })

    //data-show-id: data prefix means it is a custom attribute

    $(document).on("click", "a", function (event) {
        const id = $(this).attr("data-show-id");
        sessionStorage.setItem("id", id);
    });
});