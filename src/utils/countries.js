const countries = [
  {
    code: 57,
    flag: "🇨🇴",
    alpha: "CO",
    name: "Colombia"
  },
  {
    code: 1,
    flag: "🇨🇦",
    alpha: "CA",
    name: "Canada"
  },
  {
    code: 1,
    flag: "🇺🇸",
    alpha: "US",
    name: "United States"
  },
  {
    code: 1242,
    flag: "🇧🇸",
    alpha: "BS",
    name: "Bahamas"
  },
  {
    code: 1246,
    flag: "🇧🇧",
    alpha: "BB",
    name: "Barbados"
  },
  {
    code: 1264,
    flag: "🇦🇮",
    alpha: "AI",
    name: "Anguilla"
  },
  {
    code: 1268,
    flag: "🇦🇬",
    alpha: "AG",
    name: "Antigua and Barbuda"
  },
  {
    code: 1284,
    flag: "🇻🇬",
    alpha: "VG",
    name: "Virgin Islands, British"
  },
  {
    code: 1340,
    flag: "🇻🇮",
    alpha: "VI",
    name: "Virgin Islands, U.S."
  },
  {
    code: 1441,
    flag: "🇧🇲",
    alpha: "BM",
    name: "Bermuda"
  },
  {
    code: 1473,
    flag: "🇬🇩",
    alpha: "GD",
    name: "Grenada"
  },
  {
    code: 1649,
    flag: "🇹🇨",
    alpha: "TC",
    name: "Turks and Caicos Islands"
  },
  {
    code: 1664,
    flag: "🇲🇸",
    alpha: "MS",
    name: "Montserrat"
  },
  {
    code: 1670,
    flag: "🇲🇵",
    alpha: "MP",
    name: "Northern Mariana Islands"
  },
  {
    code: 1671,
    flag: "🇬🇺",
    alpha: "GU",
    name: "Guam"
  },
  {
    code: 1684,
    flag: "🇦🇸",
    alpha: "AS",
    name: "American Samoa"
  },
  {
    code: 1758,
    flag: "🇱🇨",
    alpha: "LC",
    name: "Saint Lucia"
  },
  {
    code: 1767,
    flag: "🇩🇲",
    alpha: "DM",
    name: "Dominica"
  },
  {
    code: 1784,
    flag: "🇻🇨",
    alpha: "VC",
    name: "Saint Vincent and the Grenadines"
  },
  {
    code: 1849,
    flag: "🇩🇴",
    alpha: "DO",
    name: "Dominican Republic"
  },
  {
    code: 1868,
    flag: "🇹🇹",
    alpha: "TT",
    name: "Trinidad and Tobago"
  },
  {
    code: 1869,
    flag: "🇰🇳",
    alpha: "KN",
    name: "Saint Kitts and Nevis"
  },
  {
    code: 1876,
    flag: "🇯🇲",
    alpha: "JM",
    name: "Jamaica"
  },
  {
    code: 1939,
    flag: "🇵🇷",
    alpha: "PR",
    name: "Puerto Rico"
  },
  {
    code: 20,
    flag: "🇪🇬",
    alpha: "EG",
    name: "Egypt"
  },
  {
    code: 211,
    flag: "🇸🇸",
    alpha: "SS",
    name: "South Sudan"
  },
  {
    code: 212,
    flag: "🇲🇦",
    alpha: "MA",
    name: "Morocco"
  },
  {
    code: 213,
    flag: "🇩🇿",
    alpha: "DZ",
    name: "Algeria"
  },
  {
    code: 216,
    flag: "🇹🇳",
    alpha: "TN",
    name: "Tunisia"
  },
  {
    code: 218,
    flag: "🇱🇾",
    alpha: "LY",
    name: "Libyan Arab Jamahiriya"
  },
  {
    code: 220,
    flag: "🇬🇲",
    alpha: "GM",
    name: "Gambia"
  },
  {
    code: 221,
    flag: "🇸🇳",
    alpha: "SN",
    name: "Senegal"
  },
  {
    code: 222,
    flag: "🇲🇷",
    alpha: "MR",
    name: "Mauritania"
  },
  {
    code: 223,
    flag: "🇲🇱",
    alpha: "ML",
    name: "Mali"
  },
  {
    code: 224,
    flag: "🇬🇳",
    alpha: "GN",
    name: "Guinea"
  },
  {
    code: 225,
    flag: "🇨🇮",
    alpha: "CI",
    name: "Cote d'Ivoire"
  },
  {
    code: 226,
    flag: "🇧🇫",
    alpha: "BF",
    name: "Burkina Faso"
  },
  {
    code: 227,
    flag: "🇳🇪",
    alpha: "NE",
    name: "Niger"
  },
  {
    code: 228,
    flag: "🇹🇬",
    alpha: "TG",
    name: "Togo"
  },
  {
    code: 229,
    flag: "🇧🇯",
    alpha: "BJ",
    name: "Benin"
  },
  {
    code: 230,
    flag: "🇲🇺",
    alpha: "MU",
    name: "Mauritius"
  },
  {
    code: 231,
    flag: "🇱🇷",
    alpha: "LR",
    name: "Liberia"
  },
  {
    code: 232,
    flag: "🇸🇱",
    alpha: "SL",
    name: "Sierra Leone"
  },
  {
    code: 233,
    flag: "🇬🇭",
    alpha: "GH",
    name: "Ghana"
  },
  {
    code: 234,
    flag: "🇳🇬",
    alpha: "NG",
    name: "Nigeria"
  },
  {
    code: 235,
    flag: "🇹🇩",
    alpha: "TD",
    name: "Chad"
  },
  {
    code: 236,
    flag: "🇨🇫",
    alpha: "CF",
    name: "Central African Republic"
  },
  {
    code: 237,
    flag: "🇨🇲",
    alpha: "CM",
    name: "Cameroon"
  },
  {
    code: 238,
    flag: "🇨🇻",
    alpha: "CV",
    name: "Cape Verde"
  },
  {
    code: 239,
    flag: "🇸🇹",
    alpha: "ST",
    name: "Sao Tome and Principe"
  },
  {
    code: 240,
    flag: "🇬🇶",
    alpha: "GQ",
    name: "Equatorial Guinea"
  },
  {
    code: 241,
    flag: "🇬🇦",
    alpha: "GA",
    name: "Gabon"
  },
  {
    code: 242,
    flag: "🇨🇬",
    alpha: "CG",
    name: "Congo"
  },
  {
    code: 243,
    flag: "🇨🇩",
    alpha: "CD",
    name: "Congo, The Democratic Republic of the Congo"
  },
  {
    code: 244,
    flag: "🇦🇴",
    alpha: "AO",
    name: "Angola"
  },
  {
    code: 245,
    flag: "🇬🇼",
    alpha: "GW",
    name: "Guinea-Bissau"
  },
  {
    code: 246,
    flag: "🇮🇴",
    alpha: "IO",
    name: "British Indian Ocean Territory"
  },
  {
    code: 248,
    flag: "🇸🇨",
    alpha: "SC",
    name: "Seychelles"
  },
  {
    code: 249,
    flag: "🇸🇩",
    alpha: "SD",
    name: "Sudan"
  },
  {
    code: 250,
    flag: "🇷🇼",
    alpha: "RW",
    name: "Rwanda"
  },
  {
    code: 251,
    flag: "🇪🇹",
    alpha: "ET",
    name: "Ethiopia"
  },
  {
    code: 252,
    flag: "🇸🇴",
    alpha: "SO",
    name: "Somalia"
  },
  {
    code: 253,
    flag: "🇩🇯",
    alpha: "DJ",
    name: "Djibouti"
  },
  {
    code: 254,
    flag: "🇰🇪",
    alpha: "KE",
    name: "Kenya"
  },
  {
    code: 255,
    flag: "🇹🇿",
    alpha: "TZ",
    name: "Tanzania, United Republic of Tanzania"
  },
  {
    code: 256,
    flag: "🇺🇬",
    alpha: "UG",
    name: "Uganda"
  },
  {
    code: 257,
    flag: "🇧🇮",
    alpha: "BI",
    name: "Burundi"
  },
  {
    code: 258,
    flag: "🇲🇿",
    alpha: "MZ",
    name: "Mozambique"
  },
  {
    code: 260,
    flag: "🇿🇲",
    alpha: "ZM",
    name: "Zambia"
  },
  {
    code: 261,
    flag: "🇲🇬",
    alpha: "MG",
    name: "Madagascar"
  },
  {
    code: 262,
    flag: "🇹🇫",
    alpha: "TF",
    name: "French Southern Territories"
  },
  {
    code: 262,
    flag: "🇾🇹",
    alpha: "YT",
    name: "Mayotte"
  },
  {
    code: 262,
    flag: "🇷🇪",
    alpha: "RE",
    name: "Reunion"
  },
  {
    code: 263,
    flag: "🇿🇼",
    alpha: "ZW",
    name: "Zimbabwe"
  },
  {
    code: 264,
    flag: "🇳🇦",
    alpha: "NA",
    name: "Namibia"
  },
  {
    code: 265,
    flag: "🇲🇼",
    alpha: "MW",
    name: "Malawi"
  },
  {
    code: 266,
    flag: "🇱🇸",
    alpha: "LS",
    name: "Lesotho"
  },
  {
    code: 267,
    flag: "🇧🇼",
    alpha: "BW",
    name: "Botswana"
  },
  {
    code: 268,
    flag: "🇸🇿",
    alpha: "SZ",
    name: "Swaziland"
  },
  {
    code: 269,
    flag: "🇰🇲",
    alpha: "KM",
    name: "Comoros"
  },
  {
    code: 27,
    flag: "🇿🇦",
    alpha: "ZA",
    name: "South Africa"
  },
  {
    code: 290,
    flag: "🇸🇭",
    alpha: "SH",
    name: "Saint Helena, Ascension and Tristan Da Cunha"
  },
  {
    code: 291,
    flag: "🇪🇷",
    alpha: "ER",
    name: "Eritrea"
  },
  {
    code: 297,
    flag: "🇦🇼",
    alpha: "AW",
    name: "Aruba"
  },
  {
    code: 298,
    flag: "🇫🇴",
    alpha: "FO",
    name: "Faroe Islands"
  },
  {
    code: 299,
    flag: "🇬🇱",
    alpha: "GL",
    name: "Greenland"
  },
  {
    code: 30,
    flag: "🇬🇷",
    alpha: "GR",
    name: "Greece"
  },
  {
    code: 31,
    flag: "🇳🇱",
    alpha: "NL",
    name: "Netherlands"
  },
  {
    code: 32,
    flag: "🇧🇪",
    alpha: "BE",
    name: "Belgium"
  },
  {
    code: 33,
    flag: "🇫🇷",
    alpha: "FR",
    name: "France"
  },
  {
    code: 34,
    flag: "🇪🇸",
    alpha: "ES",
    name: "Spain"
  },
  {
    code: 345,
    flag: "🇰🇾",
    alpha: "KY",
    name: "Cayman Islands"
  },
  {
    code: 350,
    flag: "🇬🇮",
    alpha: "GI",
    name: "Gibraltar"
  },
  {
    code: 351,
    flag: "🇵🇹",
    alpha: "PT",
    name: "Portugal"
  },
  {
    code: 352,
    flag: "🇱🇺",
    alpha: "LU",
    name: "Luxembourg"
  },
  {
    code: 353,
    flag: "🇮🇪",
    alpha: "IE",
    name: "Ireland"
  },
  {
    code: 354,
    flag: "🇮🇸",
    alpha: "IS",
    name: "Iceland"
  },
  {
    code: 355,
    flag: "🇦🇱",
    alpha: "AL",
    name: "Albania"
  },
  {
    code: 356,
    flag: "🇲🇹",
    alpha: "MT",
    name: "Malta"
  },
  {
    code: 357,
    flag: "🇨🇾",
    alpha: "CY",
    name: "Cyprus"
  },
  {
    code: 358,
    flag: "🇦🇽",
    alpha: "AX",
    name: "Åland Islands"
  },
  {
    code: 358,
    flag: "🇫🇮",
    alpha: "FI",
    name: "Finland"
  },
  {
    code: 359,
    flag: "🇧🇬",
    alpha: "BG",
    name: "Bulgaria"
  },
  {
    code: 36,
    flag: "🇭🇺",
    alpha: "HU",
    name: "Hungary"
  },
  {
    code: 370,
    flag: "🇱🇹",
    alpha: "LT",
    name: "Lithuania"
  },
  {
    code: 371,
    flag: "🇱🇻",
    alpha: "LV",
    name: "Latvia"
  },
  {
    code: 372,
    flag: "🇪🇪",
    alpha: "EE",
    name: "Estonia"
  },
  {
    code: 373,
    flag: "🇲🇩",
    alpha: "MD",
    name: "Moldova"
  },
  {
    code: 374,
    flag: "🇦🇲",
    alpha: "AM",
    name: "Armenia"
  },
  {
    code: 375,
    flag: "🇧🇾",
    alpha: "BY",
    name: "Belarus"
  },
  {
    code: 376,
    flag: "🇦🇩",
    alpha: "AD",
    name: "Andorra"
  },
  {
    code: 377,
    flag: "🇲🇨",
    alpha: "MC",
    name: "Monaco"
  },
  {
    code: 378,
    flag: "🇸🇲",
    alpha: "SM",
    name: "San Marino"
  },
  {
    code: 379,
    flag: "🇻🇦",
    alpha: "VA",
    name: "Holy See (Vatican City State)"
  },
  {
    code: 380,
    flag: "🇺🇦",
    alpha: "UA",
    name: "Ukraine"
  },
  {
    code: 381,
    flag: "🇷🇸",
    alpha: "RS",
    name: "Serbia"
  },
  {
    code: 382,
    flag: "🇲🇪",
    alpha: "ME",
    name: "Montenegro"
  },
  {
    code: 383,
    flag: "🇽🇰",
    alpha: "XK",
    name: "Kosovo"
  },
  {
    code: 385,
    flag: "🇭🇷",
    alpha: "HR",
    name: "Croatia"
  },
  {
    code: 386,
    flag: "🇸🇮",
    alpha: "SI",
    name: "Slovenia"
  },
  {
    code: 387,
    flag: "🇧🇦",
    alpha: "BA",
    name: "Bosnia and Herzegovina"
  },
  {
    code: 389,
    flag: "🇲🇰",
    alpha: "MK",
    name: "Macedonia"
  },
  {
    code: 39,
    flag: "🇮🇹",
    alpha: "IT",
    name: "Italy"
  },
  {
    code: 40,
    flag: "🇷🇴",
    alpha: "RO",
    name: "Romania"
  },
  {
    code: 41,
    flag: "🇨🇭",
    alpha: "CH",
    name: "Switzerland"
  },
  {
    code: 420,
    flag: "🇨🇿",
    alpha: "CZ",
    name: "Czech Republic"
  },
  {
    code: 421,
    flag: "🇸🇰",
    alpha: "SK",
    name: "Slovakia"
  },
  {
    code: 423,
    flag: "🇱🇮",
    alpha: "LI",
    name: "Liechtenstein"
  },
  {
    code: 43,
    flag: "🇦🇹",
    alpha: "AT",
    name: "Austria"
  },
  {
    code: 44,
    flag: "🇬🇬",
    alpha: "GG",
    name: "Guernsey"
  },
  {
    code: 44,
    flag: "🇮🇲",
    alpha: "IM",
    name: "Isle of Man"
  },
  {
    code: 44,
    flag: "🇯🇪",
    alpha: "JE",
    name: "Jersey"
  },
  {
    code: 44,
    flag: "🇬🇧",
    alpha: "GB",
    name: "United Kingdom"
  },
  {
    code: 45,
    flag: "🇩🇰",
    alpha: "DK",
    name: "Denmark"
  },
  {
    code: 46,
    flag: "🇸🇪",
    alpha: "SE",
    name: "Sweden"
  },
  {
    code: 47,
    flag: "🇧🇻",
    alpha: "BV",
    name: "Bouvet Island"
  },
  {
    code: 47,
    flag: "🇳🇴",
    alpha: "NO",
    name: "Norway"
  },
  {
    code: 47,
    flag: "🇸🇯",
    alpha: "SJ",
    name: "Svalbard and Jan Mayen"
  },
  {
    code: 48,
    flag: "🇵🇱",
    alpha: "PL",
    name: "Poland"
  },
  {
    code: 49,
    flag: "🇩🇪",
    alpha: "DE",
    name: "Germany"
  },
  {
    code: 500,
    flag: "🇫🇰",
    alpha: "FK",
    name: "Falkland Islands (Malvinas)"
  },
  {
    code: 500,
    flag: "🇬🇸",
    alpha: "GS",
    name: "South Georgia and the South Sandwich Islands"
  },
  {
    code: 501,
    flag: "🇧🇿",
    alpha: "BZ",
    name: "Belize"
  },
  {
    code: 502,
    flag: "🇬🇹",
    alpha: "GT",
    name: "Guatemala"
  },
  {
    code: 503,
    flag: "🇸🇻",
    alpha: "SV",
    name: "El Salvador"
  },
  {
    code: 504,
    flag: "🇭🇳",
    alpha: "HN",
    name: "Honduras"
  },
  {
    code: 505,
    flag: "🇳🇮",
    alpha: "NI",
    name: "Nicaragua"
  },
  {
    code: 506,
    flag: "🇨🇷",
    alpha: "CR",
    name: "Costa Rica"
  },
  {
    code: 507,
    flag: "🇵🇦",
    alpha: "PA",
    name: "Panama"
  },
  {
    code: 508,
    flag: "🇵🇲",
    alpha: "PM",
    name: "Saint Pierre and Miquelon"
  },
  {
    code: 509,
    flag: "🇭🇹",
    alpha: "HT",
    name: "Haiti"
  },
  {
    code: 51,
    flag: "🇵🇪",
    alpha: "PE",
    name: "Peru"
  },
  {
    code: 52,
    flag: "🇲🇽",
    alpha: "MX",
    name: "Mexico"
  },
  {
    code: 53,
    flag: "🇨🇺",
    alpha: "CU",
    name: "Cuba"
  },
  {
    code: 54,
    flag: "🇦🇷",
    alpha: "AR",
    name: "Argentina"
  },
  {
    code: 55,
    flag: "🇧🇷",
    alpha: "BR",
    name: "Brazil"
  },
  {
    code: 56,
    flag: "🇨🇱",
    alpha: "CL",
    name: "Chile"
  },
  {
    code: 58,
    flag: "🇻🇪",
    alpha: "VE",
    name: "Venezuela, Bolivarian Republic of Venezuela"
  },
  {
    code: 590,
    flag: "🇬🇵",
    alpha: "GP",
    name: "Guadeloupe"
  },
  {
    code: 590,
    flag: "🇧🇱",
    alpha: "BL",
    name: "Saint Barthelemy"
  },
  {
    code: 590,
    flag: "🇲🇫",
    alpha: "MF",
    name: "Saint Martin"
  },
  {
    code: 591,
    flag: "🇧🇴",
    alpha: "BO",
    name: "Bolivia, Plurinational State of bolivia"
  },
  {
    code: 592,
    flag: "🇬🇾",
    alpha: "GY",
    name: "Guyana"
  },
  {
    code: 593,
    flag: "🇪🇨",
    alpha: "EC",
    name: "Ecuador"
  },
  {
    code: 594,
    flag: "🇬🇫",
    alpha: "GF",
    name: "French Guiana"
  },
  {
    code: 595,
    flag: "🇵🇾",
    alpha: "PY",
    name: "Paraguay"
  },
  {
    code: 596,
    flag: "🇲🇶",
    alpha: "MQ",
    name: "Martinique"
  },
  {
    code: 597,
    flag: "🇸🇷",
    alpha: "SR",
    name: "Suriname"
  },
  {
    code: 598,
    flag: "🇺🇾",
    alpha: "UY",
    name: "Uruguay"
  },
  {
    code: 599,
    flag: "",
    alpha: "AN",
    name: "Netherlands Antilles"
  },
  {
    code: 60,
    flag: "🇲🇾",
    alpha: "MY",
    name: "Malaysia"
  },
  {
    code: 61,
    flag: "🇦🇺",
    alpha: "AU",
    name: "Australia"
  },
  {
    code: 61,
    flag: "🇨🇽",
    alpha: "CX",
    name: "Christmas Island"
  },
  {
    code: 61,
    flag: "🇨🇨",
    alpha: "CC",
    name: "Cocos (Keeling) Islands"
  },
  {
    code: 62,
    flag: "🇮🇩",
    alpha: "ID",
    name: "Indonesia"
  },
  {
    code: 63,
    flag: "🇵🇭",
    alpha: "PH",
    name: "Philippines"
  },
  {
    code: 64,
    flag: "🇳🇿",
    alpha: "NZ",
    name: "New Zealand"
  },
  {
    code: 64,
    flag: "🇵🇳",
    alpha: "PN",
    name: "Pitcairn"
  },
  {
    code: 65,
    flag: "🇸🇬",
    alpha: "SG",
    name: "Singapore"
  },
  {
    code: 66,
    flag: "🇹🇭",
    alpha: "TH",
    name: "Thailand"
  },
  {
    code: 670,
    flag: "🇹🇱",
    alpha: "TL",
    name: "Timor-Leste"
  },
  {
    code: 672,
    flag: "🇦🇶",
    alpha: "AQ",
    name: "Antarctica"
  },
  {
    code: 672,
    flag: "🇭🇲",
    alpha: "HM",
    name: "Heard Island and Mcdonald Islands"
  },
  {
    code: 672,
    flag: "🇳🇫",
    alpha: "NF",
    name: "Norfolk Island"
  },
  {
    code: 673,
    flag: "🇧🇳",
    alpha: "BN",
    name: "Brunei Darussalam"
  },
  {
    code: 674,
    flag: "🇳🇷",
    alpha: "NR",
    name: "Nauru"
  },
  {
    code: 675,
    flag: "🇵🇬",
    alpha: "PG",
    name: "Papua New Guinea"
  },
  {
    code: 676,
    flag: "🇹🇴",
    alpha: "TO",
    name: "Tonga"
  },
  {
    code: 677,
    flag: "🇸🇧",
    alpha: "SB",
    name: "Solomon Islands"
  },
  {
    code: 678,
    flag: "🇻🇺",
    alpha: "VU",
    name: "Vanuatu"
  },
  {
    code: 679,
    flag: "🇫🇯",
    alpha: "FJ",
    name: "Fiji"
  },
  {
    code: 680,
    flag: "🇵🇼",
    alpha: "PW",
    name: "Palau"
  },
  {
    code: 681,
    flag: "🇼🇫",
    alpha: "WF",
    name: "Wallis and Futuna"
  },
  {
    code: 682,
    flag: "🇨🇰",
    alpha: "CK",
    name: "Cook Islands"
  },
  {
    code: 683,
    flag: "🇳🇺",
    alpha: "NU",
    name: "Niue"
  },
  {
    code: 685,
    flag: "🇼🇸",
    alpha: "WS",
    name: "Samoa"
  },
  {
    code: 686,
    flag: "🇰🇮",
    alpha: "KI",
    name: "Kiribati"
  },
  {
    code: 687,
    flag: "🇳🇨",
    alpha: "NC",
    name: "New Caledonia"
  },
  {
    code: 688,
    flag: "🇹🇻",
    alpha: "TV",
    name: "Tuvalu"
  },
  {
    code: 689,
    flag: "🇵🇫",
    alpha: "PF",
    name: "French Polynesia"
  },
  {
    code: 690,
    flag: "🇹🇰",
    alpha: "TK",
    name: "Tokelau"
  },
  {
    code: 691,
    flag: "🇫🇲",
    alpha: "FM",
    name: "Micronesia, Federated States of Micronesia"
  },
  {
    code: 692,
    flag: "🇲🇭",
    alpha: "MH",
    name: "Marshall Islands"
  },
  {
    code: 7,
    flag: "🇰🇿",
    alpha: "KZ",
    name: "Kazakhstan"
  },
  {
    code: 7,
    flag: "🇷🇺",
    alpha: "RU",
    name: "Russia"
  },
  {
    code: 81,
    flag: "🇯🇵",
    alpha: "JP",
    name: "Japan"
  },
  {
    code: 82,
    flag: "🇰🇷",
    alpha: "KR",
    name: "Korea, Republic of South Korea"
  },
  {
    code: 84,
    flag: "🇻🇳",
    alpha: "VN",
    name: "Vietnam"
  },
  {
    code: 850,
    flag: "🇰🇵",
    alpha: "KP",
    name: "Korea, Democratic People's Republic of Korea"
  },
  {
    code: 852,
    flag: "🇭🇰",
    alpha: "HK",
    name: "Hong Kong"
  },
  {
    code: 853,
    flag: "🇲🇴",
    alpha: "MO",
    name: "Macao"
  },
  {
    code: 855,
    flag: "🇰🇭",
    alpha: "KH",
    name: "Cambodia"
  },
  {
    code: 856,
    flag: "🇱🇦",
    alpha: "LA",
    name: "Laos"
  },
  {
    code: 86,
    flag: "🇨🇳",
    alpha: "CN",
    name: "China"
  },
  {
    code: 880,
    flag: "🇧🇩",
    alpha: "BD",
    name: "Bangladesh"
  },
  {
    code: 886,
    flag: "🇹🇼",
    alpha: "TW",
    name: "Taiwan"
  },
  {
    code: 90,
    flag: "🇹🇷",
    alpha: "TR",
    name: "Turkey"
  },
  {
    code: 91,
    flag: "🇮🇳",
    alpha: "IN",
    name: "India"
  },
  {
    code: 92,
    flag: "🇵🇰",
    alpha: "PK",
    name: "Pakistan"
  },
  {
    code: 93,
    flag: "🇦🇫",
    alpha: "AF",
    name: "Afghanistan"
  },
  {
    code: 94,
    flag: "🇱🇰",
    alpha: "LK",
    name: "Sri Lanka"
  },
  {
    code: 95,
    flag: "🇲🇲",
    alpha: "MM",
    name: "Myanmar"
  },
  {
    code: 960,
    flag: "🇲🇻",
    alpha: "MV",
    name: "Maldives"
  },
  {
    code: 961,
    flag: "🇱🇧",
    alpha: "LB",
    name: "Lebanon"
  },
  {
    code: 962,
    flag: "🇯🇴",
    alpha: "JO",
    name: "Jordan"
  },
  {
    code: 963,
    flag: "🇸🇾",
    alpha: "SY",
    name: "Syrian Arab Republic"
  },
  {
    code: 964,
    flag: "🇮🇶",
    alpha: "IQ",
    name: "Iraq"
  },
  {
    code: 965,
    flag: "🇰🇼",
    alpha: "KW",
    name: "Kuwait"
  },
  {
    code: 966,
    flag: "🇸🇦",
    alpha: "SA",
    name: "Saudi Arabia"
  },
  {
    code: 967,
    flag: "🇾🇪",
    alpha: "YE",
    name: "Yemen"
  },
  {
    code: 968,
    flag: "🇴🇲",
    alpha: "OM",
    name: "Oman"
  },
  {
    code: 970,
    flag: "🇵🇸",
    alpha: "PS",
    name: "Palestinian Territory, Occupied"
  },
  {
    code: 971,
    flag: "🇦🇪",
    alpha: "AE",
    name: "United Arab Emirates"
  },
  {
    code: 972,
    flag: "🇮🇱",
    alpha: "IL",
    name: "Israel"
  },
  {
    code: 973,
    flag: "🇧🇭",
    alpha: "BH",
    name: "Bahrain"
  },
  {
    code: 974,
    flag: "🇶🇦",
    alpha: "QA",
    name: "Qatar"
  },
  {
    code: 975,
    flag: "🇧🇹",
    alpha: "BT",
    name: "Bhutan"
  },
  {
    code: 976,
    flag: "🇲🇳",
    alpha: "MN",
    name: "Mongolia"
  },
  {
    code: 977,
    flag: "🇳🇵",
    alpha: "NP",
    name: "Nepal"
  },
  {
    code: 98,
    flag: "🇮🇷",
    alpha: "IR",
    name: "Iran, Islamic Republic of Persian Gulf"
  },
  {
    code: 992,
    flag: "🇹🇯",
    alpha: "TJ",
    name: "Tajikistan"
  },
  {
    code: 993,
    flag: "🇹🇲",
    alpha: "TM",
    name: "Turkmenistan"
  },
  {
    code: 994,
    flag: "🇦🇿",
    alpha: "AZ",
    name: "Azerbaijan"
  },
  {
    code: 995,
    flag: "🇬🇪",
    alpha: "GE",
    name: "Georgia"
  },
  {
    code: 996,
    flag: "🇰🇬",
    alpha: "KG",
    name: "Kyrgyzstan"
  },
  {
    code: 998,
    flag: "🇺🇿",
    alpha: "UZ",
    name: "Uzbekistan"
  }
]

export default countries