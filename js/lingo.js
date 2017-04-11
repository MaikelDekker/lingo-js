var wordlist = words;
var word = "";
var answer = ""; 

var firstReady = false;
var secondReady = false;
var thirdReady = false;
var fourthReady = false;
var fifthReady = false;

var guesses = 0;

function getWord()
{
	document.getElementById('alertText').innerHTML = ("");
	word = wordlist[Math.floor(Math.random() * wordlist.length)];
	document.getElementById('first').innerHTML = word.charAt(0);
	document.getElementById('grid').style.display	 = "flex";
	document.getElementById('first').style.display = "block";
	document.getElementById('second').style.display = "block";
	document.getElementById('third').style.display = "block";
	document.getElementById('fourth').style.display = "block";
	document.getElementById('fifth').style.display = "block";
	document.getElementById("inputField").value = ("");


	document.getElementById("first").style.backgroundColor = "green";
	document.getElementById("second").style.backgroundColor = "white";
	document.getElementById("third").style.backgroundColor = "white";
	document.getElementById("fourth").style.backgroundColor = "white";
	document.getElementById("fifth").style.backgroundColor = "white";

	document.getElementById('second').innerHTML = "";
	document.getElementById('third').innerHTML = "";
	document.getElementById('fourth').innerHTML = "";
	document.getElementById('fifth').innerHTML = "";

	firstReady = false;
	secondReady = false;
	thirdReady = false;
	fourthReady = false;
	fifthReady = false;
	guesses = 0;
}
function checkAnswer()
{
	if(guesses < 6)
		{
		answer = document.getElementById("inputField").value;
		if(answer.length != 5)
		{
			return false;
		}else if(answer.length == 5)
		{
			if(answer.charAt(0) == word.charAt(0))
			{
				guesses += 1;
				document.getElementById('first').innerHTML = answer.charAt(0);
				document.getElementById('second').innerHTML = answer.charAt(1);
				document.getElementById('third').innerHTML = answer.charAt(2);
				document.getElementById('fourth').innerHTML = answer.charAt(3);
				document.getElementById('fifth').innerHTML = answer.charAt(4);


				first = document.getElementById('first').innerHTML;
				second = document.getElementById('second').innerHTML;
				third = document.getElementById('third').innerHTML;
				fourth = document.getElementById('fourth').innerHTML;
				fifth = document.getElementById('fifth').innerHTML;
				firstReady = true;


				if(second == word.charAt(1))
				{
					secondReady = true;
					document.getElementById("second").style.backgroundColor = "green";
				}else if(second == word.charAt(2) && thirdReady == false|| second == word.charAt(3) && fourthReady == false|| second == word.charAt(4) && fifthReady == false)
				{
					document.getElementById("second").style.backgroundColor = "orange";
				}else
				{
					document.getElementById("second").style.backgroundColor = "red";
				}


				if(third == word.charAt(2))
				{
					thirdReady = true;
					document.getElementById("third").style.backgroundColor = "green";
				}else if(third == word.charAt(1) && secondReady == false|| third == word.charAt(3) && fourthReady == false|| third == word.charAt(4) && fifthReady == false)
				{
					document.getElementById("third").style.backgroundColor = "orange";
				}else
				{
					document.getElementById("third").style.backgroundColor = "red";
				}


				if(fourth == word.charAt(3))
				{
					fourthReady = true;
					document.getElementById("fourth").style.backgroundColor = "green";
				}else if(fourth == word.charAt(1) && secondReady == false || fourth == word.charAt(2) && thirdReady == false || fourth == word.charAt(4) && fifthReady == false)
				{
					document.getElementById("fourth").style.backgroundColor = "orange";
				}else
				{
					document.getElementById("fourth").style.backgroundColor = "red";
				}


				if(fifth == word.charAt(4))
				{
					fifthReady = true;
					document.getElementById("fifth").style.backgroundColor = "green";
				}else if(fifth == word.charAt(1) && secondReady == false || fifth == word.charAt(2) && thirdReady == false || fifth == word.charAt(3) && fourthReady == false)
				{
					document.getElementById("fifth").style.backgroundColor = "orange";
				}else
				{
					document.getElementById("fifth").style.backgroundColor = "red";
				}
				if(secondReady == true && thirdReady == true && fourthReady == true && fifthReady == true)
				{
					document.getElementById('alertText').innerHTML = ("Gefeliciteerd!!, je hebt het woord geraden. Speel nog een keer door op Start te Klikken.")
				}else 
				{
					if (guesses >= 5)
					{
						document.getElementById('alertText').innerHTML = ("Jammer, het woord was " + word + ", speel nog een keer door op Start te klikken.");
					}
				}
			}else if(answer.charAt(0) != word.charAt(0))
			{
				alert("Eerste letter = " + word.charAt(0));
			}
		}
	}
}