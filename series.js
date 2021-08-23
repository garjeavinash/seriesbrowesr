let form=document.querySelector('#seriesform');
let url='https://bluecollarsclientwork.000webhostapp.com/seriesbrowser/createseries.php';
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let Name = document.querySelector('#name').value;
    let Director = document.querySelector('#director').value;
    let Status= document.querySelector('#status').value;
    let Genre= document.querySelector('#genre').value;

    let data ={
        "name":Name,
        "director":Director,
        "status":Status,
        "genre":Genre,
    };
    let params=JSON.stringify(data);
    let xhr=new XMLHttpRequest();
    xhr.open('POST',url,true);
    xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
    xhr.onload=()=>{
        if(xhr.status==200||xhr.readyState==4)
        {
            console.log('series created');
        }
        else
        {
            console.log('error occured');

        }


    }
    xhr.send(params); 
});
