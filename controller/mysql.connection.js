const mysql=require('mysql')
const connection=mysql.createConnection(

{
host:'localhost',
user:'root',
password:'',
database:'empdb'
}
)


connection.connect((err) =>
{
if(err)
console.log('not connected')
else
{

    console.log('connected')
}
})

module.exports=connection;