let DUMMY_RECIPES = [
    {
        "id": 1,
        "name": "kissa",
        "desc": "Piparitaikina on helppo tehdä itse. Anna taikinan kovettua jääkaapissa yön yli.",
        "recipe": "1. Kiehauta rasva, sokeri, siirappi ja mausteet kattilassa. Jäähdytä seos.\n2. Sekoita joukkoon muna. Lisää jauhot, joihin on sekoitettu sooda. Sekoita taikina tasaiseksi. Vältä turhaa sekoittamista, jotta pipareista tulee rapeita. Anna taikinan kovettua jääkaapissa yön yli.\n3. Kauli piparitaikina noin 3 mm:n paksuiseksi levyksi. Leikkaa taikinasta piparimuoteilla erilaisia pipareita.\n4. Paista pieniä ja keskikokoisia pipareita 200 asteessa noin 5-8 minuuttia ja isoja pipareita 175 asteessa 8-12 minuuttia. Paista samankokoiset piparit samalla pellillä."
    },
    {
        "id": 2,
        "name": "koira",
        "desc": "Kokeile reseptiä esimerkiksi näillä tuotteilla",
        "recipe": "1. Kiehauta rasva, sokeri, siirappi ja mausteet kattilassa. Jäähdytä seos.\n2. Sekoita joukkoon muna. Lisää jauhot, joihin on sekoitettu sooda. Sekoita taikina tasaiseksi. Vältä turhaa sekoittamista, jotta pipareista tulee rapeita. Anna taikinan kovettua jääkaapissa yön yli.\n3. Kauli piparitaikina noin 3 mm:n paksuiseksi levyksi. Leikkaa taikinasta piparimuoteilla erilaisia pipareita.\n4. Paista pieniä ja keskikokoisia pipareita 200 asteessa noin 5-8 minuuttia ja isoja pipareita 175 asteessa 8-12 minuuttia. Paista samankokoiset piparit samalla pellillä."
    },
    /*{
        "id": 3,
        "name": "pipari",
        "desc": "Oletko verkkokauppaostoksilla? Valitsethan ensin kaupan, josta haluat tilauksesi tehdä.",
        "recipe": "1. Kiehauta rasva, sokeri, siirappi ja mausteet kattilassa. Jäähdytä seos.\n2. Sekoita joukkoon muna. Lisää jauhot, joihin on sekoitettu sooda. Sekoita taikina tasaiseksi. Vältä turhaa sekoittamista, jotta pipareista tulee rapeita. Anna taikinan kovettua jääkaapissa yön yli.\n3. Kauli piparitaikina noin 3 mm:n paksuiseksi levyksi. Leikkaa taikinasta piparimuoteilla erilaisia pipareita.\n4. Paista pieniä ja keskikokoisia pipareita 200 asteessa noin 5-8 minuuttia ja isoja pipareita 175 asteessa 8-12 minuuttia. Paista samankokoiset piparit samalla pellillä."
    },
    {
        "id": 4,
        "name": "kirahvui",
        "desc": "Piparitaikina on helppo tehdä itse. Anna taikinan kovettua jääkaapissa yön yli.",
        "recipe": "1. Kiehauta rasva, sokeri, siirappi ja mausteet kattilassa. Jäähdytä seos.\n2. Sekoita joukkoon muna. Lisää jauhot, joihin on sekoitettu sooda. Sekoita taikina tasaiseksi. Vältä turhaa sekoittamista, jotta pipareista tulee rapeita. Anna taikinan kovettua jääkaapissa yön yli.\n3. Kauli piparitaikina noin 3 mm:n paksuiseksi levyksi. Leikkaa taikinasta piparimuoteilla erilaisia pipareita.\n4. Paista pieniä ja keskikokoisia pipareita 200 asteessa noin 5-8 minuuttia ja isoja pipareita 175 asteessa 8-12 minuuttia. Paista samankokoiset piparit samalla pellillä."
    },
    {
        "id": 5,
        "name": "makkara",
        "desc": "Kokeile reseptiä esimerkiksi näillä tuotteilla",
        "recipe": "1. Kiehauta rasva, sokeri, siirappi ja mausteet kattilassa. Jäähdytä seos.\n2. Sekoita joukkoon muna. Lisää jauhot, joihin on sekoitettu sooda. Sekoita taikina tasaiseksi. Vältä turhaa sekoittamista, jotta pipareista tulee rapeita. Anna taikinan kovettua jääkaapissa yön yli.\n3. Kauli piparitaikina noin 3 mm:n paksuiseksi levyksi. Leikkaa taikinasta piparimuoteilla erilaisia pipareita.\n4. Paista pieniä ja keskikokoisia pipareita 200 asteessa noin 5-8 minuuttia ja isoja pipareita 175 asteessa 8-12 minuuttia. Paista samankokoiset piparit samalla pellillä."
    },
    {
        "id": 6,
        "name": "peruna",
        "desc": "Oletko verkkokauppaostoksilla? Valitsethan ensin kaupan, josta haluat tilauksesi tehdä.",
        "recipe": "1. Kiehauta rasva, sokeri, siirappi ja mausteet kattilassa. Jäähdytä seos.\n2. Sekoita joukkoon muna. Lisää jauhot, joihin on sekoitettu sooda. Sekoita taikina tasaiseksi. Vältä turhaa sekoittamista, jotta pipareista tulee rapeita. Anna taikinan kovettua jääkaapissa yön yli.\n3. Kauli piparitaikina noin 3 mm:n paksuiseksi levyksi. Leikkaa taikinasta piparimuoteilla erilaisia pipareita.\n4. Paista pieniä ja keskikokoisia pipareita 200 asteessa noin 5-8 minuuttia ja isoja pipareita 175 asteessa 8-12 minuuttia. Paista samankokoiset piparit samalla pellillä."
    }*/
]

const handler = (req: any, res: any) => {
    const userId = req.query.userId;
    const method = req.method;

    switch(method) {
        case 'GET':
                res.send(DUMMY_RECIPES);
                break;
        default:
            res.status(405).send("Error: Method not allowed");
    }
}

export default handler;