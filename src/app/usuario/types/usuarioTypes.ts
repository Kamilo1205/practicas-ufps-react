import { RolName } from '../enums/roles.enum';

export interface Usuario {
  id:                               string;
  email:                            string;
  username:                         string;
  isEmailConfirmed:                 boolean;
  isTwoFactorAuthenticationEnabled: boolean;
  estaRegistrado:                   boolean;
  fechaCreacion:                    Date;
  fechaActualizacion:               Date;
  fechaEliminacion:                 null;
  roles:                            Rol[];
  estaActivo:                       boolean;
}

export interface Rol {
  id:     string;
  nombre: RolName;
}