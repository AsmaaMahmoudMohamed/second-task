



function randomText () {
    var author = [
        "--Oscar Wilde ",
        "--Marilyn Monroe ",
        "--Frank Zappa ",
        "--Albert Einstein ",
        "--Dr. Seuss ",
      ];
      
      var quote = [
        " ''So many books, so little time''. ",
        " ''Two things are infinite: the universe and human stupidity'' ",
        "''A room without books is like a body without a soul.''",
        "''Be who you are and say what you feel, because those .''",
        "''You know yout fall asleep because reality is finally better than your dreams.''",
      ];
      
      
      var num = Math.floor(Math.random()* author.length);
     
      

document.getElementById("click_random").innerHTML=   quote[num] + "      " + author[num ] ;


};








