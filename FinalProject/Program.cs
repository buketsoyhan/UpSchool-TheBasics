using FinalProject;

var order =new Order() 
{ 
    Id=Guid.NewGuid(),
    RequestedAmount= 50,
    ProductCrawlType=ProductCrawlType.All
};

var orderEvent = new OrderEvent()
{
    Id = Guid.NewGuid(),
    OrderId = order.Id,
    CreatedOn = DateTime.Now,
    Status = OrderStatus.BotStarted,
};

order.OrderEvents=new List<OrderEvent>();
order.OrderEvents.Add(orderEvent);

//await dbContext.Orders.AddAsync(order,cancelllationToken);
//await dbContext.OrderEvents.AddAsync(orderEvent,cancelllationToken);