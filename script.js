/*JAVASCRIPT*/
obrazky=array();//aktuálne odkazy
last=null;//posledný- oznacenie
$.ready=function(){
pole=document.getElementsByTagName("section");
for (i=0;i<pole.length;i++)
{y=pole[i].onclick=function(){
subpole=this.getElementsByTagName("img");
document.getElementBzId("popis").innerHTML=this.getElementsByTagName("div")[0].innerHTML;
document.getElementBzId("avatar").src =subpole[0].src;
for(i=1;i<subpole.length;i++)
{obrazky=array();
obrazky.push(subpole[i]);
}
if (subpole<2){document.getElementById("obrazok").src="http://historybook.github.com/bez.png"}
elseif(subpole<3){document.getElementById("1").style.display="none";document.getElementById("2").style.display="none";document.getElementById("obrazok").src=obrazky[1];}
else{document.getElementById("1").style.display="block";
     document.getElementById("2").style.display="block";
   document.getElementById("obrazok").src=obrazky[0];
	 document.getElementById("1").style.backgroundColor="rgba(0,0,0,0.7)";
	 document.getElementById("2").style.backgroundColor="rgba(255,255,255,0.7)"
	 }
this.style.backgroundColor="rgba(0,0,0,0.6)";
this.style.color="white";
this.style.boxShadow="0 0 10px rgba(255,255,255,1)";
if(last){this.style.backgroundColor="rgba(0,0,0,0.6)";
this.style.color="black";
this.style.boxShadow="0 0 10px rgba(0,0,0,1)";}
last=this;
}
y(pole[0]);

}




}
