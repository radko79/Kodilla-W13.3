process.stdin.setEncoding('utf-8'); 
process.stdin.on('readable', function() { 
	var input = process.stdin.read();
	if(input !== null) {
		var instruction = input.toString().trim();
		switch(instruction) {
			case '/exit': 
				process.stdout.write('See ye!\n');
				process.exit();
			case 'ver':
				process.stdout.write('Finally somthin'+'\n');
				process.stdout.write('Process version is: '+process.version+'\n');
				process.stdout.write('\n');
				break;
			case '':
				process.stderr.write('Nothin\'? Seriously???\n');
				break;
			default:
				process.stderr.write('Whaaat? o_O\n');
		}
	}
});