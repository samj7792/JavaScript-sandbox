const http = new easyHTTP();

// Get Posts
http.get('https://jsonplaceholder.typicode.com/posts1', function (
  err,
  response
) {
  if (err) {
    console.log(err);
  } else {
    console.log(response);
  }
});
