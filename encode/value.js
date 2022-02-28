        ////////////////////////////////////////////////////////////////////////
        ////    For calculating amounts using units in english              ////
        ////////////////////////////////////////////////////////////////////////
        
    function clicks(){
        ///////// unit is Negative //////////////
        var unit =Number(document.getElementById("unit").value);
        var i,j,k,l,m;
       
        
       if(unit<0){
           k="Enter the valuable unit";
           
       }
         ///////// unit is below 100 //////////////
       
            else if(unit>=0 && unit<=100 ){
            k=0;
          
       }
          ///////// unit is below 200 //////////////
             else if(unit>=101 && unit<=200){
            k=((unit-100)*2)+20;
        
            }
               ///////// unit is above 200 to 500 //////////////
            else if(unit>=201 && unit<=500){
                i=((unit-200)*3)+30;
                k=i+200;
  
            }

               ///////// unit is above 500 //////////////
            else{
                i=unit-500;
                j=i*6.60;
                l=(unit-i-400)*3.5;
                m=(unit-i-200)*4.60;
                k=j+l+m+50;
           
            }



       document.getElementById("demo").innerHTML="Bill Amount Is "+k;

      
    }
   
    ////////// for calculating units using Reading //////////////
    function reading(){
        var a =Number(document.getElementById("old").value);
        var b =Number(document.getElementById("new").value);
        var c=b-a;
        
       document.getElementById("democracy").innerHTML="Unit Is "+c;
    }


    

        ///////////////// this is click event for button changing////////////
   

    function english(){
        var eng = document.getElementById("main");
        var tam=document.getElementById("main1");
        var form=document.getElementById("form");

        tam.style.display="none";
        form.style.height="465px";
        eng.style.display="block";
        eng.style.transition="display 0.5s";
    }

    function tamil(){
        var eng = document.getElementById("main");
        var tam=document.getElementById("main1");
        var form=document.getElementById("form");

        tam.style.display="block";
        eng.style.display="none";
        tam.style.transition="display 0.5s";
      form.style.height="520px";
        
    }


     ////////////////////////////////////////////////////////////////////////
        ////    For calculating amounts using units in tamil        ////
        ////////////////////////////////////////////////////////////////////////

          
    function clickss(){
        ///////// unit is Negative //////////////
        var unit =Number(document.getElementById("unit1").value);
        var i,j,k,l,m;
       
        
       if(unit<0){
           k="மதிப்புமிக்க அலகு உள்ளிடவும்";
           
       }
         ///////// unit is below 100 //////////////
       
            else if(unit>=0 && unit<=100 ){
            k=0;
          
       }
          ///////// unit is below 200 //////////////
             else if(unit>=101 && unit<=200){
            k=((unit-100)*2)+20;
        
            }
               ///////// unit is above 200 to 500 //////////////
            else if(unit>=201 && unit<=500){
                i=((unit-200)*3)+30;
                k=i+200;
  
            }

               ///////// unit is above 500 //////////////
            else{
                i=unit-500;
                j=i*6.60;
                l=(unit-i-400)*3.5;
                m=(unit-i-200)*4.60;
                k=j+l+m+50;
           
            }



       document.getElementById("demo1").innerHTML="பில் தொகை "+ k;

      
    }
   
    ////////// for calculating units using Reading //////////////
    function reading1(){
        var a =Number(document.getElementById("old1").value);
        var b =Number(document.getElementById("new1").value);
        var c=b-a;
        
       document.getElementById("democracy1").innerHTML="அலகு = "+c;
    }