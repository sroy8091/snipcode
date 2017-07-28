$(document).ready(function () {
    $('#searchForm').submit(function (event) {
        event.preventDefault();
        var searchText = $('#searchText').val();
        // console.log(searchText);
        $("#results").empty();
        $.ajax({
            url: "/search",
            data: JSON.stringify(
                {key: searchText}
            ),
            type: 'POST',
            headers: {'Content-Type': 'application/json'},
            success: function (data) {
                console.log(data[1][5]);
                if(data.length===1)
                    $("#results").append('<li><a><h3 class="title ">No Results Found</h3></a><p class="text">Try Another keyword</p></li>');
                else {
                    var obj = data;
                    for (var i = 1; i < obj.length; i++) {
                        $("#results").append('<a target="_blank" href="/searchroute/' + obj[i][0] + '">' +
                            '<li><h3 class="title">' + obj[i][1] +
                            '</h3></a><p class="text">in ' + obj[i][3] + ' by <a href="/profile/'+ obj[i][6] +
                            '"><i>' + obj[i][5] + '</i></a></p></li>');
                    }
                }
            }
        });
    })
});