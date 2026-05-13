const userLname= document.querySelector("#lastname");
const userName = document.querySelector("#nameee");
const apportunity = document.querySelector("#checkbox");
const button  = document.querySelector("#button");
const form  = document.querySelector("#gestsForm");
const message  = document.querySelector("#message");


button.addEventListener('click', async (e) => {
  e.preventDefault(); // Чтобы страница не перезагружалас
 
    button.disabled = true;
    button.innerText = "Жіберу";
    
    // Показываем блок с сообщением и ставим нейтральный статус
    message.style.display = "block";
    message.innerText = "Күте тұрыңыз, біз сізді тіркеп жатырмыз...";
    message.style.color = "#333";
 
 
 
  const info ={ 
    name:userName.value.toString(),
    lastName:userLname.value.toString(),
    apportunity:apportunity.checked
  }
 console.log(info)

try {
 // Отправляем данные на твой сервер
const response = await fetch('https://priglasitelnyi-project.onrender.com/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ info: info }) // Cервер ждет объект с полем info
  });



  const result = await response.json();
//   while(result==undefined,()=>{list.innerHTML= "loding..."}) 

  
   if (response.ok) {
    message.style.display = 'block';
    message.innerText = `Толтырғаныңыз үшін рахмет! Ciздiң ID: ${result.id}`;
    setTimeout(()=>{form.reset();},2000)
   // form.reset();
}
 } catch (error) {
    console.error('Қате:', error);
    message.innerText = 'Жіберу қатесі';
 }})