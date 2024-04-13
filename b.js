Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
  });
  
  camera = document.getElementById("camera");
  
  Webcam.attach('#camera');
  
      
  function juk()
  {
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
  }
  
  console.log('ml5 version:', ml5.version);
  
  classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/10Qq00YiH/model.json',cuyo);
  function cuyo(){
    console.log("te faltan cosas para entrar a la guerra") ;
  }
  function huh() {
    i=document.getElementById("captured_image");
    classifier.classify(i, e)
  }
  function e(error, result) {
    if (error) {
        console.log(erorr);
    } else {
        console.log(result);
        document.getElementById("m").innerHTML=result[0].label;
        document.getElementById("g").innerHTML=result[0].confidence 
    }
  }
  