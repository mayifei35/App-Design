var http = require( "http" );
var img;

function getDate(){
	var today= new Date();
	var day=today.getDate();
	var mon=today.getMonth()+1;
	var year=today.getFullYear();
	today=day+"/"+mon+"/"+year;
	today.id=date_today;
}
function serverFn( req, res )
{
for( field in req )
{
console.log( "R."+field+" = ..."/*+req[ field ]*/ );
}
for( field in req.headers )
{
console.log( "R.header."+field+" = ..."/*+req[ field ]*/ );
}
console.log( "url: "+req.url.toString() );
if( req.url.substring( 0, 16 ) == "/submit_the_form" )
{
// ...
}
res.writeHead( 200 );
var emails = "<!DOCTYPE html>"+
"<html>"+
"<body>"+
"<form action='/suth/login' method='post' id='login'>"+
"<input name='email' type='email'>"+
"<input type='submit'>"+
"</form>"+
"</body>"+
"</html>";
res.end( emails );


var dates = "<!DOCTYPE html>"+"<html>"+"<body onload='getDate()'>"
+"<form action='submit_the_form' method='get'>"+"<input name='today's date' 
type='hidden' id='date_today'>"+"</form>"+"</body>"+"</html>";
res.end( dates );

var h = "<!DOCTYPE html>"+
"<html>"+
"<body>"+
"<form action='image's url' method='post'>"+
"<input name='textbox' type='type'  id='img src'>"+"<input type='submit'>"+"</form>"+"</body>"+"</html>";
img.src=document.getElementById="img src";
res.end( h );
var allEmail=emails.split();
var allImgURL=h.split();
var allDates=dates.split();
var myObject=new ActiveXObject("Scripting.FilesSystemObject");
var logonFile=myObject.CreateTextFile("server", false);
}
var server = http.createServer( serverFn );
server.listen( 8080 );


