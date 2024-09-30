import app from "./app";
const PORT = 5368;

app.listen(PORT, () => {
    console.log(`Server running in port ${PORT}`)
})
export default PORT