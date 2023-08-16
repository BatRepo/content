import { app } from "./app";

app.listen(process.env.PORT);

console.log(`Server is on in port ${process.env.PORT}`);