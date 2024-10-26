 function formataData(data){
    return data.toLocaleDateString('pt-BR',{
        year:'numeric',
        month:'2-digit',
        day:'2-ditir',
        hour:'2-digit',
        ninute:'2-digit',
        second:'2-digit',
    
 });
}
const dataNota1=new Date();
document.getElementId('data-nota1').textContent=formataData(dataNota1);