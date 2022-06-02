import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserProvider";
import { Card, Form, Button } from "react-bootstrap";
import { app } from "../confs/firebaseConf";
import { firestore } from "../confs/firebaseConf";
import { collection, getDocs, addDoc, setDoc, doc } from "firebase/firestore";
import { getAuth} from 'firebase/auth'

const Register = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [ci, setCi] = useState("");
  const [direccion, setDireccion] = useState("");
  const [celular, setCelular] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [UsuarioComun, setUsuarioComun] = useState([]);

  const usuarioCollection = collection(firestore, "UsuarioComun");

  const navegate = useNavigate();

  const { registerUser } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("procesando form:", email, password);
    try {
      await registerUser(email, password);
      console.log("usuario creado");
      navegate("/user");
      const user = getAuth(app).currentUser.uid;
      await setDoc(doc(firestore, "UsuarioComun", user), {
        Apellido: apellido,
        CI: ci,
        Celular: celular,
        Correo: email,
        Direccion: direccion,
        HashSemilla:"",
        Nombre: nombre,
        PostularEstado:false,
        PostularNombrePartido:"",
        PostularSigla:"",
        VotoBlanco:0,
        VotoEstado:false,
        VotoFecha:"",
        VotoHash:" ",
        VotoNulo:0,
        VotoPartidoSigla:""
      });
    } catch (error) {
      console.log(error.code);
      alert("Esta cuenta ya esta registrado")
    }

    // try {
    //   await addDoc(usuarioCollection, {
    //     Nombre: nombre,
    //     Apellido: apellido,
    //     CI: ci,
    //     Celular: celular,
    //     Correo: email,
    //     Direccion: direccion,
    //   });
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <div
      style={{ justifyContent: "center", display: "flex", marginTop: "150px" }}
    >
      <Card
        border="dark"
        style={{ width: "100%", height: "auto", maxWidth: "400px" }}
      >
        <Card.Header style={{ backgroundColor: "#012345" }}>
          <h3 className="text-center mb-2" style={{ color: "white" }}>
            Registarse
          </h3>
        </Card.Header>
        <Card.Body style={{ backgroundColor: "#5668d1" }}>
          <Form onSubmit={handleSubmit}>
            <Form.Group id="nombre">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                required
                pattern="^[A-Za-zÑñÁáÉéÍíÓóÚú\s]+$"
                title="Solo letras"
                onChange={(e) => setNombre(e.target.value)}
              />
            </Form.Group>
            <Form.Group id="apellido">
              <Form.Label>Apellido</Form.Label>
              <Form.Control
                type="text"
                required
                pattern="^[A-Za-zÑñÁáÉéÍíÓóÚú\s]+$"
                title="Solo letras"
                onChange={(e) => setApellido(e.target.value)}
              />
            </Form.Group>
            <Form.Group id="ci">
              <Form.Label>Nro. C.I.</Form.Label>
              <Form.Control
                type="text"
                required
                pattern="[0-9]+$"
                minLength={7}
                title="Solo números como mínimo 7 caracteres"
                onChange={(e) => setCi(e.target.value)}
              />
            </Form.Group>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group id="direccion">
              <Form.Label>Dirección</Form.Label>
              <Form.Control
                type="text"
                required
                onChange={(e) => setDireccion(e.target.value)}
              />
            </Form.Group>
            <Form.Group id="celular">
              <Form.Label>Nro. Celular</Form.Label>
              <Form.Control
                type="text"
                required
                pattern="[0-9]+$"
                minLength={8}
                title="Solo números como mínimo 8 caracteres"
                onChange={(e) => setCelular(e.target.value)}
              />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"                
                required
                minLength={6}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <br />
            <Button className="w-100" type="submit" variant="dark">
              Registarse
            </Button>
          </Form>
          <div className="w-100 text-center mt-3"></div>
        </Card.Body>
      </Card>
    </div>
    /**<>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    placeholder="Ingrese email"
                    value={email}
                    onChange={e=>setEmail(e.target.value)}
                />
                <input 
                    type="password" 
                    placeholder="Ingrese password"
                    value={password}
                    onChange={e=>setPassword(e.target.value)}
                />
                <button type="submit">Register</button>
            </form>
        </>*/
  );
};

export default Register;
