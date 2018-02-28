process.stdin.setEncoding('utf-8'); 
//Bez tego informacje, które przekazujemy do aplikacji będą odczytywane jako dane szesnastkowe (potraktuje wejście jako buffer). Poprawne enkodowanie zapewnia, że program "zrozumie" co do niego mówimy (odczyta wartość jako string z kodowaniem UTF-8).

process.stdin.on('readable', function() { 
	//Powyższy kod można odczytać w następujący sposób: na zdarzenie (.on) odczytu (readable), masz wykonać funkcję (function...).
	// metoda .read() ma za zadanie odczytać co użytkownik podał na wejściu
	var input = process.stdin.read();
	//process.stdout.write(input);
	//Nasza aplikacja spodziewa się na wyjściu tylko postaci tekstowej (string), ale jako że nie otrzymuje niczego, to próbuje wyświetlić nam na wyjściu wartość null. Musimy zabezpieczyć się przed takim działaniem opakowując funkcję odczytu instrukcją warunkową sprawdzającą, czy na wejściu cokolwiek istnieje.
	if(input !== null) {
	// teraz jest sens cokolwiek wyświetlać :)
		var instruction = input.toString().trim();
		// dzięki trim() pozbywamy się wszystkich białych znaków z przodu i za tekstem. Znikają wszystkie spacje, tabulatory, entery - pozostaje sam czysty tekst.
		if (instruction === '/exit') {
			process.stdout.write('Quitting app!\n');
			process.exit();
		} else {
			process.stderr.write('Wrong instruction!\n');
		}
	}
});