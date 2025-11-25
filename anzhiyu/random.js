var posts=["2025/11/24/hello-world/","2025/11/25/test/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };