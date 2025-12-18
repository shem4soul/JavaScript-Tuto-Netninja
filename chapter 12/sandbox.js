const getTodos = (resource, callback) =>{
    const request = new XMLHttpRequest();




request.addEventListener('readystatechange', () => {
    //console.log(request, request.readyState);
    if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        callback(undefined, request.responseText);
    } else if (request.readyState === 4) {
     callback('Could not fetch data', undefined);
    }
});
request.open('GET', resource);
request.send();
};


console.log(1);
console.log(2);


getTodos('todos/luigi.json', (err, data) => {
    console.log(data);      
getTodos('todos/mario.json', (err, data) => {
    console.log(data);
    getTodos('todos/shaun.json', (err, data) => {
        console.log(data);
    });                         
});
});

console.log(3);

console.log(4); 

