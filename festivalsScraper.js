const axios = require('axios');

async function getFestivalsByDepartment(department) {
    try {
        const filters = {
            'refine.departement': department
        };
        const apiUrl = `https://data.culture.gouv.fr/api/records/1.0/search/?dataset=panorama-des-festivals&q=&facet=region&facet=domaine&facet=complement_domaine&facet=departement&facet=mois_habituel_de_debut&refine.departement=${department}`;
        const response = await axios.get(apiUrl, {
            params: filters
        });

        return response.data.records;
    } catch (error) {
        console.error('Erreur lors de la récupération des festivals :', error);
        throw error;
    }
}

async function getFestivalsByPostalCode(postalCode) {
    try {
        const filters = {
            'refine.code_postal': postalCode
        };
        const apiUrl = `https://data.culture.gouv.fr/api/records/1.0/search/?dataset=panorama-des-festivals&q=&facet=region&facet=domaine&facet=complement_domaine&facet=departement&facet=mois_habituel_de_debut&refine.code_postal=${postalCode}`;
        const response = await axios.get(apiUrl, {
            params: filters
        });

        return response.data.records;
    } catch (error) {
        console.error('Erreur lors de la récupération des festivals :', error);
        throw error;
    }
}

//By domain 

async function getFestivalsByDomain(domain) {
    try {
        const filters = {
            'refine.domaine': domain
        };
        const apiUrl = `https://data.culture.gouv.fr/api/records/1.0/search/?dataset=panorama-des-festivals&q=&facet=region&facet=domaine&facet=complement_domaine&facet=departement&facet=mois_habituel_de_debut&refine.domaine=${domain}`;
        const response = await axios.get(apiUrl, {
            params: filters
        });
        
        return response.data.records;
    } catch (error) {
        console.error('Erreur lors de la récupération des festivals :', error);
        throw error;
    }
}

// By all 
async function getFestivalsByDepartmentPostalCodeAndDomain(department, postalCode, domain) {
    try {
        const filters = {
            'refine.departement': department,
            'refine.code_postal': postalCode,
            'refine.domaine': domain
        };

        const apiUrl = `https://data.culture.gouv.fr/api/records/1.0/search/?dataset=panorama-des-festivals&q=&facet=region&facet=domaine&facet=complement_domaine&facet=departement&facet=mois_habituel_de_debut`;
        const response = await axios.get(apiUrl, {
            params: filters
        });

        return response.data.records;
    } catch (error) {
        console.error('Erreur lors de la récupération des festivals :', error);
        throw error;
    }
}

module.exports = {
    getFestivalsByDepartment,
    getFestivalsByPostalCode,
    getFestivalsByDomain,
    getFestivalsByDepartmentPostalCodeAndDomain
};