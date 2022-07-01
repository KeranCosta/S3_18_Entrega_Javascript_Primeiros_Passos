let produto1= "Refrigerante"; 
let quantidade1= parseInt(prompt("Digite a quantidade de Refrigerante")); 
let preco1= parseFloat(prompt("Digite o preço do Refrigerante")) ;

let produto2="Macarrão"; 
let quantidade2= parseInt(prompt("Digite a quantidade de Macarrão"));
let preco2=parseFloat(prompt("Digite o preço do Macarrão ")) ;

let produto3="Ervilha"; 
let quantidade3= parseInt(prompt("Digite a quantidade de Ervilha"));
let preco3=	parseFloat(prompt("Digite o preço do Ervilha ")) ;

let produto4="Arroz";
let quantidade4=  parseInt(prompt("Digite a quantidade de Arroz"));
let preco4=	parseFloat(prompt("Digite o preço do Arroz")) ;

let produto5="Feijão"; 
let quantidade5=  parseInt(prompt("Digite a quantidade de Feijão"));
let preco5=	parseFloat(prompt("Digite o preço do Feijão")) ;

let produto6="Vinho";
let quantidade6=  parseInt(prompt("Digite a quantidade de Vinho"));
const  preco6= 70.00

t1 = quantidade1*preco1;
t2 = quantidade2*preco2;
t3 = quantidade3*preco3;
t4 = quantidade4*preco4;
t5 = quantidade5*preco5;
t6 = quantidade6*preco6;

total = t1+t2+t3+t4+t5+t6;



if (total%2 == 1) {
    alert(`O total dos itens é de: R$ ${total} cada um pagará o valor de: R$ ${total/2}`);

} else {
    seuValor= (total-(t6))/2;
    amigo= ((total-(t6))/2)+t6;
    
    alert (`O total dos itens é de: R$ ${total} ; meu valor é de: R$ ${seuValor} , já meu amigo vai pagar: R$ ${amigo} `);
}

