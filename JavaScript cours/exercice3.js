document.write('<div class="total">');
document.write('<div class="ligne">');
document.write('<div class="legende">-</div>');
for (let i = 0; i <= 9; i++){document.write('<div class="legende">'+i+'</div>');}
document.write('</div>');
for (let x = 0; x <= 9; x++){
	document.write('<div class="ligne">');
	document.write('<div class="legende">'+x+'</div>');
	for (let y = 0; y <= 9; y++){document.write('<div class="content">'+x*y+'</div>')}
	document.write("</div>")
}
document.write('</div>');
document.write('</div>');
