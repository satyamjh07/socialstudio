function printValue() {
  var headingValue = document.getElementById("Heading").value;
  var descriptionValue = document.getElementById("Description").value;
  var imageFiles = document.getElementById("ImageUpload").files;
  var videoFile = document.getElementById("VideoUpload").files[0];
  var textColor = document.getElementById("TextColor").value;
  var textFont = document.getElementById("TextFont").value;

  var div = document.getElementById("value");

  var heading = document.createElement("h1");
  heading.className = "heading";
  heading.textContent = headingValue;
  heading.style.color = textColor;
  heading.style.fontFamily = textFont;

  var description = document.createElement("p");
  description.className = "para";
  description.textContent = descriptionValue;
  description.style.color = textColor;
  description.style.fontFamily = textFont;

  // Create the swiper-container element
  var swiperContainer = document.createElement("div");
  swiperContainer.className = "swiper-container";

  // Create the swiper-wrapper element
  var swiperWrapper = document.createElement("div");
  swiperWrapper.className = "swiper-wrapper";

  // Create the slide elements for each image
  for (var i = 0; i < imageFiles.length; i++) {
    var imageFile = imageFiles[i];

    var swiperSlide = document.createElement("div");
    swiperSlide.className = "swiper-slide";

    var image = document.createElement("img");
    image.src = URL.createObjectURL(imageFile);
    image.className = "uploaded-image";

    swiperSlide.appendChild(image);
    swiperWrapper.appendChild(swiperSlide);
  }

  // Append the swiper-wrapper to the swiper-container
  swiperContainer.appendChild(swiperWrapper);

  // Create the sub-div element
  var subDiv = document.createElement("div");
  subDiv.className = "feed-content";
  subDiv.appendChild(heading);
  subDiv.appendChild(description);
  subDiv.appendChild(swiperContainer);

  // Append the sub-div to the main div
  div.appendChild(subDiv);

  // Initialize the Swiper
  new Swiper(".swiper-container", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // Clear input fields
  document.getElementById("Heading").value = "";
  document.getElementById("Description").value = "";
  document.getElementById("ImageUpload").value = null;
}





function editContent(subDiv) {
  var headingElement = subDiv.querySelector(".heading");
  var descriptionElement = subDiv.querySelector(".para");

  var headingValue = headingElement.textContent;
  var descriptionValue = descriptionElement.textContent;

  // Update the input fields with the current content
  document.getElementById("Heading").value = headingValue;
  document.getElementById("Description").value = descriptionValue;

  // Remove the existing content from the DOM
  subDiv.parentNode.removeChild(subDiv);

  // Set cursor focus on the heading input field
  document.getElementById("Heading").focus();
}

var ads = [
  {
    heading: "Winter Sale",
    description:
      "Stay warm this winter with our cozy collection. Enjoy amazing discounts on winter essentials.",
    buttons: ["Shop Now", "View Deals"],
    image: "../Images/winter-sale.jpg",
  },
  {
    heading: "Travel Adventure",
    description:
      "Embark on a thrilling travel adventure. Explore new destinations and create unforgettable memories.",
    buttons: ["Book Now", "Discover More"],
    image: "../Images/travel-adventure.jpg",
  },
  {
    heading: "Healthy Eating Guide",
    description:
      "Discover the secrets of healthy eating. Get tips and recipes for a balanced and nutritious diet.",
    buttons: ["Get Started", "Learn More"],
    image: "../Images/healthy-eating.jpg",
  },
  {
    heading: "Summer Vacation Deals",
    description:
      "Plan your dream summer vacation with our exclusive deals. Choose from a variety of destinations and packages.",
    buttons: ["Book Now", "Explore Offers"],
    image: "../Images/summer-sale.jpg",
  },
  {
    heading: "Gaming Zone",
    description:
      "Step into the ultimate gaming experience. Play the latest games on cutting-edge consoles and powerful gaming PCs.",
    buttons: ["Play Now", "Discover More"],
    image: "../Images/game-zone.jpg",
  },
  {
    heading: "Fashion Trends",
    description:
      "Stay stylish with the latest fashion trends. Upgrade your wardrobe with the season's hottest looks.",
    buttons: ["Shop Now", "Get Inspired"],
    image: "../Images/fashion-image.jpg",
  },
  {
    heading: "Home Decor Ideas",
    description:
      "Transform your living space with our inspiring home decor ideas. Create a cozy and stylish ambiance.",
    buttons: ["Shop Now", "Get Inspired"],
    image: "../Images/Home decore.jpg",
  },
  {
    heading: "Tech Gadgets",
    description:
      "Discover the latest tech gadgets and innovations. Stay ahead with cutting-edge technology.",
    buttons: ["Shop Now", "Explore More"],
    image: "../Images/Gadgets.jpg",
  },
  {
    heading: "Fitness Equipment",
    description:
      "Reach your fitness goals with our high-quality fitness equipment. Stay fit and healthy at home or the gym.",
    buttons: ["Shop Now", "Get Started"],
    image: "../Images/fitnes.jpg",
  },
  {
    heading: "Luxury Spa Experience",
    description:
      "Indulge in a luxurious spa experience. Relax, rejuvenate, and pamper yourself in a tranquil environment.",
    buttons: ["Book Now", "Explore Services"],
    image: "../Images/spa.jpg",
  },
  // Add more ads with their respective properties
];

// Add more ads with their respective images
function displayRandomAd() {
  var randomAdIndex = Math.floor(Math.random() * ads.length);
  var ad = ads[randomAdIndex];

  var adElement = document.createElement("div");
  adElement.className = "ad";

  var headingElement = document.createElement("h2");
  headingElement.textContent = ad.heading;
  headingElement.className = "heading";
  adElement.appendChild(headingElement);

  var descriptionElement = document.createElement("p");
  descriptionElement.textContent = ad.description;
  descriptionElement.className = "para";
  adElement.appendChild(descriptionElement);

  for (var i = 0; i < ad.buttons.length;) {
    var button = document.createElement("button");
    button.textContent = ad.buttons[i];
    button.className = "btn-primary";
    adElement.appendChild(button);
  }

  if (ad.image) {
    var imageElement = document.createElement("img");
    imageElement.src = ad.image;
    imageElement.className = "upload-image";
    adElement.appendChild(imageElement);
  }

  var notInterestedButton = document.createElement("button");
  notInterestedButton.textContent = "Not Interested";
  notInterestedButton.className = "btn-primary";
  notInterestedButton.addEventListener("click", function () {
    adElement.parentNode.removeChild(adElement);

    var messageElement = document.createElement("p");
    messageElement.textContent = "Sorry, we will try to improve ads and show you more personalized ads.";
    messageElement.className = "message";

    setTimeout(function () {
      messageElement.parentNode.removeChild(messageElement);
    }, 5000);

    var div = document.getElementById("value");
    div.appendChild(messageElement);
  });
  adElement.appendChild(notInterestedButton);

  var div = document.getElementById("value");
  div.appendChild(adElement);
}
setInterval(() => {
  displayRandomAd()
}, 10000);


function show(){
 var showval = document.getElementById("show");
  if(showval.style.display !== "none"){
    showval.style.display = "none"
  }
  else{
    showval.style.display = "flex"
  }
}