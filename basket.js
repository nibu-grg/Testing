const basket = {
    pen : 5,
    book : 7,
    paper : 20
};

const price = {
    pen : 10,
    book : 20,
    //paper : 1
};

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

function sum()
{
    sum = TotalPrice(basket,price);
    alert("Basket Sum = "+sum);
}

