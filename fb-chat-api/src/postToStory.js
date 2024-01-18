"use strict";

const utils = require("../utils");
const log = require("npmlog");

module.exports = function (defaultFuncs, api, ctx) {
    function handleUpload(image, callback) {
        const uploads = [];

        const form = {
            actor_id: ctx.i_userID || ctx.userID,
            source: "composer",
            composer_session_id: utils.generateThreadingID(),
            waterfall_id: utils.generateThreadingID(),
            photo: {
                value: image,
                options: {
                    filename: "image.jpg",
                    contentType: "image/jpeg"
                }
            }
        };

        uploads.push(
            defaultFuncs
                .postFormData(
                    "https://graph.facebook.com/v13.0/me/stories",
                    ctx.jar,
                    form,
                    {}
                )
                .then(utils.parseAndCheckLogin(ctx, defaultFuncs))
                .then(function (resData) {
                    if (resData.error) {
                        throw resData;
                    }
                    return resData;
                })
        );

        // Resolve all promises
        Promise
            .all(uploads)
            .then(function (resData) {
                callback(null, resData);
            })
            .catch(function (err) {
                log.error("handleUpload", err);
                return callback(err);
            });
    }

    return function postStory(image, caption = "", callback) {
        let resolveFunc = function () { };
        let rejectFunc = function () { };
        const returnPromise = new Promise(function (resolve, reject) {
            resolveFunc = resolve;
            rejectFunc = reject;
        });

        if (!callback) callback = function (err, data) {
            if (err) {
                return rejectFunc(err);
            }
            resolveFunc(data);
        };

        if (!utils.isReadableStream(image))
            return callback("Image is not a readable stream");

        handleUpload(image, function (err, payload) {
            if (err) {
                return callback(err);
            }

            // Handle the response or additional actions if needed
            return callback(null, payload);
        });

        return returnPromise;
    };
};
