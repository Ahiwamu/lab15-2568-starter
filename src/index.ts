import express from "express";
import morgan from 'morgan';
import { type Request, type Response} from "express";
import studentRouter from "./routes/studentRoutes.js";
import courseRouter from "./routes/courseRoutes.js"

const app: any = express();

//Middleware
app.use(express.json());
app.use(morgan('dev'));

app.get("/me", (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Student Information",
    data: {
      studentId: "670710734",
      firstName: "Weeraphat",
      lastName: "Boonju",
      program: "CPE",
      section: "001",
    },
  });
});


app.use("/api/v2/students", studentRouter);
app.use("/api/v2/courses", courseRouter);

app.listen(3000, () =>
  console.log("🚀 Server running on http://localhost:3000")
);


export default app;
