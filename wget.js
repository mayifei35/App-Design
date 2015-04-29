var http = require('http');
var fs   = require('fs');

try{
	var download = function( url, dest, cb ) {
	    console.log( "Download!" );
	    try{
	    var file = fs.createWriteStream( dest );}
		catch (e){
			console.log("File can't be read");} 
	    try{
	    var request = http.get( url, function( response ) {
	        console.log( "get callback!" );
	        response.pipe( file );
	        file.on( 'finish', function() {
	            console.log( "finish callback!" );
	            // close() is async, call cb after close completes.
	            file.close( cb );
	        });
	    });}
	    catch(e){ console.log("The URL doesn't have http.");}
	    console.log( "called http.get" );
	    try{
		    request.on( 'error', function( err ) { // Handle errors
			console.log( "error callback!" );
			// Delete the file async. (But we don't check the result)
			fs.unlink(dest);
			if( cb )
			    cb( err.message );
		    });
	    }
	    catch(e){console.log("Method 'on' is undefinded.");}
	    console.log( "called request.on" );
	};
}

catch(e){
	console.log('Protocol: '+ options.protocol+' not supported.');
}
var fn1 = process.argv[ 2 ];

try{
	var allLines= fs.readFileSync( fn1 ).toString().split( "\n" );
console.log(allLines);
}
catch(e){
	console.log("can't open the file");
	process.exit(1);
}

var urls=[];
var locations=[];

for (var n=0;n<allLines.length;n++)
{
	if(n % 2 === 0)
	{
	  urls.push(allLines[n]); 
	}
	else
	{
	  locations.push(allLines[n]);
	}	
}


for (var b=0;b<allLines.length;b++)
{
	download( urls[b],locations[b], function() { console.log( "main cb" ) ;} );
}


console.log( "Done?" );
