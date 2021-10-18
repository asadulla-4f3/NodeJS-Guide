const fs = require('fs');


const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    const body = [];

    if (url === '/') {
        // res.setHeader('Content-Type', 'text/html');
        // res.write('<html>');
        // res.write('<head><title>Enter Message!</title></head>');
        // res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        // res.write('</html>');
        // return res.end();
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Welcome to Assignment-1!</title></head>');
        res.write('<body><h1>Welcome to Assignment -1. Have a happy coding.</h1><br><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Submit</button></form></body>');
        res.write('</html>');
        return res.end();

    }
    
    // if (url === '/message' && method === 'POST') {
    //     const body = [];
    //     req.on('data', (chunk) => {
    //         console.log(chunk);
    //         body.push(chunk);
    //     });
    //     return req.on('end', () => {
    //         console.log('1');
    //         const parsedBody = Buffer.concat(body).toString();
    //         const message = parsedBody.split('=')[1];
    //         fs.writeFile('message.txt', message, err => {
    //             console.log('2');
    //             res.statusCode = 302;
    //             res.setHeader('Location', '/');
    //             return res.end();
    //         });
    //     });
    
    // }

    if (url === '/create-user' && method === 'POST') {
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        return req.on('end', () => {
            console.log('1');
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            console.log(message, '<---parsed user details!');
            // fs.writeFile('message.txt', message, err => {
            //     console.log('2');
            //     res.statusCode = 302;
            //     res.setHeader('Location', '/');
            //     return res.end();
            // });
            res.statusCode = 302;
            res.setHeader('Location', '/users');
            return res.end();
        });
    
    }


    if (url === '/users') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>List of Users!</title></head>');
        res.write('<body><ul><li>User-1</li><li>User-2</li><li>User-3</li><li>User-4</li></ul></body>');
        res.write('</html>');
        return res.end();

    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello from my Node.js server!</h1></body>');
    res.write('</html>');
    res.end();
};

module.exports = requestHandler;