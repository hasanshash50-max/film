let name = document.getElementById('name');
let number = document.getElementById('number');
let email = document.getElementById('email');
let password = document.getElementById('password');
let name2 = document.getElementById('name2');
let select = document.getElementById('select');
let send = document.getElementById('send');
let reset = document.getElementById('reset');

send.onclick = function()
{
    let array1 = ['Name' , 'Number' , 'Email' , 'Password' , 
    'Number' , 'University'
     ]
    let array2 = [name.value , number.value , email.value , password.value
        , name2.value , select.value
    ] 
    if(name.value && number.value && email.value && password.value 
        && name2.value && select.value )
    {
          for(let i=0 ; i<array1.length ; i++)
          {
              console.log('The ' + array1[i] + ' is : ' + array2[i])
              name.value = '';
              number.value = '';
              email.value = '';
              password.value = '';
              name2.value = '';
              select.value = '';
              event.preventDefault();
          }
    }
}