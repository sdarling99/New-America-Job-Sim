// Define the API URL
const apiUrl = "https://chroniclingamerica.loc.gov/search/titles/results/?format=json";
const apiUrlVA = "https://chroniclingamerica.loc.gov/search/titles/results/?terms=virginia&format=json";

jQuery(function ($) {
    $.ajax({
        url: apiUrl,
        dataType: "json",
        error: function () {
            console.log("JSON FAILED for data");
        },
        success: function (newsArticles) {
            var historyArticles = document.getElementById("historic-newspapers");

            newsArticles.items.forEach(function (element) {
                var startDate = element.start_year;
                var endDate = element.end_year;
                var title = "<h4 class='article-title'><span>" + element.title + "</span></h4>";
                var cleanTitle = title.replace(/\[.*?\]/g, "").trim();
                var pub = element.publisher ? "<div class='publisher'>" + element.publisher + "</div>" : "";
                var desc = "<div class='description'>" + element.note + "</div>";

                historyArticles.insertAdjacentHTML(
                    "beforeend",
                    "<a href='' class='article'>" +
                        "<div class='date'>" +
                        startDate +
                        " - " +
                        endDate +
                        "</div>" +
                        cleanTitle +
                        desc +
                        pub +
                        "</a>"
                );
            });
        },
    });

    $.ajax({
        url: apiUrlVA,
        dataType: "json",
        error: function () {
            console.log("JSON FAILED for data");
        },
        success: function (newsArticles) {
            var historyArticles = document.getElementById("historic-newspapers-va");

            newsArticles.items.forEach(function (element) {
                var startDate = element.start_year;
                var endDate = element.end_year;
                var title = "<h4 class='article-title'>" + element.title + "</h4>";
                var cleanTitle = title.replace(/\[.*?\]/g, "").trim();
                var pub = element.publisher ? "<div class='publisher'>" + element.publisher + "</div>" : "";
                var desc = "<div class='description'>" + element.note + "</div>";

                historyArticles.insertAdjacentHTML(
                    "beforeend",
                    "<a href='' class='article'>" +
                        "<div class='date'>" +
                        startDate +
                        " - " +
                        endDate +
                        "</div>" +
                        cleanTitle +
                        desc +
                        pub +
                        "</a>"
                );
            });
        },
    });
});
