const axios = require('axios'); // to import the axios library from node_modules

axios.get('https://jsonplaceholder.typicode.com/posts') // make get req. to url
.then(response=>{ // if promise fulfilled then do the following
    const responseData=response.data;
    responseData.slice(0, 5).map((post, index) => {
        console.log(`Post ${index+1}: ${post.title}`);
    });
})
.catch(err=>{ // handel promise if it rejected
    console.log(`error in fetching the posts \n ${err}`)
});