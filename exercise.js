/**
CallBack
getCustomer(1,(customer)=>
{
    console.log('Customer',customer);
    if(customer.isGold)
    {
        getTopmovies((movies)=>{
            console.log('Top movies:',movies);
            sendEmail(customer.email,movies,()=>
            {
                console.log('Email sent');
            });
        });
    }
});**/


//Async and Await
async function movies()
{
 const customer = await getCustomer(1);
 console.log(customer);
 if (customer.isGold)
 {
    const movies = await getTopmovies();
    console.log(movies);
    const Email = await sendEmail(customer.email,movies)
    console.log('Email sent');
 }
}

movies();

function getCustomer(id)
{
    return new Promise((resolve,reject)=>
        {
            setTimeout(()=>{
                console.log('Getting Customer Details:')
                resolve({
                    id:1,
                    name:'Krishaant',
                    isGold:true,
                    email:'Email'
                })
            },4000)

        })
}
   

function getTopmovies()
{
    return new Promise((resolve)=>
    {
        setTimeout(()=>{
            resolve(['movie1','movie2','movie3'])
        },4000)
    })
    
}

function sendEmail(email,movies)
{
   return new Promise((resolve)=>
   {
    setTimeout(()=>
    {
        resolve();
    },4000)
   })
}