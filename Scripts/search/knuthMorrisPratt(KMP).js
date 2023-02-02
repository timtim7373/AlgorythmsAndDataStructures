
console.log("Knuth Morris Pratt algorithm");
// https://www.youtube.com/watch?v=S2I0covkyMc


let text = "лилила";
// text = "лиилиила";


// Making p-array
let p = new Array(text.length);
p[0] = 0;

let j = 0,
	i = 1;
	
function makeP() {
	while (i < text.length) {
		if (text[j] === text[i]) {
			p[i] = j+1;
			i += 1;
			j += 1;
		}
		else {
			if (j === 0) {
				p[i] = 0;
				i += 1;
			}
			else
				j = p[j-1];
		}
	}
}
makeP(); // complexity(сложность) O(m)

console.log(p);


a = "лилилось лилилась";
let m = text.length,
	n = a.length;
	
i = 0;
j = 0;

while (i < n) {
	if (a[i] === text[j]) {
		i += 1;
		j += 1;
		if (j === m) {
			console.log("Образ найден");
			break;
		}
	}
	else {
		if (j > 0) 
			j = p[j-1];
		else 
			i += 1;
	}
}

if (i === n)
	console.log("Образ не найден");











// complexity(сложность) O(n+m)