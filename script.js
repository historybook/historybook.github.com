/*JAVASCRIPT*/
obrazky=Array();//aktuálne odkazy
last=null;//posledný- oznacenie
position=0;//posun *904
$(document).ready(function(){
pole=document.getElementsByTagName("section");
for (i=0;i<pole.length;i++)
{y=pole[i].onclick=function(event){if(this==window){x=pole[0]}else{x=this;}
subpole=x.getElementsByTagName("img");
document.getElementById("popis").innerHTML=x.getElementsByTagName("div")[0].innerHTML;
document.getElementById("avatar").src =subpole[0].src;obrazky=Array();
for(z=1;z<subpole.length;z++)
{
obrazky.push(subpole[z]);
}
if (subpole.length<2){document.getElementById("obrazok").src="http://historybook.github.com/missing.jpg";
				document.getElementById("1").style.display="none";
					document.getElementById("2").style.display="none";}
else if(subpole.length<3){
					document.getElementById("1").style.display="none";
					document.getElementById("2").style.display="none";
					document.getElementById("obrazok").src=obrazky[0].src;}
else{document.getElementById("1").style.display="block";
     document.getElementById("2").style.display="block";
	 document.getElementById("obrazok").src=obrazky[0].src;
	 document.getElementById("1").style.backgroundColor="rgba(0,0,0,0.7)";
	 document.getElementById("2").style.backgroundColor="rgba(255,255,255,0.7)";
	 }
if(last){last.style.backgroundColor="rgba(255,255,255,0.6)";
last.style.color="black";
last.style.boxShadow="0 0 10px rgba(0,0,0,1)";}
last=x;
x.style.backgroundColor="rgba(0,0,0,0.6)";
x.style.color="white";
x.style.boxShadow="0 0 10px rgba(255,255,255,1)";

}


}
y();
document.getElementById("1").onmouseover=function(){
document.getElementById("obrazok").src=obrazky[0].src;
document.getElementById("1").style.backgroundColor="rgba(0,0,0,0.7)";
	 document.getElementById("2").style.backgroundColor="rgba(255,255,255,0.7)";
}
document.getElementById("2").onmouseover=function(){
document.getElementById("obrazok").src=obrazky[1].src;
document.getElementById("2").style.backgroundColor="rgba(0,0,0,0.7)";
	 document.getElementById("1").style.backgroundColor="rgba(255,255,255,0.7)";
}

document.getElementById("right").onclick=document.getElementById("left").onclick=function(){
	var x =this==document.getElementById("right") ? "-":"+";
	if(x=="+" && position==0 ){document.getElementById("move").style.marginLeft="-2712px";position=3;}
	else if(x=="-" && position==3 ){document.getElementById("move").style.marginLeft="0px";position=0;}
	else if(x=="+"){position-=1;document.getElementById("move").style.marginLeft=(position*(-904))+"px";}
	else{position+=1;document.getElementById("move").style.marginLeft=(position*(-904))+"px";}}


});
