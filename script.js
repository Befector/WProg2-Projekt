const currencyEl_one = document.getElementById('penznem-x');
const amountEl_one = document.getElementById('mennyiseg-x');
const currencyEl_two = document.getElementById('penznem-y');
const amountEl_two = document.getElementById('mennyiseg-y');

const rateEl = document.getElementById('arany');
const swap = document.getElementById('csere');


function calculate() {
	const currency_one = currencyEl_one.value;
	const currency_two = currencyEl_two.value;

	// Innentől Krisztián írta
	fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
		.then(res => res.json())
		.then(data => {

			const rate = data.rates[currency_two];

			rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;

			amountEl_two.value = (amountEl_one.value * rate).toFixed(2);
		});
	// Eddig írta Krisztián
}

// Innentől Krisztián írta
// JQuery
$("#penznem-x").on('change', calculate)
$("#mennyiseg-x").on('input', calculate)
$("#penznem-y").on('change', calculate)
$("#mennyiseg-y").on('input', calculate)

calculate();

$("body").css({
	"background-color" : "f4f4f4",
	"font-family" : "'Fjalla One', sans-serif",
	"display" : "flex",
	"flex-direction" : "column",
	"align-items" : "center",
	"justify-content" : "center",
	"height" : "85vh",
	"margin" : "0",
	"padding" : "20px"
})

$("h1").css({
	"color" :  "#88e950",
	"text-shadow" : "1px 1px 2px black"})

$("p").css("text-align", "center")

$(".btn").css({
	"color" : "#000000",
	"background": "#88e950",
	"border-radius" : "5px",
	"font-size" : "20px",
	"padding" : "4px 8px"})
$(".logo-img").css({"width" : "150px", "border-radius" : "50%"})

$("#csere").bind('click', function(){
	const temp = currencyEl_one.value;
	currencyEl_one.value = currencyEl_two.value;
	currencyEl_two.value = temp;
	calculate();

});

$("#mennyiseg-x, #mennyiseg-y").css({
	"border" : "1px solid gray",
	"margin-left" : "25px"
})

// Eddig írta krisztián

