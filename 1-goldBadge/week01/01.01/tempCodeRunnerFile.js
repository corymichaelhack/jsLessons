function main(){
	let a =1;
	let b=2;
	let c=-3;
	mystery(a,b,c);
	mystery(c,4,a);
	mystery(a+b,b+c,c+a);
}

function mystery(c,a,b) {
console.log(b + "+" + c + "=" + a )
}

main();