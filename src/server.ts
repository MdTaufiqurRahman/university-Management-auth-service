import mongoose from "mongoose";
import app from "./app";

async function bootstrap() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/test');
        console.log('DB Connected')
        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`)
          })
    } catch (error) {
        console.log(error)
    }

}
bootstrap();