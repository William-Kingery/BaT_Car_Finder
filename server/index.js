import express from "express";
import "dotenv/config";
import user from "./routes/user.js";



const app = express();
const { PORT, CORS_ORIGIN } = process.env;

app.use(cors()); 
app.use(express.json());


app.route("/user")
  app.use("/user", user);
  app.use('/home', home);
  app.use('/news', news);



app.listen(PORT || 5050, () => {
    console.log(`running on ${PORT || 5050}`);
});






