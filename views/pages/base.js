
tabuleiro="<table align=center border=1>";
for(x=0;x<10;x++){
    tabuleiro+="<tr>";
    for(y=0;y<10;y++)
        tabuleiro+="<td id=td"+x+"_"+y+" style='width:40px; height:40px;'> </td>";
    tabuleiro+="</tr>";
}
document.getElementById('principal').innerHTML=tabuleiro+"</table>";
cobra=[[5,0]];
direcao=2;
mx=parseInt(Math.random()*10);
my=parseInt(Math.random()*10);
vivo=true;
let pontuacao = 0
function anda(){
    document.getElementById('td'+cobra[cobra.length-1][0]+'_'+cobra[cobra.length-1][1]).style.background="rgb(220, 231, 165)";
    if(mx==cobra[cobra.length-1][0]&&my==cobra[cobra.length-1][1]){
        mx=parseInt(Math.random()*10);
        my=parseInt(Math.random()*10);
        cobra[cobra.length]=[10,10];
        pontuacao =  pontuacao + 10;
        document.getElementById("pontuacao");
    }
    
    for(x=cobra.length-1;x>0;x--){
        cobra[x][0]=cobra[x-1][0];
        cobra[x][1]=cobra[x-1][1];
    }
    if(direcao==0)cobra[0][1]--;
    if(direcao==1)cobra[0][0]--;
    if(direcao==2)cobra[0][1]++;
    if(direcao==3)cobra[0][0]++;
    for(x=1;x<cobra.length;x++)if(cobra[0][0]==cobra[x][0]&&cobra[0][1]==cobra[x][1])vivo=false;
    if(cobra[0][0]<0||cobra[0][1]<0||cobra[0][0]>9||cobra[0][1]>9)vivo=false;
    document.getElementById('td'+cobra[0][0]+'_'+cobra[0][1]).style.background="rgb(25, 180, 59)";
    document.getElementById('td'+mx+'_'+my).style.background="#ff3333";
    if(vivo)setTimeout('anda()',300);
    else alert('Fim de jogo! Sua pontuação foi ' + pontuacao);
}
anda();
function pegadirecao(tecla){
    /*alert(tecla);*/
    if(tecla==37)direcao=0;
    if(tecla==38)direcao=1;
    if(tecla==39)direcao=2;
    if(tecla==40)direcao=3;
}