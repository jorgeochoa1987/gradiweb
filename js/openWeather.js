$.get("https://api.openweathermap.org/data/2.5/weather?q=bogota&APPID=5e913114c2d5ab6f4f07479fee2d84be&units=metric", function( data ) {

  $( '.Ciudad' ).html('<i class="fa fa-map-marker"></i>' + data.name );
  $( '.temp' ).html( '<p><strong>'+  data.main.temp  + '</strong>°C</p>');
  $( '.icon img' ).attr( 'src', 'https://openweathermap.org/img/w/' + data.weather[0].icon + '.png' );
});

$.get("https://api.openweathermap.org/data/2.5/forecast/daily?q=bogota&cnt=3&units=metric&appid=bc1301b0b23fe6ef52032a7e5bb70820", function( data ) {
  console.log( data ); 
  var d = new Date();
    var dias = new Array(7);
    dias[0] = "Domingo";
    dias[1] = "Lunes";
    dias[2] = "Martes";
    dias[3] = "Miercoles";
    dias[4] = "Jueves";
    dias[5] = "Viernes";
    dias[6] = "Sabado";
  var i;
  for (i = 0; i < 3; i++) {
    $( '.3dias'+i ).html(  data.list[i].temp.day + '°C' );
    $( '.3temp'+i ).html(dias[d.getDay() + i] +'<br>'+data.list[i].weather[0].main );
    $( '.3icon'+i ).html(  '<img src="https://openweathermap.org/img/w/'+ data.list[i].weather[0].icon +'.png"/>' );
    console.log('https://openweathermap.org/img/w/'+ data.list[i].weather[0].icon +'.png');
    $( '.3texto'+i).html(  data.list[i].weather[0].main );
  } 
});


$.get("https://api.openweathermap.org/data/2.5/weather?q=paris&APPID=5e913114c2d5ab6f4f07479fee2d84be&units=metric", function( data ) {
 
  $( '.paisciudadfr' ).html( data.name  + '<br> ' +  data.sys.country );
  $( '.Frtemp' ).html( '<strong >' +data.main.temp + '&nbsp;</strong> °C' );
  $( '.fricon img' ).attr( 'src', 'https://openweathermap.org/img/w/' + data.weather[0].icon + '.png' );
});  

$.get("https://api.openweathermap.org/data/2.5/weather?q=Lyon&APPID=5e913114c2d5ab6f4f07479fee2d84be&units=metric", function( data ) {

  $( '.paisciudadLy' ).html( data.name  + '<br> ' +  data.sys.country );
  $( '.Lytemp' ).html( '<strong >' +data.main.temp + '&nbsp;</strong> °C' );
  $( '.Lyicon img' ).attr( 'src', 'https://openweathermap.org/img/w/' + data.weather[0].icon + '.png' );
});   