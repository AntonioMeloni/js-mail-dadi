var email = ['mario@gmail.com','pippo@gmail.com','paolo@gmail.com','giorgio@gmail.com']
var insMail = prompt('Inserisci la tua email per accedere al sito');

for (var i = 0; i < email.length; i++)
    {
        if (insMail == email[i])
        {
            document.getElementById('container').setAttribute('class','visible');
            var accesso = 1;
            break;
        }
    }

if (accesso != 1)
    {
        alert('Ci spiace, questo indirizzo email è sbagliato o non è stato registrato');
    }
