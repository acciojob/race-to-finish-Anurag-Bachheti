window.promises = [];

for(let i=1; i<=5; i++){
	let p = new Promise((resolve) => {
		let delay = Math.floor(Math.random() * 5 + 1) * 1000;
		setTimeout(()=> {
			resolve(`Promise ${i} resolved after ${delay/1000}seconds`);
		}, delay)
	});
	
	window.promises.push(p)
}

Promise.any(window.promises)
	.then(result => {
		document.getElementById("output").textContent = result;
	})
	.catch(error => {
		document.getElementById("output").textContent = "All Promises Rejected: " + error;
	});