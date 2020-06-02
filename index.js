const server = require("./server.js")

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log(`\n LuggageSpace is alive and listening on port ${PORT} \n`)
})