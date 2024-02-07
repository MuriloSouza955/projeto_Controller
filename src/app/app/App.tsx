import Image from "next/image";
import "../styles.css";

function App(){
    return(
        <div className="container">
            <div className="container-login">
                <div className="wrap-login">
                    <form className="login-form">
                        <span className="login-form-title">Bem Vindo ao</span>
                        <span className="login-form-img">
                            <Image src="/controller-solar-logo.svg" width={200} height={40} alt="Logo Controller Solar"/>
                        </span>
                        <div className="wrap-input">
                            <input className="input" type = "email"/>
                            <span className="focus-input" data-placeholter="Email"></span>
                            <span className="focus-input" data-placeholter="Email"></span>
                        </div>

                        <div className="wrap-input">
                            <input className="input" type = "password"/>
                            <span className="focus-input" data-placeholder="Password"></span>
                        </div>

                        <div className="container-login-form-btn">
                            <button className="login-form-btn">Login</button>
                        </div>

                        <div className="text-center">
                            <span className="txt1">Não possui conta?</span>
                            <a className="txt2" href= "#"></a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default App()