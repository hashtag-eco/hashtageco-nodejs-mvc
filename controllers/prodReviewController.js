const db = require('../models/ProductRecies'),
    getReviewParams = body => {
        return {
            writer: bodyParser.writer,
            title: bodyParser.title,
            contents: bodyParser.contents,
            date: bodyParser.date,
            score: bodyParser.score
        };
    };

    
