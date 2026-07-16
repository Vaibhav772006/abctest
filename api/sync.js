module.exports = function handler(req, res) {

    // CORS headers
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS"
    );
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Content-Type"
    );


    // Handle browser preflight
    if (req.method === "OPTIONS") {

        res.status(200).end();

        return;

    }


    console.log("====== Sync Request ======");

    console.log("Method:", req.method);

    console.log("Body:", req.body);

    console.log("Query:", req.query);

    console.log(
        "IP:",
        req.headers["x-forwarded-for"]
    );


    res.status(200).json({

        success: true,

        message: "Sync successful",

        serverTime: new Date().toISOString(),

        method: req.method,

        receivedData: req.body || {},

        query: req.query || {}

    });

};