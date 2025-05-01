var posts=["2025/04/29/hello-world/","2025/04/29/网络如何连接/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };