import express, {Request, Response} from "express";

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req : Request, res : Response) => {
    res.json(
        {
            "mensaje" : "Bienvenido al backend de WEB ProA LAFalda"
        }
    )
});


app.listen(port, () => {
    console.log("Aplicacion Corriendo en", port);
});