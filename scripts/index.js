const componentList = document.getElementById('component-list');

fetch('../assets/data/data.json')
    .then((res) => res.json())
    .then((components) => {
        components.forEach(component => {
            let componentDOM = document.createElement('section');
            componentDOM.classList.add('component');
            componentDOM.innerHTML = `
                <article class="component-name">
                    <img src="${component.icon}" alt="${generateAltText(component.category)}">
                    <p>${component.category}</p>
                </article>
                <p class="component-score"><span class="text-highlight">${component.score}</span> &nbsp;/ 100</p>
            `;
            componentList.appendChild(componentDOM);
        });
    });

function generateAltText(category) {
    switch(category) {
        case 'Reaction':
            return "Lightning bolt icon representing reaction speed";
        case 'Memory':
            return "Brain icon representing memory";
        case 'Verbal':
            return "Speaking bubble representing verbal abilities";
        case 'Visual':
            return "Eye representing visual abilities";
    }
}