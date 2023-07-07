const festivals = require('../festivalsScraper');

async function fetchData() {
    try {
        const department = '92'; // Département souhaité
        const postalCode = '92100'; // Code postal souhaité
        const domain = 'Musiques actuelles'; // Domaine souhaité

        let festivalData;

        if (department && postalCode && domain) {
            festivalData = await festivals.getFestivalsByDepartmentPostalCodeAndDomain(department, postalCode, domain);
        } else if (department) {
            festivalData = await festivals.getFestivalsByDepartment(department);
        } else if (postalCode) {
            festivalData = await festivals.getFestivalsByPostalCode(postalCode);
        } else if (domain) {
            festivalData = await festivals.getFestivalsByDomain(domain);
        } else {
            festivalData = await festivals.getFestivals(); // Récupère tous les festivals
        }

        console.log(festivalData);
    } catch (error) {
        console.error('Erreur lors de la récupération des données :', error);
    }
}

fetchData();
