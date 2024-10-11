
function TotalPrice(basket,price)
{
    sum = 0;
    for(let product in basket)
    {
        if(price[product]!=undefined)
        {
            sum+=basket[product]*price[product];
        }
    }
    
    alert("Basket Sum = "+sum);
    return sum;
}

alert(TotalPrice({'Paper':3,'Pen':2,'Book':4},{'Paper':2.3,'Pen':.90}))

