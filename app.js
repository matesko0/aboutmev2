fetch('profile.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Chyba sítě nebo soubor nenalezen');
        }
        return response.json();
    })
    .then(data => {

        const nameElement = document.querySelector('#name');
        if (nameElement) nameElement.textContent = data.name;

        const skillsList = document.querySelector('#skills');
        if (skillsList) {
            skillsList.innerHTML = ''; 
            
            data.skills.forEach(skill => {

                const div = document.createElement('div');

                div.className = `group p-6 bg-slate-50 rounded-2xl border border-gray-100 transition-all duration-300 ${skill.hoverColor || 'hover:bg-gray-100'}`;

                div.innerHTML = `
                    <i class="fa-solid ${skill.icon} text-2xl ${skill.color ? 'text-' + skill.color : 'text-gray-600'} mb-3 block group-hover:text-white transition-colors"></i>
                    <h3 class="font-bold mb-1 group-hover:text-white transition-colors">${skill.name}</h3>
                    <p class="text-sm text-gray-600 group-hover:text-red-100 transition-colors">${skill.description}</p>
                `;
                
                skillsList.appendChild(div);
            });
        }


        const interestsContainer = document.querySelector('#interests');
        if (interestsContainer) {
            interestsContainer.innerHTML = ''; 

            data.interests.forEach(interest => {
                const div = document.createElement('div');
                
                div.className = `group flex flex-col items-center justify-center p-6 sm:p-8 bg-white rounded-3xl shadow-sm border border-gray-100 transition-all duration-300 hover:-translate-y-2 ${interest.hoverColor}`;
                
                div.innerHTML = `
                    <i class="fa-solid ${interest.icon} text-3xl sm:text-5xl mb-4 text-gray-800 group-hover:text-white transition-colors"></i>
                    <h3 class="text-sm sm:text-lg font-bold italic group-hover:text-white transition-colors">${interest.title}</h3>
                `;
                
                interestsContainer.appendChild(div);
            });
        }
    })
    .catch(error => {
        console.error('Chyba při načítání JSON:', error);
        document.querySelector('#name').textContent = "Chyba načítání dat";
    });
