let basket = {
    pen : 5,
    book : 7,
    paper : 20
};

let price = {
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

alert(TotalPrice({'Milk':3,'Bread':2},{'Milk':2.3,'Bread':.90}))

function sum()
{
    sum = TotalPrice(basket,price);
    alert("Basket Sum = "+sum);
}

