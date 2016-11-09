
var App = {
  init: function(){
    $(".hue-monitor").draggable();

    $(".hue-monitor").resizable({
      handles: "n, e, s, w, ne, se, sw, nw "
    });
    App.loop();
  },

  loop: function(){
    if(typeof snapPhoto == "function"){
      snapPhoto();
      App.samplePhoto();
    }
    requestAnimationFrame(App.loop);




  },

  drawSample: function(){


            var hueMon = $(".hue-monitor");
        $("#canvas-sample").attr({
          "width":hueMon.width(),
          "height": hueMon.height()
        });
        var ctx = $("#canvas-sample")[0].getContext("2d");

        ctx.drawImage( $("#rider-camera-film")[0], -hueMon.position().left, -hueMon.position().top);


  },

  samplePhoto: function(){
    var hueMon = $(".hue-monitor");
    var ctx = $("#rider-camera-film")[0].getContext("2d");

    var data = ctx.getImageData(hueMon.position().left, hueMon.position().top, hueMon.width(), hueMon.height()).data;
    var r = 0;
    var g = 0;
    var b = 0;
    var pxCount = data.length / 4;
    for(var i = 0; i < data.length; ){
      r+=data[i];
      g+=data[i+1];
      b+=data[i+2];
      i+=4;
    }
    r/=pxCount;
    g/=pxCount;
    b/=pxCount;

    var color =  {r:Math.round(r), g:Math.round(g), b:Math.round(b)};

        App.drawSample();

    $(".sampled-hue").css({
      "width": hueMon.width(),
      "height":hueMon.height(),
      "background":"rgb(" + color.r + "," + color.g + "," + color.b + ")",
      "top": hueMon.height()
    });

    $("#hue-value").html("&nbsp;&nbsp;&nbsp;rgb(" + color.r + "," + color.g + "," + color.b + ")").css({
      "top": hueMon.height()*2 + 10
    });


    return color;
  }




};
