const MeasuresModel = require('../Models/MeasuresModel');

exports.addMeasures = (req, res) => {
    let body = req.body;
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide measures'
        })
    }

    let measures = new MeasuresModel(body);
    if (!measures) {
        return res.status(400).json({ success: false, error: err })
    }
    measures.save()
        .then(() => {
            return res.status(200).json({
                success: true,
                id: measures._id,
                message: 'Measures created!'
            })
                .catch(err => {
                    return res.status(400).json({
                        err,
                        message: 'Measures not created!'
                    })

                })

            // MeasuresModel.create(req.body).then(measures => res.send(measures));

        })
}

exports.getMeasures = (req, res) => {
    MeasuresModel.find((err, measures) => {
        if (err) throw err;
        else {
            res.send([measures]);
        }
    })
}


