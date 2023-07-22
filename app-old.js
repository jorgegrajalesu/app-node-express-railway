

const http = require('http');

http.createServer((req,res) => {

   
    // res.writeHead(200,{
    //     'Content-Type': 'text/plain'
    // // });
    // res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    // res.writeHead(200,{'Content-Type':'application/csv'});

    res.write('Hola');

    // res.write(' id, name\n');
    // res.write(' 1, jorge\n');
    // res.write(' 2, nana\n');
    // res.write(' 3, nena\n');
    res.end();


    // const persona = {
    //     id: '98989',
    //     name: 'jorge',

    // }

    // res.write(JSON.stringify(persona));
    

})

.listen(9595);

console.log('Estableciendo conexion en el puerto', 9595);