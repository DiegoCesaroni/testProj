function CalcolaFattoriale()
{
	let fattoriale;
	let numero=document.getElementById("number").value;
	const n = numero;
	
	if (numero < 0)
	{
		fattoriale = "Il numero deve essere positivo!";  //commento di prova 23 3 2023 (dal main)
	}
	else
	{
		fattoriale = 1;
		while (numero > 1)
		{
			fattoriale *= numero;
			numero -= 1;
		}
	}
	document.getElementById("demo").innerHTML = n + “! = “ + fattoriale;
}
