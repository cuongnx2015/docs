'use strict';
angular.module("ngLocale", [], ["$provide", function($provide) {
  var PLURAL_CATEGORY = {ZERO: "zero", ONE: "một", TWO: "hai", FEW: "vài", MANY: "nhiều", OTHER: "khác"};
  function getDecimals(n) {
    n = n + '';
    var i = n.indexOf('.');
    return (i == -1) ? 0 : n.length - i - 1;
  }

  function getVF(n, opt_precision) {
    var v = opt_precision;

    if (undefined === v) {
      v = Math.min(getDecimals(n), 3);
    }

    var base = Math.pow(10, v);
    var f = ((n * base) | 0) % base;
    return {v: v, f: f};
  }

  $provide.value("$locale", {
    "DATETIME_FORMATS": {
      "AMPMS": [
        "SA",
        "CH"
      ],
      "DAY": [
        "Chủ nhật",
        "Thứ hai",
        "Thứ ba",
        "Thứ tư",
        "Thứ năm",
        "Thứ sáu",
        "Thứ bảy"
      ],
      "ERANAMES": [
        "Trước Công Nguyên",
        "Sau Công Nguyên"
      ],
      "ERAS": [
        "TCN",
        "SCN"
      ],
      "FIRSTDAYOFWEEK": 1,  // Ở Việt Nam tuần bắt đầu từ Thứ hai
      "MONTH": [
        "Tháng Một",
        "Tháng Hai",
        "Tháng Ba",
        "Tháng Tư",
        "Tháng Năm",
        "Tháng Sáu",
        "Tháng Bảy",
        "Tháng Tám",
        "Tháng Chín",
        "Tháng Mười",
        "Tháng Mười Một",
        "Tháng Mười Hai"
      ],
      "SHORTDAY": [
        "CN",
        "T2",
        "T3",
        "T4",
        "T5",
        "T6",
        "T7"
      ],
      "SHORTMONTH": [
        "Thg1",
        "Thg2",
        "Thg3",
        "Thg4",
        "Thg5",
        "Thg6",
        "Thg7",
        "Thg8",
        "Thg9",
        "Thg10",
        "Thg11",
        "Thg12"
      ],
      "STANDALONEMONTH": [
        "Tháng Một",
        "Tháng Hai",
        "Tháng Ba",
        "Tháng Tư",
        "Tháng Năm",
        "Tháng Sáu",
        "Tháng Bảy",
        "Tháng Tám",
        "Tháng Chín",
        "Tháng Mười",
        "Tháng Mười Một",
        "Tháng Mười Hai"
      ],
      "WEEKENDRANGE": [
        6,
        0
      ],
      "fullDate": "EEEE, 'ngày' d 'tháng' M 'năm' y",
      "longDate": "'Ngày' d 'tháng' M 'năm' y",
      "medium": "d MMM, y HH:mm:ss",
      "mediumDate": "d MMM, y",
      "mediumTime": "HH:mm:ss",
      "short": "dd/MM/yy HH:mm",
      "shortDate": "dd/MM/yyyy",
      "shortTime": "HH:mm"
    },
    "NUMBER_FORMATS": {
      "CURRENCY_SYM": "₫",
      "DECIMAL_SEP": ",",
      "GROUP_SEP": ".",
      "PATTERNS": [
        {
          "gSize": 3,
          "lgSize": 3,
          "maxFrac": 3,
          "minFrac": 0,
          "minInt": 1,
          "negPre": "-",
          "negSuf": "",
          "posPre": "",
          "posSuf": ""
        },
        {
          "gSize": 3,
          "lgSize": 3,
          "maxFrac": 0,
          "minFrac": 0,
          "minInt": 1,
          "negPre": "-",
          "negSuf": " ¤",
          "posPre": "",
          "posSuf": " ¤"
        }
      ]
    },
    "id": "vi",
    "localeID": "vi",
    "pluralCat": function(n, opt_precision) {
      var i = n | 0;
      var vf = getVF(n, opt_precision);
      if (i == 1 && vf.v == 0) {
        return PLURAL_CATEGORY.ONE;
      }
      return PLURAL_CATEGORY.OTHER;
    }
  });
}]);
