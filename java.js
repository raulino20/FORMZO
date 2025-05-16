Arr = []
function Submit(){

const NameID = document.getElementById("Nome").value
const BirthDayID = document.getElementById('DateAN').value
const CPFID = document.getElementById('CPF').value
const City = document.getElementById('Place').value
const Tel = document.getElementById('Tel').value
const Email = document.getElementById('EMAIL').value
const NSocio = document.getElementById('SocioID').value
const DateSocio = document.getElementById('DateTJ').value



const User = {
 nome:NameID,
 Birth:BirthDayID,
 cpf:CPFID,
 Cidade:City,
 TELE:Tel,
 EM:Email,
NumSocio:NSocio,
DSocio:DateSocio
}

const Resultado = `NOME COMPLETO : ' ${User.nome}
CPF :  ${User.cpf} 
Cidade/Bairro : ${User.Cidade}
Telefone : ${User.TELE}
Email : ${User.Email}
Numero de Sócio : ${User.NumSocio}
Data de Associação : ${User.DSocio}`

if(User.nome && User.cpf && User.TELE && User.Cidade && User.EM && User.NumSocio && User.DSocio !== ''){
   
   const Confirmar =  confirm(`Revise as informações : 

    Nome : ${User.nome}
    CPF : ${User.cpf}
    Bairro : ${User.Cidade}
    Telefone : ${User.TELE}
    Email : ${User.Email}
    NumSocio : ${User.NumSocio}
    Associação : ${User.DSocio}`)



  if(Confirmar === true){
    const Url = `https://wa.me/${5511965404572}?text=${Resultado}`
    window.open(Url, '_blank');
 }else{
    alert('envio cancelado.')
 }
}else{
    alert(`UM OU MAIS CAMPOS NÃO FORAM PREENCHIDOS.
                      TENTE NOVAMENTE `)
} 





}


//Use https://wa.me/<11965404572>
