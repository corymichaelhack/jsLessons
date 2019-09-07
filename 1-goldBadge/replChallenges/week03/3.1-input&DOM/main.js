// Using the html and js files provided, write a webpage that asks the user for input on a store, a quantity, and a product.  Save the user input in 3 separate variables. Once the user has input their information, your webpage should console.log a sentence using those 3 variables. Using dom manipulation, you should also display the user input to the screen. For example: 'I shopped at *Target* for *5* *apples*' may be output to the console & screen. This does not need to be styled in any sort of fashion, but feel free to if you would like!

function setVar () {

    let store = document.getElementById('store').value;
    let product = document.getElementById('product').value;
    let quantity = document.getElementById('quantity').value;

    console.log(store, product, quantity);
    console.log(`I went to ${store} to buy ${quantity} ${product}'s`);

    let text = `I went to ${store} to buy ${quantity} ${product}'s`;
    console.log(text);

    let append = document.querySelector('p');
    append.innerText = text;
}


// let store = prompt('Pick a store:');
// let product = prompt('Pick a product:')
// let quantity = prompt('Pick a quantity of the product:');

// let final = `I shopped at ${store} for ${quantity} ${product}`;

// console.log(final);

// let sentence = document.createElement('p');

// sentence.textContent = final;

// let body = document.querySelector('body');

// body.appendChild(sentence);