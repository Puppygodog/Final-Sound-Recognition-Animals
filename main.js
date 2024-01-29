function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Votj3sf42/model.json', modelReady);
}
function modelReady()
{
    classifier.classify(gotResults);
}

var dog = 0;
var cat = 0;

function gotResults(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        random_number_r = Math.floor(Math.random()*255) +1;
        random_number_g = Math.floor(Math.random()*255) +1;
        random_number_b = Math.floor(Math.random()*255) +1;

        document.getElementById("result_label").innerHTML = 'I can hear - '+results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - '+(results[0].confidence *100).toFixed(2)+"%";
        document.getElementById("result_count").innerHTML = 'Detected Dog - '+dog+ ' Detected Cat - '+cat;
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
        document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

        img=document.getElementById('dog');
        img1=document.getElementById('cat');
        img2=document.getElementById('lion');
        img3=document.getElementById('cow');
        
        if (results[0].label == "Barking"){
            img.src='doggif.gif';
            img1.src='cat.webp';
            img2.src='lion.webp';
            img3.src='cow.png';
            dog = dog+1;
        }   else if(results[0].label == "Meowing"){
            img.src='dog.webp';
            img1.src='catgif.gif';
            img2.src='lion.webp';
            img3.src='cow.png';
            cat = cat+1;
        }   else if(results[0].label == "Roaring"){
            img.src='dog.webp';
            img1.src='cat.webp';
            img2.src='liongif.gif';
            img3.src='cow.png';
        }   else{
            img.src='dog.webp';
            img1.src='cat.webp';
            img2.src='lion.webp';
            img3.src='cowgif.gif';
        } 
    }
}