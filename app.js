fetch('profile.json')
    .then(response => response.json())
    .then(data => {
        // 1. Vložení jména [cite: 57]
        document.querySelector('#name').textContent = data.name;

        // 2. Vygenerování seznamu dovedností [cite: 58, 94]
        const skillsList = document.querySelector('#skills');
        data.skills.forEach(skill => {
            const li = document.createElement('li'); // [cite: 93]
            li.className = "p-6 bg-slate-50 rounded-2xl border border-gray-100 hover:shadow-md transition-all";
            li.textContent = skill; // [cite: 96]
            skillsList.appendChild(li); // [cite: 95]
        });

        // 3. Vygenerování zájmů [cite: 59]
        const interestsContainer = document.querySelector('#interests');
        data.interests.forEach(item => {
            const card = document.createElement('div');
            card.className = `group flex flex-col items-center justify-center p-6 sm:p-8 bg-white rounded-3xl shadow-sm border border-gray-100 ${item.color} transition-all duration-300 hover:-translate-y-2`;
            
            card.innerHTML = `
                <i class="fa-solid ${item.icon} text-3xl sm:text-5xl text-red-600 mb-4 group-hover:text-white transition-colors"></i>
                <h3 class="text-sm sm:text-lg font-bold italic group-hover:text-white">${item.title}</h3>
            `; // [cite: 97]
            
            interestsContainer.appendChild(card);
        });
    })
    .catch(error => {
        console.error('Chyba při načítání dat:', error); // [cite: 60, 91]
    });