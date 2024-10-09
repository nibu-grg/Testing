const basket = {
    pen : 5,
    book : 7,
    paper : 20
};

const price = {
    pen : 10,
    book : 20,
    paper : 1
};

function TotalPrice(basket,price)
{
    sum = 0;
    for(const product in basket)
    {
        if(basket.hasOwnProperty(product)&&price.hasOwnProperty(product))
        {
            sum+=basket[product]*price[product];
        }
    }
    alert(sum);
}

function sum()
{
    TotalPrice(basket,price);
}

