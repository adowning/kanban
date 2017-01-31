var A = function() {
    var options = {
        url: 'https://api.servicemonster.net/v1/orders?q=' + jobID,
        headers: {
            'authorization': 'Basic ' + auth,
            'dataType': 'json'
        }
    };

    return new Promise(function(resolve, reject) {
        function callback(error, response, body) {
            if (!error && response.statusCode == 200) {
                var info = JSON.parse(body);
                resolve(info.items[0])
            }
        }
        request(options, callback);
    })
}

var B = function(guid) {
    var options = {
        url: 'https://api.servicemonster.net/v1/orders/' + guid,
        headers: {
            'authorization': 'Basic ' + auth,
            'dataType': 'json'
        }
    };

    return new Promise(function(resolve, reject) {
        function callback(error, response, body) {
            if (!error && response.statusCode == 200) {
                var info = JSON.parse(body);
                resolve(info)
            }
        }
        request(options, callback);
    })
}

var C = function() {

    return new Promise(function(resolve, reject) {
        function callback(error, response, body) {
            //TODO add whatever
        }
    })

}
var note = "x";

function mainFunction() {
    A()
        .then(function(result) {
            var customerName = result.accountName;
            var phone = result.phone1;
            note = result.note;
            B(result.orderID).then(function(result2) {
                for (var i = 0; i < result2.lineItems.length; i++) {
                    var lineItem = result2.lineItems[i];
                    var desc = phone + '\n' +
                        lineItem.description + '\n' +
                        lineItem.quantity + '\n' +
                        lineItem.itemName + '\n';

                    trello.addCard(dueDate, customerName + ' ' + jobID + ' Rug #' + i + 1, desc, listID,
                        function(error, trelloCard) {

                            if (error) {
                                console.log('Could not add card:', error);
                            } else {
                                cardList.push(trelloCard);
                                console.log('Added card:', trelloCard.desc);
                                if (note) {
                                    trello.addCommentToCard(trelloCard.id, note,
                                        function(error, note) {
                                            if (error) {
                                                console.log('Could not add comment:', error);
                                            } else {
                                                console.log('Added comment:', note);
                                            }
                                        });
                                }
                                //TODO fix me
                                if (trelloCard.desc.includes('urine') || trelloCard.desc.includes('repair') || trelloCard.desc.includes('priority')) {
                                    var labelID = "";
                                    if (trelloCard.desc.includes('urine')) {
                                        labelID = '5882bc11ced82109ffdf06a4';
                                    }
                                    if (trelloCard.desc.includes('repair')) {
                                        labelID = '5882ba1a793fa406b51b13c5';
                                    }
                                    if (trelloCard.desc.includes('priority')) {
                                        labelID = '5882bc23ced82109ffdf06b1'
                                    }
                                    trello.addLabelToCard(trelloCard.id, labelID,
                                        function(error, label) {

                                            if (error) {
                                                console.log('Could not add card:', error);
                                            } else {
                                                console.log('Added card:', label.name);

                                            }
                                        });
                                }
                            }
                        });
                }
                C().then(function(result3) {
                })
            }).then(function(result3) {

            })
        })

        .then(function() {})
}