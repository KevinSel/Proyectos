export interface Noticia {
    id:number;
    titulo:string;
    cuerpo:string;
    resumen:string;
    seccion:string;
    imgSrc:string;
    imgAlt:string;
}

export const noticias:Array<Noticia> = [
    {   
    id:0,
    titulo:"soldados corriendo",
    cuerpo:"Cuerpo de la noticia",
    resumen:"Irure ad irure ipsum occaecat. Anim minim reprehenderit nisi fugiat exercitation laboris eu nulla ex reprehenderit. Enim minim esse laborum quis anim aliquip. Culpa non sit consectetur eiusmod ea minim aliqua reprehenderit magna cupidatat nostrud Lorem. Id eu amet commodo nisi occaecat aute magna reprehenderit nisi nulla amet. Et amet cupidatat qui id adipisicing veniam occaecat.",
    seccion:"politica", 
    imgSrc:"../assets/img/soldados.jpg",
    imgAlt:"soldados corriendo"
    },
    {
    id:1, 
    titulo:"jugadora de tenis", 
    cuerpo:"Cuerpo de la noticia", 
    resumen:"Amet aute consequat et minim aliquip minim in consectetur elit incididunt do ipsum dolore Lorem. Fugiat velit do consectetur qui nostrud duis est commodo pariatur pariatur ea non anim quis. Voluptate Lorem aute cillum non duis aute culpa. Quis laboris id ipsum labore ipsum eiusmod ea.", 
    seccion:"deporte", 
    imgSrc:"../assets/img/tenis.jpg",
    imgAlt:"jugadora de tenis"},
    {
    id:2, 
    titulo:"corales en el mar", 
    cuerpo:"Cuerpo de la noticia", 
    resumen:"Elit id tempor nisi excepteur. Ex ut adipisicing est elit ipsum officia ullamco excepteur amet sint incididunt sint ut laborum. Ad laboris excepteur voluptate consequat id cupidatat. Voluptate minim id esse Lorem. Aliquip minim officia officia duis officia veniam aute culpa reprehenderit elit pariatur esse dolore occaecat. Duis ex ullamco id laboris consequat sunt.", 
    seccion:"ciencia", 
    imgSrc:"../assets/img/corales.jpg",
    imgAlt:"corales en el mar"},
    {
    id:3, 
    titulo:"pila de monedas", 
    cuerpo:"Cuerpo de la noticia", 
    resumen:"Tempor duiss exercitation qui adipisicing. Velit magna nostrud proident deserunt anim nostrud voluptate labore proident esse. Elit excepteur aute ullamco anim nisi quis et id commodo. Reprehenderit labore reprehenderit exercitation Lorem eiusmod anim aliquip qui pariatur et reprehenderit anim. Esse voluptate laborum labore ad ut in mollit esse nulla irure irure.", 
    seccion:"economia",
    imgSrc:"../assets/img/monedas.jpg",
    imgAlt:"pila de monedas"},
    {
    id:4, 
    titulo:"manchester y madrid", 
    cuerpo:"Cuerpo de la noticia", 
    resumen:"Nulla anim consectetur magna cillum sit in aliqua duis qui. Labore cupidatat eiusmod irure ut in velit irure aliquip magna aliqua do. Est cillum eu deserunt tempor non enim labore qui et laboris. Ad labore proident labore proident dolor veniam ad tempor dolor.", 
    seccion:"deporte",
    imgSrc:"../assets/img/futbol.webp",
    imgAlt:"manchester y madrid"},
    {
    id:5, 
    titulo:"caricatura hablando", 
    cuerpo:"Cuerpo de la noticia", 
    resumen:"Nisi duis voluptate sunt nulla excepteur dolore. Duis cillum nulla elit culpa quis in ad irure. Nostrud occaecat dolor ipsum sunt labore non. Adipisicing ullamco do proident excepteur fugiat veniam dolor elit sint. Cillum ea ea officia ad pariatur. Minim sit veniam sint et nisi quis amet commodo labore et eiusmod.", 
    seccion:"politica", 
    imgSrc:"../assets/img/politico.jpg",
    imgAlt:"politico hablando"}  
]



