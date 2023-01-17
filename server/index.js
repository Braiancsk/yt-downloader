const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');
const app = express();

app.use(cors());

const PORT = 4000
app.listen(PORT, () => {
    console.log(`Server start on port ${PORT}`);
});

app.get('/download', (req,res) => {
    const URL = req.query.URL;
    const FORMAT = req.query.FORMAT;
    const FILE_NAME = `${Date.now()}.${FORMAT}`
    res.header('Content-Disposition', `attachment; filename=${FILE_NAME}`);
    ytdl(URL, {
        format: FORMAT
        }).pipe(res);
});