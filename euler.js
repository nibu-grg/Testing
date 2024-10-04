function sum(a,b,n)
    {
        s=0;
        for(i=1;i<n;i++)
        {
            if(i%a==0 || i%b==0)
                s+=i;
        }
        alert("Sum = "+s);
        document.getElementById("result").innerHTML=s;
    }

function GetValues()
{
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    limit = document.getElementById("limit").value;
    document.getElementById("num1").style.display="none";
    document.getElementById("num2").style.display="none";
    document.getElementById("limit").style.display="none";
    document.getElementById("sum").style.display="none";
    document.getElementById("label1").style.display="none";
    document.getElementById("label2").style.display="none";
    document.getElementById("label3").style.display="none";
    sum(num1,num2,limit);
    
}


function Show()
{
    document.getElementById("num1").style.display="block";
    document.getElementById("num2").style.display="block";
    document.getElementById("limit").style.display="block";
    document.getElementById("sum").style.display="block";
    document.getElementById("label1").style.display="block";
    document.getElementById("label2").style.display="block";
    document.getElementById("label3").style.display="block";
    l=[10,12,14,156,28];
    m=3;
    l=5;
    sum1(l,a,b);
}

function slice()
{
    text = document.getElementById("slice1").value;
    start = document.getElementById("start").value;
    end = document.getElementById("end").value;
    result = text.slice(start,end);
    alert("Result = "+result);
}



function sum1(l,a,b)
{
    s=0;
    for(i=0;i<l.length;i++)
    {
        if(l[i]%a==0 || l[i]%b==b==0)
            s+=l[i];
    }
    alert("Sum = "+s);
}