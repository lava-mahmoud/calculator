var x1='';var x=0; var resault=0;
var opper='';
var prev=0;
var oppState=0;
var state=false;
function tackeValues(val){
 /* 
    input1 = parseInt(input1);
   
   var input2 = document.getElementById("second").value;
    
    input2 = parseInt(input2); */
    document.querySelector("#text-field").value= val;
    switch(val){
        case 'c':
            x1='';x=0; resault=0;
            opper='';
            prev=0;
            document.querySelector("#text-field").value= '';

           // document.querySelector("#text-field").textContent= '';
        break;
        case 'BC':
            x=Math.floor(x/10);
            document.querySelector("#text-field").value= x;
            
            break;
        case '+' :
        case '*':
        case '-':
        case '/':
         
                {prev= x;
                    console.log(prev+'prev' );
                    opper=val;
                    x=0;
                    x1='';
                    //document.getElementById("#text-field").value=opper;
                    
                    break;}
                    case '=':
                    if(opper=='+')
                    {resault=x+prev;
                        
                    }
                else if(opper=='*')
                    {resault=x*prev;}
                else if(opper=='-')
                    {resault=prev-x;}
                    else if(opper=='+')
                    {resault=prev/x;
                    }
                    document.querySelector("#text-field").value= resault;
                    //document.getElementById("#text-field").innerHTML=resault;
                    x=resault;
                    //x=0;
                    x1='';
                break;
        default:
        x1=x1+document.getElementById(val).textContent;
        document.querySelector("#text-field").value= x1;
        x = parseInt(x1);
        console.log('x'+x);
    }
    
    
    
    console.log(x);
/*     switch (value) {
        case '+' :
        case '*':
        case '-':
        case '/':
          prev= x;
          console.log(prev);
          opper=value;
          break;
        case '=' :
       

        default:
        var result  = "No value found";
      } */ 
      
      var z = parseInt(x);
     
      console.log(typeof(x));
    
    

    }

