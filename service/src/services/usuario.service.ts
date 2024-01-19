import { AppDataSource } from '../config/db';
import { Usuario } from '../config/models/Usuario';
import { hash, compare } from 'bcrypt';
import { codificarToken, convertirToken } from '../utilities/jwt';


const repositorio = AppDataSource.getRepository(Usuario);
export class UsuarioService {
	async addUser(newUser: AddUserInterface): Promise<Usuario> {
		const contra = await hash(newUser.password, 8);
		const createUser = repositorio.create({ ...newUser, password: contra });
		await repositorio.save(createUser);
		return { ...createUser, password: '' };
	}
	async loginUser(userLogin: LoginUserInterface) {
		const usuario = await repositorio.findOneBy({ username: userLogin.username });
		if (!usuario) throw 'No se encontro usuario';
		const checar = await compare(userLogin.password, usuario.password);
		if (!checar) throw 'Contraseña incorrecta';
		usuario.password = await hash(userLogin.password, 8);
		await repositorio.update({id_user:usuario.id_user}, usuario);
		const token = await convertirToken({id_user:usuario.id_user, nickname:usuario.nickname});
		return {permiso:true, token};
	}
	async buscarUsuario(token:string){
		const buscar = await codificarToken(token);
		const usuario = repositorio.findOne({
			where:{
				id_user:buscar.id_user,
				nickname:buscar.nickname
			}
		});
		return usuario;
	}
}