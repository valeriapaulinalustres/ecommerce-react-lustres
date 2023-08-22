const mockedResponse = {
   
    category:  "interior",
    description: "Son plantas terrestres (a veces epífitas) herbáceas, algunas de porte semiarbustivo o incluso pequeños árboles y otras trepadoras, perennes excepto en climas fríos, es el aérea donde la planta muere. Las flores son muy diversas tanto en forma y tamaño como en color; son unisexuales, la masculina contiene numerosos estambres, la femenina posee un ovario inferior con 2 o 4 estigmas ramificados. El fruto es una cápsula alada que contiene gran cantidad de diminutas semillas. Las hojas son asimétricas y al igual que las flores, difieren mucho de una a otra especie, desde variadas como las de Begonia brevirimosa a verde brillante en Begonia ulmifolia.",
    id: "7VuC6wvLjtJI2gQ1EJ5G",
    pictureUrl: "https://cdn.pixabay.com/photo/2018/07/18/21/52/begonias-3547441__340.jpg",
    price: "300",
    stock: 6,
    title: "Begonia"
            
}

export default {
    get: jest.fn().mockResolvedValue(
        mockedResponse
    )
}