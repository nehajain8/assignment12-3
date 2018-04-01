//Custom mmap function
function customMap(number, callback){
	return number.map(callback);
}
//call to custom map, that has callback function and input array
var capturedValue= customMap([6,7,8],function(x){
	return x*2;
});

console.log("New value using custom map function is " + capturedValue);