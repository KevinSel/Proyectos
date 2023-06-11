export interface Persona {
    id: number;
    nombre?: String;
    apellido?: String;
    usuario?: String;
    password?: String;
    balance?: number;
    salario?: number;
    esGestor?: boolean;
}

export interface Cliente {
    id: number;
    id_gestor: number;
    nombre: String;
    apellido: String;
    usuario: String;
    balance: number;
}

export interface Gestor {
    id: number;
    nombre: String;
    apellido: String;
    usuario: String;
    salario: number;
}

export interface Mensaje {
    id: number;
    mensaje:String;
    us_emisor: String;
    nombre_emisor: String;
    us_receptor: String;
    nombre_receptor: String;
    fecha: String;
}

export interface Deposito {
    id: number;
    id_emisor: number;
    nombre_emisor: String;
    monto: number;
    fecha: String;
}

export interface Transferencia {
    id: number;
    monto: number;
    id_emisor: number;
    nombre_emisor: String
    id_receptor: number;
    nombre_receptor: String
    fecha: String
}