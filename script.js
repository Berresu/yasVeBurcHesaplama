document.getElementById("secimYasBulma").addEventListener("change", hesapla);
document.getElementById("secimBurcBulma").addEventListener("change", hesapla);
let i;

function sec(){
    let tarih=new Date();
    let dogumYili=tarih.getFullYear();
    let guncelYil=tarih.getFullYear();

    for(i=dogumYili;i>=1950;i--){
        let yil=document.createElement("option");
        document.getElementById("numberYil").appendChild(yil);
        yil.innerHTML=i;
        yil.value=i;
    }

    for(i=guncelYil;i>=1950;i--){
        let suYil=document.createElement("option");
        document.getElementById("numberGuncel").appendChild(suYil);
        suYil.innerHTML=i;
        suYil.value=i;
    }

    for(i=1;i<13;i++){
        let ay=document.createElement("option");
        document.getElementById("numberAy").appendChild(ay);
        ay.innerHTML=i;
        ay.value=i;
    }

    for(i=1;i<32;i++){
        let gun=document.createElement("option");
        document.getElementById("numberGun").appendChild(gun);
        gun.innerHTML=i;
        gun.value=i;
    }
}

function hesapla(){
    let dogulanYil=document.getElementById("numberYil").value;
    let yilimiz=document.getElementById("numberGuncel").value;

    if (document.getElementById("secimYasBulma").checked){
        document.getElementById("yas").style.display = "block";
        let sonuc=(yilimiz*1)-(dogulanYil*1);
        document.getElementById("sonuc").innerHTML="Seçtiğiniz Yıla Göre Yaşınız= "+sonuc;
    } 
    else{
        document.getElementById("secimYasBulma").style.display="none";
    } 
    if (document.getElementById("secimBurcBulma").checked){
        document.getElementById("burc").style.display="block";
        let secilenAy=document.getElementById("numberAy").value;
        if(secilenAy==1){
            document.getElementById("sonuc").innerText="Burcunuz Oğlak";
        }
        else if(secilenAy==2){
            document.getElementById("sonuc").innerText="Burcunuz Kova";
        }
        else if(secilenAy==3){
            document.getElementById("sonuc").innerHTML="Burcunuz Balık";
        }
        else if(secilenAy==4){
            document.getElementById("sonuc").innerHTML="Burcunuz Boğa";
        }
        else if(secilenAy==5){
            document.getElementById("sonuc").innerHTML="Burcunuz İkizler";
        }
        else if(secilenAy==6){
            document.getElementById("sonuc").innerHTML="Burcunuz Yengeç";
        }
        else if(secilenAy==7){
            document.getElementById("sonuc").innerHTML="Burcunuz Aslan";
        }
        else if(secilenAy==8){
            document.getElementById("sonuc").innerHTML="Burcunuz Başak";
        }
        else if(secilenAy==9){
            document.getElementById("sonuc").innerHTML="Burcunuz Terazi";
        }
        else if(secilenAy==10){
            document.getElementById("sonuc").innerHTML="Burcunuz Akrep";
        }
        else if(secilenAy==11){
            document.getElementById("sonuc").innerHTML="Burcunuz Yay";
        }
        else if(secilenAy==12){
            document.getElementById("sonuc").innerHTML="Burcunuz Oğlak";
        }
    } 
    else{
        document.getElementById("burc").style.display = "none";
    }
}