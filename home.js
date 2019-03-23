
window.addEventListener("DOMContentLoaded", calcMeals);

function loadedHandler() {
		var x = document.getElementById("creditsAndMeals");
		x.addEventListener("DOMContentLoaded",calcMeals)
}
// Calculates total amount of meals cooked by user
	function calcMeals() {
		var x = document.getElementById("creditsAndMeals");
		var meals1 = parseFloat(x.chinatownMeals.value);
		var result = meals1;
		document.getElementById("chinatownMeals").value = 10;
	}


// Handles popups on the city map
	function openPopup1() {
		var popup = document.getElementById("myPopup1");
		popup.classList.toggle("show");
		document.getElementById("cardWelcome").style.display = "none";
		document.getElementById("card2").style.display = "none";
		document.getElementById("card1").style.display = "block";
		document.getElementById("card3").style.display = "none";
		document.getElementById("card4").style.display = "none";
		document.getElementById("card5").style.display = "none";
		document.getElementById("card6").style.display = "none";
		document.getElementById("card7").style.display = "none";
		document.getElementById("card8").style.display = "none";
		document.getElementById("card9").style.display = "none";
	}
	function openPopup2() {
		var popup = document.getElementById("myPopup2");
		popup.classList.toggle("show");
		document.getElementById("cardWelcome").style.display = "none";
		document.getElementById("card1").style.display = "none";
		document.getElementById("card2").style.display = "block";
		document.getElementById("card3").style.display = "none";
		document.getElementById("card4").style.display = "none";
		document.getElementById("card5").style.display = "none";
		document.getElementById("card6").style.display = "none";
		document.getElementById("card7").style.display = "none";
		document.getElementById("card8").style.display = "none";
		document.getElementById("card9").style.display = "none";
	}
	function openPopup3() {
		var popup = document.getElementById("myPopup3");
		popup.classList.toggle("show");
		document.getElementById("cardWelcome").style.display = "none";
		document.getElementById("card1").style.display = "none";
		document.getElementById("card2").style.display = "none";
		document.getElementById("card3").style.display = "block";
		document.getElementById("card4").style.display = "none";
		document.getElementById("card5").style.display = "none";
		document.getElementById("card6").style.display = "none";
		document.getElementById("card7").style.display = "none";
		document.getElementById("card8").style.display = "none";
		document.getElementById("card9").style.display = "none";
	}
	function openPopup4() {
		var popup = document.getElementById("myPopup4");
		popup.classList.toggle("show");
		document.getElementById("cardWelcome").style.display = "none";
		document.getElementById("card1").style.display = "none";
		document.getElementById("card2").style.display = "none";
		document.getElementById("card3").style.display = "none";
		document.getElementById("card4").style.display = "block";
		document.getElementById("card5").style.display = "none";
		document.getElementById("card6").style.display = "none";
		document.getElementById("card7").style.display = "none";
		document.getElementById("card8").style.display = "none";
		document.getElementById("card9").style.display = "none";
	}
	function openPopup5() {
		var popup = document.getElementById("myPopup5");
		popup.classList.toggle("show");
		document.getElementById("cardWelcome").style.display = "none";
		document.getElementById("card1").style.display = "none";
		document.getElementById("card2").style.display = "none";
		document.getElementById("card3").style.display = "none";
		document.getElementById("card4").style.display = "none";
		document.getElementById("card5").style.display = "block";
		document.getElementById("card6").style.display = "none";
		document.getElementById("card7").style.display = "none";
		document.getElementById("card8").style.display = "none";
		document.getElementById("card9").style.display = "none";
	}
	function openPopup6() {
		var popup = document.getElementById("myPopup6");
		popup.classList.toggle("show");
		document.getElementById("cardWelcome").style.display = "none";
		document.getElementById("card1").style.display = "none";
		document.getElementById("card2").style.display = "none";
		document.getElementById("card3").style.display = "none";
		document.getElementById("card4").style.display = "none";
		document.getElementById("card5").style.display = "none";
		document.getElementById("card6").style.display = "block";
		document.getElementById("card7").style.display = "none";
		document.getElementById("card8").style.display = "none";
		document.getElementById("card9").style.display = "none";
	}
	function openPopup7() {
		var popup = document.getElementById("myPopup7");
		popup.classList.toggle("show");
		document.getElementById("cardWelcome").style.display = "none";
		document.getElementById("card1").style.display = "none";
		document.getElementById("card2").style.display = "none";
		document.getElementById("card3").style.display = "none";
		document.getElementById("card4").style.display = "none";
		document.getElementById("card5").style.display = "none";
		document.getElementById("card6").style.display = "none";
		document.getElementById("card7").style.display = "block";
		document.getElementById("card8").style.display = "none";
		document.getElementById("card9").style.display = "none";
	}
	function openPopup8() {
		var popup = document.getElementById("myPopup8");
		popup.classList.toggle("show");
		document.getElementById("cardWelcome").style.display = "none";
		document.getElementById("card1").style.display = "none";
		document.getElementById("card2").style.display = "none";
		document.getElementById("card3").style.display = "none";
		document.getElementById("card4").style.display = "none";
		document.getElementById("card5").style.display = "none";
		document.getElementById("card6").style.display = "none";
		document.getElementById("card7").style.display = "none";
		document.getElementById("card8").style.display = "block";
		document.getElementById("card9").style.display = "none";
	}
	function openPopup9() {
		var popup = document.getElementById("myPopup9");
		popup.classList.toggle("show");
		document.getElementById("cardWelcome").style.display = "none";
		document.getElementById("card1").style.display = "none";
		document.getElementById("card2").style.display = "none";
		document.getElementById("card3").style.display = "none";
		document.getElementById("card4").style.display = "none";
		document.getElementById("card5").style.display = "none";
		document.getElementById("card6").style.display = "none";
		document.getElementById("card7").style.display = "none";
		document.getElementById("card8").style.display = "none";
		document.getElementById("card9").style.display = "block";
	}
