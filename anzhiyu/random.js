var posts=["2025/04/29/hello-world/","2025/05/06/搭建可访问的博客（搭建图床-搭建框架）的详细（啰嗦）步骤/","2025/04/29/网络如何连接/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };