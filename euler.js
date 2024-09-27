a=3;
b=5;
c=1000;
s=0;
for(i=1;i<1000;i++)
{
    if(i%3==0 || i%5==0)
        s+=i;
}
alert("Sum = "+s);