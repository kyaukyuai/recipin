var url = "https://app.rakuten.co.jp/services/api/Recipe/CategoryRanking/20121121?format=json&applicationId=bfc5bca21a7bac85a197a29ebeab80dd";
$(function() {
        $.ajax(url, {
                crossDomain: true,
                dataType: "jsonp",
                success: function(json) {
                        $('#image1').attr('src', json.result[0].mediumImageUrl);
                        $('#image2').attr('src', json.result[1].mediumImageUrl);
                        $('#image3').attr('src', json.result[2].mediumImageUrl);
                        $('#link1').attr('href', json.result[0].recipeUrl);
                        $('#link2').attr('href', json.result[1].recipeUrl);
                        $('#link3').attr('href', json.result[2].recipeUrl);
                }
        });
});
