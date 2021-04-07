export const message = {
  "tables": {
    "DEFAULT": [
      {
        "dimensions": [
          "CASE_START",
          "register request"
        ],
        "metrics": [
          "6"
        ]
      },
      {
        "dimensions": [
          "check ticket",
          "decide"
        ],
        "metrics": [
          "6"
        ]
      },
      {
        "dimensions": [
          "examine casually",
          "check ticket"
        ],
        "metrics": [
          "4"
        ]
      },
      {
        "dimensions": [
          "register request",
          "examine casually"
        ],
        "metrics": [
          "3"
        ]
      },
      {
        "dimensions": [
          "decide",
          "reinitiate request"
        ],
        "metrics": [
          "3"
        ]
      },
      {
        "dimensions": [
          "decide",
          "pay compensation"
        ],
        "metrics": [
          "3"
        ]
      },
      {
        "dimensions": [
          "decide",
          "reject request"
        ],
        "metrics": [
          "3"
        ]
      },
      {
        "dimensions": [
          "pay compensation",
          "CASE_END"
        ],
        "metrics": [
          "3"
        ]
      },
      {
        "dimensions": [
          "reject request",
          "CASE_END"
        ],
        "metrics": [
          "3"
        ]
      },
      {
        "dimensions": [
          "examine thoroughly",
          "check ticket"
        ],
        "metrics": [
          "2"
        ]
      },
      {
        "dimensions": [
          "register request",
          "check ticket"
        ],
        "metrics": [
          "2"
        ]
      },
      {
        "dimensions": [
          "check ticket",
          "examine casually"
        ],
        "metrics": [
          "2"
        ]
      },
      {
        "dimensions": [
          "examine casually",
          "decide"
        ],
        "metrics": [
          "2"
        ]
      },
      {
        "dimensions": [
          "reinitiate request",
          "examine thoroughly"
        ],
        "metrics": [
          "1"
        ]
      },
      {
        "dimensions": [
          "register request",
          "examine thoroughly"
        ],
        "metrics": [
          "1"
        ]
      },
      {
        "dimensions": [
          "reinitiate request",
          "check ticket"
        ],
        "metrics": [
          "1"
        ]
      },
      {
        "dimensions": [
          "reinitiate request",
          "examine casually"
        ],
        "metrics": [
          "1"
        ]
      },
      {
        "dimensions": [
          "check ticket",
          "examine thoroughly"
        ],
        "metrics": [
          "1"
        ]
      },
      {
        "dimensions": [
          "examine thoroughly",
          "decide"
        ],
        "metrics": [
          "1"
        ]
      }
    ]
  },
  "fields": {
    "dimensions": [
      {
        "id": "qt_3n86wv0fic",
        "name": "PreA",
        "type": "TEXT",
        "concept": "DIMENSION"
      },
      {
        "id": "qt_e9p7yv0fic",
        "name": "Activity",
        "type": "TEXT",
        "concept": "DIMENSION"
      }
    ],
    "metrics": [
      {
        "id": "qt_31mytv0fic",
        "name": "Record Count",
        "type": "NUMBER",
        "concept": "METRIC"
      }
    ]
  },
  "style": {
    "node_color": {
      "value": {
        "color": "#0072f0"
      },
      "defaultValue": {
        "color": "#000000"
      }
    },
    "link_color": {
      "value": {
        "color": "#F06292"
      },
      "defaultValue": {
        "color": "#000000"
      }
    },
    "link_opacity": {
      "value": 0.2,
      "defaultValue": 0.2
    },
    "show_labels": {
      "value": false,
      "defaultValue": false
    },
    "node_font_size": {},
    "node_font_color": {
      "value": {
        "color": "#000000"
      },
      "defaultValue": {
        "color": "#000000"
      }
    },
    "left_offset": {},
    "right_offset": {}
  },
  "theme": {
    "themeFillColor": {
      "color": "#ffffff",
      "themeRef": {
        "index": 0
      }
    },
    "themeFontColor": {
      "color": "#000000",
      "themeRef": {
        "index": 1
      }
    },
    "themeFontFamily": "Roboto",
    "themeAccentFillColor": {
      "color": "#e0e0e0",
      "themeRef": {
        "index": 2
      }
    },
    "themeAccentFontColor": {
      "color": "#000000",
      "themeRef": {
        "index": 3
      }
    },
    "themeAccentFontFamily": "Roboto",
    "themeSeriesColor": [
      {
        "color": "#0072f0",
        "seriesRef": {
          "index": 0
        },
        "themeRef": {
          "index": 4
        }
      },
      {
        "color": "#00b6cb",
        "seriesRef": {
          "index": 1
        },
        "themeRef": {
          "index": 5
        }
      },
      {
        "color": "#f10096",
        "seriesRef": {
          "index": 2
        },
        "themeRef": {
          "index": 6
        }
      },
      {
        "color": "#f66d00",
        "seriesRef": {
          "index": 3
        },
        "themeRef": {
          "index": 7
        }
      },
      {
        "color": "#ffa800",
        "seriesRef": {
          "index": 4
        },
        "themeRef": {
          "index": 8
        }
      },
      {
        "color": "#7cb342",
        "seriesRef": {
          "index": 5
        },
        "themeRef": {
          "index": 9
        }
      },
      {
        "color": "#5e35b1",
        "seriesRef": {
          "index": 6
        }
      },
      {
        "color": "#03a9f4",
        "seriesRef": {
          "index": 7
        }
      },
      {
        "color": "#ec407a",
        "seriesRef": {
          "index": 8
        }
      },
      {
        "color": "#ff7043",
        "seriesRef": {
          "index": 9
        }
      },
      {
        "color": "#737373",
        "seriesRef": {
          "index": 10
        }
      },
      {
        "color": "#f15a60",
        "seriesRef": {
          "index": 11
        }
      },
      {
        "color": "#7ac36a",
        "seriesRef": {
          "index": 12
        }
      },
      {
        "color": "#5a9bd4",
        "seriesRef": {
          "index": 13
        }
      },
      {
        "color": "#faa75a",
        "seriesRef": {
          "index": 14
        }
      },
      {
        "color": "#9e67ab",
        "seriesRef": {
          "index": 15
        }
      },
      {
        "color": "#ce7058",
        "seriesRef": {
          "index": 16
        }
      },
      {
        "color": "#d77fb3",
        "seriesRef": {
          "index": 17
        }
      },
      {
        "color": "#81d4fa",
        "seriesRef": {
          "index": 18
        }
      },
      {
        "color": "#f48fb1",
        "seriesRef": {
          "index": 19
        }
      }
    ],
    "themeIncreaseColor": {
      "color": "#388e3c"
    },
    "themeDecreaseColor": {
      "color": "#f44336"
    },
    "themeGridColor": {
      "color": "#d1d1d1"
    }
  },
  "interactions": {}
};