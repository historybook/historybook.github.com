/*JAVASCRIPT*/
obrazky=Array();//aktuálne odkazy
last=null;//posledný- oznacenie
$(document).ready(function(){
pole=document.getElementsByTagName("section");
for (i=0;i<pole.length;i++)
{y=pole[i].onclick=function(event){if(this==window){x=pole[0]}else{x=this;}
subpole=x.getElementsByTagName("img");
document.getElementById("popis").innerHTML=x.getElementsByTagName("div")[0].innerHTML;
document.getElementById("avatar").src =subpole[0].src;
for(y=1;y<subpole.length;y++)
{obrazky=Array();
obrazky.push(subpole[i]);
}
if (subpole<2){document.getElementById("obrazok").src="http://historybook.github.com/bez.png";
				document.getElementById("1").style.display="none";
					document.getElementById("2").style.display="none";}
else if(subpole<3){
					document.getElementById("1").style.display="none";
					document.getElementById("2").style.display="none";
					document.getElementById("obrazok").src=obrazky[1];}
else{document.getElementById("1").style.display="block";
     document.getElementById("2").style.display="block";
	 document.getElementById("obrazok").src=obrazky[0];
	 document.getElementById("1").style.backgroundColor="rgba(0,0,0,0.7)";
	 document.getElementById("2").style.backgroundColor="rgba(255,255,255,0.7)";
	 }

x.style.backgroundColor="rgba(0,0,0,0.6)";
x.style.color="white";
x.style.boxShadow="0 0 10px rgba(255,255,255,1)";
if(last){last.style.backgroundColor="rgba(0,0,0,0.6)";
last.style.color="black";
last.style.boxShadow="0 0 10px rgba(0,0,0,1)";}
last=x;
}
y();

}
document.getElementById("1").onmouseover=function(){
document.getElementById("obrazok").src=obrazky[0];
document.getElementById("1").style.backgroundColor="rgba(0,0,0,0.7)";
	 document.getElementById("2").style.backgroundColor="rgba(255,255,255,0.7)";
}
document.getElementById("2").onmouseover=function(){
document.getElementById("obrazok").src=obrazky[1];
document.getElementById("2").style.backgroundColor="rgba(0,0,0,0.7)";
	 document.getElementById("1").style.backgroundColor="rgba(255,255,255,0.7)";
}

document.getElementById("right").onclick=document.getElementById("left").onclick=function(){
	var x =this==document.getElementById("right") ? "-":"+";
	position=parseInt(document.getElementById("move").style.marginLeft);
	if(x=="+" && position==0 ){document.getElementById("move").style.marginLeft="-2712px";}
	else if(x=="-" && position==-2712 ){document.getElementById("move").style.marginLeft="0px";}
	else if(x=="+"){document.getElementById("move").style.marginLeft=(position+904)+"px";}
	else{document.getElementById("move").style.marginLeft=(position-904)+"px";}}


});
