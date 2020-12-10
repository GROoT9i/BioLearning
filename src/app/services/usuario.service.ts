import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Usuario } from '../class/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor( private http: HttpClient ) { }

  private urlEndPoint = 'http://localhost:8085/usuario';

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});



//listando los datos en la lista 
getUsuarios(): Observable<Usuario[]> {
  return this.http.get(`${this.urlEndPoint}/all`).pipe(
    map(response => response as Usuario[]

      )
  );
}


// insertando lo datos  en la base de datos
create(usuario: Usuario ): Observable<any>{ // devuele el objeto creado
  return this.http.post(`${this.urlEndPoint}/add`, usuario,{headers: this.httpHeaders});
  // pasamos la url, objeto, el formato de manejo de json

}

// obteniendo datos por ID

getUsuario(id): Observable<any>{

return this.http.get(`${this.urlEndPoint}/${id}`);

}

// obteniendo datos por 

valUsuario(email, password): Observable<any>{

  return this.http.get(`${this.urlEndPoint}/${email}/${password}`);

  }


// metodo actualizar
update(usuario: Usuario ): Observable<Usuario>{

  return this.http.put<Usuario>(`${this.urlEndPoint}/update/${usuario.ID_USUARIO}`, usuario,{headers: this.httpHeaders})

}


  // agregando el eliminar 
  delete(id: number): Observable<Usuario>{

    return this.http.delete<Usuario>(`${this.urlEndPoint}/delete/${id}`,{ headers : this.httpHeaders})
  }
}
