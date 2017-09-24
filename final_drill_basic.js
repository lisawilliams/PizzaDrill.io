function getReceipt() {
	var text1 = "<h3>You Ordered:</h3>";
	var runningTotal = 0;
	var sizeTotal = 0;
	var sizeArray = document.getElementsByClassName("size");
	for (var i = 0; i < sizeArray.length; i++) {
		if (sizeArray[i].checked) {
			var selectedSize = sizeArray[i].value;
			text1 = text1+selectedSize+"<br>";
		}
	}
	if (selectedSize === "Personal Pizza") {
		sizeTotal = 6;
	} else if (selectedSize === "Medium Pizza") {
		sizeTotal = 10;
	} else if (selectedSize === "Large Pizza") {
		sizeTotal = 14;
	} else if (selectedSize === "Extra Large Pizza") {
		sizeTotal = 16;
	}
	runningTotal = sizeTotal;
	console.log(selectedSize+" = $"+sizeTotal+".00");
	console.log("size text1: "+text1);
	console.log("subtotal: $"+runningTotal+".00");
	getMeat(runningTotal,text1);
};


function getMeat(runningTotal, text1) {
		var meatTotal = 0;
		var selectedMeat = [];
		var meatArray = document.getElementsByClassName("meats");
		for (var j = 0; j < meatArray.length; j++) {
			if (meatArray[j].checked) {
				selectedMeat.push(meatArray[j].value);
				console.log("selected meat item: ("+meatArray[j].value+")");
				text1 = text1+meatArray[j].value+"<br>";
			}
	}
	var meatCount = selectedMeat.length;
		if (meatCount > 1) {
			meatTotal = (meatCount - 1);
		} else {
			meatTotal = 0;
	}
	runningTotal = (runningTotal + meatTotal);
	console.log("total selected meat items: "+meatCount);
	console.log(meatCount+" meat - 1 free meat = "+"$"+meatTotal+".00");
	console.log("meat text1: "+text1);
	console.log("Purchase Total: "+"$"+runningTotal+".00");
	document.getElementById("showText").innerHTML=text1;
	document.getElementById("totalPrice").innerHTML = "</h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
	getVeggie(runningTotal, text1);
};


function getVeggie(runningTotal, text1) {
		var veggieTotal = 0;
		var selectedVeggie = [];
		var veggieArray = document.getElementsByClassName("veggie");
		for (var v = 0; v < veggieArray.length; v++) {
			if (veggieArray[v].checked) {
				selectedVeggie.push(veggieArray[v].value);
				console.log("selected veggie items: ("+veggieArray[v].value+")");
				text1 = text1+veggieArray[v].value+"<br>";
			}
	}
	var veggieCount = selectedVeggie.length;
		if (veggieCount > 1) {
			veggieTotal = (veggieCount - 1);
		} else {
			veggieTotal = 0;
	}
	runningTotal = (runningTotal + veggieTotal);
	console.log("total selected veggie items: "+veggieCount);
	console.log(veggieCount+" veggie - 1 free veggie = "+"$"+veggieTotal+".00");
	console.log("veggie text1: "+text1);
	console.log("Purchase Total: "+"$"+runningTotal+".00");
	document.getElementById("showText").innerHTML=text1;
	document.getElementById("totalPrice").innerHTML = "</h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
	getCheese(runningTotal, text1);
};

function getCheese (runningTotal, text1) {
		var cheeseTotal = 0;
		var selectedCheese = [];
		var cheeseArray = document.getElementsByClassName("cheese");
		for (var c = 0; c < cheeseArray.length; c++) {
			if (cheeseArray[c].checked) {
				selectedCheese.push(cheeseArray[c].value);
				console.log("selected cheese item: ("+cheeseArray[c].value+")");
				text1 = text1+cheeseArray[c].value+"<br>";
		}
	}
	if (selectedCheese === "Regular Cheese") {
			cheeseTotal = "Regular Cheese";
	} else if (selectedCheese === "No Cheese") {
			cheeseTotal = "No Cheese";
	} else if (selectedCheese === "Extra Cheese") {
			runningTotal=runningTotal +3;
			cheeseTotal = "Extra Cheese";
	}
	runningTotal = (runningTotal + cheeseTotal);
	console.log("selectedCheese: "+cheeseTotal);
	console.log("cheese text1: "+text1);
	console.log("Purchase Total: "+"$"+runningTotal+".00");
	document.getElementById("showText").innerHTML=text1;
	document.getElementById("totalPrice").innerHTML = "</h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
	getSauce(runningTotal, text1);
};

function getSauce (runningTotal, text1) {
		var sauceTotal = 0;
		var selectedSauce = [];
		var sauceArray = document.getElementsByClassName("sauce");
		for (var s = 0; s < sauceArray.length; s++) {
			if (sauceArray[s].checked) {
				selectedSauce.push(sauceArray[s].value);
				console.log("selected sauce item: ("+sauceArray[s].value+")");
				text1 = text1+sauceArray[s].value+"<br>";
		}
	}
	if (selectedSauce === "Marinara Sauce") {
			sauceTotal = "Marinara Sauce";
	} else if (selectedSauce === "White Sauce") {
			sauceTotal = "White Sauce";
	} else if (selectedSauce === "Barbeque Sauce") {
			sauceTotal = "Barbeque Sauce";
	} else if (selectedSauce === "No Sauce") {
			sauceTotal = "No Sauce";
	}
	runningTotal = (runningTotal + text1);
	console.log("selectedSauce: "+sauceTotal);
	console.log("sauce text1: "+text1);
	console.log("Purchase Total: "+"$"+runningTotal+".00");
	document.getElementById("showText").innerHTML=text1;
	// document.getElementById("totalPrice").innerHTML = "</h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
	getCrust(runningTotal, text1);
};


function getCrust (runningTotal, text1) {
		var crustTotal = 0;
		var selectedCrust = [];
		var crustArray = document.getElementsByClassName("crust");
		for (var z = 0; z < crustArray.length; z++) {
			if (crustArray[z].checked) {
				selectedCrust.push(crustArray[z].value);
				console.log("selected crust item: ("+crustArray[z].value+")");
				text1 = text1+crustArray[z].value+"<br>";
		}
	}
	if (selectedCrust === "Plain Crust") {
			crustTotal = "Plain Crust";
	} else if (selectedCrust === "Garlic Butter Crust") {
			crustTotal = "Garlic Butter Crust";
	} else if (selectedCrust === "Cheese Stuffed Crust") {
			runningTotal = runningTotal +3;
			crustTotal = "Cheese Stuffed Crust";
	} else if (selectedCrust === "Spicy Crust") {
			crustTotal = "Spicy Crust";
	} else if (selectedCrust === "House Special Crust") {
			crustTotal = "House Special Crust";
	}
	console.log("this is final runningTotal", runningTotal);
	runningTotal = (runningTotal + text1);
	console.log("selectedCrust: "+crustTotal);
	console.log("crust text1: "+text1);
	console.log("Purchase Total: "+"$"+runningTotal+".00");
	// document.getElementById("showText").innerHTML=text1;
	// document.getElementById("totalPrice").innerHTML = "</h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
};
