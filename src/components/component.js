export const saludar = (nombre) => {
	console.log(nombre);
	const h1 = document.createElement('h1');
	h1.innerText = `Hola ${nombre}!!`;
	document.body.append(h1);
	console.log("create element");
};
