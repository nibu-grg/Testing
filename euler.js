let sum=()=>
    {
        num1 = document.getElementById("num1").value;
        num2 = document.getElementById("num2").value;
        limit = document.getElementById("limit").value;
        s=0;
        for(i=1;i<limit;i++)
        {
            if(i%num1==0 || i%num2==0)
                s+=i;
        }
        alert("Sum = "+s);
    }