import user3d from '../../sources/img/user3d.png'
import React from 'react';
import { Link } from 'react-router-dom'
import { useLogin } from '../../context/LoginContext';


export function RenderUserData() {

    const { logout, user } = useLogin()
    const [menuState, setMenuState] = React.useState(0);
    
    console.log("🚀 ~ file: UserDataComponent.js:10 ~ RenderUserData ~ user:", user)

    const usermenu = () => {
        setMenuState(menuState === 0 ? 1 : 0);
    }

    return(
        <>
            <span onClick={usermenu} className="usuario__header">
                <div className="d-flex align-items-center pointer">
                    <p>{user.userNombres}</p>
                    <div className="user3d"><img src={user3d} alt="user3d" /></div>
                </div>
                <div className={menuState === 1 ? "user__menu" : "d-none"}>
                <div className="user__menu-item">
                    <Link onClick={usermenu} className='user__list' to={"/ajustes"}>
                        <i className="user__icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: "#fff", padding: "2px" }}><path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"></path></svg>
                        </i>
                        <p className="user__text">Tu perfil</p>
                    </Link>
                    <Link onClick={usermenu} className='user__list' to={"/favoritos"}>
                        <i className="user__icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: "#fff", padding: "wpx" }}><path d="m6.516 14.323-1.49 6.452a.998.998 0 0 0 1.529 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082a1 1 0 0 0-.59-1.74l-5.701-.454-2.467-5.461a.998.998 0 0 0-1.822 0L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.214 4.107zm2.853-4.326a.998.998 0 0 0 .832-.586L12 5.43l1.799 3.981a.998.998 0 0 0 .832.586l3.972.315-3.271 2.944c-.284.256-.397.65-.293 1.018l1.253 4.385-3.736-2.491a.995.995 0 0 0-1.109 0l-3.904 2.603 1.05-4.546a1 1 0 0 0-.276-.94l-3.038-2.962 4.09-.326z"></path></svg>                        </i>
                        <p className="user__text">Tus favoritos</p>
                    </Link>
                    <Link onClick={() => {
                        logout();
                        usermenu();
                    }} className='user__list user__exit' to={"/"}>
                        <i className="user__icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: "#fff", padding: "2px" }}><path d="M19.002 3h-14c-1.103 0-2 .897-2 2v4h2V5h14v14h-14v-4h-2v4c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.898-2-2-2z"></path><path d="m11 16 5-4-5-4v3.001H3v2h8z"></path></svg>                        </i>
                        <p className="user__text" >Salir</p>
                    </Link>

                </div>
            </div>
            </span>
        </>
    )
}