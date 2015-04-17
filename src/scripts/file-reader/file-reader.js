(function() {
    'use strict';

    // dependency checks
    if (typeof window._ === 'undefined') {
        throw new Error("Please include Lodash (https://github.com/lodash/lodash)");
    }
    if (typeof window.XLSX === 'undefined') {
        throw new Error("Please include js-xlsx (https://github.com/SheetJS/js-xlsx)");
    }
})();
