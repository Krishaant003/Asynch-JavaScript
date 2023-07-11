console.log('Before');


/**Callback Hell
getuser(1,(user)=>
{
    getRepositories(user.githubUsername,(repos)=>{
        getCommits(repos[0],(commits)=>{
            console.log(commits)
        })
    })
});**/


console.log('after');



/**getuser(1)
   .then(user => getRepositories(user.githubUsername))
   .then(Repos => getCommits(Repos[0]))
   .then(commit => console.log(commit))
   .catch(err => console.log(err.message))
**/

//Async and Await
async function displayCommit()
{
    try {
        const user = await getuser(1);
        const repos = await getRepositories(user.githubUsername);
        const commits = await getCommits(repos[0]);
        console.log(commits);
    }
    catch(err) {
        console.log('Error',err.message)
    }
   
}

displayCommit();




function getuser(id)
{ 
    return new Promise((resolve,reject)=>
    {
        setTimeout(()=>
        {
        console.log("Reading a user from database... ");
        resolve({id: id,githubUsername:'vikram'});
        },2000);

    })
   

}

function getRepositories(username)
{
    return new Promise((resolve,reject)=>
    {
        setTimeout(() =>
    {
        console.log("getting repositories...");
        //resolve(['repo1','repo2','repo3']);
        reject(new Error("Couldn't get the repos"))
    },2000);
    })
    
}

function getCommits(repo)
{
    return new Promise((resolve,reject)=>
    {
        setTimeout(()=>{
            console.log("Calling git API");
            resolve(['commit']);
        },2000)
    })
}