package com.spring.jbcd;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import com.spring.main.restservice.Deposito;
import com.spring.main.restservice.Respuesta;
import com.spring.main.restservice.Transferencia;
import com.spring.main.restservice.validar.operacionValidador;

public class OperacionesDB {
 
 private static String query;
 
 private static ResultSet resultados;
 
 private static Respuesta respuesta;
 
 private static String [] argumentos;
 
  public static Respuesta dBNuevoDeposito(Deposito deposito){
  
    respuesta = operacionValidador.validarNuevoDeposito(deposito);
    query = "INSERT INTO `deposito` VALUES (?, ?)";
    argumentos = new String[] {Integer.toString(deposito.id_cliente()), Double.toString(deposito.monto())};
  
    if (!respuesta.valido()) {

    } else if (DbConnection.update(query, argumentos) == 0) {
      respuesta = new Respuesta("Error inesperado, no se ha realizado el deposito", false);
    }
 
    return respuesta;
  
  };
  
  public static Respuesta dBNuevaTransferencia(Transferencia transferencia){
  
    respuesta = operacionValidador.validarNuevaTransferencia(transferencia);
    query = "INSERT INTO 'transferencia' VALUES (?,?,?)";
    argumentos = new String[] {Integer.toString(transferencia.id_cliente_emisor()), Integer.toString(transferencia.id_cliente_receptor()), Double.toString(transferencia.monto())};
  
    if (!respuesta.valido()) {
    
    } else if (DbConnection.update(query,argumentos) == 0) {
      respuesta = new Respuesta("Error inesperado, no se ha realizado el deposito", false);
    }
  
    return respuesta;
  
  };
 
  public static ArrayList<Deposito> dBVerDepositos(int id){
 
    ArrayList<Deposito> depositos = new ArrayList<Deposito>();
    query = "SELECT * FROM deposito";
  
    try {
      if(id > 0) {
        query += " AND id_deposito = ?";
        resultados = DbConnection.select(query, new String[] {Integer.toString(id)});
      } else {
        resultados = DbConnection.select(query);
      }
      while(resultados.next()) {
        depositos.add( 
          new Deposito(
            resultados.getInt("id_deposito"),
            resultados.getInt("id_cliente"),
            resultados.getDouble("monto"),
            resultados.getString("fecha")
          )
        );
      } 
    } catch (SQLException e) {
      e.printStackTrace();
    } finally {
      DbConnection.cerrarConexion();
    }
    return depositos;
  };
 
  public static ArrayList<Deposito> dbVerDepositosCliente(int id) {
  
    ArrayList<Deposito> depositos = new ArrayList<Deposito>();
    query = "SELECT * FROM deposito WHERE id_cliente LIKE ?";
    argumentos = new String[] {Integer.toString(id)};
    
    try {
      resultados = DbConnection.select(query, argumentos);   
      while(resultados.next()) {
        depositos.add(
          new Deposito(
            resultados.getInt("id_deposito"),
            resultados.getInt("id_cliente"),
            resultados.getDouble("monto"),
            resultados.getString("fecha")
          )
        );
      } 
    } catch (SQLException e) {
      e.printStackTrace();
    } finally {
      DbConnection.cerrarConexion();
    }
    return depositos;
 };
 
  public static ArrayList<Transferencia> dBVerTransferencias(int id){
  
    ArrayList<Transferencia> transferencias = new ArrayList<Transferencia>();
    query = "SELECT * FROM transferencia";
    argumentos = new String[] {Integer.toString(id)};
    
    try {
      if(id > 0) {query += " AND id_transferencia = ?";
         resultados = DbConnection.select(query, argumentos);
      } else {
        resultados = DbConnection.select(query);
      }
      while(resultados.next()) {
        transferencias.add(
          new Transferencia(
            resultados.getInt("id_transferencia"),
            resultados.getInt("id_emisor"),
            resultados.getInt("id_receptor"),
            resultados.getDouble("monto"), 
            resultados.getString("fecha")
          )
        );
      } 
    } catch (SQLException e) {
      e.printStackTrace();
    } finally {
      DbConnection.cerrarConexion();
    }
    return transferencias;
  };
 
  public static ArrayList<Transferencia> dbVerTransferenciasCliente(int id) {
  
    ArrayList<Transferencia> transferencias = new ArrayList<Transferencia>();
    query = "SELECT * FROM transferencia WHERE id_emisor = ? OR id_receptor = ?";
    argumentos = new String[] {Integer.toString(id)};

    try {
      resultados = DbConnection.select(query, new String[] {Integer.toString(id),Integer.toString(id)});
      while(resultados.next()) {
        transferencias.add(new Transferencia(
            resultados.getInt("id_transferencia"),
            resultados.getInt("id_emisor"),
            resultados.getInt("id_receptor"),
            resultados.getDouble("monto"),
            resultados.getString("fecha")
          )
        );
      } 
    } catch (SQLException e) {
      e.printStackTrace();
    } finally {
      DbConnection.cerrarConexion();
    }
      return transferencias;
  };

}
