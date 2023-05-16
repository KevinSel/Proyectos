const gestorGratis = { "Salome": { "clientes": ["Florencia", "Francisco"], "salario": 2222 },
    "Letícia": { "clientes": ["Nicole"], "salario": 2222 } };
const gestorRegular = { "Ariadna": { "clientes": ["Aníbal", "Javier", "María", "Évelyn"], "salario": 3322 },
    "Olivia": { "clientes": ["Isabel", "José", "Magdalena"], "salario": 3222 } };
const gestorPremium = { "Lorenzo": { "clientes": ["Cándida", "Jacinto"], "salario": 4222 } };
const clienteGratis = { "Florencia": { "depósito": 71234,
        "fechaReg": "16/05/2023" },
    "Francisco": { "depósito": 2222,
        "fechaReg": "13/04/2023" },
    "Nicole": { "depósito": 0,
        "fechaReg": "13/05/2023" } };
const clienteRegular = { "aníbal": { "depósito": 2,
        "fechaReg": "10/02/2023" },
    "Javier": { "depósito": 32442,
        "fechaReg": "13/01/2023" },
    "María": { "depoósito": 4551,
        "fechaReg": "1/03/2023" },
    "Évelyn": { "depoósito": 122,
        "fechaReg": "30/05/2023" },
    "Isabel": { "depoósito": 55122,
        "fechaReg": "25/02/2023" },
    "José": { "depoósito": 65362,
        "fechaReg": "3/05/2023" },
    "Magdalena": { "depósito": 122,
        "fechaReg": "16/04/2023" } };
const clientePremium = { "Cándida": { "depósito": 4212,
        "fechaReg": "6/02/2023" },
    "Jacinto": { "depósito": 2222,
        "fechaReg": "14/01/2023" } };
const mensajeCliente = { "Florencia": ["Hola, me gustaría subscribirme a la opción Premium."],
    "Jacinto": ["Hace dos meses que no responden, quiero cerrar mi cuenta en este banco."] };
const mensajeGestor = { "Lorenzo": ["Recordar no dar tarjetas tipo B a los clientes gratuitos", "Recordar no dar tarjetas tipo C a los clientes regulares"] };
const mensajeSistema = { "solicitudesSR": ["Dia 16/06/2023 13 solicitudes sin resolver"],
    "solicitudesNuevas": ["3 Nuevas solicitudes"] };
const transfereciaIngresos = { "interés": 22000,
    "depósitos": 23314,
    "cuotasReg": 22222 };
const transferenciaGastos = { "administrativo": 22333,
    "inversión": 22211,
    "extracciones": 21223 };
const transferenciaImpuestos = { "imp1": 10021,
    "imp2": 2334,
    "imp3": 1112 };
export const data = { gestorGratis, gestorRegular, gestorPremium, clientePremium, clienteGratis, clienteRegular, mensajeCliente, mensajeSistema, mensajeGestor, transfereciaIngresos, transferenciaImpuestos, transferenciaGastos };
