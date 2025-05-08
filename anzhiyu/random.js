var posts=["2025/04/29/hello-world/","2025/05/08/搭建博客的教程（一）图床/","2025/05/08/搭建博客的教程（二）框架-主题/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };