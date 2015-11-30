function Util () {}

Util.formatDate = function( col ){
    var value = this.getDataValue(col);
    if (value) {
        var date = new Date(value); 
        var month = date.getMonth();
        var day = date.getDate();
        var year = date.getFullYear();
        return day+'/'+month+'/'+year;
    } else {
        return null;
    }
};

Util.getTimestamp = function( col )  { 
    var value = this.getDataValue(col);
    if (value) {
        var date = new Date(value); 
        return date.getTime(); 
    } else {
        return null;
    }
};

Util.remove_empty = function ( target ) {
  Object.keys( target ).map( function ( key ) {
    if ( target[ key ] instanceof Object ) {
      if ( ! Object.keys( target[ key ] ).length && typeof target[ key ].getMonth !== 'function') {
        delete target[ key ];
      }
      else {
        remove_empty( target[ key ] );
      }
    }
    else if ( target[ key ] === null ) {
      delete target[ key ];
    }
  } );
  return target;
};