function Util() {
}

Util.formatDate = function (col) {
    var value = this.getDataValue(col);
    if (value) {
        var date = new Date(value);
        var month = date.getMonth();
        var day = date.getDate();
        var year = date.getFullYear();
        return day + '/' + month + '/' + year;
    } else {
        return null;
    }
};

Util.getTimestamp = function (model, col) {
    var value = model.getDataValue(col);
    if (value) {
        var date = new Date(value);
        return date.getTime();
    } else {
        return null;
    }
};

Util.setDateOnly = function (value, model, col) {
    //var value = model.getDataValue(col);
    if (value) {
        var pattern = /(\d{2})\/(\d{2})\/(\d{4})/;
        var dt = new Date(value.replace(pattern,'$3-$2-$1'));
        return model.setDataValue(col, dt);
    } else {
        return null;
    }
};

Util.groupLatestBySubcategory = function (array) {
    console.log('debug', "groupLatestBySubcategory: " + array)
    if (array && array.length > 1) {
        var group = [];
        group.push(array[0]);

        for (i = 1; i < array.length; i++) {
            var hasSubcategory = false;
            for (j = 0; j < group.length; j++) {
                if (group[j].subcategory_id === array[i].subcategory_id) {
                    hasSubcategory = true;
                    if (group[j].created_at < array[i].created_at) {
                        group[j] = array[i];
                    }
                }
            }
            if (!hasSubcategory) {
                group.push(array[i]);
            }
        }
        return group;
    } else {
        return array;
    }
};

Util.cleanJson = function (obj){
    var isArray = obj instanceof Array;
    for (var k in obj){
        if (obj[k]===null || (obj[k] instanceof Array && obj[k].length == 0)) {
            isArray ? obj.splice(k,1) : delete obj[k];
        }
        else if (typeof obj[k]=="object") {
            this.cleanJson(obj[k]);
        }
    }
};

module.exports = Util;