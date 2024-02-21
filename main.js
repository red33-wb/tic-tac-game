let allBox = document.querySelectorAll('#box');
let user_turn = null;
let resetButton = document.querySelector('#resetbutton');
let winres = document.querySelector('#winres');
let maingame = document.querySelector('#maingame');


let WinPattarn = [

    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],

]







let winner = document.querySelector('#winner');





allBox.forEach((boxValue => {
    boxValue.addEventListener('click',boxClick);
   

    function boxClick(){
        if(user_turn){
            boxValue.innerHTML='X';
            user_turn=false;
            boxValue.removeEventListener('click',boxClick);
            checkWinnerX()
        }

        else{
            boxValue.innerHTML='O';
            user_turn=true;
            boxValue.removeEventListener('click',boxClick);
            checkWinnerO()
        }
    }


    function checkWinnerX(){
        for(let pattran of WinPattarn){
          
            let pos1 = allBox[pattran[0]].innerText;
            let pos2 = allBox[pattran[1]].innerText;
            let pos3 = allBox[pattran[2]].innerText;
           

          if(pos1 != '' && pos2 != '' && pos3 != ''){
                if(pos1==pos2 && pos2 == pos3){
                    winner.innerText='Winner-X';
                   
                  allBox[pattran[0]].style.backgroundColor='#000' ;
                  allBox[pattran[1]].style.backgroundColor='#000';
                  allBox[pattran[2]].style.backgroundColor='#000';

                    setTimeout(Xfunc,2000)

            
                }
          }

          

         

        }

      
    }

    function Xfunc(){

        console.log('im winner x and i called after 2sec')
                    maingame.classList.remove('flex');
                    maingame.classList.add('hidden')
                    winres.classList.remove('hidden');
                    winres.classList.add('flex');
                    resetButton.classList.remove('hidden');
    }



    function checkWinnerO(){
        for(let pattran of WinPattarn){
            let pos1 = allBox[pattran[0]].innerText;
            let pos2 = allBox[pattran[1]].innerText;
            let pos3 = allBox[pattran[2]].innerText;


            if(pos1 != '' && pos2 != '' && pos3 != ''){
                if(pos1===pos2 && pos2 === pos3){
                    winner.innerHTML='Winner-O';

                    allBox[pattran[0]].style.backgroundColor='red';
                    allBox[pattran[1]].style.backgroundColor='red';
                    allBox[pattran[2]].style.backgroundColor='red';

                    setTimeout(Ofunc,2000)
                    
                    
                 
                }

                

                
            }

          
        }


    }


    function Ofunc(){

        console.log('im winner o and i called after 2sec')

                    maingame.classList.remove('flex');
                    maingame.classList.add('hidden')
                    winres.classList.remove('hidden');
                    winres.classList.add('flex');
                    resetButton.classList.remove('hidden');

    }




}))



resetButton.addEventListener('click',()=>{
    window.location.href=window.location.href;
})