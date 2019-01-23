function(request) {
    var _ = require("underscore")._;
    var token = "xoxb-***"; // Please use your bot's token in Slack
    var defaultChannel = "random"; // Please specify your default channel

    parseBodyAsQuery = function(request) {
        var bodyAsString = parseBody(request);
        return _p.util.queryParse(bodyAsString);
    };

    parseBody = function(request) {
        var bodyAsString = request["input"].readAll();
        if (_.isEmpty(bodyAsString)) {
            var err = [
                "io.personium.client.DaoException: 400,",
                JSON.stringify({
                    "code": "PR400-OD-0006",
                    "message": {
                        "lang": "en",
                        "value": "Request body is empty."
                    }
                })
            ].join("");
            throw new _p.PersoniumException(err);
        }
        return bodyAsString;
    };
    
    var info = parseBodyAsQuery(request);

    var slack = new _p.extension.Slack();
    var d = new Date()
    slack.setConfig(token, defaultChannel);

    slack.sendMessage(d.toISOString() + " Hello, I am persoinum slack bot in default channel");
    if (_.has(info, "username") && !_.isEmpty(info.username)) {
        slack.sendMessageToUser(d.toISOString() + " Hello " + info.username + ", I am persoinum slack bot.", info.username);
    }
    if (_.has(info, "channel") && !_.isEmpty(info.channel)) {
        slack.sendMessageToChannel(d.toISOString() +  " Hello, I am persoinum slack bot.", info.channel);
    }

    return {
        status : 200,
        headers : {"Content-Type":"text/plain"},
        body : ["Complete to send slack message!"]
    };
}
