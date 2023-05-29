export interface Noticia {
    id:number;
    titulo:string;
    cuerpo:string;
    resumen:string;
    seccion:string;
    imgSrc:string;
    imgAlt:string;
    autor:string;
    fecha:string;
    trend: boolean;
    canClick?:boolean;
}

export const noticias:Array<Noticia> = [
    {   
    id:-100,
    titulo:"Esta noticia no existe",
    cuerpo:"-Esta noticia no existe-",
    resumen:"",
    seccion:"", 
    imgSrc:"../assets/img/logo.png",
    imgAlt:"Error",
    autor: "",
    fecha: "",
    canClick:false,
    trend: false,
    },
    {   
    id:0,
    titulo:"construyen X en Z porque Y, tardan Q años por P euros",
    cuerpo:`Pariatur fugiat aliquip reprehenderit incididunt exercitation qui nulla adipisicing veniam amet velit laborum. Velit sit nulla aliqua occaecat ad occaecat reprehenderit veniam esse. Proident ea amet consequat ea tempor anim. Qui est duis culpa reprehenderit aliquip adipisicing amet do. <br/>

Esse minim aliquip aliqua voluptate laboris adipisicing. Eiusmod ad eiusmod proident cupidatat dolor irure dolor proident cupidatat sint. Irure tempor dolore consequat incididunt velit dolor sint reprehenderit ex et et ipsum culpa elit. Voluptate nisi ad elit quis cupidatat ipsum ipsum. Minim elit commodo ex officia sunt officia ut sint eiusmod dolore. Et incididunt mollit ex laborum enim tempor ipsum esse. Cupidatat enim ex magna incididunt.

Exercitation duis proident ullamco tempor cillum magna labore consequat quis deserunt sint tempor dolor magna. Elit nulla culpa aliquip non ea ullamco eu ut excepteur. Voluptate deserunt cupidatat velit sunt id ex.

Consectetur aliquip dolor minim do culpa. Reprehenderit id irure quis laboris et ea quis sit occaecat. Velit ullamco commodo mollit cillum cillum. Cillum et velit ex irure eiusmod velit.

Duis velit consequat consectetur tempor elit esse deserunt velit nisi. Proident excepteur proident dolor ipsum in. Id proident et pariatur ipsum voluptate occaecat. Fugiat officia aute dolore duis ea officia id consectetur in do commodo aliquip.

Anim reprehenderit qui pariatur deserunt. Est deserunt minim dolore nostrud adipisicing labore adipisicing qui consequat est aliqua ad. Enim exercitation labore consequat elit fugiat aliquip ut ea consequat elit.

Tempor velit eu ex excepteur qui aliqua enim consequat mollit. Laboris veniam labore commodo cupidatat ad magna. Ex ipsum anim ipsum reprehenderit adipisicing amet aliquip et adipisicing dolor.

Laborum ut commodo ipsum laborum est occaecat elit reprehenderit aliqua sint. Non ad occaecat qui id enim excepteur ut irure in sint fugiat labore est. Aute sunt duis non id magna nostrud ea cupidatat incididunt. Laborum incididunt amet proident dolore duis ullamco ullamco. Irure adipisicing nisi velit dolor culpa irure sint. Aliquip sunt sint qui commodo sunt cupidatat duis Lorem ex. Adipisicing ullamco adipisicing qui adipisicing velit fugiat in anim officia dolor eu ea do aliqua.

Dolore ad non sunt id fugiat enim voluptate ullamco quis non elit. Labore fugiat nostrud sint minim ex est sint amet voluptate et duis ea. Irure officia occaecat occaecat labore. Id sit quis enim ad aute. Laboris nostrud Lorem tempor aliquip nulla reprehenderit excepteur. Laborum officia ea dolore et aute officia ullamco minim aute qui anim cillum consequat excepteur. Eu velit quis culpa veniam id cillum velit incididunt ipsum dolore qui in aliquip ad.

Proident in tempor non enim aliquip ad. Proident in eu sint pariatur nostrud et. Culpa reprehenderit ipsum sit excepteur quis dolor. Magna sit amet aliquip commodo dolor amet pariatur et mollit culpa id sit. Lorem ullamco minim nisi adipisicing eu laboris. Velit aliquip proident tempor id duis.`,

    resumen:"Iruressssssssss ad irure ipsum occaecat. Anim minim reprehenderit nisi fugiat exercitation laboris eu nulla ex reprehenderit. Enim minim esse laborum quis anim aliquip. Culpa non sit consectetur eiusmod ea minim aliqua reprehenderit magna cupidatat nostrud Lorem. Id eu amet commodo nisi occaecat aute magna reprehenderit nisi nulla amet. Et amet cupidatat qui id adipisicing veniam occaecat.",
    seccion:"opinion", 
    imgSrc:"../assets/img/opinion1.jpg",
    imgAlt:"entrevistadora en la calle",
    autor:"Jonathan Granado",
    fecha:"10/05/2023",
    trend: true,
    },
    {
    id:1, 
    titulo:"Nueva impresion de monedas", 
    cuerpo:`Pariatur fugiat aliquip reprehenderit incididunt exercitation qui nulla adipisicing veniam amet velit laborum. Velit sit nulla aliqua occaecat ad occaecat reprehenderit veniam esse. Proident ea amet consequat ea tempor anim. Qui est duis culpa reprehenderit aliquip adipisicing amet do. <br/>

    Esse minim aliquip aliqua voluptate laboris adipisicing. Eiusmod ad eiusmod proident cupidatat dolor irure dolor proident cupidatat sint. Irure tempor dolore consequat incididunt velit dolor sint reprehenderit ex et et ipsum culpa elit. Voluptate nisi ad elit quis cupidatat ipsum ipsum. Minim elit commodo ex officia sunt officia ut sint eiusmod dolore. Et incididunt mollit ex laborum enim tempor ipsum esse. Cupidatat enim ex magna incididunt.
    
    Exercitation duis proident ullamco tempor cillum magna labore consequat quis deserunt sint tempor dolor magna. Elit nulla culpa aliquip non ea ullamco eu ut excepteur. Voluptate deserunt cupidatat velit sunt id ex.
    
    Consectetur aliquip dolor minim do culpa. Reprehenderit id irure quis laboris et ea quis sit occaecat. Velit ullamco commodo mollit cillum cillum. Cillum et velit ex irure eiusmod velit.
    
    Duis velit consequat consectetur tempor elit esse deserunt velit nisi. Proident excepteur proident dolor ipsum in. Id proident et pariatur ipsum voluptate occaecat. Fugiat officia aute dolore duis ea officia id consectetur in do commodo aliquip.
    
    Anim reprehenderit qui pariatur deserunt. Est deserunt minim dolore nostrud adipisicing labore adipisicing qui consequat est aliqua ad. Enim exercitation labore consequat elit fugiat aliquip ut ea consequat elit.
    
    Tempor velit eu ex excepteur qui aliqua enim consequat mollit. Laboris veniam labore commodo cupidatat ad magna. Ex ipsum anim ipsum reprehenderit adipisicing amet aliquip et adipisicing dolor.
    
    Laborum ut commodo ipsum laborum est occaecat elit reprehenderit aliqua sint. Non ad occaecat qui id enim excepteur ut irure in sint fugiat labore est. Aute sunt duis non id magna nostrud ea cupidatat incididunt. Laborum incididunt amet proident dolore duis ullamco ullamco. Irure adipisicing nisi velit dolor culpa irure sint. Aliquip sunt sint qui commodo sunt cupidatat duis Lorem ex. Adipisicing ullamco adipisicing qui adipisicing velit fugiat in anim officia dolor eu ea do aliqua.
    
    Dolore ad non sunt id fugiat enim voluptate ullamco quis non elit. Labore fugiat nostrud sint minim ex est sint amet voluptate et duis ea. Irure officia occaecat occaecat labore. Id sit quis enim ad aute. Laboris nostrud Lorem tempor aliquip nulla reprehenderit excepteur. Laborum officia ea dolore et aute officia ullamco minim aute qui anim cillum consequat excepteur. Eu velit quis culpa veniam id cillum velit incididunt ipsum dolore qui in aliquip ad.
    
    Proident in tempor non enim aliquip ad. Proident in eu sint pariatur nostrud et. Culpa reprehenderit ipsum sit excepteur quis dolor. Magna sit amet aliquip commodo dolor amet pariatur et mollit culpa id sit. Lorem ullamco minim nisi adipisicing eu laboris. Velit aliquip proident tempor id duis.`,
        resumen:"Amet aute consequat et minim aliquip minim in consectetur elit incididunt do ipsum dolore Lorem. Fugiat velit do consectetur qui nostrud duis est commodo pariatur pariatur ea non anim quis. Voluptate Lorem aute cillum non duis aute culpa. Quis laboris id ipsum labore ipsum eiusmod ea.", 
    seccion:"economia", 
    imgSrc:"../assets/img/economia1.jpg",
    imgAlt:"pila de monedas",
    autor:"Jonathan Granado",
    fecha:"10/05/2023",
    trend: true,
    },
    {
    id:2, 
    titulo:"Habla X acerca de Y", 
    cuerpo:`Pariatur fugiat aliquip reprehenderit incididunt exercitation qui nulla adipisicing veniam amet velit laborum. Velit sit nulla aliqua occaecat ad occaecat reprehenderit veniam esse. Proident ea amet consequat ea tempor anim. Qui est duis culpa reprehenderit aliquip adipisicing amet do. <br/>

    Esse minim aliquip aliqua voluptate laboris adipisicing. Eiusmod ad eiusmod proident cupidatat dolor irure dolor proident cupidatat sint. Irure tempor dolore consequat incididunt velit dolor sint reprehenderit ex et et ipsum culpa elit. Voluptate nisi ad elit quis cupidatat ipsum ipsum. Minim elit commodo ex officia sunt officia ut sint eiusmod dolore. Et incididunt mollit ex laborum enim tempor ipsum esse. Cupidatat enim ex magna incididunt.
    
    Exercitation duis proident ullamco tempor cillum magna labore consequat quis deserunt sint tempor dolor magna. Elit nulla culpa aliquip non ea ullamco eu ut excepteur. Voluptate deserunt cupidatat velit sunt id ex.
    
    Consectetur aliquip dolor minim do culpa. Reprehenderit id irure quis laboris et ea quis sit occaecat. Velit ullamco commodo mollit cillum cillum. Cillum et velit ex irure eiusmod velit.
    
    Duis velit consequat consectetur tempor elit esse deserunt velit nisi. Proident excepteur proident dolor ipsum in. Id proident et pariatur ipsum voluptate occaecat. Fugiat officia aute dolore duis ea officia id consectetur in do commodo aliquip.
    
    Anim reprehenderit qui pariatur deserunt. Est deserunt minim dolore nostrud adipisicing labore adipisicing qui consequat est aliqua ad. Enim exercitation labore consequat elit fugiat aliquip ut ea consequat elit.
    
    Tempor velit eu ex excepteur qui aliqua enim consequat mollit. Laboris veniam labore commodo cupidatat ad magna. Ex ipsum anim ipsum reprehenderit adipisicing amet aliquip et adipisicing dolor.
    
    Laborum ut commodo ipsum laborum est occaecat elit reprehenderit aliqua sint. Non ad occaecat qui id enim excepteur ut irure in sint fugiat labore est. Aute sunt duis non id magna nostrud ea cupidatat incididunt. Laborum incididunt amet proident dolore duis ullamco ullamco. Irure adipisicing nisi velit dolor culpa irure sint. Aliquip sunt sint qui commodo sunt cupidatat duis Lorem ex. Adipisicing ullamco adipisicing qui adipisicing velit fugiat in anim officia dolor eu ea do aliqua.
    
    Dolore ad non sunt id fugiat enim voluptate ullamco quis non elit. Labore fugiat nostrud sint minim ex est sint amet voluptate et duis ea. Irure officia occaecat occaecat labore. Id sit quis enim ad aute. Laboris nostrud Lorem tempor aliquip nulla reprehenderit excepteur. Laborum officia ea dolore et aute officia ullamco minim aute qui anim cillum consequat excepteur. Eu velit quis culpa veniam id cillum velit incididunt ipsum dolore qui in aliquip ad.
    
    Proident in tempor non enim aliquip ad. Proident in eu sint pariatur nostrud et. Culpa reprehenderit ipsum sit excepteur quis dolor. Magna sit amet aliquip commodo dolor amet pariatur et mollit culpa id sit. Lorem ullamco minim nisi adipisicing eu laboris. Velit aliquip proident tempor id duis.`,
        resumen:"Elit id tempor nisi excepteur. Ex ut adipisicing est elit ipsum officia ullamco excepteur amet sint incididunt sint ut laborum. Ad laboris excepteur voluptate consequat id cupidatat. Voluptate minim id esse Lorem. Aliquip minim officia officia duis officia veniam aute culpa reprehenderit elit pariatur esse dolore occaecat. Duis ex ullamco id laboris consequat sunt.", 
    seccion:"politica", 
    imgSrc:"../assets/img/politica1.jpg",
    imgAlt:"X hablando",
    autor:"Noemi Segarra",
    fecha:"11/05/2023",
    trend: true,
    },
    {
    id:3, 
    titulo:"biologos descubren nueva bacteria", 
    cuerpo:`Pariatur fugiat aliquip reprehenderit incididunt exercitation qui nulla adipisicing veniam amet velit laborum. Velit sit nulla aliqua occaecat ad occaecat reprehenderit veniam esse. Proident ea amet consequat ea tempor anim. Qui est duis culpa reprehenderit aliquip adipisicing amet do. <br/>

    Esse minim aliquip aliqua voluptate laboris adipisicing. Eiusmod ad eiusmod proident cupidatat dolor irure dolor proident cupidatat sint. Irure tempor dolore consequat incididunt velit dolor sint reprehenderit ex et et ipsum culpa elit. Voluptate nisi ad elit quis cupidatat ipsum ipsum. Minim elit commodo ex officia sunt officia ut sint eiusmod dolore. Et incididunt mollit ex laborum enim tempor ipsum esse. Cupidatat enim ex magna incididunt.
    
    Exercitation duis proident ullamco tempor cillum magna labore consequat quis deserunt sint tempor dolor magna. Elit nulla culpa aliquip non ea ullamco eu ut excepteur. Voluptate deserunt cupidatat velit sunt id ex.
    
    Consectetur aliquip dolor minim do culpa. Reprehenderit id irure quis laboris et ea quis sit occaecat. Velit ullamco commodo mollit cillum cillum. Cillum et velit ex irure eiusmod velit.
    
    Duis velit consequat consectetur tempor elit esse deserunt velit nisi. Proident excepteur proident dolor ipsum in. Id proident et pariatur ipsum voluptate occaecat. Fugiat officia aute dolore duis ea officia id consectetur in do commodo aliquip.
    
    Anim reprehenderit qui pariatur deserunt. Est deserunt minim dolore nostrud adipisicing labore adipisicing qui consequat est aliqua ad. Enim exercitation labore consequat elit fugiat aliquip ut ea consequat elit.
    
    Tempor velit eu ex excepteur qui aliqua enim consequat mollit. Laboris veniam labore commodo cupidatat ad magna. Ex ipsum anim ipsum reprehenderit adipisicing amet aliquip et adipisicing dolor.
    
    Laborum ut commodo ipsum laborum est occaecat elit reprehenderit aliqua sint. Non ad occaecat qui id enim excepteur ut irure in sint fugiat labore est. Aute sunt duis non id magna nostrud ea cupidatat incididunt. Laborum incididunt amet proident dolore duis ullamco ullamco. Irure adipisicing nisi velit dolor culpa irure sint. Aliquip sunt sint qui commodo sunt cupidatat duis Lorem ex. Adipisicing ullamco adipisicing qui adipisicing velit fugiat in anim officia dolor eu ea do aliqua.
    
    Dolore ad non sunt id fugiat enim voluptate ullamco quis non elit. Labore fugiat nostrud sint minim ex est sint amet voluptate et duis ea. Irure officia occaecat occaecat labore. Id sit quis enim ad aute. Laboris nostrud Lorem tempor aliquip nulla reprehenderit excepteur. Laborum officia ea dolore et aute officia ullamco minim aute qui anim cillum consequat excepteur. Eu velit quis culpa veniam id cillum velit incididunt ipsum dolore qui in aliquip ad.
    
    Proident in tempor non enim aliquip ad. Proident in eu sint pariatur nostrud et. Culpa reprehenderit ipsum sit excepteur quis dolor. Magna sit amet aliquip commodo dolor amet pariatur et mollit culpa id sit. Lorem ullamco minim nisi adipisicing eu laboris. Velit aliquip proident tempor id duis.`,
        resumen:"Tempor duiss exercitation qui adipisicing. Velit magna nostrud proident deserunt anim nostrud voluptate labore proident esse. Elit excepteur aute ullamco anim nisi quis et id commodo. Reprehenderit labore reprehenderit exercitation Lorem eiusmod anim aliquip qui pariatur et reprehenderit anim. Esse voluptate laborum labore ad ut in mollit esse nulla irure irure.", 
    seccion:"ciencia",
    imgSrc:"../assets/img/ciencia1.jpg",
    imgAlt:"X usando un microscopio",
    autor:"Jone Figueras",
    fecha:"11/05/2023",
    trend: true,
    },
    {
    id:4, 
    titulo:"que pienso de Y, por jonathan granado", 
    cuerpo:`Pariatur fugiat aliquip reprehenderit incididunt exercitation qui nulla adipisicing veniam amet velit laborum. Velit sit nulla aliqua occaecat ad occaecat reprehenderit veniam esse. Proident ea amet consequat ea tempor anim. Qui est duis culpa reprehenderit aliquip adipisicing amet do. <br/>

    Esse minim aliquip aliqua voluptate laboris adipisicing. Eiusmod ad eiusmod proident cupidatat dolor irure dolor proident cupidatat sint. Irure tempor dolore consequat incididunt velit dolor sint reprehenderit ex et et ipsum culpa elit. Voluptate nisi ad elit quis cupidatat ipsum ipsum. Minim elit commodo ex officia sunt officia ut sint eiusmod dolore. Et incididunt mollit ex laborum enim tempor ipsum esse. Cupidatat enim ex magna incididunt.
    
    Exercitation duis proident ullamco tempor cillum magna labore consequat quis deserunt sint tempor dolor magna. Elit nulla culpa aliquip non ea ullamco eu ut excepteur. Voluptate deserunt cupidatat velit sunt id ex.
    
    Consectetur aliquip dolor minim do culpa. Reprehenderit id irure quis laboris et ea quis sit occaecat. Velit ullamco commodo mollit cillum cillum. Cillum et velit ex irure eiusmod velit.
    
    Duis velit consequat consectetur tempor elit esse deserunt velit nisi. Proident excepteur proident dolor ipsum in. Id proident et pariatur ipsum voluptate occaecat. Fugiat officia aute dolore duis ea officia id consectetur in do commodo aliquip.
    
    Anim reprehenderit qui pariatur deserunt. Est deserunt minim dolore nostrud adipisicing labore adipisicing qui consequat est aliqua ad. Enim exercitation labore consequat elit fugiat aliquip ut ea consequat elit.
    
    Tempor velit eu ex excepteur qui aliqua enim consequat mollit. Laboris veniam labore commodo cupidatat ad magna. Ex ipsum anim ipsum reprehenderit adipisicing amet aliquip et adipisicing dolor.
    
    Laborum ut commodo ipsum laborum est occaecat elit reprehenderit aliqua sint. Non ad occaecat qui id enim excepteur ut irure in sint fugiat labore est. Aute sunt duis non id magna nostrud ea cupidatat incididunt. Laborum incididunt amet proident dolore duis ullamco ullamco. Irure adipisicing nisi velit dolor culpa irure sint. Aliquip sunt sint qui commodo sunt cupidatat duis Lorem ex. Adipisicing ullamco adipisicing qui adipisicing velit fugiat in anim officia dolor eu ea do aliqua.
    
    Dolore ad non sunt id fugiat enim voluptate ullamco quis non elit. Labore fugiat nostrud sint minim ex est sint amet voluptate et duis ea. Irure officia occaecat occaecat labore. Id sit quis enim ad aute. Laboris nostrud Lorem tempor aliquip nulla reprehenderit excepteur. Laborum officia ea dolore et aute officia ullamco minim aute qui anim cillum consequat excepteur. Eu velit quis culpa veniam id cillum velit incididunt ipsum dolore qui in aliquip ad.
    
    Proident in tempor non enim aliquip ad. Proident in eu sint pariatur nostrud et. Culpa reprehenderit ipsum sit excepteur quis dolor. Magna sit amet aliquip commodo dolor amet pariatur et mollit culpa id sit. Lorem ullamco minim nisi adipisicing eu laboris. Velit aliquip proident tempor id duis.`,
        resumen:"Nulla anim consectetur magna cillum sit in aliqua duis qui. Labore cupidatat eiusmod irure ut in velit irure aliquip magna aliqua do. Est cillum eu deserunt tempor non enim labore qui et laboris. Ad labore proident labore proident dolor veniam ad tempor dolor.", 
    seccion:"opinion",
    imgSrc:"../assets/img/opinion2.jpg",
    imgAlt:"ilustracion de un periodista tomando notas",
    autor:"Jonathan Granado",
    fecha:"12/05/2023",
    trend: true,
    },
    {
    id:5, 
    titulo:"P rompe records de natacion", 
    cuerpo:`Pariatur fugiat aliquip reprehenderit incididunt exercitation qui nulla adipisicing veniam amet velit laborum. Velit sit nulla aliqua occaecat ad occaecat reprehenderit veniam esse. Proident ea amet consequat ea tempor anim. Qui est duis culpa reprehenderit aliquip adipisicing amet do. <br/>

    Esse minim aliquip aliqua voluptate laboris adipisicing. Eiusmod ad eiusmod proident cupidatat dolor irure dolor proident cupidatat sint. Irure tempor dolore consequat incididunt velit dolor sint reprehenderit ex et et ipsum culpa elit. Voluptate nisi ad elit quis cupidatat ipsum ipsum. Minim elit commodo ex officia sunt officia ut sint eiusmod dolore. Et incididunt mollit ex laborum enim tempor ipsum esse. Cupidatat enim ex magna incididunt.
    
    Exercitation duis proident ullamco tempor cillum magna labore consequat quis deserunt sint tempor dolor magna. Elit nulla culpa aliquip non ea ullamco eu ut excepteur. Voluptate deserunt cupidatat velit sunt id ex.
    
    Consectetur aliquip dolor minim do culpa. Reprehenderit id irure quis laboris et ea quis sit occaecat. Velit ullamco commodo mollit cillum cillum. Cillum et velit ex irure eiusmod velit.
    
    Duis velit consequat consectetur tempor elit esse deserunt velit nisi. Proident excepteur proident dolor ipsum in. Id proident et pariatur ipsum voluptate occaecat. Fugiat officia aute dolore duis ea officia id consectetur in do commodo aliquip.
    
    Anim reprehenderit qui pariatur deserunt. Est deserunt minim dolore nostrud adipisicing labore adipisicing qui consequat est aliqua ad. Enim exercitation labore consequat elit fugiat aliquip ut ea consequat elit.
    
    Tempor velit eu ex excepteur qui aliqua enim consequat mollit. Laboris veniam labore commodo cupidatat ad magna. Ex ipsum anim ipsum reprehenderit adipisicing amet aliquip et adipisicing dolor.
    
    Laborum ut commodo ipsum laborum est occaecat elit reprehenderit aliqua sint. Non ad occaecat qui id enim excepteur ut irure in sint fugiat labore est. Aute sunt duis non id magna nostrud ea cupidatat incididunt. Laborum incididunt amet proident dolore duis ullamco ullamco. Irure adipisicing nisi velit dolor culpa irure sint. Aliquip sunt sint qui commodo sunt cupidatat duis Lorem ex. Adipisicing ullamco adipisicing qui adipisicing velit fugiat in anim officia dolor eu ea do aliqua.
    
    Dolore ad non sunt id fugiat enim voluptate ullamco quis non elit. Labore fugiat nostrud sint minim ex est sint amet voluptate et duis ea. Irure officia occaecat occaecat labore. Id sit quis enim ad aute. Laboris nostrud Lorem tempor aliquip nulla reprehenderit excepteur. Laborum officia ea dolore et aute officia ullamco minim aute qui anim cillum consequat excepteur. Eu velit quis culpa veniam id cillum velit incididunt ipsum dolore qui in aliquip ad.
    
    Proident in tempor non enim aliquip ad. Proident in eu sint pariatur nostrud et. Culpa reprehenderit ipsum sit excepteur quis dolor. Magna sit amet aliquip commodo dolor amet pariatur et mollit culpa id sit. Lorem ullamco minim nisi adipisicing eu laboris. Velit aliquip proident tempor id duis.`,
        resumen:"Nisi duis voluptate sunt nulla excepteur dolore. Duis cillum nulla elit culpa quis in ad irure. Nostrud occaecat dolor ipsum sunt labore non. Adipisicing ullamco do proident excepteur fugiat veniam dolor elit sint. Cillum ea ea officia ad pariatur. Minim sit veniam sint et nisi quis amet commodo labore et eiusmod.", 
    seccion:"deporte", 
    imgSrc:"../assets/img/deporte1.jpg",
    imgAlt:"P nadando",
    autor:"Noemi Segarra",
    fecha:"12/05/2023",
    trend: true,
    },
    {
    id:6,
    titulo:"investigacion sobre Z da resultados positivos", 
    cuerpo:`Pariatur fugiat aliquip reprehenderit incididunt exercitation qui nulla adipisicing veniam amet velit laborum. Velit sit nulla aliqua occaecat ad occaecat reprehenderit veniam esse. Proident ea amet consequat ea tempor anim. Qui est duis culpa reprehenderit aliquip adipisicing amet do. <br/>

    Esse minim aliquip aliqua voluptate laboris adipisicing. Eiusmod ad eiusmod proident cupidatat dolor irure dolor proident cupidatat sint. Irure tempor dolore consequat incididunt velit dolor sint reprehenderit ex et et ipsum culpa elit. Voluptate nisi ad elit quis cupidatat ipsum ipsum. Minim elit commodo ex officia sunt officia ut sint eiusmod dolore. Et incididunt mollit ex laborum enim tempor ipsum esse. Cupidatat enim ex magna incididunt.
    
    Exercitation duis proident ullamco tempor cillum magna labore consequat quis deserunt sint tempor dolor magna. Elit nulla culpa aliquip non ea ullamco eu ut excepteur. Voluptate deserunt cupidatat velit sunt id ex.
    
    Consectetur aliquip dolor minim do culpa. Reprehenderit id irure quis laboris et ea quis sit occaecat. Velit ullamco commodo mollit cillum cillum. Cillum et velit ex irure eiusmod velit.
    
    Duis velit consequat consectetur tempor elit esse deserunt velit nisi. Proident excepteur proident dolor ipsum in. Id proident et pariatur ipsum voluptate occaecat. Fugiat officia aute dolore duis ea officia id consectetur in do commodo aliquip.
    
    Anim reprehenderit qui pariatur deserunt. Est deserunt minim dolore nostrud adipisicing labore adipisicing qui consequat est aliqua ad. Enim exercitation labore consequat elit fugiat aliquip ut ea consequat elit.
    
    Tempor velit eu ex excepteur qui aliqua enim consequat mollit. Laboris veniam labore commodo cupidatat ad magna. Ex ipsum anim ipsum reprehenderit adipisicing amet aliquip et adipisicing dolor.
    
    Laborum ut commodo ipsum laborum est occaecat elit reprehenderit aliqua sint. Non ad occaecat qui id enim excepteur ut irure in sint fugiat labore est. Aute sunt duis non id magna nostrud ea cupidatat incididunt. Laborum incididunt amet proident dolore duis ullamco ullamco. Irure adipisicing nisi velit dolor culpa irure sint. Aliquip sunt sint qui commodo sunt cupidatat duis Lorem ex. Adipisicing ullamco adipisicing qui adipisicing velit fugiat in anim officia dolor eu ea do aliqua.
    
    Dolore ad non sunt id fugiat enim voluptate ullamco quis non elit. Labore fugiat nostrud sint minim ex est sint amet voluptate et duis ea. Irure officia occaecat occaecat labore. Id sit quis enim ad aute. Laboris nostrud Lorem tempor aliquip nulla reprehenderit excepteur. Laborum officia ea dolore et aute officia ullamco minim aute qui anim cillum consequat excepteur. Eu velit quis culpa veniam id cillum velit incididunt ipsum dolore qui in aliquip ad.
    
    Proident in tempor non enim aliquip ad. Proident in eu sint pariatur nostrud et. Culpa reprehenderit ipsum sit excepteur quis dolor. Magna sit amet aliquip commodo dolor amet pariatur et mollit culpa id sit. Lorem ullamco minim nisi adipisicing eu laboris. Velit aliquip proident tempor id duis.`,
        resumen:"Nisi duis voluptate sunt nulla excepteur dolore. Duis cillum nulla elit culpa quis in ad irure. Nostrud occaecat dolor ipsum sunt labore non. Adipisicing ullamco do proident excepteur fugiat veniam dolor elit sint. Cillum ea ea officia ad pariatur. Minim sit veniam sint et nisi quis amet commodo labore et eiusmod.", 
    seccion:"ciencia", 
    imgSrc:"../assets/img/ciencia2.jpg",
    imgAlt:"ilustracion de alguien guardando una sustancia",
    autor:"Mirian Fuertes",
    fecha:"13/05/2023",
    trend: false,
    },
    {   
    id:7,
    titulo:"como usar una calculadora",
    cuerpo:`Pariatur fugiat aliquip reprehenderit incididunt exercitation qui nulla adipisicing veniam amet velit laborum. Velit sit nulla aliqua occaecat ad occaecat reprehenderit veniam esse. Proident ea amet consequat ea tempor anim. Qui est duis culpa reprehenderit aliquip adipisicing amet do. <br/>

    Esse minim aliquip aliqua voluptate laboris adipisicing. Eiusmod ad eiusmod proident cupidatat dolor irure dolor proident cupidatat sint. Irure tempor dolore consequat incididunt velit dolor sint reprehenderit ex et et ipsum culpa elit. Voluptate nisi ad elit quis cupidatat ipsum ipsum. Minim elit commodo ex officia sunt officia ut sint eiusmod dolore. Et incididunt mollit ex laborum enim tempor ipsum esse. Cupidatat enim ex magna incididunt.
    
    Exercitation duis proident ullamco tempor cillum magna labore consequat quis deserunt sint tempor dolor magna. Elit nulla culpa aliquip non ea ullamco eu ut excepteur. Voluptate deserunt cupidatat velit sunt id ex.
    
    Consectetur aliquip dolor minim do culpa. Reprehenderit id irure quis laboris et ea quis sit occaecat. Velit ullamco commodo mollit cillum cillum. Cillum et velit ex irure eiusmod velit.
    
    Duis velit consequat consectetur tempor elit esse deserunt velit nisi. Proident excepteur proident dolor ipsum in. Id proident et pariatur ipsum voluptate occaecat. Fugiat officia aute dolore duis ea officia id consectetur in do commodo aliquip.
    
    Anim reprehenderit qui pariatur deserunt. Est deserunt minim dolore nostrud adipisicing labore adipisicing qui consequat est aliqua ad. Enim exercitation labore consequat elit fugiat aliquip ut ea consequat elit.
    
    Tempor velit eu ex excepteur qui aliqua enim consequat mollit. Laboris veniam labore commodo cupidatat ad magna. Ex ipsum anim ipsum reprehenderit adipisicing amet aliquip et adipisicing dolor.
    
    Laborum ut commodo ipsum laborum est occaecat elit reprehenderit aliqua sint. Non ad occaecat qui id enim excepteur ut irure in sint fugiat labore est. Aute sunt duis non id magna nostrud ea cupidatat incididunt. Laborum incididunt amet proident dolore duis ullamco ullamco. Irure adipisicing nisi velit dolor culpa irure sint. Aliquip sunt sint qui commodo sunt cupidatat duis Lorem ex. Adipisicing ullamco adipisicing qui adipisicing velit fugiat in anim officia dolor eu ea do aliqua.
    
    Dolore ad non sunt id fugiat enim voluptate ullamco quis non elit. Labore fugiat nostrud sint minim ex est sint amet voluptate et duis ea. Irure officia occaecat occaecat labore. Id sit quis enim ad aute. Laboris nostrud Lorem tempor aliquip nulla reprehenderit excepteur. Laborum officia ea dolore et aute officia ullamco minim aute qui anim cillum consequat excepteur. Eu velit quis culpa veniam id cillum velit incididunt ipsum dolore qui in aliquip ad.
    
    Proident in tempor non enim aliquip ad. Proident in eu sint pariatur nostrud et. Culpa reprehenderit ipsum sit excepteur quis dolor. Magna sit amet aliquip commodo dolor amet pariatur et mollit culpa id sit. Lorem ullamco minim nisi adipisicing eu laboris. Velit aliquip proident tempor id duis.`,
        resumen:"Irure ad irure ipsum occaecat. Anim minim reprehenderit nisi fugiat exercitation laboris eu nulla ex reprehenderit. Enim minim esse laborum quis anim aliquip. Culpa non sit consectetur eiusmod ea minim aliqua reprehenderit magna cupidatat nostrud Lorem. Id eu amet commodo nisi occaecat aute magna reprehenderit nisi nulla amet. Et amet cupidatat qui id adipisicing veniam occaecat.",
    seccion:"economia", 
    imgSrc:"../assets/img/economia2.jpg",
    imgAlt:"gente usando una calculadora y anotando los resultados en un papel",
    autor:"Jonathan Granado",
    fecha:"13/05/2023",
    trend: false,
    },
    {
    id:8, 
    titulo:"la caricatua miente", 
    cuerpo:`Pariatur fugiat aliquip reprehenderit incididunt exercitation qui nulla adipisicing veniam amet velit laborum. Velit sit nulla aliqua occaecat ad occaecat reprehenderit veniam esse. Proident ea amet consequat ea tempor anim. Qui est duis culpa reprehenderit aliquip adipisicing amet do. <br/>

    Esse minim aliquip aliqua voluptate laboris adipisicing. Eiusmod ad eiusmod proident cupidatat dolor irure dolor proident cupidatat sint. Irure tempor dolore consequat incididunt velit dolor sint reprehenderit ex et et ipsum culpa elit. Voluptate nisi ad elit quis cupidatat ipsum ipsum. Minim elit commodo ex officia sunt officia ut sint eiusmod dolore. Et incididunt mollit ex laborum enim tempor ipsum esse. Cupidatat enim ex magna incididunt.
    
    Exercitation duis proident ullamco tempor cillum magna labore consequat quis deserunt sint tempor dolor magna. Elit nulla culpa aliquip non ea ullamco eu ut excepteur. Voluptate deserunt cupidatat velit sunt id ex.
    
    Consectetur aliquip dolor minim do culpa. Reprehenderit id irure quis laboris et ea quis sit occaecat. Velit ullamco commodo mollit cillum cillum. Cillum et velit ex irure eiusmod velit.
    
    Duis velit consequat consectetur tempor elit esse deserunt velit nisi. Proident excepteur proident dolor ipsum in. Id proident et pariatur ipsum voluptate occaecat. Fugiat officia aute dolore duis ea officia id consectetur in do commodo aliquip.
    
    Anim reprehenderit qui pariatur deserunt. Est deserunt minim dolore nostrud adipisicing labore adipisicing qui consequat est aliqua ad. Enim exercitation labore consequat elit fugiat aliquip ut ea consequat elit.
    
    Tempor velit eu ex excepteur qui aliqua enim consequat mollit. Laboris veniam labore commodo cupidatat ad magna. Ex ipsum anim ipsum reprehenderit adipisicing amet aliquip et adipisicing dolor.
    
    Laborum ut commodo ipsum laborum est occaecat elit reprehenderit aliqua sint. Non ad occaecat qui id enim excepteur ut irure in sint fugiat labore est. Aute sunt duis non id magna nostrud ea cupidatat incididunt. Laborum incididunt amet proident dolore duis ullamco ullamco. Irure adipisicing nisi velit dolor culpa irure sint. Aliquip sunt sint qui commodo sunt cupidatat duis Lorem ex. Adipisicing ullamco adipisicing qui adipisicing velit fugiat in anim officia dolor eu ea do aliqua.
    
    Dolore ad non sunt id fugiat enim voluptate ullamco quis non elit. Labore fugiat nostrud sint minim ex est sint amet voluptate et duis ea. Irure officia occaecat occaecat labore. Id sit quis enim ad aute. Laboris nostrud Lorem tempor aliquip nulla reprehenderit excepteur. Laborum officia ea dolore et aute officia ullamco minim aute qui anim cillum consequat excepteur. Eu velit quis culpa veniam id cillum velit incididunt ipsum dolore qui in aliquip ad.
    
    Proident in tempor non enim aliquip ad. Proident in eu sint pariatur nostrud et. Culpa reprehenderit ipsum sit excepteur quis dolor. Magna sit amet aliquip commodo dolor amet pariatur et mollit culpa id sit. Lorem ullamco minim nisi adipisicing eu laboris. Velit aliquip proident tempor id duis.`,
        resumen:"Amet aute consequat et minim aliquip minim in consectetur elit incididunt do ipsum dolore Lorem. Fugiat velit do consectetur qui nostrud duis est commodo pariatur pariatur ea non anim quis. Voluptate Lorem aute cillum non duis aute culpa. Quis laboris id ipsum labore ipsum eiusmod ea.", 
    seccion:"politica", 
    imgSrc:"../assets/img/politica2.jpg",
    imgAlt:"la caricatura de un politico usando una mascara",
    autor:"Jonathan Granado",
    fecha:"14/05/2023",
    trend: false,
    },
    {
    id:9, 
    titulo:"estado del deporte juvenil", 
    cuerpo:`Pariatur fugiat aliquip reprehenderit incididunt exercitation qui nulla adipisicing veniam amet velit laborum. Velit sit nulla aliqua occaecat ad occaecat reprehenderit veniam esse. Proident ea amet consequat ea tempor anim. Qui est duis culpa reprehenderit aliquip adipisicing amet do. <br/>

    Esse minim aliquip aliqua voluptate laboris adipisicing. Eiusmod ad eiusmod proident cupidatat dolor irure dolor proident cupidatat sint. Irure tempor dolore consequat incididunt velit dolor sint reprehenderit ex et et ipsum culpa elit. Voluptate nisi ad elit quis cupidatat ipsum ipsum. Minim elit commodo ex officia sunt officia ut sint eiusmod dolore. Et incididunt mollit ex laborum enim tempor ipsum esse. Cupidatat enim ex magna incididunt.
    
    Exercitation duis proident ullamco tempor cillum magna labore consequat quis deserunt sint tempor dolor magna. Elit nulla culpa aliquip non ea ullamco eu ut excepteur. Voluptate deserunt cupidatat velit sunt id ex.
    
    Consectetur aliquip dolor minim do culpa. Reprehenderit id irure quis laboris et ea quis sit occaecat. Velit ullamco commodo mollit cillum cillum. Cillum et velit ex irure eiusmod velit.
    
    Duis velit consequat consectetur tempor elit esse deserunt velit nisi. Proident excepteur proident dolor ipsum in. Id proident et pariatur ipsum voluptate occaecat. Fugiat officia aute dolore duis ea officia id consectetur in do commodo aliquip.
    
    Anim reprehenderit qui pariatur deserunt. Est deserunt minim dolore nostrud adipisicing labore adipisicing qui consequat est aliqua ad. Enim exercitation labore consequat elit fugiat aliquip ut ea consequat elit.
    
    Tempor velit eu ex excepteur qui aliqua enim consequat mollit. Laboris veniam labore commodo cupidatat ad magna. Ex ipsum anim ipsum reprehenderit adipisicing amet aliquip et adipisicing dolor.
    
    Laborum ut commodo ipsum laborum est occaecat elit reprehenderit aliqua sint. Non ad occaecat qui id enim excepteur ut irure in sint fugiat labore est. Aute sunt duis non id magna nostrud ea cupidatat incididunt. Laborum incididunt amet proident dolore duis ullamco ullamco. Irure adipisicing nisi velit dolor culpa irure sint. Aliquip sunt sint qui commodo sunt cupidatat duis Lorem ex. Adipisicing ullamco adipisicing qui adipisicing velit fugiat in anim officia dolor eu ea do aliqua.
    
    Dolore ad non sunt id fugiat enim voluptate ullamco quis non elit. Labore fugiat nostrud sint minim ex est sint amet voluptate et duis ea. Irure officia occaecat occaecat labore. Id sit quis enim ad aute. Laboris nostrud Lorem tempor aliquip nulla reprehenderit excepteur. Laborum officia ea dolore et aute officia ullamco minim aute qui anim cillum consequat excepteur. Eu velit quis culpa veniam id cillum velit incididunt ipsum dolore qui in aliquip ad.
    
    Proident in tempor non enim aliquip ad. Proident in eu sint pariatur nostrud et. Culpa reprehenderit ipsum sit excepteur quis dolor. Magna sit amet aliquip commodo dolor amet pariatur et mollit culpa id sit. Lorem ullamco minim nisi adipisicing eu laboris. Velit aliquip proident tempor id duis.`,
        resumen:"Elit id tempor nisi excepteur. Ex ut adipisicing est elit ipsum officia ullamco excepteur amet sint incididunt sint ut laborum. Ad laboris excepteur voluptate consequat id cupidatat. Voluptate minim id esse Lorem. Aliquip minim officia officia duis officia veniam aute culpa reprehenderit elit pariatur esse dolore occaecat. Duis ex ullamco id laboris consequat sunt.", 
    seccion:"deporte", 
    imgSrc:"../assets/img/deporte2.jpg",
    imgAlt:"x,y,z,w y v reunidos en grupo",
    autor:"Noemi Segarra",
    fecha:"14/05/2023",
    trend: false,
    },
    {
    id:10, 
    titulo:"niña genia en quimica revoluciona el mundo mezclando agua y aceite", 
    cuerpo:`Pariatur fugiat aliquip reprehenderit incididunt exercitation qui nulla adipisicing veniam amet velit laborum. Velit sit nulla aliqua occaecat ad occaecat reprehenderit veniam esse. Proident ea amet consequat ea tempor anim. Qui est duis culpa reprehenderit aliquip adipisicing amet do. <br/>

    Esse minim aliquip aliqua voluptate laboris adipisicing. Eiusmod ad eiusmod proident cupidatat dolor irure dolor proident cupidatat sint. Irure tempor dolore consequat incididunt velit dolor sint reprehenderit ex et et ipsum culpa elit. Voluptate nisi ad elit quis cupidatat ipsum ipsum. Minim elit commodo ex officia sunt officia ut sint eiusmod dolore. Et incididunt mollit ex laborum enim tempor ipsum esse. Cupidatat enim ex magna incididunt.
    
    Exercitation duis proident ullamco tempor cillum magna labore consequat quis deserunt sint tempor dolor magna. Elit nulla culpa aliquip non ea ullamco eu ut excepteur. Voluptate deserunt cupidatat velit sunt id ex.
    
    Consectetur aliquip dolor minim do culpa. Reprehenderit id irure quis laboris et ea quis sit occaecat. Velit ullamco commodo mollit cillum cillum. Cillum et velit ex irure eiusmod velit.
    
    Duis velit consequat consectetur tempor elit esse deserunt velit nisi. Proident excepteur proident dolor ipsum in. Id proident et pariatur ipsum voluptate occaecat. Fugiat officia aute dolore duis ea officia id consectetur in do commodo aliquip.
    
    Anim reprehenderit qui pariatur deserunt. Est deserunt minim dolore nostrud adipisicing labore adipisicing qui consequat est aliqua ad. Enim exercitation labore consequat elit fugiat aliquip ut ea consequat elit.
    
    Tempor velit eu ex excepteur qui aliqua enim consequat mollit. Laboris veniam labore commodo cupidatat ad magna. Ex ipsum anim ipsum reprehenderit adipisicing amet aliquip et adipisicing dolor.
    
    Laborum ut commodo ipsum laborum est occaecat elit reprehenderit aliqua sint. Non ad occaecat qui id enim excepteur ut irure in sint fugiat labore est. Aute sunt duis non id magna nostrud ea cupidatat incididunt. Laborum incididunt amet proident dolore duis ullamco ullamco. Irure adipisicing nisi velit dolor culpa irure sint. Aliquip sunt sint qui commodo sunt cupidatat duis Lorem ex. Adipisicing ullamco adipisicing qui adipisicing velit fugiat in anim officia dolor eu ea do aliqua.
    
    Dolore ad non sunt id fugiat enim voluptate ullamco quis non elit. Labore fugiat nostrud sint minim ex est sint amet voluptate et duis ea. Irure officia occaecat occaecat labore. Id sit quis enim ad aute. Laboris nostrud Lorem tempor aliquip nulla reprehenderit excepteur. Laborum officia ea dolore et aute officia ullamco minim aute qui anim cillum consequat excepteur. Eu velit quis culpa veniam id cillum velit incididunt ipsum dolore qui in aliquip ad.
    
    Proident in tempor non enim aliquip ad. Proident in eu sint pariatur nostrud et. Culpa reprehenderit ipsum sit excepteur quis dolor. Magna sit amet aliquip commodo dolor amet pariatur et mollit culpa id sit. Lorem ullamco minim nisi adipisicing eu laboris. Velit aliquip proident tempor id duis.`,
        resumen:"Tempor duiss exercitation qui adipisicing. Velit magna nostrud proident deserunt anim nostrud voluptate labore proident esse. Elit excepteur aute ullamco anim nisi quis et id commodo. Reprehenderit labore reprehenderit exercitation Lorem eiusmod anim aliquip qui pariatur et reprehenderit anim. Esse voluptate laborum labore ad ut in mollit esse nulla irure irure.", 
    seccion:"ciencia",
    imgSrc:"../assets/img/ciencia3.jpg",
    imgAlt:"una niña qualificada haciendo quimica",
    autor:"Jone Figueras",
    fecha:"15/05/2023",
    trend: false,
    },
    {
    id:11, 
    titulo:"altavoz resalta sobre el periodico", 
    cuerpo:`Pariatur fugiat aliquip reprehenderit incididunt exercitation qui nulla adipisicing veniam amet velit laborum. Velit sit nulla aliqua occaecat ad occaecat reprehenderit veniam esse. Proident ea amet consequat ea tempor anim. Qui est duis culpa reprehenderit aliquip adipisicing amet do. <br/>

    Esse minim aliquip aliqua voluptate laboris adipisicing. Eiusmod ad eiusmod proident cupidatat dolor irure dolor proident cupidatat sint. Irure tempor dolore consequat incididunt velit dolor sint reprehenderit ex et et ipsum culpa elit. Voluptate nisi ad elit quis cupidatat ipsum ipsum. Minim elit commodo ex officia sunt officia ut sint eiusmod dolore. Et incididunt mollit ex laborum enim tempor ipsum esse. Cupidatat enim ex magna incididunt.
    
    Exercitation duis proident ullamco tempor cillum magna labore consequat quis deserunt sint tempor dolor magna. Elit nulla culpa aliquip non ea ullamco eu ut excepteur. Voluptate deserunt cupidatat velit sunt id ex.
    
    Consectetur aliquip dolor minim do culpa. Reprehenderit id irure quis laboris et ea quis sit occaecat. Velit ullamco commodo mollit cillum cillum. Cillum et velit ex irure eiusmod velit.
    
    Duis velit consequat consectetur tempor elit esse deserunt velit nisi. Proident excepteur proident dolor ipsum in. Id proident et pariatur ipsum voluptate occaecat. Fugiat officia aute dolore duis ea officia id consectetur in do commodo aliquip.
    
    Anim reprehenderit qui pariatur deserunt. Est deserunt minim dolore nostrud adipisicing labore adipisicing qui consequat est aliqua ad. Enim exercitation labore consequat elit fugiat aliquip ut ea consequat elit.
    
    Tempor velit eu ex excepteur qui aliqua enim consequat mollit. Laboris veniam labore commodo cupidatat ad magna. Ex ipsum anim ipsum reprehenderit adipisicing amet aliquip et adipisicing dolor.
    
    Laborum ut commodo ipsum laborum est occaecat elit reprehenderit aliqua sint. Non ad occaecat qui id enim excepteur ut irure in sint fugiat labore est. Aute sunt duis non id magna nostrud ea cupidatat incididunt. Laborum incididunt amet proident dolore duis ullamco ullamco. Irure adipisicing nisi velit dolor culpa irure sint. Aliquip sunt sint qui commodo sunt cupidatat duis Lorem ex. Adipisicing ullamco adipisicing qui adipisicing velit fugiat in anim officia dolor eu ea do aliqua.
    
    Dolore ad non sunt id fugiat enim voluptate ullamco quis non elit. Labore fugiat nostrud sint minim ex est sint amet voluptate et duis ea. Irure officia occaecat occaecat labore. Id sit quis enim ad aute. Laboris nostrud Lorem tempor aliquip nulla reprehenderit excepteur. Laborum officia ea dolore et aute officia ullamco minim aute qui anim cillum consequat excepteur. Eu velit quis culpa veniam id cillum velit incididunt ipsum dolore qui in aliquip ad.
    
    Proident in tempor non enim aliquip ad. Proident in eu sint pariatur nostrud et. Culpa reprehenderit ipsum sit excepteur quis dolor. Magna sit amet aliquip commodo dolor amet pariatur et mollit culpa id sit. Lorem ullamco minim nisi adipisicing eu laboris. Velit aliquip proident tempor id duis.`,
        resumen:"Nulla anim consectetur magna cillum sit in aliqua duis qui. Labore cupidatat eiusmod irure ut in velit irure aliquip magna aliqua do. Est cillum eu deserunt tempor non enim labore qui et laboris. Ad labore proident labore proident dolor veniam ad tempor dolor.", 
    seccion:"opinion",
    imgSrc:"../assets/img/opinion3.jpg",
    imgAlt:"una caricatura de un altavoz naranja y un monton de periodicos debajo ",
    autor:"Jonathan Granado",
    fecha:"15/05/2023",
    trend: false,
    },
    {
    id:12, 
    titulo:"sube algo en 2022", 
    cuerpo:`Pariatur fugiat aliquip reprehenderit incididunt exercitation qui nulla adipisicing veniam amet velit laborum. Velit sit nulla aliqua occaecat ad occaecat reprehenderit veniam esse. Proident ea amet consequat ea tempor anim. Qui est duis culpa reprehenderit aliquip adipisicing amet do. <br/>

    Esse minim aliquip aliqua voluptate laboris adipisicing. Eiusmod ad eiusmod proident cupidatat dolor irure dolor proident cupidatat sint. Irure tempor dolore consequat incididunt velit dolor sint reprehenderit ex et et ipsum culpa elit. Voluptate nisi ad elit quis cupidatat ipsum ipsum. Minim elit commodo ex officia sunt officia ut sint eiusmod dolore. Et incididunt mollit ex laborum enim tempor ipsum esse. Cupidatat enim ex magna incididunt.
    
    Exercitation duis proident ullamco tempor cillum magna labore consequat quis deserunt sint tempor dolor magna. Elit nulla culpa aliquip non ea ullamco eu ut excepteur. Voluptate deserunt cupidatat velit sunt id ex.
    
    Consectetur aliquip dolor minim do culpa. Reprehenderit id irure quis laboris et ea quis sit occaecat. Velit ullamco commodo mollit cillum cillum. Cillum et velit ex irure eiusmod velit.
    
    Duis velit consequat consectetur tempor elit esse deserunt velit nisi. Proident excepteur proident dolor ipsum in. Id proident et pariatur ipsum voluptate occaecat. Fugiat officia aute dolore duis ea officia id consectetur in do commodo aliquip.
    
    Anim reprehenderit qui pariatur deserunt. Est deserunt minim dolore nostrud adipisicing labore adipisicing qui consequat est aliqua ad. Enim exercitation labore consequat elit fugiat aliquip ut ea consequat elit.
    
    Tempor velit eu ex excepteur qui aliqua enim consequat mollit. Laboris veniam labore commodo cupidatat ad magna. Ex ipsum anim ipsum reprehenderit adipisicing amet aliquip et adipisicing dolor.
    
    Laborum ut commodo ipsum laborum est occaecat elit reprehenderit aliqua sint. Non ad occaecat qui id enim excepteur ut irure in sint fugiat labore est. Aute sunt duis non id magna nostrud ea cupidatat incididunt. Laborum incididunt amet proident dolore duis ullamco ullamco. Irure adipisicing nisi velit dolor culpa irure sint. Aliquip sunt sint qui commodo sunt cupidatat duis Lorem ex. Adipisicing ullamco adipisicing qui adipisicing velit fugiat in anim officia dolor eu ea do aliqua.
    
    Dolore ad non sunt id fugiat enim voluptate ullamco quis non elit. Labore fugiat nostrud sint minim ex est sint amet voluptate et duis ea. Irure officia occaecat occaecat labore. Id sit quis enim ad aute. Laboris nostrud Lorem tempor aliquip nulla reprehenderit excepteur. Laborum officia ea dolore et aute officia ullamco minim aute qui anim cillum consequat excepteur. Eu velit quis culpa veniam id cillum velit incididunt ipsum dolore qui in aliquip ad.
    
    Proident in tempor non enim aliquip ad. Proident in eu sint pariatur nostrud et. Culpa reprehenderit ipsum sit excepteur quis dolor. Magna sit amet aliquip commodo dolor amet pariatur et mollit culpa id sit. Lorem ullamco minim nisi adipisicing eu laboris. Velit aliquip proident tempor id duis.`,
        resumen:"Nisi duis voluptate sunt nulla excepteur dolore. Duis cillum nulla elit culpa quis in ad irure. Nostrud occaecat dolor ipsum sunt labore non. Adipisicing ullamco do proident excepteur fugiat veniam dolor elit sint. Cillum ea ea officia ad pariatur. Minim sit veniam sint et nisi quis amet commodo labore et eiusmod.", 
    seccion:"economia", 
    imgSrc:"../assets/img/economia3.jpg",
    imgAlt:"ilustracion de una grafica donde se muestra lo que sube",
    autor:"Noemi Segarra",
    fecha:"16/05/2023",
    trend: false,
    },
    {
    id:13,
    titulo:"politico siendo entrevistado", 
    cuerpo:`Pariatur fugiat aliquip reprehenderit incididunt exercitation qui nulla adipisicing veniam amet velit laborum. Velit sit nulla aliqua occaecat ad occaecat reprehenderit veniam esse. Proident ea amet consequat ea tempor anim. Qui est duis culpa reprehenderit aliquip adipisicing amet do. <br/>

    Esse minim aliquip aliqua voluptate laboris adipisicing. Eiusmod ad eiusmod proident cupidatat dolor irure dolor proident cupidatat sint. Irure tempor dolore consequat incididunt velit dolor sint reprehenderit ex et et ipsum culpa elit. Voluptate nisi ad elit quis cupidatat ipsum ipsum. Minim elit commodo ex officia sunt officia ut sint eiusmod dolore. Et incididunt mollit ex laborum enim tempor ipsum esse. Cupidatat enim ex magna incididunt.
    
    Exercitation duis proident ullamco tempor cillum magna labore consequat quis deserunt sint tempor dolor magna. Elit nulla culpa aliquip non ea ullamco eu ut excepteur. Voluptate deserunt cupidatat velit sunt id ex.
    
    Consectetur aliquip dolor minim do culpa. Reprehenderit id irure quis laboris et ea quis sit occaecat. Velit ullamco commodo mollit cillum cillum. Cillum et velit ex irure eiusmod velit.
    
    Duis velit consequat consectetur tempor elit esse deserunt velit nisi. Proident excepteur proident dolor ipsum in. Id proident et pariatur ipsum voluptate occaecat. Fugiat officia aute dolore duis ea officia id consectetur in do commodo aliquip.
    
    Anim reprehenderit qui pariatur deserunt. Est deserunt minim dolore nostrud adipisicing labore adipisicing qui consequat est aliqua ad. Enim exercitation labore consequat elit fugiat aliquip ut ea consequat elit.
    
    Tempor velit eu ex excepteur qui aliqua enim consequat mollit. Laboris veniam labore commodo cupidatat ad magna. Ex ipsum anim ipsum reprehenderit adipisicing amet aliquip et adipisicing dolor.
    
    Laborum ut commodo ipsum laborum est occaecat elit reprehenderit aliqua sint. Non ad occaecat qui id enim excepteur ut irure in sint fugiat labore est. Aute sunt duis non id magna nostrud ea cupidatat incididunt. Laborum incididunt amet proident dolore duis ullamco ullamco. Irure adipisicing nisi velit dolor culpa irure sint. Aliquip sunt sint qui commodo sunt cupidatat duis Lorem ex. Adipisicing ullamco adipisicing qui adipisicing velit fugiat in anim officia dolor eu ea do aliqua.
    
    Dolore ad non sunt id fugiat enim voluptate ullamco quis non elit. Labore fugiat nostrud sint minim ex est sint amet voluptate et duis ea. Irure officia occaecat occaecat labore. Id sit quis enim ad aute. Laboris nostrud Lorem tempor aliquip nulla reprehenderit excepteur. Laborum officia ea dolore et aute officia ullamco minim aute qui anim cillum consequat excepteur. Eu velit quis culpa veniam id cillum velit incididunt ipsum dolore qui in aliquip ad.
    
    Proident in tempor non enim aliquip ad. Proident in eu sint pariatur nostrud et. Culpa reprehenderit ipsum sit excepteur quis dolor. Magna sit amet aliquip commodo dolor amet pariatur et mollit culpa id sit. Lorem ullamco minim nisi adipisicing eu laboris. Velit aliquip proident tempor id duis.`,
        resumen:"Nisi duis voluptate sunt nulla excepteur dolore. Duis cillum nulla elit culpa quis in ad irure. Nostrud occaecat dolor ipsum sunt labore non. Adipisicing ullamco do proident excepteur fugiat veniam dolor elit sint. Cillum ea ea officia ad pariatur. Minim sit veniam sint et nisi quis amet commodo labore et eiusmod.", 
    seccion:"politica", 
    imgSrc:"../assets/img/politica3.jpg",
    imgAlt:"politico siendo entrevistado",
    autor:"Mirian Fuertes",
    fecha:"16/05/2023",
    trend: false,
    },
    {   
    id:14,
    titulo:"Mirian Fuertes corre 200km",
    cuerpo:`Pariatur fugiat aliquip reprehenderit incididunt exercitation qui nulla adipisicing veniam amet velit laborum. Velit sit nulla aliqua occaecat ad occaecat reprehenderit veniam esse. Proident ea amet consequat ea tempor anim. Qui est duis culpa reprehenderit aliquip adipisicing amet do. <br/>

    Esse minim aliquip aliqua voluptate laboris adipisicing. Eiusmod ad eiusmod proident cupidatat dolor irure dolor proident cupidatat sint. Irure tempor dolore consequat incididunt velit dolor sint reprehenderit ex et et ipsum culpa elit. Voluptate nisi ad elit quis cupidatat ipsum ipsum. Minim elit commodo ex officia sunt officia ut sint eiusmod dolore. Et incididunt mollit ex laborum enim tempor ipsum esse. Cupidatat enim ex magna incididunt.
    
    Exercitation duis proident ullamco tempor cillum magna labore consequat quis deserunt sint tempor dolor magna. Elit nulla culpa aliquip non ea ullamco eu ut excepteur. Voluptate deserunt cupidatat velit sunt id ex.
    
    Consectetur aliquip dolor minim do culpa. Reprehenderit id irure quis laboris et ea quis sit occaecat. Velit ullamco commodo mollit cillum cillum. Cillum et velit ex irure eiusmod velit.
    
    Duis velit consequat consectetur tempor elit esse deserunt velit nisi. Proident excepteur proident dolor ipsum in. Id proident et pariatur ipsum voluptate occaecat. Fugiat officia aute dolore duis ea officia id consectetur in do commodo aliquip.
    
    Anim reprehenderit qui pariatur deserunt. Est deserunt minim dolore nostrud adipisicing labore adipisicing qui consequat est aliqua ad. Enim exercitation labore consequat elit fugiat aliquip ut ea consequat elit.
    
    Tempor velit eu ex excepteur qui aliqua enim consequat mollit. Laboris veniam labore commodo cupidatat ad magna. Ex ipsum anim ipsum reprehenderit adipisicing amet aliquip et adipisicing dolor.
    
    Laborum ut commodo ipsum laborum est occaecat elit reprehenderit aliqua sint. Non ad occaecat qui id enim excepteur ut irure in sint fugiat labore est. Aute sunt duis non id magna nostrud ea cupidatat incididunt. Laborum incididunt amet proident dolore duis ullamco ullamco. Irure adipisicing nisi velit dolor culpa irure sint. Aliquip sunt sint qui commodo sunt cupidatat duis Lorem ex. Adipisicing ullamco adipisicing qui adipisicing velit fugiat in anim officia dolor eu ea do aliqua.
    
    Dolore ad non sunt id fugiat enim voluptate ullamco quis non elit. Labore fugiat nostrud sint minim ex est sint amet voluptate et duis ea. Irure officia occaecat occaecat labore. Id sit quis enim ad aute. Laboris nostrud Lorem tempor aliquip nulla reprehenderit excepteur. Laborum officia ea dolore et aute officia ullamco minim aute qui anim cillum consequat excepteur. Eu velit quis culpa veniam id cillum velit incididunt ipsum dolore qui in aliquip ad.
    
    Proident in tempor non enim aliquip ad. Proident in eu sint pariatur nostrud et. Culpa reprehenderit ipsum sit excepteur quis dolor. Magna sit amet aliquip commodo dolor amet pariatur et mollit culpa id sit. Lorem ullamco minim nisi adipisicing eu laboris. Velit aliquip proident tempor id duis.`,
        resumen:"Irure ad irure ipsum occaecat. Anim minim reprehenderit nisi fugiat exercitation laboris eu nulla ex reprehenderit. Enim minim esse laborum quis anim aliquip. Culpa non sit consectetur eiusmod ea minim aliqua reprehenderit magna cupidatat nostrud Lorem. Id eu amet commodo nisi occaecat aute magna reprehenderit nisi nulla amet. Et amet cupidatat qui id adipisicing veniam occaecat.",
    seccion:"deporte", 
    imgSrc:"../assets/img/deporte3.jpg",
    imgAlt:"Mirian Fuertes atandose los cordones",
    autor:"Mirian Fuertes",
    fecha:"17/05/2023",
    trend: false,
    },
    {
    id:15, 
    titulo:"nuevo medicamento para Q", 
    cuerpo:`Pariatur fugiat aliquip reprehenderit incididunt exercitation qui nulla adipisicing veniam amet velit laborum. Velit sit nulla aliqua occaecat ad occaecat reprehenderit veniam esse. Proident ea amet consequat ea tempor anim. Qui est duis culpa reprehenderit aliquip adipisicing amet do. <br/>

    Esse minim aliquip aliqua voluptate laboris adipisicing. Eiusmod ad eiusmod proident cupidatat dolor irure dolor proident cupidatat sint. Irure tempor dolore consequat incididunt velit dolor sint reprehenderit ex et et ipsum culpa elit. Voluptate nisi ad elit quis cupidatat ipsum ipsum. Minim elit commodo ex officia sunt officia ut sint eiusmod dolore. Et incididunt mollit ex laborum enim tempor ipsum esse. Cupidatat enim ex magna incididunt.
    
    Exercitation duis proident ullamco tempor cillum magna labore consequat quis deserunt sint tempor dolor magna. Elit nulla culpa aliquip non ea ullamco eu ut excepteur. Voluptate deserunt cupidatat velit sunt id ex.
    
    Consectetur aliquip dolor minim do culpa. Reprehenderit id irure quis laboris et ea quis sit occaecat. Velit ullamco commodo mollit cillum cillum. Cillum et velit ex irure eiusmod velit.
    
    Duis velit consequat consectetur tempor elit esse deserunt velit nisi. Proident excepteur proident dolor ipsum in. Id proident et pariatur ipsum voluptate occaecat. Fugiat officia aute dolore duis ea officia id consectetur in do commodo aliquip.
    
    Anim reprehenderit qui pariatur deserunt. Est deserunt minim dolore nostrud adipisicing labore adipisicing qui consequat est aliqua ad. Enim exercitation labore consequat elit fugiat aliquip ut ea consequat elit.
    
    Tempor velit eu ex excepteur qui aliqua enim consequat mollit. Laboris veniam labore commodo cupidatat ad magna. Ex ipsum anim ipsum reprehenderit adipisicing amet aliquip et adipisicing dolor.
    
    Laborum ut commodo ipsum laborum est occaecat elit reprehenderit aliqua sint. Non ad occaecat qui id enim excepteur ut irure in sint fugiat labore est. Aute sunt duis non id magna nostrud ea cupidatat incididunt. Laborum incididunt amet proident dolore duis ullamco ullamco. Irure adipisicing nisi velit dolor culpa irure sint. Aliquip sunt sint qui commodo sunt cupidatat duis Lorem ex. Adipisicing ullamco adipisicing qui adipisicing velit fugiat in anim officia dolor eu ea do aliqua.
    
    Dolore ad non sunt id fugiat enim voluptate ullamco quis non elit. Labore fugiat nostrud sint minim ex est sint amet voluptate et duis ea. Irure officia occaecat occaecat labore. Id sit quis enim ad aute. Laboris nostrud Lorem tempor aliquip nulla reprehenderit excepteur. Laborum officia ea dolore et aute officia ullamco minim aute qui anim cillum consequat excepteur. Eu velit quis culpa veniam id cillum velit incididunt ipsum dolore qui in aliquip ad.
    
    Proident in tempor non enim aliquip ad. Proident in eu sint pariatur nostrud et. Culpa reprehenderit ipsum sit excepteur quis dolor. Magna sit amet aliquip commodo dolor amet pariatur et mollit culpa id sit. Lorem ullamco minim nisi adipisicing eu laboris. Velit aliquip proident tempor id duis.`,
        resumen:"Amet aute consequat et minim aliquip minim in consectetur elit incididunt do ipsum dolore Lorem. Fugiat velit do consectetur qui nostrud duis est commodo pariatur pariatur ea non anim quis. Voluptate Lorem aute cillum non duis aute culpa. Quis laboris id ipsum labore ipsum eiusmod ea.", 
    seccion:"ciencia", 
    imgSrc:"../assets/img/ciencia4.jpg",
    imgAlt:"graficos acerca de la efectividad del medicamento",
    autor:"Jonathan Granado",
    fecha:"17/05/2023",
    trend: false,
    },
    {
    id:16, 
    titulo:"adictos a las apuestas", 
    cuerpo:`Pariatur fugiat aliquip reprehenderit incididunt exercitation qui nulla adipisicing veniam amet velit laborum. Velit sit nulla aliqua occaecat ad occaecat reprehenderit veniam esse. Proident ea amet consequat ea tempor anim. Qui est duis culpa reprehenderit aliquip adipisicing amet do. <br/>

    Esse minim aliquip aliqua voluptate laboris adipisicing. Eiusmod ad eiusmod proident cupidatat dolor irure dolor proident cupidatat sint. Irure tempor dolore consequat incididunt velit dolor sint reprehenderit ex et et ipsum culpa elit. Voluptate nisi ad elit quis cupidatat ipsum ipsum. Minim elit commodo ex officia sunt officia ut sint eiusmod dolore. Et incididunt mollit ex laborum enim tempor ipsum esse. Cupidatat enim ex magna incididunt.
    
    Exercitation duis proident ullamco tempor cillum magna labore consequat quis deserunt sint tempor dolor magna. Elit nulla culpa aliquip non ea ullamco eu ut excepteur. Voluptate deserunt cupidatat velit sunt id ex.
    
    Consectetur aliquip dolor minim do culpa. Reprehenderit id irure quis laboris et ea quis sit occaecat. Velit ullamco commodo mollit cillum cillum. Cillum et velit ex irure eiusmod velit.
    
    Duis velit consequat consectetur tempor elit esse deserunt velit nisi. Proident excepteur proident dolor ipsum in. Id proident et pariatur ipsum voluptate occaecat. Fugiat officia aute dolore duis ea officia id consectetur in do commodo aliquip.
    
    Anim reprehenderit qui pariatur deserunt. Est deserunt minim dolore nostrud adipisicing labore adipisicing qui consequat est aliqua ad. Enim exercitation labore consequat elit fugiat aliquip ut ea consequat elit.
    
    Tempor velit eu ex excepteur qui aliqua enim consequat mollit. Laboris veniam labore commodo cupidatat ad magna. Ex ipsum anim ipsum reprehenderit adipisicing amet aliquip et adipisicing dolor.
    
    Laborum ut commodo ipsum laborum est occaecat elit reprehenderit aliqua sint. Non ad occaecat qui id enim excepteur ut irure in sint fugiat labore est. Aute sunt duis non id magna nostrud ea cupidatat incididunt. Laborum incididunt amet proident dolore duis ullamco ullamco. Irure adipisicing nisi velit dolor culpa irure sint. Aliquip sunt sint qui commodo sunt cupidatat duis Lorem ex. Adipisicing ullamco adipisicing qui adipisicing velit fugiat in anim officia dolor eu ea do aliqua.
    
    Dolore ad non sunt id fugiat enim voluptate ullamco quis non elit. Labore fugiat nostrud sint minim ex est sint amet voluptate et duis ea. Irure officia occaecat occaecat labore. Id sit quis enim ad aute. Laboris nostrud Lorem tempor aliquip nulla reprehenderit excepteur. Laborum officia ea dolore et aute officia ullamco minim aute qui anim cillum consequat excepteur. Eu velit quis culpa veniam id cillum velit incididunt ipsum dolore qui in aliquip ad.
    
    Proident in tempor non enim aliquip ad. Proident in eu sint pariatur nostrud et. Culpa reprehenderit ipsum sit excepteur quis dolor. Magna sit amet aliquip commodo dolor amet pariatur et mollit culpa id sit. Lorem ullamco minim nisi adipisicing eu laboris. Velit aliquip proident tempor id duis.`,
        resumen:"Elit id tempor nisi excepteur. Ex ut adipisicing est elit ipsum officia ullamco excepteur amet sint incididunt sint ut laborum. Ad laboris excepteur voluptate consequat id cupidatat. Voluptate minim id esse Lorem. Aliquip minim officia officia duis officia veniam aute culpa reprehenderit elit pariatur esse dolore occaecat. Duis ex ullamco id laboris consequat sunt.", 
    seccion:"opinion", 
    imgSrc:"../assets/img/opinion4.jpg",
    imgAlt:"una maquina tragaperras portatil",
    autor:"Noemi Segarra",
    fecha:"18/05/2023",
    trend: false,
    },
    {
    id:17, 
    titulo:"faltan contadores", 
    cuerpo:`Pariatur fugiat aliquip reprehenderit incididunt exercitation qui nulla adipisicing veniam amet velit laborum. Velit sit nulla aliqua occaecat ad occaecat reprehenderit veniam esse. Proident ea amet consequat ea tempor anim. Qui est duis culpa reprehenderit aliquip adipisicing amet do. <br/>

    Esse minim aliquip aliqua voluptate laboris adipisicing. Eiusmod ad eiusmod proident cupidatat dolor irure dolor proident cupidatat sint. Irure tempor dolore consequat incididunt velit dolor sint reprehenderit ex et et ipsum culpa elit. Voluptate nisi ad elit quis cupidatat ipsum ipsum. Minim elit commodo ex officia sunt officia ut sint eiusmod dolore. Et incididunt mollit ex laborum enim tempor ipsum esse. Cupidatat enim ex magna incididunt.
    
    Exercitation duis proident ullamco tempor cillum magna labore consequat quis deserunt sint tempor dolor magna. Elit nulla culpa aliquip non ea ullamco eu ut excepteur. Voluptate deserunt cupidatat velit sunt id ex.
    
    Consectetur aliquip dolor minim do culpa. Reprehenderit id irure quis laboris et ea quis sit occaecat. Velit ullamco commodo mollit cillum cillum. Cillum et velit ex irure eiusmod velit.
    
    Duis velit consequat consectetur tempor elit esse deserunt velit nisi. Proident excepteur proident dolor ipsum in. Id proident et pariatur ipsum voluptate occaecat. Fugiat officia aute dolore duis ea officia id consectetur in do commodo aliquip.
    
    Anim reprehenderit qui pariatur deserunt. Est deserunt minim dolore nostrud adipisicing labore adipisicing qui consequat est aliqua ad. Enim exercitation labore consequat elit fugiat aliquip ut ea consequat elit.
    
    Tempor velit eu ex excepteur qui aliqua enim consequat mollit. Laboris veniam labore commodo cupidatat ad magna. Ex ipsum anim ipsum reprehenderit adipisicing amet aliquip et adipisicing dolor.
    
    Laborum ut commodo ipsum laborum est occaecat elit reprehenderit aliqua sint. Non ad occaecat qui id enim excepteur ut irure in sint fugiat labore est. Aute sunt duis non id magna nostrud ea cupidatat incididunt. Laborum incididunt amet proident dolore duis ullamco ullamco. Irure adipisicing nisi velit dolor culpa irure sint. Aliquip sunt sint qui commodo sunt cupidatat duis Lorem ex. Adipisicing ullamco adipisicing qui adipisicing velit fugiat in anim officia dolor eu ea do aliqua.
    
    Dolore ad non sunt id fugiat enim voluptate ullamco quis non elit. Labore fugiat nostrud sint minim ex est sint amet voluptate et duis ea. Irure officia occaecat occaecat labore. Id sit quis enim ad aute. Laboris nostrud Lorem tempor aliquip nulla reprehenderit excepteur. Laborum officia ea dolore et aute officia ullamco minim aute qui anim cillum consequat excepteur. Eu velit quis culpa veniam id cillum velit incididunt ipsum dolore qui in aliquip ad.
    
    Proident in tempor non enim aliquip ad. Proident in eu sint pariatur nostrud et. Culpa reprehenderit ipsum sit excepteur quis dolor. Magna sit amet aliquip commodo dolor amet pariatur et mollit culpa id sit. Lorem ullamco minim nisi adipisicing eu laboris. Velit aliquip proident tempor id duis.`,
        resumen:"Tempor duiss exercitation qui adipisicing. Velit magna nostrud proident deserunt anim nostrud voluptate labore proident esse. Elit excepteur aute ullamco anim nisi quis et id commodo. Reprehenderit labore reprehenderit exercitation Lorem eiusmod anim aliquip qui pariatur et reprehenderit anim. Esse voluptate laborum labore ad ut in mollit esse nulla irure irure.", 
    seccion:"economia",
    imgSrc:"../assets/img/economia4.jpg",
    imgAlt:"gente haciendo papeles",
    autor:"Jone Figueras",
    fecha:"18/05/2023",
    trend: false,
    },
    {
    id:18, 
    titulo:"gente en una conferencia", 
    cuerpo:`Pariatur fugiat aliquip reprehenderit incididunt exercitation qui nulla adipisicing veniam amet velit laborum. Velit sit nulla aliqua occaecat ad occaecat reprehenderit veniam esse. Proident ea amet consequat ea tempor anim. Qui est duis culpa reprehenderit aliquip adipisicing amet do. <br/>

    Esse minim aliquip aliqua voluptate laboris adipisicing. Eiusmod ad eiusmod proident cupidatat dolor irure dolor proident cupidatat sint. Irure tempor dolore consequat incididunt velit dolor sint reprehenderit ex et et ipsum culpa elit. Voluptate nisi ad elit quis cupidatat ipsum ipsum. Minim elit commodo ex officia sunt officia ut sint eiusmod dolore. Et incididunt mollit ex laborum enim tempor ipsum esse. Cupidatat enim ex magna incididunt.
    
    Exercitation duis proident ullamco tempor cillum magna labore consequat quis deserunt sint tempor dolor magna. Elit nulla culpa aliquip non ea ullamco eu ut excepteur. Voluptate deserunt cupidatat velit sunt id ex.
    
    Consectetur aliquip dolor minim do culpa. Reprehenderit id irure quis laboris et ea quis sit occaecat. Velit ullamco commodo mollit cillum cillum. Cillum et velit ex irure eiusmod velit.
    
    Duis velit consequat consectetur tempor elit esse deserunt velit nisi. Proident excepteur proident dolor ipsum in. Id proident et pariatur ipsum voluptate occaecat. Fugiat officia aute dolore duis ea officia id consectetur in do commodo aliquip.
    
    Anim reprehenderit qui pariatur deserunt. Est deserunt minim dolore nostrud adipisicing labore adipisicing qui consequat est aliqua ad. Enim exercitation labore consequat elit fugiat aliquip ut ea consequat elit.
    
    Tempor velit eu ex excepteur qui aliqua enim consequat mollit. Laboris veniam labore commodo cupidatat ad magna. Ex ipsum anim ipsum reprehenderit adipisicing amet aliquip et adipisicing dolor.
    
    Laborum ut commodo ipsum laborum est occaecat elit reprehenderit aliqua sint. Non ad occaecat qui id enim excepteur ut irure in sint fugiat labore est. Aute sunt duis non id magna nostrud ea cupidatat incididunt. Laborum incididunt amet proident dolore duis ullamco ullamco. Irure adipisicing nisi velit dolor culpa irure sint. Aliquip sunt sint qui commodo sunt cupidatat duis Lorem ex. Adipisicing ullamco adipisicing qui adipisicing velit fugiat in anim officia dolor eu ea do aliqua.
    
    Dolore ad non sunt id fugiat enim voluptate ullamco quis non elit. Labore fugiat nostrud sint minim ex est sint amet voluptate et duis ea. Irure officia occaecat occaecat labore. Id sit quis enim ad aute. Laboris nostrud Lorem tempor aliquip nulla reprehenderit excepteur. Laborum officia ea dolore et aute officia ullamco minim aute qui anim cillum consequat excepteur. Eu velit quis culpa veniam id cillum velit incididunt ipsum dolore qui in aliquip ad.
    
    Proident in tempor non enim aliquip ad. Proident in eu sint pariatur nostrud et. Culpa reprehenderit ipsum sit excepteur quis dolor. Magna sit amet aliquip commodo dolor amet pariatur et mollit culpa id sit. Lorem ullamco minim nisi adipisicing eu laboris. Velit aliquip proident tempor id duis.`,
        resumen:"Nulla anim consectetur magna cillum sit in aliqua duis qui. Labore cupidatat eiusmod irure ut in velit irure aliquip magna aliqua do. Est cillum eu deserunt tempor non enim labore qui et laboris. Ad labore proident labore proident dolor veniam ad tempor dolor.", 
    seccion:"politica",
    imgSrc:"../assets/img/politica4.jpg",
    imgAlt:"Noemi Segarra hablando",
    autor:"Jonathan Granado",
    fecha:"19/05/2023",
    trend: false,
    },
    {
    id:19, 
    titulo:"olimpiadas 2024", 
    cuerpo:`Pariatur fugiat aliquip reprehenderit incididunt exercitation qui nulla adipisicing veniam amet velit laborum. Velit sit nulla aliqua occaecat ad occaecat reprehenderit veniam esse. Proident ea amet consequat ea tempor anim. Qui est duis culpa reprehenderit aliquip adipisicing amet do. <br/>

    Esse minim aliquip aliqua voluptate laboris adipisicing. Eiusmod ad eiusmod proident cupidatat dolor irure dolor proident cupidatat sint. Irure tempor dolore consequat incididunt velit dolor sint reprehenderit ex et et ipsum culpa elit. Voluptate nisi ad elit quis cupidatat ipsum ipsum. Minim elit commodo ex officia sunt officia ut sint eiusmod dolore. Et incididunt mollit ex laborum enim tempor ipsum esse. Cupidatat enim ex magna incididunt.
    
    Exercitation duis proident ullamco tempor cillum magna labore consequat quis deserunt sint tempor dolor magna. Elit nulla culpa aliquip non ea ullamco eu ut excepteur. Voluptate deserunt cupidatat velit sunt id ex.
    
    Consectetur aliquip dolor minim do culpa. Reprehenderit id irure quis laboris et ea quis sit occaecat. Velit ullamco commodo mollit cillum cillum. Cillum et velit ex irure eiusmod velit.
    
    Duis velit consequat consectetur tempor elit esse deserunt velit nisi. Proident excepteur proident dolor ipsum in. Id proident et pariatur ipsum voluptate occaecat. Fugiat officia aute dolore duis ea officia id consectetur in do commodo aliquip.
    
    Anim reprehenderit qui pariatur deserunt. Est deserunt minim dolore nostrud adipisicing labore adipisicing qui consequat est aliqua ad. Enim exercitation labore consequat elit fugiat aliquip ut ea consequat elit.
    
    Tempor velit eu ex excepteur qui aliqua enim consequat mollit. Laboris veniam labore commodo cupidatat ad magna. Ex ipsum anim ipsum reprehenderit adipisicing amet aliquip et adipisicing dolor.
    
    Laborum ut commodo ipsum laborum est occaecat elit reprehenderit aliqua sint. Non ad occaecat qui id enim excepteur ut irure in sint fugiat labore est. Aute sunt duis non id magna nostrud ea cupidatat incididunt. Laborum incididunt amet proident dolore duis ullamco ullamco. Irure adipisicing nisi velit dolor culpa irure sint. Aliquip sunt sint qui commodo sunt cupidatat duis Lorem ex. Adipisicing ullamco adipisicing qui adipisicing velit fugiat in anim officia dolor eu ea do aliqua.
    
    Dolore ad non sunt id fugiat enim voluptate ullamco quis non elit. Labore fugiat nostrud sint minim ex est sint amet voluptate et duis ea. Irure officia occaecat occaecat labore. Id sit quis enim ad aute. Laboris nostrud Lorem tempor aliquip nulla reprehenderit excepteur. Laborum officia ea dolore et aute officia ullamco minim aute qui anim cillum consequat excepteur. Eu velit quis culpa veniam id cillum velit incididunt ipsum dolore qui in aliquip ad.
    
    Proident in tempor non enim aliquip ad. Proident in eu sint pariatur nostrud et. Culpa reprehenderit ipsum sit excepteur quis dolor. Magna sit amet aliquip commodo dolor amet pariatur et mollit culpa id sit. Lorem ullamco minim nisi adipisicing eu laboris. Velit aliquip proident tempor id duis.`,
        resumen:"Nisi duis voluptate sunt nulla excepteur dolore. Duis cillum nulla elit culpa quis in ad irure. Nostrud occaecat dolor ipsum sunt labore non. Adipisicing ullamco do proident excepteur fugiat veniam dolor elit sint. Cillum ea ea officia ad pariatur. Minim sit veniam sint et nisi quis amet commodo labore et eiusmod.", 
    seccion:"deporte", 
    imgSrc:"../assets/img/deporte4.jpg",
    imgAlt:"gente corriendo",
    autor:"Noemi Segarra",
    fecha:"19/05/2023",
    trend: false,
    },
    {
    id:20,
    titulo:"nueva forma de cultivar plantas", 
    cuerpo:`Pariatur fugiat aliquip reprehenderit incididunt exercitation qui nulla adipisicing veniam amet velit laborum. Velit sit nulla aliqua occaecat ad occaecat reprehenderit veniam esse. Proident ea amet consequat ea tempor anim. Qui est duis culpa reprehenderit aliquip adipisicing amet do. <br/>

    Esse minim aliquip aliqua voluptate laboris adipisicing. Eiusmod ad eiusmod proident cupidatat dolor irure dolor proident cupidatat sint. Irure tempor dolore consequat incididunt velit dolor sint reprehenderit ex et et ipsum culpa elit. Voluptate nisi ad elit quis cupidatat ipsum ipsum. Minim elit commodo ex officia sunt officia ut sint eiusmod dolore. Et incididunt mollit ex laborum enim tempor ipsum esse. Cupidatat enim ex magna incididunt.
    
    Exercitation duis proident ullamco tempor cillum magna labore consequat quis deserunt sint tempor dolor magna. Elit nulla culpa aliquip non ea ullamco eu ut excepteur. Voluptate deserunt cupidatat velit sunt id ex.
    
    Consectetur aliquip dolor minim do culpa. Reprehenderit id irure quis laboris et ea quis sit occaecat. Velit ullamco commodo mollit cillum cillum. Cillum et velit ex irure eiusmod velit.
    
    Duis velit consequat consectetur tempor elit esse deserunt velit nisi. Proident excepteur proident dolor ipsum in. Id proident et pariatur ipsum voluptate occaecat. Fugiat officia aute dolore duis ea officia id consectetur in do commodo aliquip.
    
    Anim reprehenderit qui pariatur deserunt. Est deserunt minim dolore nostrud adipisicing labore adipisicing qui consequat est aliqua ad. Enim exercitation labore consequat elit fugiat aliquip ut ea consequat elit.
    
    Tempor velit eu ex excepteur qui aliqua enim consequat mollit. Laboris veniam labore commodo cupidatat ad magna. Ex ipsum anim ipsum reprehenderit adipisicing amet aliquip et adipisicing dolor.
    
    Laborum ut commodo ipsum laborum est occaecat elit reprehenderit aliqua sint. Non ad occaecat qui id enim excepteur ut irure in sint fugiat labore est. Aute sunt duis non id magna nostrud ea cupidatat incididunt. Laborum incididunt amet proident dolore duis ullamco ullamco. Irure adipisicing nisi velit dolor culpa irure sint. Aliquip sunt sint qui commodo sunt cupidatat duis Lorem ex. Adipisicing ullamco adipisicing qui adipisicing velit fugiat in anim officia dolor eu ea do aliqua.
    
    Dolore ad non sunt id fugiat enim voluptate ullamco quis non elit. Labore fugiat nostrud sint minim ex est sint amet voluptate et duis ea. Irure officia occaecat occaecat labore. Id sit quis enim ad aute. Laboris nostrud Lorem tempor aliquip nulla reprehenderit excepteur. Laborum officia ea dolore et aute officia ullamco minim aute qui anim cillum consequat excepteur. Eu velit quis culpa veniam id cillum velit incididunt ipsum dolore qui in aliquip ad.
    
    Proident in tempor non enim aliquip ad. Proident in eu sint pariatur nostrud et. Culpa reprehenderit ipsum sit excepteur quis dolor. Magna sit amet aliquip commodo dolor amet pariatur et mollit culpa id sit. Lorem ullamco minim nisi adipisicing eu laboris. Velit aliquip proident tempor id duis.`,
        resumen:"Nisi duis voluptate sunt nulla excepteur dolore. Duis cillum nulla elit culpa quis in ad irure. Nostrud occaecat dolor ipsum sunt labore non. Adipisicing ullamco do proident excepteur fugiat veniam dolor elit sint. Cillum ea ea officia ad pariatur. Minim sit veniam sint et nisi quis amet commodo labore et eiusmod.", 
    seccion:"ciencia", 
    imgSrc:"../assets/img/ciencia5.jpg",
    imgAlt:"una planta pequeña",
    autor:"Mirian Fuertes",
    fecha:"20/05/2023",
    trend: false,
    },
        {   
    id:21,
    titulo:"algo sobre españa",
    cuerpo:`Pariatur fugiat aliquip reprehenderit incididunt exercitation qui nulla adipisicing veniam amet velit laborum. Velit sit nulla aliqua occaecat ad occaecat reprehenderit veniam esse. Proident ea amet consequat ea tempor anim. Qui est duis culpa reprehenderit aliquip adipisicing amet do. <br/>

    Esse minim aliquip aliqua voluptate laboris adipisicing. Eiusmod ad eiusmod proident cupidatat dolor irure dolor proident cupidatat sint. Irure tempor dolore consequat incididunt velit dolor sint reprehenderit ex et et ipsum culpa elit. Voluptate nisi ad elit quis cupidatat ipsum ipsum. Minim elit commodo ex officia sunt officia ut sint eiusmod dolore. Et incididunt mollit ex laborum enim tempor ipsum esse. Cupidatat enim ex magna incididunt.
    
    Exercitation duis proident ullamco tempor cillum magna labore consequat quis deserunt sint tempor dolor magna. Elit nulla culpa aliquip non ea ullamco eu ut excepteur. Voluptate deserunt cupidatat velit sunt id ex.
    
    Consectetur aliquip dolor minim do culpa. Reprehenderit id irure quis laboris et ea quis sit occaecat. Velit ullamco commodo mollit cillum cillum. Cillum et velit ex irure eiusmod velit.
    
    Duis velit consequat consectetur tempor elit esse deserunt velit nisi. Proident excepteur proident dolor ipsum in. Id proident et pariatur ipsum voluptate occaecat. Fugiat officia aute dolore duis ea officia id consectetur in do commodo aliquip.
    
    Anim reprehenderit qui pariatur deserunt. Est deserunt minim dolore nostrud adipisicing labore adipisicing qui consequat est aliqua ad. Enim exercitation labore consequat elit fugiat aliquip ut ea consequat elit.
    
    Tempor velit eu ex excepteur qui aliqua enim consequat mollit. Laboris veniam labore commodo cupidatat ad magna. Ex ipsum anim ipsum reprehenderit adipisicing amet aliquip et adipisicing dolor.
    
    Laborum ut commodo ipsum laborum est occaecat elit reprehenderit aliqua sint. Non ad occaecat qui id enim excepteur ut irure in sint fugiat labore est. Aute sunt duis non id magna nostrud ea cupidatat incididunt. Laborum incididunt amet proident dolore duis ullamco ullamco. Irure adipisicing nisi velit dolor culpa irure sint. Aliquip sunt sint qui commodo sunt cupidatat duis Lorem ex. Adipisicing ullamco adipisicing qui adipisicing velit fugiat in anim officia dolor eu ea do aliqua.
    
    Dolore ad non sunt id fugiat enim voluptate ullamco quis non elit. Labore fugiat nostrud sint minim ex est sint amet voluptate et duis ea. Irure officia occaecat occaecat labore. Id sit quis enim ad aute. Laboris nostrud Lorem tempor aliquip nulla reprehenderit excepteur. Laborum officia ea dolore et aute officia ullamco minim aute qui anim cillum consequat excepteur. Eu velit quis culpa veniam id cillum velit incididunt ipsum dolore qui in aliquip ad.
    
    Proident in tempor non enim aliquip ad. Proident in eu sint pariatur nostrud et. Culpa reprehenderit ipsum sit excepteur quis dolor. Magna sit amet aliquip commodo dolor amet pariatur et mollit culpa id sit. Lorem ullamco minim nisi adipisicing eu laboris. Velit aliquip proident tempor id duis.`,
        resumen:"Irure ad irure ipsum occaecat. Anim minim reprehenderit nisi fugiat exercitation laboris eu nulla ex reprehenderit. Enim minim esse laborum quis anim aliquip. Culpa non sit consectetur eiusmod ea minim aliqua reprehenderit magna cupidatat nostrud Lorem. Id eu amet commodo nisi occaecat aute magna reprehenderit nisi nulla amet. Et amet cupidatat qui id adipisicing veniam occaecat.",
    seccion:"opinion", 
    imgSrc:"../assets/img/opinion5.jpg",
    imgAlt:"un mapa de españa",
    autor:"Jonathan Granado",
    fecha:"21/05/2023",
    trend: false,
    },
    {
    id:22, 
    titulo:"se recuperan algunas acciones", 
    cuerpo:`Pariatur fugiat aliquip reprehenderit incididunt exercitation qui nulla adipisicing veniam amet velit laborum. Velit sit nulla aliqua occaecat ad occaecat reprehenderit veniam esse. Proident ea amet consequat ea tempor anim. Qui est duis culpa reprehenderit aliquip adipisicing amet do. <br/>

    Esse minim aliquip aliqua voluptate laboris adipisicing. Eiusmod ad eiusmod proident cupidatat dolor irure dolor proident cupidatat sint. Irure tempor dolore consequat incididunt velit dolor sint reprehenderit ex et et ipsum culpa elit. Voluptate nisi ad elit quis cupidatat ipsum ipsum. Minim elit commodo ex officia sunt officia ut sint eiusmod dolore. Et incididunt mollit ex laborum enim tempor ipsum esse. Cupidatat enim ex magna incididunt.
    
    Exercitation duis proident ullamco tempor cillum magna labore consequat quis deserunt sint tempor dolor magna. Elit nulla culpa aliquip non ea ullamco eu ut excepteur. Voluptate deserunt cupidatat velit sunt id ex.
    
    Consectetur aliquip dolor minim do culpa. Reprehenderit id irure quis laboris et ea quis sit occaecat. Velit ullamco commodo mollit cillum cillum. Cillum et velit ex irure eiusmod velit.
    
    Duis velit consequat consectetur tempor elit esse deserunt velit nisi. Proident excepteur proident dolor ipsum in. Id proident et pariatur ipsum voluptate occaecat. Fugiat officia aute dolore duis ea officia id consectetur in do commodo aliquip.
    
    Anim reprehenderit qui pariatur deserunt. Est deserunt minim dolore nostrud adipisicing labore adipisicing qui consequat est aliqua ad. Enim exercitation labore consequat elit fugiat aliquip ut ea consequat elit.
    
    Tempor velit eu ex excepteur qui aliqua enim consequat mollit. Laboris veniam labore commodo cupidatat ad magna. Ex ipsum anim ipsum reprehenderit adipisicing amet aliquip et adipisicing dolor.
    
    Laborum ut commodo ipsum laborum est occaecat elit reprehenderit aliqua sint. Non ad occaecat qui id enim excepteur ut irure in sint fugiat labore est. Aute sunt duis non id magna nostrud ea cupidatat incididunt. Laborum incididunt amet proident dolore duis ullamco ullamco. Irure adipisicing nisi velit dolor culpa irure sint. Aliquip sunt sint qui commodo sunt cupidatat duis Lorem ex. Adipisicing ullamco adipisicing qui adipisicing velit fugiat in anim officia dolor eu ea do aliqua.
    
    Dolore ad non sunt id fugiat enim voluptate ullamco quis non elit. Labore fugiat nostrud sint minim ex est sint amet voluptate et duis ea. Irure officia occaecat occaecat labore. Id sit quis enim ad aute. Laboris nostrud Lorem tempor aliquip nulla reprehenderit excepteur. Laborum officia ea dolore et aute officia ullamco minim aute qui anim cillum consequat excepteur. Eu velit quis culpa veniam id cillum velit incididunt ipsum dolore qui in aliquip ad.
    
    Proident in tempor non enim aliquip ad. Proident in eu sint pariatur nostrud et. Culpa reprehenderit ipsum sit excepteur quis dolor. Magna sit amet aliquip commodo dolor amet pariatur et mollit culpa id sit. Lorem ullamco minim nisi adipisicing eu laboris. Velit aliquip proident tempor id duis.`,
        resumen:"Amet aute consequat et minim aliquip minim in consectetur elit incididunt do ipsum dolore Lorem. Fugiat velit do consectetur qui nostrud duis est commodo pariatur pariatur ea non anim quis. Voluptate Lorem aute cillum non duis aute culpa. Quis laboris id ipsum labore ipsum eiusmod ea.", 
    seccion:"economia", 
    imgSrc:"../assets/img/economia5.jpg",
    imgAlt:"un portatil con una grafica",
    autor:"Jonathan Granado",
    fecha:"22/05/2023",
    trend: false,
    },
    {
    id:23, 
    titulo:"discusion sobre Y", 
    cuerpo:`Pariatur fugiat aliquip reprehenderit incididunt exercitation qui nulla adipisicing veniam amet velit laborum. Velit sit nulla aliqua occaecat ad occaecat reprehenderit veniam esse. Proident ea amet consequat ea tempor anim. Qui est duis culpa reprehenderit aliquip adipisicing amet do. <br/>

    Esse minim aliquip aliqua voluptate laboris adipisicing. Eiusmod ad eiusmod proident cupidatat dolor irure dolor proident cupidatat sint. Irure tempor dolore consequat incididunt velit dolor sint reprehenderit ex et et ipsum culpa elit. Voluptate nisi ad elit quis cupidatat ipsum ipsum. Minim elit commodo ex officia sunt officia ut sint eiusmod dolore. Et incididunt mollit ex laborum enim tempor ipsum esse. Cupidatat enim ex magna incididunt.
    
    Exercitation duis proident ullamco tempor cillum magna labore consequat quis deserunt sint tempor dolor magna. Elit nulla culpa aliquip non ea ullamco eu ut excepteur. Voluptate deserunt cupidatat velit sunt id ex.
    
    Consectetur aliquip dolor minim do culpa. Reprehenderit id irure quis laboris et ea quis sit occaecat. Velit ullamco commodo mollit cillum cillum. Cillum et velit ex irure eiusmod velit.
    
    Duis velit consequat consectetur tempor elit esse deserunt velit nisi. Proident excepteur proident dolor ipsum in. Id proident et pariatur ipsum voluptate occaecat. Fugiat officia aute dolore duis ea officia id consectetur in do commodo aliquip.
    
    Anim reprehenderit qui pariatur deserunt. Est deserunt minim dolore nostrud adipisicing labore adipisicing qui consequat est aliqua ad. Enim exercitation labore consequat elit fugiat aliquip ut ea consequat elit.
    
    Tempor velit eu ex excepteur qui aliqua enim consequat mollit. Laboris veniam labore commodo cupidatat ad magna. Ex ipsum anim ipsum reprehenderit adipisicing amet aliquip et adipisicing dolor.
    
    Laborum ut commodo ipsum laborum est occaecat elit reprehenderit aliqua sint. Non ad occaecat qui id enim excepteur ut irure in sint fugiat labore est. Aute sunt duis non id magna nostrud ea cupidatat incididunt. Laborum incididunt amet proident dolore duis ullamco ullamco. Irure adipisicing nisi velit dolor culpa irure sint. Aliquip sunt sint qui commodo sunt cupidatat duis Lorem ex. Adipisicing ullamco adipisicing qui adipisicing velit fugiat in anim officia dolor eu ea do aliqua.
    
    Dolore ad non sunt id fugiat enim voluptate ullamco quis non elit. Labore fugiat nostrud sint minim ex est sint amet voluptate et duis ea. Irure officia occaecat occaecat labore. Id sit quis enim ad aute. Laboris nostrud Lorem tempor aliquip nulla reprehenderit excepteur. Laborum officia ea dolore et aute officia ullamco minim aute qui anim cillum consequat excepteur. Eu velit quis culpa veniam id cillum velit incididunt ipsum dolore qui in aliquip ad.
    
    Proident in tempor non enim aliquip ad. Proident in eu sint pariatur nostrud et. Culpa reprehenderit ipsum sit excepteur quis dolor. Magna sit amet aliquip commodo dolor amet pariatur et mollit culpa id sit. Lorem ullamco minim nisi adipisicing eu laboris. Velit aliquip proident tempor id duis.`,
    
    resumen:"Elit id tempor nisi excepteur. Ex ut adipisicing est elit ipsum officia ullamco excepteur amet sint incididunt sint ut laborum. Ad laboris excepteur voluptate consequat id cupidatat. Voluptate minim id esse Lorem. Aliquip minim officia officia duis officia veniam aute culpa reprehenderit elit pariatur esse dolore occaecat. Duis ex ullamco id laboris consequat sunt.", 
    seccion:"politica", 
    imgSrc:"../assets/img/politica5.jpg",
    imgAlt:"vista al parlamento desde dentro",
    autor:"Noemi Segarra",
    fecha:"22/05/2023",
    trend: false,
    },
    {
    id:24, 
    titulo:"equipo de Y gana algo", 
    cuerpo:`Pariatur fugiat aliquip reprehenderit incididunt exercitation qui nulla adipisicing veniam amet velit laborum. Velit sit nulla aliqua occaecat ad occaecat reprehenderit veniam esse. Proident ea amet consequat ea tempor anim. Qui est duis culpa reprehenderit aliquip adipisicing amet do. <br/>

Esse minim aliquip aliqua voluptate laboris adipisicing. Eiusmod ad eiusmod proident cupidatat dolor irure dolor proident cupidatat sint. Irure tempor dolore consequat incididunt velit dolor sint reprehenderit ex et et ipsum culpa elit. Voluptate nisi ad elit quis cupidatat ipsum ipsum. Minim elit commodo ex officia sunt officia ut sint eiusmod dolore. Et incididunt mollit ex laborum enim tempor ipsum esse. Cupidatat enim ex magna incididunt.

Exercitation duis proident ullamco tempor cillum magna labore consequat quis deserunt sint tempor dolor magna. Elit nulla culpa aliquip non ea ullamco eu ut excepteur. Voluptate deserunt cupidatat velit sunt id ex.

Consectetur aliquip dolor minim do culpa. Reprehenderit id irure quis laboris et ea quis sit occaecat. Velit ullamco commodo mollit cillum cillum. Cillum et velit ex irure eiusmod velit.

Duis velit consequat consectetur tempor elit esse deserunt velit nisi. Proident excepteur proident dolor ipsum in. Id proident et pariatur ipsum voluptate occaecat. Fugiat officia aute dolore duis ea officia id consectetur in do commodo aliquip.

Anim reprehenderit qui pariatur deserunt. Est deserunt minim dolore nostrud adipisicing labore adipisicing qui consequat est aliqua ad. Enim exercitation labore consequat elit fugiat aliquip ut ea consequat elit.

Tempor velit eu ex excepteur qui aliqua enim consequat mollit. Laboris veniam labore commodo cupidatat ad magna. Ex ipsum anim ipsum reprehenderit adipisicing amet aliquip et adipisicing dolor.

Laborum ut commodo ipsum laborum est occaecat elit reprehenderit aliqua sint. Non ad occaecat qui id enim excepteur ut irure in sint fugiat labore est. Aute sunt duis non id magna nostrud ea cupidatat incididunt. Laborum incididunt amet proident dolore duis ullamco ullamco. Irure adipisicing nisi velit dolor culpa irure sint. Aliquip sunt sint qui commodo sunt cupidatat duis Lorem ex. Adipisicing ullamco adipisicing qui adipisicing velit fugiat in anim officia dolor eu ea do aliqua.

Dolore ad non sunt id fugiat enim voluptate ullamco quis non elit. Labore fugiat nostrud sint minim ex est sint amet voluptate et duis ea. Irure officia occaecat occaecat labore. Id sit quis enim ad aute. Laboris nostrud Lorem tempor aliquip nulla reprehenderit excepteur. Laborum officia ea dolore et aute officia ullamco minim aute qui anim cillum consequat excepteur. Eu velit quis culpa veniam id cillum velit incididunt ipsum dolore qui in aliquip ad.

Proident in tempor non enim aliquip ad. Proident in eu sint pariatur nostrud et. Culpa reprehenderit ipsum sit excepteur quis dolor. Magna sit amet aliquip commodo dolor amet pariatur et mollit culpa id sit. Lorem ullamco minim nisi adipisicing eu laboris. Velit aliquip proident tempor id duis.`,

    resumen:"Iruressssssssss ad irure ipsum occaecat. Anim minim reprehenderit nisi fugiat exercitation laboris eu nulla ex reprehenderit. Enim minim esse laborum quis anim aliquip. Culpa non sit consectetur eiusmod ea minim aliqua reprehenderit magna cupidatat nostrud Lorem. Id eu amet commodo nisi occaecat aute magna reprehenderit nisi nulla amet. Et amet cupidatat qui id adipisicing veniam occaecat.",
    seccion:"deporte",
    imgSrc:"../assets/img/deporte5.jpg",
    imgAlt:"jugadoras festejando",
    autor:"Jone Figueras",
    fecha:"23/05/2023",
    trend: false,
    },
    {
    id:25, 
    titulo:"como reciclar componentes electronicos", 
    cuerpo:`Pariatur fugiat aliquip reprehenderit incididunt exercitation qui nulla adipisicing veniam amet velit laborum. Velit sit nulla aliqua occaecat ad occaecat reprehenderit veniam esse. Proident ea amet consequat ea tempor anim. Qui est duis culpa reprehenderit aliquip adipisicing amet do. <br/>

    Esse minim aliquip aliqua voluptate laboris adipisicing. Eiusmod ad eiusmod proident cupidatat dolor irure dolor proident cupidatat sint. Irure tempor dolore consequat incididunt velit dolor sint reprehenderit ex et et ipsum culpa elit. Voluptate nisi ad elit quis cupidatat ipsum ipsum. Minim elit commodo ex officia sunt officia ut sint eiusmod dolore. Et incididunt mollit ex laborum enim tempor ipsum esse. Cupidatat enim ex magna incididunt.
    
    Exercitation duis proident ullamco tempor cillum magna labore consequat quis deserunt sint tempor dolor magna. Elit nulla culpa aliquip non ea ullamco eu ut excepteur. Voluptate deserunt cupidatat velit sunt id ex.
    
    Consectetur aliquip dolor minim do culpa. Reprehenderit id irure quis laboris et ea quis sit occaecat. Velit ullamco commodo mollit cillum cillum. Cillum et velit ex irure eiusmod velit.
    
    Duis velit consequat consectetur tempor elit esse deserunt velit nisi. Proident excepteur proident dolor ipsum in. Id proident et pariatur ipsum voluptate occaecat. Fugiat officia aute dolore duis ea officia id consectetur in do commodo aliquip.
    
    Anim reprehenderit qui pariatur deserunt. Est deserunt minim dolore nostrud adipisicing labore adipisicing qui consequat est aliqua ad. Enim exercitation labore consequat elit fugiat aliquip ut ea consequat elit.
    
    Tempor velit eu ex excepteur qui aliqua enim consequat mollit. Laboris veniam labore commodo cupidatat ad magna. Ex ipsum anim ipsum reprehenderit adipisicing amet aliquip et adipisicing dolor.
    
    Laborum ut commodo ipsum laborum est occaecat elit reprehenderit aliqua sint. Non ad occaecat qui id enim excepteur ut irure in sint fugiat labore est. Aute sunt duis non id magna nostrud ea cupidatat incididunt. Laborum incididunt amet proident dolore duis ullamco ullamco. Irure adipisicing nisi velit dolor culpa irure sint. Aliquip sunt sint qui commodo sunt cupidatat duis Lorem ex. Adipisicing ullamco adipisicing qui adipisicing velit fugiat in anim officia dolor eu ea do aliqua.
    
    Dolore ad non sunt id fugiat enim voluptate ullamco quis non elit. Labore fugiat nostrud sint minim ex est sint amet voluptate et duis ea. Irure officia occaecat occaecat labore. Id sit quis enim ad aute. Laboris nostrud Lorem tempor aliquip nulla reprehenderit excepteur. Laborum officia ea dolore et aute officia ullamco minim aute qui anim cillum consequat excepteur. Eu velit quis culpa veniam id cillum velit incididunt ipsum dolore qui in aliquip ad.
    
    Proident in tempor non enim aliquip ad. Proident in eu sint pariatur nostrud et. Culpa reprehenderit ipsum sit excepteur quis dolor. Magna sit amet aliquip commodo dolor amet pariatur et mollit culpa id sit. Lorem ullamco minim nisi adipisicing eu laboris. Velit aliquip proident tempor id duis.`,
    
    resumen:"Nulla anim consectetur magna cillum sit in aliqua duis qui. Labore cupidatat eiusmod irure ut in velit irure aliquip magna aliqua do. Est cillum eu deserunt tempor non enim labore qui et laboris. Ad labore proident labore proident dolor veniam ad tempor dolor.", 
    seccion:"ciencia",
    imgSrc:"../assets/img/ciencia6.jpg",
    imgAlt:"una caja de componentes a reciclar",
    autor:"Jonathan Granado",
    fecha:"23/05/2023",
    trend: false,
    },
    {
    id:26, 
    titulo:"las redes sociales", 
    cuerpo:`Pariatur fugiat aliquip reprehenderit incididunt exercitation qui nulla adipisicing veniam amet velit laborum. Velit sit nulla aliqua occaecat ad occaecat reprehenderit veniam esse. Proident ea amet consequat ea tempor anim. Qui est duis culpa reprehenderit aliquip adipisicing amet do. <br/>

Esse minim aliquip aliqua voluptate laboris adipisicing. Eiusmod ad eiusmod proident cupidatat dolor irure dolor proident cupidatat sint. Irure tempor dolore consequat incididunt velit dolor sint reprehenderit ex et et ipsum culpa elit. Voluptate nisi ad elit quis cupidatat ipsum ipsum. Minim elit commodo ex officia sunt officia ut sint eiusmod dolore. Et incididunt mollit ex laborum enim tempor ipsum esse. Cupidatat enim ex magna incididunt.

Exercitation duis proident ullamco tempor cillum magna labore consequat quis deserunt sint tempor dolor magna. Elit nulla culpa aliquip non ea ullamco eu ut excepteur. Voluptate deserunt cupidatat velit sunt id ex.

Consectetur aliquip dolor minim do culpa. Reprehenderit id irure quis laboris et ea quis sit occaecat. Velit ullamco commodo mollit cillum cillum. Cillum et velit ex irure eiusmod velit.

Duis velit consequat consectetur tempor elit esse deserunt velit nisi. Proident excepteur proident dolor ipsum in. Id proident et pariatur ipsum voluptate occaecat. Fugiat officia aute dolore duis ea officia id consectetur in do commodo aliquip.

Anim reprehenderit qui pariatur deserunt. Est deserunt minim dolore nostrud adipisicing labore adipisicing qui consequat est aliqua ad. Enim exercitation labore consequat elit fugiat aliquip ut ea consequat elit.

Tempor velit eu ex excepteur qui aliqua enim consequat mollit. Laboris veniam labore commodo cupidatat ad magna. Ex ipsum anim ipsum reprehenderit adipisicing amet aliquip et adipisicing dolor.

Laborum ut commodo ipsum laborum est occaecat elit reprehenderit aliqua sint. Non ad occaecat qui id enim excepteur ut irure in sint fugiat labore est. Aute sunt duis non id magna nostrud ea cupidatat incididunt. Laborum incididunt amet proident dolore duis ullamco ullamco. Irure adipisicing nisi velit dolor culpa irure sint. Aliquip sunt sint qui commodo sunt cupidatat duis Lorem ex. Adipisicing ullamco adipisicing qui adipisicing velit fugiat in anim officia dolor eu ea do aliqua.

Dolore ad non sunt id fugiat enim voluptate ullamco quis non elit. Labore fugiat nostrud sint minim ex est sint amet voluptate et duis ea. Irure officia occaecat occaecat labore. Id sit quis enim ad aute. Laboris nostrud Lorem tempor aliquip nulla reprehenderit excepteur. Laborum officia ea dolore et aute officia ullamco minim aute qui anim cillum consequat excepteur. Eu velit quis culpa veniam id cillum velit incididunt ipsum dolore qui in aliquip ad.

Proident in tempor non enim aliquip ad. Proident in eu sint pariatur nostrud et. Culpa reprehenderit ipsum sit excepteur quis dolor. Magna sit amet aliquip commodo dolor amet pariatur et mollit culpa id sit. Lorem ullamco minim nisi adipisicing eu laboris. Velit aliquip proident tempor id duis.`,

    resumen:"Nisi duis voluptate sunt nulla excepteur dolore. Duis cillum nulla elit culpa quis in ad irure. Nostrud occaecat dolor ipsum sunt labore non. Adipisicing ullamco do proident excepteur fugiat veniam dolor elit sint. Cillum ea ea officia ad pariatur. Minim sit veniam sint et nisi quis amet commodo labore et eiusmod.", 
    seccion:"opinion", 
    imgSrc:"../assets/img/opinion6.jpg",
    imgAlt:"un portatil con emotes de redes sociales",
    autor:"Noemi Segarra",
    fecha:"24/05/2023",
    trend: false,
    },
    {
    id:27,
    titulo:"frutas caras", 
    cuerpo:`Pariatur fugiat aliquip reprehenderit incididunt exercitation qui nulla adipisicing veniam amet velit laborum. Velit sit nulla aliqua occaecat ad occaecat reprehenderit veniam esse. Proident ea amet consequat ea tempor anim. Qui est duis culpa reprehenderit aliquip adipisicing amet do. <br/>

Esse minim aliquip aliqua voluptate laboris adipisicing. Eiusmod ad eiusmod proident cupidatat dolor irure dolor proident cupidatat sint. Irure tempor dolore consequat incididunt velit dolor sint reprehenderit ex et et ipsum culpa elit. Voluptate nisi ad elit quis cupidatat ipsum ipsum. Minim elit commodo ex officia sunt officia ut sint eiusmod dolore. Et incididunt mollit ex laborum enim tempor ipsum esse. Cupidatat enim ex magna incididunt.

Exercitation duis proident ullamco tempor cillum magna labore consequat quis deserunt sint tempor dolor magna. Elit nulla culpa aliquip non ea ullamco eu ut excepteur. Voluptate deserunt cupidatat velit sunt id ex.

Consectetur aliquip dolor minim do culpa. Reprehenderit id irure quis laboris et ea quis sit occaecat. Velit ullamco commodo mollit cillum cillum. Cillum et velit ex irure eiusmod velit.

Duis velit consequat consectetur tempor elit esse deserunt velit nisi. Proident excepteur proident dolor ipsum in. Id proident et pariatur ipsum voluptate occaecat. Fugiat officia aute dolore duis ea officia id consectetur in do commodo aliquip.

Anim reprehenderit qui pariatur deserunt. Est deserunt minim dolore nostrud adipisicing labore adipisicing qui consequat est aliqua ad. Enim exercitation labore consequat elit fugiat aliquip ut ea consequat elit.

Tempor velit eu ex excepteur qui aliqua enim consequat mollit. Laboris veniam labore commodo cupidatat ad magna. Ex ipsum anim ipsum reprehenderit adipisicing amet aliquip et adipisicing dolor.

Laborum ut commodo ipsum laborum est occaecat elit reprehenderit aliqua sint. Non ad occaecat qui id enim excepteur ut irure in sint fugiat labore est. Aute sunt duis non id magna nostrud ea cupidatat incididunt. Laborum incididunt amet proident dolore duis ullamco ullamco. Irure adipisicing nisi velit dolor culpa irure sint. Aliquip sunt sint qui commodo sunt cupidatat duis Lorem ex. Adipisicing ullamco adipisicing qui adipisicing velit fugiat in anim officia dolor eu ea do aliqua.

Dolore ad non sunt id fugiat enim voluptate ullamco quis non elit. Labore fugiat nostrud sint minim ex est sint amet voluptate et duis ea. Irure officia occaecat occaecat labore. Id sit quis enim ad aute. Laboris nostrud Lorem tempor aliquip nulla reprehenderit excepteur. Laborum officia ea dolore et aute officia ullamco minim aute qui anim cillum consequat excepteur. Eu velit quis culpa veniam id cillum velit incididunt ipsum dolore qui in aliquip ad.

Proident in tempor non enim aliquip ad. Proident in eu sint pariatur nostrud et. Culpa reprehenderit ipsum sit excepteur quis dolor. Magna sit amet aliquip commodo dolor amet pariatur et mollit culpa id sit. Lorem ullamco minim nisi adipisicing eu laboris. Velit aliquip proident tempor id duis.`,

    resumen:"Nisi duis voluptate sunt nulla excepteur dolore. Duis cillum nulla elit culpa quis in ad irure. Nostrud occaecat dolor ipsum sunt labore non. Adipisicing ullamco do proident excepteur fugiat veniam dolor elit sint. Cillum ea ea officia ad pariatur. Minim sit veniam sint et nisi quis amet commodo labore et eiusmod.", 
    seccion:"economia", 
    imgSrc:"../assets/img/economia6.jpg",
    imgAlt:"el frente de una verduleria",
    autor:"Mirian Fuertes",
    fecha:"24/05/2023",
    trend: false,
    },
    {   
    id:28,
    titulo:"votacion de ley Y",
    cuerpo:`Pariatur fugiat aliquip reprehenderit incididunt exercitation qui nulla adipisicing veniam amet velit laborum. Velit sit nulla aliqua occaecat ad occaecat reprehenderit veniam esse. Proident ea amet consequat ea tempor anim. Qui est duis culpa reprehenderit aliquip adipisicing amet do. <br/>

Esse minim aliquip aliqua voluptate laboris adipisicing. Eiusmod ad eiusmod proident cupidatat dolor irure dolor proident cupidatat sint. Irure tempor dolore consequat incididunt velit dolor sint reprehenderit ex et et ipsum culpa elit. Voluptate nisi ad elit quis cupidatat ipsum ipsum. Minim elit commodo ex officia sunt officia ut sint eiusmod dolore. Et incididunt mollit ex laborum enim tempor ipsum esse. Cupidatat enim ex magna incididunt.

Exercitation duis proident ullamco tempor cillum magna labore consequat quis deserunt sint tempor dolor magna. Elit nulla culpa aliquip non ea ullamco eu ut excepteur. Voluptate deserunt cupidatat velit sunt id ex.

Consectetur aliquip dolor minim do culpa. Reprehenderit id irure quis laboris et ea quis sit occaecat. Velit ullamco commodo mollit cillum cillum. Cillum et velit ex irure eiusmod velit.

Duis velit consequat consectetur tempor elit esse deserunt velit nisi. Proident excepteur proident dolor ipsum in. Id proident et pariatur ipsum voluptate occaecat. Fugiat officia aute dolore duis ea officia id consectetur in do commodo aliquip.

Anim reprehenderit qui pariatur deserunt. Est deserunt minim dolore nostrud adipisicing labore adipisicing qui consequat est aliqua ad. Enim exercitation labore consequat elit fugiat aliquip ut ea consequat elit.

Tempor velit eu ex excepteur qui aliqua enim consequat mollit. Laboris veniam labore commodo cupidatat ad magna. Ex ipsum anim ipsum reprehenderit adipisicing amet aliquip et adipisicing dolor.

Laborum ut commodo ipsum laborum est occaecat elit reprehenderit aliqua sint. Non ad occaecat qui id enim excepteur ut irure in sint fugiat labore est. Aute sunt duis non id magna nostrud ea cupidatat incididunt. Laborum incididunt amet proident dolore duis ullamco ullamco. Irure adipisicing nisi velit dolor culpa irure sint. Aliquip sunt sint qui commodo sunt cupidatat duis Lorem ex. Adipisicing ullamco adipisicing qui adipisicing velit fugiat in anim officia dolor eu ea do aliqua.

Dolore ad non sunt id fugiat enim voluptate ullamco quis non elit. Labore fugiat nostrud sint minim ex est sint amet voluptate et duis ea. Irure officia occaecat occaecat labore. Id sit quis enim ad aute. Laboris nostrud Lorem tempor aliquip nulla reprehenderit excepteur. Laborum officia ea dolore et aute officia ullamco minim aute qui anim cillum consequat excepteur. Eu velit quis culpa veniam id cillum velit incididunt ipsum dolore qui in aliquip ad.

Proident in tempor non enim aliquip ad. Proident in eu sint pariatur nostrud et. Culpa reprehenderit ipsum sit excepteur quis dolor. Magna sit amet aliquip commodo dolor amet pariatur et mollit culpa id sit. Lorem ullamco minim nisi adipisicing eu laboris. Velit aliquip proident tempor id duis.`,

    resumen:"Irure ad irure ipsum occaecat. Anim minim reprehenderit nisi fugiat exercitation laboris eu nulla ex reprehenderit. Enim minim esse laborum quis anim aliquip. Culpa non sit consectetur eiusmod ea minim aliqua reprehenderit magna cupidatat nostrud Lorem. Id eu amet commodo nisi occaecat aute magna reprehenderit nisi nulla amet. Et amet cupidatat qui id adipisicing veniam occaecat.",
    seccion:"politica", 
    imgSrc:"../assets/img/politica6.jpg",
    imgAlt:"escaleras del parlamento",
    autor:"Jonathan Granado",
    fecha:"25/05/2023",
    trend: false,
    },
    {
    id:29, 
    titulo:"campeones de algo", 
    cuerpo:`Pariatur fugiat aliquip reprehenderit incididunt exercitation qui nulla adipisicing veniam amet velit laborum. Velit sit nulla aliqua occaecat ad occaecat reprehenderit veniam esse. Proident ea amet consequat ea tempor anim. Qui est duis culpa reprehenderit aliquip adipisicing amet do. <br/>

    Esse minim aliquip aliqua voluptate laboris adipisicing. Eiusmod ad eiusmod proident cupidatat dolor irure dolor proident cupidatat sint. Irure tempor dolore consequat incididunt velit dolor sint reprehenderit ex et et ipsum culpa elit. Voluptate nisi ad elit quis cupidatat ipsum ipsum. Minim elit commodo ex officia sunt officia ut sint eiusmod dolore. Et incididunt mollit ex laborum enim tempor ipsum esse. Cupidatat enim ex magna incididunt.
    
    Exercitation duis proident ullamco tempor cillum magna labore consequat quis deserunt sint tempor dolor magna. Elit nulla culpa aliquip non ea ullamco eu ut excepteur. Voluptate deserunt cupidatat velit sunt id ex.
    
    Consectetur aliquip dolor minim do culpa. Reprehenderit id irure quis laboris et ea quis sit occaecat. Velit ullamco commodo mollit cillum cillum. Cillum et velit ex irure eiusmod velit.
    
    Duis velit consequat consectetur tempor elit esse deserunt velit nisi. Proident excepteur proident dolor ipsum in. Id proident et pariatur ipsum voluptate occaecat. Fugiat officia aute dolore duis ea officia id consectetur in do commodo aliquip.
    
    Anim reprehenderit qui pariatur deserunt. Est deserunt minim dolore nostrud adipisicing labore adipisicing qui consequat est aliqua ad. Enim exercitation labore consequat elit fugiat aliquip ut ea consequat elit.
    
    Tempor velit eu ex excepteur qui aliqua enim consequat mollit. Laboris veniam labore commodo cupidatat ad magna. Ex ipsum anim ipsum reprehenderit adipisicing amet aliquip et adipisicing dolor.
    
    Laborum ut commodo ipsum laborum est occaecat elit reprehenderit aliqua sint. Non ad occaecat qui id enim excepteur ut irure in sint fugiat labore est. Aute sunt duis non id magna nostrud ea cupidatat incididunt. Laborum incididunt amet proident dolore duis ullamco ullamco. Irure adipisicing nisi velit dolor culpa irure sint. Aliquip sunt sint qui commodo sunt cupidatat duis Lorem ex. Adipisicing ullamco adipisicing qui adipisicing velit fugiat in anim officia dolor eu ea do aliqua.
    
    Dolore ad non sunt id fugiat enim voluptate ullamco quis non elit. Labore fugiat nostrud sint minim ex est sint amet voluptate et duis ea. Irure officia occaecat occaecat labore. Id sit quis enim ad aute. Laboris nostrud Lorem tempor aliquip nulla reprehenderit excepteur. Laborum officia ea dolore et aute officia ullamco minim aute qui anim cillum consequat excepteur. Eu velit quis culpa veniam id cillum velit incididunt ipsum dolore qui in aliquip ad.
    
    Proident in tempor non enim aliquip ad. Proident in eu sint pariatur nostrud et. Culpa reprehenderit ipsum sit excepteur quis dolor. Magna sit amet aliquip commodo dolor amet pariatur et mollit culpa id sit. Lorem ullamco minim nisi adipisicing eu laboris. Velit aliquip proident tempor id duis.`,
    
    resumen:"Amet aute consequat et minim aliquip minim in consectetur elit incididunt do ipsum dolore Lorem. Fugiat velit do consectetur qui nostrud duis est commodo pariatur pariatur ea non anim quis. Voluptate Lorem aute cillum non duis aute culpa. Quis laboris id ipsum labore ipsum eiusmod ea.", 
    seccion:"deporte", 
    imgSrc:"../assets/img/deporte6.jpg",
    imgAlt:"gente levantando una copa",
    autor:"Jonathan Granado",
    fecha:"25/05/2023",
    trend: false,
    },
    {
    id:30, 
    titulo:"nuevos electronicos", 
    cuerpo:`Pariatur fugiat aliquip reprehenderit incididunt exercitation qui nulla adipisicing veniam amet velit laborum. Velit sit nulla aliqua occaecat ad occaecat reprehenderit veniam esse. Proident ea amet consequat ea tempor anim. Qui est duis culpa reprehenderit aliquip adipisicing amet do. <br/>

Esse minim aliquip aliqua voluptate laboris adipisicing. Eiusmod ad eiusmod proident cupidatat dolor irure dolor proident cupidatat sint. Irure tempor dolore consequat incididunt velit dolor sint reprehenderit ex et et ipsum culpa elit. Voluptate nisi ad elit quis cupidatat ipsum ipsum. Minim elit commodo ex officia sunt officia ut sint eiusmod dolore. Et incididunt mollit ex laborum enim tempor ipsum esse. Cupidatat enim ex magna incididunt.

Exercitation duis proident ullamco tempor cillum magna labore consequat quis deserunt sint tempor dolor magna. Elit nulla culpa aliquip non ea ullamco eu ut excepteur. Voluptate deserunt cupidatat velit sunt id ex.

Consectetur aliquip dolor minim do culpa. Reprehenderit id irure quis laboris et ea quis sit occaecat. Velit ullamco commodo mollit cillum cillum. Cillum et velit ex irure eiusmod velit.

Duis velit consequat consectetur tempor elit esse deserunt velit nisi. Proident excepteur proident dolor ipsum in. Id proident et pariatur ipsum voluptate occaecat. Fugiat officia aute dolore duis ea officia id consectetur in do commodo aliquip.

Anim reprehenderit qui pariatur deserunt. Est deserunt minim dolore nostrud adipisicing labore adipisicing qui consequat est aliqua ad. Enim exercitation labore consequat elit fugiat aliquip ut ea consequat elit.

Tempor velit eu ex excepteur qui aliqua enim consequat mollit. Laboris veniam labore commodo cupidatat ad magna. Ex ipsum anim ipsum reprehenderit adipisicing amet aliquip et adipisicing dolor.

Laborum ut commodo ipsum laborum est occaecat elit reprehenderit aliqua sint. Non ad occaecat qui id enim excepteur ut irure in sint fugiat labore est. Aute sunt duis non id magna nostrud ea cupidatat incididunt. Laborum incididunt amet proident dolore duis ullamco ullamco. Irure adipisicing nisi velit dolor culpa irure sint. Aliquip sunt sint qui commodo sunt cupidatat duis Lorem ex. Adipisicing ullamco adipisicing qui adipisicing velit fugiat in anim officia dolor eu ea do aliqua.

Dolore ad non sunt id fugiat enim voluptate ullamco quis non elit. Labore fugiat nostrud sint minim ex est sint amet voluptate et duis ea. Irure officia occaecat occaecat labore. Id sit quis enim ad aute. Laboris nostrud Lorem tempor aliquip nulla reprehenderit excepteur. Laborum officia ea dolore et aute officia ullamco minim aute qui anim cillum consequat excepteur. Eu velit quis culpa veniam id cillum velit incididunt ipsum dolore qui in aliquip ad.

Proident in tempor non enim aliquip ad. Proident in eu sint pariatur nostrud et. Culpa reprehenderit ipsum sit excepteur quis dolor. Magna sit amet aliquip commodo dolor amet pariatur et mollit culpa id sit. Lorem ullamco minim nisi adipisicing eu laboris. Velit aliquip proident tempor id duis.`,

    resumen:"Elit id tempor nisi excepteur. Ex ut adipisicing est elit ipsum officia ullamco excepteur amet sint incididunt sint ut laborum. Ad laboris excepteur voluptate consequat id cupidatat. Voluptate minim id esse Lorem. Aliquip minim officia officia duis officia veniam aute culpa reprehenderit elit pariatur esse dolore occaecat. Duis ex ullamco id laboris consequat sunt.", 
    seccion:"ciencia", 
    imgSrc:"../assets/img/ciencia7.jpg",
    imgAlt:"persona usando un tester",
    autor:"Noemi Segarra",
    fecha:"26/05/2023",
    trend: false,
    },
    {
    id:31, 
    titulo:"personas sin techo", 
    cuerpo:`Pariatur fugiat aliquip reprehenderit incididunt exercitation qui nulla adipisicing veniam amet velit laborum. Velit sit nulla aliqua occaecat ad occaecat reprehenderit veniam esse. Proident ea amet consequat ea tempor anim. Qui est duis culpa reprehenderit aliquip adipisicing amet do. <br/>

    Esse minim aliquip aliqua voluptate laboris adipisicing. Eiusmod ad eiusmod proident cupidatat dolor irure dolor proident cupidatat sint. Irure tempor dolore consequat incididunt velit dolor sint reprehenderit ex et et ipsum culpa elit. Voluptate nisi ad elit quis cupidatat ipsum ipsum. Minim elit commodo ex officia sunt officia ut sint eiusmod dolore. Et incididunt mollit ex laborum enim tempor ipsum esse. Cupidatat enim ex magna incididunt.
    
    Exercitation duis proident ullamco tempor cillum magna labore consequat quis deserunt sint tempor dolor magna. Elit nulla culpa aliquip non ea ullamco eu ut excepteur. Voluptate deserunt cupidatat velit sunt id ex.
    
    Consectetur aliquip dolor minim do culpa. Reprehenderit id irure quis laboris et ea quis sit occaecat. Velit ullamco commodo mollit cillum cillum. Cillum et velit ex irure eiusmod velit.
    
    Duis velit consequat consectetur tempor elit esse deserunt velit nisi. Proident excepteur proident dolor ipsum in. Id proident et pariatur ipsum voluptate occaecat. Fugiat officia aute dolore duis ea officia id consectetur in do commodo aliquip.
    
    Anim reprehenderit qui pariatur deserunt. Est deserunt minim dolore nostrud adipisicing labore adipisicing qui consequat est aliqua ad. Enim exercitation labore consequat elit fugiat aliquip ut ea consequat elit.
    
    Tempor velit eu ex excepteur qui aliqua enim consequat mollit. Laboris veniam labore commodo cupidatat ad magna. Ex ipsum anim ipsum reprehenderit adipisicing amet aliquip et adipisicing dolor.
    
    Laborum ut commodo ipsum laborum est occaecat elit reprehenderit aliqua sint. Non ad occaecat qui id enim excepteur ut irure in sint fugiat labore est. Aute sunt duis non id magna nostrud ea cupidatat incididunt. Laborum incididunt amet proident dolore duis ullamco ullamco. Irure adipisicing nisi velit dolor culpa irure sint. Aliquip sunt sint qui commodo sunt cupidatat duis Lorem ex. Adipisicing ullamco adipisicing qui adipisicing velit fugiat in anim officia dolor eu ea do aliqua.
    
    Dolore ad non sunt id fugiat enim voluptate ullamco quis non elit. Labore fugiat nostrud sint minim ex est sint amet voluptate et duis ea. Irure officia occaecat occaecat labore. Id sit quis enim ad aute. Laboris nostrud Lorem tempor aliquip nulla reprehenderit excepteur. Laborum officia ea dolore et aute officia ullamco minim aute qui anim cillum consequat excepteur. Eu velit quis culpa veniam id cillum velit incididunt ipsum dolore qui in aliquip ad.
    
    Proident in tempor non enim aliquip ad. Proident in eu sint pariatur nostrud et. Culpa reprehenderit ipsum sit excepteur quis dolor. Magna sit amet aliquip commodo dolor amet pariatur et mollit culpa id sit. Lorem ullamco minim nisi adipisicing eu laboris. Velit aliquip proident tempor id duis.`,
    
    resumen:"Tempor duiss exercitation qui adipisicing. Velit magna nostrud proident deserunt anim nostrud voluptate labore proident esse. Elit excepteur aute ullamco anim nisi quis et id commodo. Reprehenderit labore reprehenderit exercitation Lorem eiusmod anim aliquip qui pariatur et reprehenderit anim. Esse voluptate laborum labore ad ut in mollit esse nulla irure irure.", 
    seccion:"opinion",
    imgSrc:"../assets/img/opinion7.jpg",
    imgAlt:"persona en la calle",
    autor:"Jone Figueras",
    fecha:"26/05/2023",
    trend: false,
    },
    {
    id:32, 
    titulo:"revisando un inventario", 
    cuerpo:`Pariatur fugiat aliquip reprehenderit incididunt exercitation qui nulla adipisicing veniam amet velit laborum. Velit sit nulla aliqua occaecat ad occaecat reprehenderit veniam esse. Proident ea amet consequat ea tempor anim. Qui est duis culpa reprehenderit aliquip adipisicing amet do. <br/>

    Esse minim aliquip aliqua voluptate laboris adipisicing. Eiusmod ad eiusmod proident cupidatat dolor irure dolor proident cupidatat sint. Irure tempor dolore consequat incididunt velit dolor sint reprehenderit ex et et ipsum culpa elit. Voluptate nisi ad elit quis cupidatat ipsum ipsum. Minim elit commodo ex officia sunt officia ut sint eiusmod dolore. Et incididunt mollit ex laborum enim tempor ipsum esse. Cupidatat enim ex magna incididunt.
    
    Exercitation duis proident ullamco tempor cillum magna labore consequat quis deserunt sint tempor dolor magna. Elit nulla culpa aliquip non ea ullamco eu ut excepteur. Voluptate deserunt cupidatat velit sunt id ex.
    
    Consectetur aliquip dolor minim do culpa. Reprehenderit id irure quis laboris et ea quis sit occaecat. Velit ullamco commodo mollit cillum cillum. Cillum et velit ex irure eiusmod velit.
    
    Duis velit consequat consectetur tempor elit esse deserunt velit nisi. Proident excepteur proident dolor ipsum in. Id proident et pariatur ipsum voluptate occaecat. Fugiat officia aute dolore duis ea officia id consectetur in do commodo aliquip.
    
    Anim reprehenderit qui pariatur deserunt. Est deserunt minim dolore nostrud adipisicing labore adipisicing qui consequat est aliqua ad. Enim exercitation labore consequat elit fugiat aliquip ut ea consequat elit.
    
    Tempor velit eu ex excepteur qui aliqua enim consequat mollit. Laboris veniam labore commodo cupidatat ad magna. Ex ipsum anim ipsum reprehenderit adipisicing amet aliquip et adipisicing dolor.
    
    Laborum ut commodo ipsum laborum est occaecat elit reprehenderit aliqua sint. Non ad occaecat qui id enim excepteur ut irure in sint fugiat labore est. Aute sunt duis non id magna nostrud ea cupidatat incididunt. Laborum incididunt amet proident dolore duis ullamco ullamco. Irure adipisicing nisi velit dolor culpa irure sint. Aliquip sunt sint qui commodo sunt cupidatat duis Lorem ex. Adipisicing ullamco adipisicing qui adipisicing velit fugiat in anim officia dolor eu ea do aliqua.
    
    Dolore ad non sunt id fugiat enim voluptate ullamco quis non elit. Labore fugiat nostrud sint minim ex est sint amet voluptate et duis ea. Irure officia occaecat occaecat labore. Id sit quis enim ad aute. Laboris nostrud Lorem tempor aliquip nulla reprehenderit excepteur. Laborum officia ea dolore et aute officia ullamco minim aute qui anim cillum consequat excepteur. Eu velit quis culpa veniam id cillum velit incididunt ipsum dolore qui in aliquip ad.
    
    Proident in tempor non enim aliquip ad. Proident in eu sint pariatur nostrud et. Culpa reprehenderit ipsum sit excepteur quis dolor. Magna sit amet aliquip commodo dolor amet pariatur et mollit culpa id sit. Lorem ullamco minim nisi adipisicing eu laboris. Velit aliquip proident tempor id duis.`,
    
    resumen:"Nulla anim consectetur magna cillum sit in aliqua duis qui. Labore cupidatat eiusmod irure ut in velit irure aliquip magna aliqua do. Est cillum eu deserunt tempor non enim labore qui et laboris. Ad labore proident labore proident dolor veniam ad tempor dolor.", 
    seccion:"economia",
    imgSrc:"../assets/img/economia7.jpg",
    imgAlt:"dos personas revisando un inventario",
    autor:"Jonathan Granado",
    fecha:"27/05/2023",
    trend: false,
    },
    {
    id:33, 
    titulo:"conversando al salir", 
    cuerpo:`Pariatur fugiat aliquip reprehenderit incididunt exercitation qui nulla adipisicing veniam amet velit laborum. Velit sit nulla aliqua occaecat ad occaecat reprehenderit veniam esse. Proident ea amet consequat ea tempor anim. Qui est duis culpa reprehenderit aliquip adipisicing amet do. <br/>

Esse minim aliquip aliqua voluptate laboris adipisicing. Eiusmod ad eiusmod proident cupidatat dolor irure dolor proident cupidatat sint. Irure tempor dolore consequat incididunt velit dolor sint reprehenderit ex et et ipsum culpa elit. Voluptate nisi ad elit quis cupidatat ipsum ipsum. Minim elit commodo ex officia sunt officia ut sint eiusmod dolore. Et incididunt mollit ex laborum enim tempor ipsum esse. Cupidatat enim ex magna incididunt.

Exercitation duis proident ullamco tempor cillum magna labore consequat quis deserunt sint tempor dolor magna. Elit nulla culpa aliquip non ea ullamco eu ut excepteur. Voluptate deserunt cupidatat velit sunt id ex.

Consectetur aliquip dolor minim do culpa. Reprehenderit id irure quis laboris et ea quis sit occaecat. Velit ullamco commodo mollit cillum cillum. Cillum et velit ex irure eiusmod velit.

Duis velit consequat consectetur tempor elit esse deserunt velit nisi. Proident excepteur proident dolor ipsum in. Id proident et pariatur ipsum voluptate occaecat. Fugiat officia aute dolore duis ea officia id consectetur in do commodo aliquip.

Anim reprehenderit qui pariatur deserunt. Est deserunt minim dolore nostrud adipisicing labore adipisicing qui consequat est aliqua ad. Enim exercitation labore consequat elit fugiat aliquip ut ea consequat elit.

Tempor velit eu ex excepteur qui aliqua enim consequat mollit. Laboris veniam labore commodo cupidatat ad magna. Ex ipsum anim ipsum reprehenderit adipisicing amet aliquip et adipisicing dolor.

Laborum ut commodo ipsum laborum est occaecat elit reprehenderit aliqua sint. Non ad occaecat qui id enim excepteur ut irure in sint fugiat labore est. Aute sunt duis non id magna nostrud ea cupidatat incididunt. Laborum incididunt amet proident dolore duis ullamco ullamco. Irure adipisicing nisi velit dolor culpa irure sint. Aliquip sunt sint qui commodo sunt cupidatat duis Lorem ex. Adipisicing ullamco adipisicing qui adipisicing velit fugiat in anim officia dolor eu ea do aliqua.

Dolore ad non sunt id fugiat enim voluptate ullamco quis non elit. Labore fugiat nostrud sint minim ex est sint amet voluptate et duis ea. Irure officia occaecat occaecat labore. Id sit quis enim ad aute. Laboris nostrud Lorem tempor aliquip nulla reprehenderit excepteur. Laborum officia ea dolore et aute officia ullamco minim aute qui anim cillum consequat excepteur. Eu velit quis culpa veniam id cillum velit incididunt ipsum dolore qui in aliquip ad.

Proident in tempor non enim aliquip ad. Proident in eu sint pariatur nostrud et. Culpa reprehenderit ipsum sit excepteur quis dolor. Magna sit amet aliquip commodo dolor amet pariatur et mollit culpa id sit. Lorem ullamco minim nisi adipisicing eu laboris. Velit aliquip proident tempor id duis.`,

    resumen:"Nisi duis voluptate sunt nulla excepteur dolore. Duis cillum nulla elit culpa quis in ad irure. Nostrud occaecat dolor ipsum sunt labore non. Adipisicing ullamco do proident excepteur fugiat veniam dolor elit sint. Cillum ea ea officia ad pariatur. Minim sit veniam sint et nisi quis amet commodo labore et eiusmod.", 
    seccion:"politica", 
    imgSrc:"../assets/img/politica7.jpg",
    imgAlt:"x e y conversando al salir de z",
    autor:"Noemi Segarra",
    fecha:"27/05/2023",
    trend: false,
    },
    {
    id:34,
    titulo:"kayak en el rio", 
    cuerpo:`Pariatur fugiat aliquip reprehenderit incididunt exercitation qui nulla adipisicing veniam amet velit laborum. Velit sit nulla aliqua occaecat ad occaecat reprehenderit veniam esse. Proident ea amet consequat ea tempor anim. Qui est duis culpa reprehenderit aliquip adipisicing amet do. <br/>

    Esse minim aliquip aliqua voluptate laboris adipisicing. Eiusmod ad eiusmod proident cupidatat dolor irure dolor proident cupidatat sint. Irure tempor dolore consequat incididunt velit dolor sint reprehenderit ex et et ipsum culpa elit. Voluptate nisi ad elit quis cupidatat ipsum ipsum. Minim elit commodo ex officia sunt officia ut sint eiusmod dolore. Et incididunt mollit ex laborum enim tempor ipsum esse. Cupidatat enim ex magna incididunt.
    
    Exercitation duis proident ullamco tempor cillum magna labore consequat quis deserunt sint tempor dolor magna. Elit nulla culpa aliquip non ea ullamco eu ut excepteur. Voluptate deserunt cupidatat velit sunt id ex.
    
    Consectetur aliquip dolor minim do culpa. Reprehenderit id irure quis laboris et ea quis sit occaecat. Velit ullamco commodo mollit cillum cillum. Cillum et velit ex irure eiusmod velit.
    
    Duis velit consequat consectetur tempor elit esse deserunt velit nisi. Proident excepteur proident dolor ipsum in. Id proident et pariatur ipsum voluptate occaecat. Fugiat officia aute dolore duis ea officia id consectetur in do commodo aliquip.
    
    Anim reprehenderit qui pariatur deserunt. Est deserunt minim dolore nostrud adipisicing labore adipisicing qui consequat est aliqua ad. Enim exercitation labore consequat elit fugiat aliquip ut ea consequat elit.
    
    Tempor velit eu ex excepteur qui aliqua enim consequat mollit. Laboris veniam labore commodo cupidatat ad magna. Ex ipsum anim ipsum reprehenderit adipisicing amet aliquip et adipisicing dolor.
    
    Laborum ut commodo ipsum laborum est occaecat elit reprehenderit aliqua sint. Non ad occaecat qui id enim excepteur ut irure in sint fugiat labore est. Aute sunt duis non id magna nostrud ea cupidatat incididunt. Laborum incididunt amet proident dolore duis ullamco ullamco. Irure adipisicing nisi velit dolor culpa irure sint. Aliquip sunt sint qui commodo sunt cupidatat duis Lorem ex. Adipisicing ullamco adipisicing qui adipisicing velit fugiat in anim officia dolor eu ea do aliqua.
    
    Dolore ad non sunt id fugiat enim voluptate ullamco quis non elit. Labore fugiat nostrud sint minim ex est sint amet voluptate et duis ea. Irure officia occaecat occaecat labore. Id sit quis enim ad aute. Laboris nostrud Lorem tempor aliquip nulla reprehenderit excepteur. Laborum officia ea dolore et aute officia ullamco minim aute qui anim cillum consequat excepteur. Eu velit quis culpa veniam id cillum velit incididunt ipsum dolore qui in aliquip ad.
    
    Proident in tempor non enim aliquip ad. Proident in eu sint pariatur nostrud et. Culpa reprehenderit ipsum sit excepteur quis dolor. Magna sit amet aliquip commodo dolor amet pariatur et mollit culpa id sit. Lorem ullamco minim nisi adipisicing eu laboris. Velit aliquip proident tempor id duis.`,
    
    resumen:"Nisi duis voluptate sunt nulla excepteur dolore. Duis cillum nulla elit culpa quis in ad irure. Nostrud occaecat dolor ipsum sunt labore non. Adipisicing ullamco do proident excepteur fugiat veniam dolor elit sint. Cillum ea ea officia ad pariatur. Minim sit veniam sint et nisi quis amet commodo labore et eiusmod.", 
    seccion:"deporte", 
    imgSrc:"../assets/img/deporte7.jpg",
    imgAlt:"una persona en un kayak",
    autor:"Mirian Fuertes",
    fecha:"28/05/2023",
    trend: false,
    }   
]




