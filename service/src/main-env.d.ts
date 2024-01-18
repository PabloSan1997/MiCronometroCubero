
interface AddUserInterface {
    username: string;
    nickname: string;
    password: string;
}
interface LoginUserInterface {
    username: string;
    password: string;
}
interface UserInterface extends AddUserInterface {
    id_user: string;
}

interface PermisoInterface{
    id_user:string;
    nickname:string;
}