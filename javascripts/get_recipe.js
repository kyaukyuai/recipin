var url = "https://app.rakuten.co.jp/services/api/Recipe/CategoryRanking/20121121?format=json&applicationId=bfc5bca21a7bac85a197a29ebeab80dd";
$(function() {
        $.ajax(url, {
                crossDomain: true,
                dataType: "jsonp",
                success: function(json) {
                        for( var i=0; i<3; i++) {
                                if(i==0) {
                                        $('#recipes').append("<tr class='success'><td><a href=" + json.result[i].recipeUrl + " target='_blank'><img src=" + json.result[i].mediumImageUrl + "></td></tr>");
                                } else if(i==1) {
                                        $('#recipes').append("<tr class='warning'><td><a href=" + json.result[i].recipeUrl + " target='_blank'><img src=" + json.result[i].mediumImageUrl + "></td></tr>");
                                } else if(i==2) {
                                        $('#recipes').append("<tr class='danger'><td><a href=" + json.result[i].recipeUrl + " target='_blank'><img src=" + json.result[i].mediumImageUrl + "></td></tr>");
                                }
                        }
                }
        });
});
