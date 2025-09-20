function updateCities() {
    const state = document.getElementById('state').value;
    const citySelect = document.getElementById('city');
    citySelect.innerHTML = '<option value="">Select City</option>';
    let cities = [];

    switch (state) {
      case 'maharashtra':
        cities = ['Mumbai', 'Pune', 'Nagpur'];
        break;
      case 'goa':
        cities = ['Panaji', 'Margao', 'Vasco da Gama'];
        break;
      case 'kerala':
        cities = ['Thiruvananthapuram', 'Kochi', 'Kozhikode'];
        break;
      case 'rajasthan':
        cities = ['Jaipur', 'Udaipur', 'Jodhpur'];
        break;
      case 'uttarakhand':
        cities = ['Dehradun', 'Nainital', 'Haridwar'];
        break;
      case 'himachal-pradesh':
        cities = ['Shimla', 'Manali', 'Dharamshala'];
        break;
      case 'karnataka':
        cities = ['Bengaluru', 'Mysuru', 'Mangaluru'];
        break;
      case 'tamil-nadu':
        cities = ['Chennai', 'Coimbatore', 'Madurai'];
        break;
      case 'west-bengal':
        cities = ['Kolkata', 'Darjeeling', 'Siliguri'];
        break;
      case 'sikkim':
        cities = ['Gangtok', 'Pelling', 'Lachung'];
        break;
    }

    cities.forEach(city => {
      const option = document.createElement('option');
      option.value = city.toLowerCase().replace(/\s+/g, '-');
      option.textContent = city;
      citySelect.appendChild(option);
    });
  }

  function updateActivities() {
    const city = document.getElementById('city').value;
    const activityOptions = document.getElementById('activityOptions');
    activityOptions.innerHTML = '';
    let activities = [];

    switch (city) {
      case 'mumbai':
        activities = ['Scuba Diving', 'Paragliding', 'Trekking', 'Kayaking'];
        break;
      case 'pune':
        activities = ['Rock Climbing', 'Paragliding', 'Camping', 'Trekking'];
        break;
      case 'nagpur':
        activities = ['Wildlife Safari', 'Trekking', 'Boating', 'Camping'];
        break;
      case 'panaji':
        activities = ['Scuba Diving', 'Parasailing', 'Jet Skiing', 'Snorkeling'];
        break;
      case 'margao':
        activities = ['Scuba Diving', 'Parasailing', 'Jet Skiing', 'Snorkeling'];
        break;
      case 'vasco-da-gama':
        activities = ['Scuba Diving', 'Parasailing', 'Jet Skiing', 'Snorkeling'];
        break;
      case 'thiruvananthapuram':
        activities = ['Surfing', 'Paragliding', 'Trekking', 'Kayaking'];
        break;
      case 'kochi':
        activities = ['Scuba Diving', 'Paragliding', 'Kayaking', 'Trekking'];
        break;
      case 'kozhikode':
        activities = ['Trekking', 'Paragliding', 'Kayaking', 'Rock Climbing'];
        break;
      case 'jaipur':
        activities = ['Hot Air Ballooning', 'Camel Safari', 'Trekking', 'Zip Lining'];
        break;
      case 'udaipur':
        activities = ['Trekking', 'Horse Riding', 'Boating', 'Zip Lining'];
        break;
      case 'jodhpur':
        activities = ['Zip Lining', 'Camel Safari', 'Trekking', 'Rock Climbing'];
        break;
      case 'dehradun':
        activities = ['Trekking', 'Paragliding', 'Camping', 'River Rafting'];
        break;
      case 'nainital':
        activities = ['Trekking', 'Boating', 'Paragliding', 'Camping'];
        break;
      case 'haridwar':
        activities = ['River Rafting', 'Trekking', 'Camping', 'Rock Climbing'];
        break;
      case 'shimla':
        activities = ['Trekking', 'Paragliding', 'Skiing', 'Camping'];
        break;
      case 'manali':
        activities = ['Skiing', 'Paragliding', 'Trekking', 'River Rafting'];
        break;
      case 'dharamshala':
        activities = ['Trekking', 'Paragliding', 'Camping', 'Rock Climbing'];
        break;
      case 'bengaluru':
        activities = ['Rock Climbing', 'Trekking', 'Camping', 'Paragliding'];
        break;
      case 'mysuru':
        activities = ['Trekking', 'Camping', 'Rock Climbing', 'Paragliding'];
        break;
      case 'mangaluru':
        activities = ['Surfing', 'Scuba Diving', 'Trekking', 'Kayaking'];
        break;
      case 'chennai':
        activities = ['Surfing', 'Scuba Diving', 'Trekking', 'Paragliding'];
        break;
      case 'coimbatore':
        activities = ['Trekking', 'Paragliding', 'Camping', 'Rock Climbing'];
        break;
      case 'madurai':
        activities = ['Trekking', 'Paragliding', 'Camping', 'Rock Climbing'];
        break;
      case 'kolkata':
        activities = ['Trekking', 'Paragliding', 'Camping', 'Rock Climbing'];
        break;
      case 'darjeeling':
        activities = ['Trekking', 'Paragliding', 'Camping', 'Rock Climbing'];
        break;
      case 'siliguri':
        activities = ['Trekking', 'Paragliding', 'Camping', 'Rock Climbing'];
        break;
      case 'gangtok':
        activities = ['Trekking', 'Paragliding', 'Camping', 'Rock Climbing'];
        break;
      case 'pelling':
        activities = ['Trekking', 'Paragliding', 'Camping', 'Rock Climbing'];
        break;
      case 'lachung':
        activities = ['Trekking', 'Paragliding', 'Camping', 'Rock Climbing'];
        break;
    }

    activities.forEach(activity => {
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.value = activity.toLowerCase().replace(/\s+/g, '-');
      checkbox.id = activity.toLowerCase().replace(/\s+/g, '-');
      checkbox.className = 'mr-2';
      checkbox.addEventListener('change', updateSelectedActivities);

      const label = document.createElement('label');
      label.htmlFor = activity.toLowerCase().replace(/\s+/g, '-');
      label.textContent = activity;
      label.className = 'block text-gray-700';

      const div = document.createElement('div');
      div.className = 'flex items-center p-2';
      div.appendChild(checkbox);
      div.appendChild(label);

      activityOptions.appendChild(div);
    });
  }

  function toggleActivityList() {
    const activityOptions = document.getElementById('activityOptions');
    activityOptions.classList.toggle('hidden');
  }

  function updateSelectedActivities() {
    const selectedActivities = Array.from(document.querySelectorAll('#activityOptions input:checked'))
      .map(checkbox => checkbox.nextElementSibling.textContent)
      .join(', ');

    const activityButton = document.getElementById('activityButton');
    activityButton.textContent = selectedActivities || 'Select Activity';
  }

  document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('confirmationMessage').classList.remove('hidden');
  });

  document.addEventListener('click', function(event) {
    const activityButton = document.getElementById('activityButton');
    const activityOptions = document.getElementById('activityOptions');
    if (!activityButton.contains(event.target) && !activityOptions.contains(event.target)) {
      activityOptions.classList.add('hidden');
    }
  });