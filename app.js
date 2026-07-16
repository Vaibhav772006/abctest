const express = require("express");
const cors = require("cors");
const os = require("os");

const app = express();

app.use(cors());
app.use(express.json());

function handleSync(req, res) {

    console.log("====== Sync ======");
    console.log("Method:", req.method);
    console.log("Body:", req.body);
    console.log("Query:", req.query);
    console.log("IP:", req.ip);

    res.json({
        success: true,
        serverTime: new Date().toISOString(),
        method: req.method,
        query: req.query
    });

}

app.get("/api/sync", handleSync);
app.post("/api/sync", handleSync);

app.get("/", (req, res) => {
    res.send("SkillValix Sync Server Running");
});

const PORT = 3000 || 8080;

app.listen(PORT, "0.0.0.0", () => {

    const nets = os.networkInterfaces();

    console.log("Server Started");

    for (const name of Object.keys(nets)) {
        for (const net of nets[name]) {

            if (net.family === "IPv4" && !net.internal) {
                console.log(`http://${net.address}:${PORT}`);
            }

        }
    }

});

//192.168.0.104