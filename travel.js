let user=document.getElementById("user");
let loginBtn=document.getElementById("loginBtn");
let placeName=document.getElementById("placeName");
let submit=document.getElementById("submit");






submit.addEventListener("click",function() {
if(placeName.value=="")
{
    console.log(placeName.value)
    alert("Fill Form");
}
else{
    alert(placeName.value +" Tour Booked");
}
})


//book script
   const stateCityMap = {
    "Andhra Pradesh": ["Visakhapatnam", "Vijayawada", "Guntur", "Nellore", "Kurnool"],
    "Karnataka": ["Bengaluru", "Mysuru", "Mangaluru", "Hubballi", "Belagavi"],
    "Kerala": ["Kochi", "Thiruvananthapuram", "Kozhikode", "Thrissur", "Alappuzha"],
    "Maharashtra": ["Mumbai", "Pune", "Nagpur", "Nashik", "Aurangabad"],
    "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem"],
    "Uttar Pradesh": ["Lucknow", "Kanpur", "Ghaziabad", "Agra", "Varanasi"],
    "West Bengal": ["Kolkata", "Howrah", "Durgapur", "Siliguri", "Asansol"],
    "Rajasthan": ["Jaipur", "Jodhpur", "Udaipur", "Kota", "Ajmer"],
    "Gujarat": ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Bhavnagar"],
    "Punjab": ["Amritsar", "Ludhiana", "Jalandhar", "Patiala", "Bathinda"]
   };

   const citySiteMap = {
    "Visakhapatnam": ["Ramakrishna Beach", "Kailasagiri", "Araku Valley"],
    "Vijayawada": ["Kanaka Durga Temple", "Prakasam Barrage", "Undavalli Caves"],
    "Guntur": ["Amaravathi", "Uppalapadu Bird Sanctuary", "Kondaveedu Fort"],
    "Nellore": ["Ranganatha Temple", "Pulicat Lake", "Venkatagiri Fort"],
    "Kurnool": ["Belum Caves", "Oravakallu Rock Garden", "Konda Reddy Fort"],
    "Bengaluru": ["Lalbagh Botanical Garden", "Bangalore Palace", "Cubbon Park"],
    "Mysuru": ["Mysore Palace", "Chamundi Hill", "Brindavan Gardens"],
    "Mangaluru": ["Panambur Beach", "Kadri Manjunath Temple", "St. Aloysius Chapel"],
    "Hubballi": ["Unkal Lake", "Nrupatunga Betta", "Chandramouleshwara Temple"],
    "Belagavi": ["Gokak Falls", "Belgaum Fort", "Kapileshwara Temple"],
    "Kochi": ["Fort Kochi", "Mattancherry Palace", "Marine Drive"],
    "Thiruvananthapuram": ["Padmanabhaswamy Temple", "Kovalam Beach", "Napier Museum"],
    "Kozhikode": ["Kozhikode Beach", "Mananchira Square", "Beypore"],
    "Thrissur": ["Vadakkunnathan Temple", "Athirappilly Waterfalls", "Thrissur Zoo"],
    "Alappuzha": ["Alleppey Beach", "Vembanad Lake", "Krishnapuram Palace"],
    "Mumbai": ["Gateway of India", "Marine Drive", "Chhatrapati Shivaji Maharaj Terminus"],
    "Pune": ["Shaniwar Wada", "Aga Khan Palace", "Sinhagad Fort"],
    "Nagpur": ["Deekshabhoomi", "Futala Lake", "Sitabuldi Fort"],
    "Nashik": ["Trimbakeshwar Temple", "Sula Vineyards", "Panchavati"],
    "Aurangabad": ["Ajanta Caves", "Ellora Caves", "Bibi Ka Maqbara"],
    "Chennai": ["Marina Beach", "Fort St. George", "Kapaleeshwarar Temple"],
    "Coimbatore": ["Marudamalai Temple", "Dhyanalinga", "VOC Park"],
    "Madurai": ["Meenakshi Temple", "Thirumalai Nayakkar Mahal", "Gandhi Museum"],
    "Tiruchirappalli": ["Rockfort Temple", "Srirangam Temple", "Kallanai Dam"],
    "Salem": ["Yercaud", "1008 Lingam Temple", "Mettur Dam"],
    "Lucknow": ["Bara Imambara", "Rumi Darwaza", "Hazratganj"],
    "Kanpur": ["Bithoor", "JK Temple", "Moti Jheel"],
    "Ghaziabad": ["Swarn Jayanti Park", "ISKCON Temple", "Drizzling Land"],
    "Agra": ["Taj Mahal", "Agra Fort", "Fatehpur Sikri"],
    "Varanasi": ["Kashi Vishwanath Temple", "Dashashwamedh Ghat", "Sarnath"],
    "Kolkata": ["Victoria Memorial", "Howrah Bridge", "Dakshineswar Kali Temple"],
    "Howrah": ["Belur Math", "Howrah Bridge", "Botanical Gardens"],
    "Durgapur": ["Durgapur Barrage", "Bhabani Pathak's Tilla", "Rahreswar Shibtola"],
    "Siliguri": ["Mahananda Wildlife Sanctuary", "ISKCON Temple", "Salugara Monastery"],
    "Asansol": ["Kalyaneshwari Temple", "Nehru Park", "Satabdi Park"],
    "Jaipur": ["Hawa Mahal", "Amber Fort", "City Palace"],
    "Jodhpur": ["Mehrangarh Fort", "Umaid Bhawan Palace", "Jaswant Thada"],
    "Udaipur": ["City Palace", "Lake Pichola", "Jag Mandir"],
    "Kota": ["Seven Wonders Park", "Kishore Sagar", "Garadia Mahadev Temple"],
    "Ajmer": ["Ajmer Sharif Dargah", "Ana Sagar Lake", "Adhai Din Ka Jhonpra"],
    "Ahmedabad": ["Sabarmati Ashram", "Kankaria Lake", "Adalaj Stepwell"],
    "Surat": ["Dumas Beach", "Sarthana Nature Park", "Dutch Garden"],
    "Vadodara": ["Laxmi Vilas Palace", "Sayaji Garden", "EME Temple"],
    "Rajkot": ["Kaba Gandhi No Delo", "Rotary Dolls Museum", "Watson Museum"],
    "Bhavnagar": ["Takhteshwar Temple", "Victoria Park", "Gaurishankar Lake"],
    "Amritsar": ["Golden Temple", "Jallianwala Bagh", "Wagah Border"],
    "Ludhiana": ["Punjab Agricultural University Museum", "Nehru Rose Garden", "Rakh Bagh Park"],
    "Jalandhar": ["Devi Talab Mandir", "Wonderland Theme Park", "Pushpa Gujral Science City"],
    "Patiala": ["Qila Mubarak", "Sheesh Mahal", "Baradari Garden"],
    "Bathinda": ["Qila Mubarak", "Rose Garden", "Chetak Park"]
   };

   function updateCities() {
    const stateSelect = document.getElementById("placeName");
    const citySelect = document.getElementById("cityName");
    const selectedState = stateSelect.value;

    citySelect.innerHTML = '<option value="">Select City</option>';

    if (selectedState && stateCityMap[selectedState]) {
     stateCityMap[selectedState].forEach(city => {
      const option = document.createElement("option");
      option.value = city;
      option.textContent = city;
      citySelect.appendChild(option);
     });
    }
   }

   function updateSites() {
    const citySelect = document.getElementById("cityName");
    const siteSelect = document.getElementById("siteName");
    const selectedCity = citySelect.value;

    // Clear previous site options
    siteSelect.innerHTML = '';

    if (selectedCity && citySiteMap[selectedCity]) {
     citySiteMap[selectedCity].forEach(site => {
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.value = site;
      checkbox.id = site;
      checkbox.name = "sites";
      const label = document.createElement("label");
      label.htmlFor = site;
      label.textContent = site;
      const div = document.createElement("div");
      div.className = "flex items-center mb-2";
      div.appendChild(checkbox);
      div.appendChild(label);
      siteSelect.appendChild(div);
     });
    }
   }
 












   let users = [];

   function toggleForm(formType) {
       if (formType === 'login') {
           document.getElementById('login-container').style.display = 'block';
           document.getElementById('signup-container').style.display = 'none';
       } else {
           document.getElementById('login-container').style.display = 'none';
           document.getElementById('signup-container').style.display = 'block';
       }
   }

   function handleSignup(event) {
       event.preventDefault();
       const name = document.getElementById('signup-name').value;
       const email = document.getElementById('signup-email').value;
       const password = document.getElementById('signup-password').value;
       const confirmPassword = document.getElementById('signup-confirm-password').value;

       if (password !== confirmPassword) {
           alert('Passwords do not match');
           return;
       }

       users.push({ name, email, password });
       alert('Signup successful');
       toggleForm('login');
   }

   function handleLogin(event) {
       event.preventDefault();
       const email = document.getElementById('login-email').value;
       const password = document.getElementById('login-password').value;

       const user = users.find(user => user.email === email && user.password === password);

       if (!user) {
           document.getElementById('login-error').style.display = 'block';
       } else {
           document.getElementById('login-error').style.display = 'none';
           alert('Login successful');
           closeModal();
       }
   }

   function openModal() {
       document.getElementById('auth-modal').style.display = 'flex';
   }

   function closeModal() {
       document.getElementById('auth-modal').style.display = 'none';
   }

   window.onclick = function(event) {
       if (event.target == document.getElementById('auth-modal')) {
           closeModal();
       }
   }