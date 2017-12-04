// Create a class for the element
class StarRating extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();

    // Create a shadow root
    var shadow = this.attachShadow({mode: 'open'});

    // Create the fieldset from the original star rating
    var fieldset = document.createElement('fieldset');
    fieldset.setAttribute('class','rating');

    // Append it to the shadow root
    shadow.appendChild(fieldset);

    // Create the radio buttons and label elements from the original star rating
    var radio1 = document.createElement('input');
    var label1 = document.createElement('label');
    radio1.setAttribute('type','radio');
    radio1.setAttribute('id','star5');
    label1.setAttribute('for','star5');
    label1.setAttribute('title','Awesome — 5 stars');
    label1.textContent = 'Awesome, 5 stars';

    var radio2 = document.createElement('input');
    var label2 = document.createElement('label');
    radio2.setAttribute('type','radio');
    radio2.setAttribute('id','star4');
    label2.setAttribute('for','star4');
    label2.setAttribute('title','Good — 4 stars');
    label2.textContent = 'Good, 4 stars';

    var radio3 = document.createElement('input');
    var label3 = document.createElement('label');
    radio3.setAttribute('type','radio');
    radio3.setAttribute('id','star3');
    label3.setAttribute('for','star3');
    label3.setAttribute('title','Fair — 3 stars');
    label3.textContent = 'Fair, 3 stars';

    var radio4 = document.createElement('input');
    var label4 = document.createElement('label');
    radio4.setAttribute('type','radio');
    radio4.setAttribute('id','star2');
    label4.setAttribute('for','star2');
    label4.setAttribute('title','Bad — 2 stars');
    label4.textContent = 'Bad, 2 stars';

    var radio5 = document.createElement('input');
    var label5 = document.createElement('label');
    radio5.setAttribute('type','radio');
    radio5.setAttribute('id','star1');
    label5.setAttribute('for','star1');
    label5.setAttribute('title','Terrible — 1 stars');
    label5.textContent = 'Terrible, 1 stars';

    // Append the radio buttons and label elements to the fieldset
    fieldset.appendChild(radio1);
    fieldset.appendChild(label1);
    fieldset.appendChild(radio2);
    fieldset.appendChild(label2);
    fieldset.appendChild(radio3);
    fieldset.appendChild(label3);
    fieldset.appendChild(radio4);
    fieldset.appendChild(label4);
    fieldset.appendChild(radio5);
    fieldset.appendChild(label5);

    // Create clearfix and add it to the shadow root

    var clearfix = document.createElement('span');
    clearfix.setAttribute('class','clearfix');
    shadow.appendChild(clearfix);



    // Add event listeners to the radio buttons so that the star-rating value is set when they are selected
    radio1.addEventListener('click', () => {
      this.value = 5;
    });

    radio2.addEventListener('click', () => {
      this.value = 4;
    });

    radio3.addEventListener('click', () => {
      this.value = 3;
    });

    radio4.addEventListener('click', () => {
      this.value = 2;
    });

    radio5.addEventListener('click', () => {
      this.value = 1;
    });

    // Style the star-rating system

    var style = document.createElement('style');

    style.textContent = 'fieldset, label { margin: 0; padding: 0; }' +
                        'body { margin: 20px; }' +
                        '.rating {border: none;display: inline;height: 1rem;line-height: 1.5;}' +
                        '.rating > input { position: absolute; left: -9999px; }' +
                        '.rating > label:before {margin: 5px; font-size: 1rem;display: inline;content: "★";}' +
                        '.rating > label {color: #ccc;float: right;font-size: 0;}' +
                        '.clearfix {clear: both;}';

    // Apply custom colors if they have been set via attributes, or default colors if not
    if(this.hasAttribute('hcolor')) {
      var hcolor = this.getAttribute('hcolor');
      style.textContent += '.rating > input:checked ~ label, .rating:not(:checked) > label:hover, .rating:not(:checked) > label:hover ~ label {color:' + hcolor + ';}';
    } else {
      style.textContent += '.rating > input:checked ~ label, .rating:not(:checked) > label:hover, .rating:not(:checked) > label:hover ~ label {color: #FFD700;}';
    }

    if(this.hasAttribute('acolor')) {
      var acolor = this.getAttribute('acolor');
      style.textContent += '.rating > input:checked + label:hover, .rating > input:checked ~ label:hover, .rating > label:hover ~ input:checked ~ label, .rating > input:checked ~ label:hover ~ label {color:' + acolor + ';}';
    } else {
      style.textContent += '.rating > input:checked + label:hover, .rating > input:checked ~ label:hover, .rating > label:hover ~ input:checked ~ label, .rating > input:checked ~ label:hover ~ label {color: #FFED85;}';
    }

    // Apply style to the shadow document

    shadow.appendChild(style);

  }
}

// Define the new element
customElements.define('star-rating', StarRating);
