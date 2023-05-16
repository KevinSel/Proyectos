const gestorGratis = {"salome":{"clientes":["florencia","francisco"], "salario":2222},
                      "leticia":{"clientes":["nicole"], "salario":2222}}
const gestorRegular = {"ariadna":{"clientes":["anibal","javier","maria","evelyn"],"salario":3322},
                       "olivia":{"clientes":["isabel","jose","magdalena"],"salario":3222}}
const gestorPremium = {"lorenzo":{"clientes":["candida","jacinto"],"salario":4222}}

const clienteGratis = {"florencia":{"deposito":71234,
                                    "fechaReg":"16/05/2023"},
                        "francisco":{"deposito":2222,
                                    "fechaReg":"13/04/2023"},
                        "nicole":{"deposito":0,
                                  "fechaReg":"13/05/2023"}}
const clienteRegular = {"anibal":{"deposito":2,
                                 "fechaReg":"10/02/2023"},
                        "javier":{"deposito":32442,
                                 "fechaReg":"13/01/2023"},
                        "maria":{"deposito":4551,
                                "fechaReg":"1/03/2023"},
                        "evelyn":{"deposito":122,
                                 "fechaReg":"30/05/2023"},
                        "isabel":{"deposito":55122,
                                 "fechaReg":"25/02/2023"},
                        "jose":{"deposito":65362,
                                "fechaReg":"3/05/2023"},
                        "magdalena":{"deposito":122,
                                    "fechaReg":"16/04/2023"}}
const clientePremium = {"candida":{"deposito":4212,
                                   "fechaReg":"6/02/2023"},
                        "jacinto":{"deposito":2222,
                                   "fechaReg":"14/01/2023"}}

const mensajeCliente = {"florencia":["Hola, me gustaria subscribirme a la opcion premium"],
                        "Jacinto":["Hace 2 meses que no responden, quiero cerrar mi cuenta en este banco"]}
const mensajeGestor = {"lorenzo":["Recordar no dar tarjetas tipo B a los clientes gratuitos","Recordar no dar tarjetas tipo C a los clientes regulares"]}
const mensajeSistema = {"solicitudesSR":["Dia 16/06/2023 13 solicitudes sin resolver"],
                        "solicitudesNuevas":["3 Nuevas solicitudes"]};

const transfereciaIngresos = {"interes":22000,
                             "depositos":23314,
                             "cuotasReg":22222}
const transferenciaGastos = {"administrativo":22333,
                            "inversion":22211,
                            "extracciones":21223}
const transferenciaImpuestos = {"imp1":10021,
                                "imp2":2334,
                                "imp3":1112}


export {gestorGratis,gestorRegular,gestorPremium,clientePremium,clienteGratis,clienteRegular,mensajeCliente,mensajeSistema,mensajeGestor,transfereciaIngresos,transferenciaImpuestos,transferenciaGastos}