
document.getElementById('calculatebtn').addEventListener('click',function(){
    const birthdayInput=document.getElementById('birthdayInput').value;

    if(!birthdayInput){
        alert("please select a date");
        return;
    }

    const birthday=new Date(birthdayInput);
    const now=new Date();

    birthday.setFullYear(now.getFullYear());
    if(now > birthday)
    {
        birthday.setFullYear(now.getFullYear()+1);
    }

    document.getElementById('inputscreen').style.display='none';
    document.getElementById('countdownscreen').style.display='block';

    const interval=setInterval(function(){
        const now=new Date();
        const timeDifference=birthday-now;

        if(timeDifference<0)
        {
            clearInterval(interval);
            alert('Happy Birthday!');
            return;
        }

        const days=Math.floor(timeDifference/(1000*60*60*24));
        const hours=Math.floor((timeDifference%(1000*60*60*24))/(1000*60*60));
        const minutes=Math.floor((timeDifference%(1000*60*60))/(1000*60));
        const seconds=Math.floor((timeDifference%(1000*60))/1000);

        document.getElementById('days').innerText=days;
        document.getElementById('hours').innerText=hours;
        document.getElementById('minutes').innerText=minutes;
        document.getElementById('seconds').innerText=seconds;

    })

})
