import app from "./express/api";

app.use(express.json());

app.listen("3333", () => console.log("online"));
