const countries2Options = [
        { value: "afghanistan", label: "AF" },
        { value: "aland islands", label: "AX" },
        { value: "albania", label: "AL" },
        { value: "algeria", label: "DZ" },
        { value: "american samoa", label: "AS" },
        { value: "andorra", label: "AD" },
        { value: "angola", label: "AO" },
        { value: "anguilla", label: "AI" },
        { value: "antarctica", label: "AQ" },
        { value: "antigua and barbuda", label: "AG" },
        { value: "argentina", label: "AR" },
        { value: "armenia", label: "AM" },
        { value: "aruba", label: "AW" },
        { value: "australia", label: "AU" },
        { value: "austria", label: "AT" },
        { value: "azerbaijan", label: "AZ" },
        { value: "bahamas", label: "BS" },
        { value: "bahrain", label: "BH" },
        { value: "bangladesh", label: "BD" },
        { value: "barbados", label: "BB" },
        { value: "belarus", label: "BY" },
        { value: "belgium", label: "BE" },
        { value: "belize", label: "BZ" },
        { value: "benin", label: "BJ" },
        { value: "bermuda", label: "BM" },
        { value: "bhutan", label: "BT" },
        { value: "bolivia", label: "BO" },
        { value: "bosnia and herzegovina", label: "BA" },
        { value: "botswana", label: "BW" },
        { value: "bouvet island", label: "BV" },
        { value: "brazil", label: "BR" },
        { value: "british indian ocean territory", label: "IO" },
        { value: "brunei darussalam", label: "BN" },
        { value: "bulgaria", label: "BG" },
        { value: "burkina faso", label: "BF" },
        { value: "burundi", label: "BI" },
        { value: "cambodia", label: "KH" },
        { value: "cameroon", label: "CM" },
        { value: "canada", label: "CA" },
        { value: "cape verde", label: "CV" },
        { value: "cayman islands", label: "KY" },
        { value: "central african republic", label: "CF" },
        { value: "chad", label: "TD" },
        { value: "chile", label: "CL" },
        { value: "china", label: "CN" },
        { value: "christmas island", label: "CX" },
        { value: "cocos (keeling) islands", label: "CC" },
        { value: "colombia", label: "CO" },
        { value: "comoros", label: "KM" },
        { value: "congo", label: "CG" },
        { value: "congo, the democratic republic of the", label: "CD" },
        { value: "cook islands", label: "CK" },
        { value: "costa rica", label: "CR" },
        { value: "cote d'ivoire", label: "CI" },
        { value: "croatia", label: "HR" },
        { value: "cuba", label: "CU" },
        { value: "cyprus", label: "CY" },
        { value: "czech republic", label: "CZ" },
        { value: "denmark", label: "DK" },
        { value: "djibouti", label: "DJ" },
        { value: "dominica", label: "DM" },
        { value: "dominican republic", label: "DO" },
        { value: "ecuador", label: "EC" },
        { value: "egypt", label: "EG" },
        { value: "el salvador", label: "SV" },
        { value: "equatorial guinea", label: "GQ" },
        { value: "eritrea", label: "ER" },
        { value: "estonia", label: "EE" },
        { value: "ethiopia", label: "ET" },
        { value: "falkland islands (malvinas)", label: "FK" },
        { value: "faroe islands", label: "FO" },
        { value: "fiji", label: "FJ" },
        { value: "finland", label: "FI" },
        { value: "france", label: "FR" },
        { value: "french guiana", label: "GF" },
        { value: "french polynesia", label: "PF" },
        { value: "french southern territories", label: "TF" },
        { value: "gabon", label: "GA" },
        { value: "gambia", label: "GM" },
        { value: "georgia", label: "GE" },
        { value: "germany", label: "DE" },
        { value: "ghana", label: "GH" },
        { value: "gibraltar", label: "GI" },
        { value: "greece", label: "GR" },
        { value: "greenland", label: "GL" },
        { value: "grenada", label: "GD" },
        { value: "guadeloupe", label: "GP" },
        { value: "guam", label: "GU" },
        { value: "guatemala", label: "GT" },
        { value: "guernsey", label: "GG" },
        { value: "guinea", label: "GN" },
        { value: "guinea-bissau", label: "GW" },
        { value: "guyana", label: "GY" },
        { value: "haiti", label: "HT" },
        { value: "heard island and mcdonald islands", label: "HM" },
        { value: "holy see (vatican city state)", label: "VA" },
        { value: "honduras", label: "HN" },
        { value: "hong kong", label: "HK" },
        { value: "hungary", label: "HU" },
        { value: "iceland", label: "IS" },
        { value: "india", label: "IN" },
        { value: "indonesia", label: "ID" },
        { value: "iran, islamic republic of", label: "IR" },
        { value: "iraq", label: "IQ" },
        { value: "ireland", label: "IE" },
        { value: "isle of man", label: "IM" },
        { value: "israel", label: "IL" },
        { value: "italy", label: "IT" },
        { value: "jamaica", label: "JM" },
        { value: "japan", label: "JP" },
        { value: "jersey", label: "JE" },
        { value: "jordan", label: "JO" },
        { value: "kazakhstan", label: "KZ" },
        { value: "kenya", label: "KE" },
        { value: "kiribati", label: "KI" },
        { value: "korea, democratic people's republic of", label: "KP" },
        { value: "korea, republic of", label: "KR" },
        { value: "kuwait", label: "KW" },
        { value: "kyrgyzstan", label: "KG" },
        { value: "lao people's democratic republic", label: "LA" },
        { value: "latvia", label: "LV" },
        { value: "lebanon", label: "LB" },
        { value: "lesotho", label: "LS" },
        { value: "liberia", label: "LR" },
        { value: "libyan arab jamahiriya", label: "LY" },
        { value: "liechtenstein", label: "LI" },
        { value: "lithuania", label: "LT" },
        { value: "luxembourg", label: "LU" },
        { value: "macao", label: "MO" },
        { value: "macedonia, the former yugoslav republic of", label: "MK" },
        { value: "madagascar", label: "MG" },
        { value: "malawi", label: "MW" },
        { value: "malaysia", label: "MY" },
        { value: "maldives", label: "MV" },
        { value: "mali", label: "ML" },
        { value: "malta", label: "MT" },
        { value: "marshall islands", label: "MH" },
        { value: "martinique", label: "MQ" },
        { value: "mauritania", label: "MR" },
        { value: "mauritius", label: "MU" },
        { value: "mayotte", label: "YT" },
        { value: "mexico", label: "MX" },
        { value: "micronesia, federated states of", label: "FM" },
        { value: "moldova, republic of", label: "MD" },
        { value: "monaco", label: "MC" },
        { value: "mongolia", label: "MN" },
        { value: "montserrat", label: "MS" },
        { value: "morocco", label: "MA" },
        { value: "mozambique", label: "MZ" },
        { value: "myanmar", label: "MM" },
        { value: "namibia", label: "NA" },
        { value: "nauru", label: "NR" },
        { value: "nepal", label: "NP" },
        { value: "netherlands", label: "NL" },
        { value: "netherlands antilles", label: "AN" },
        { value: "new caledonia", label: "NC" },
        { value: "new zealand", label: "NZ" },
        { value: "nicaragua", label: "NI" },
        { value: "niger", label: "NE" },
        { value: "nigeria", label: "NG" },
        { value: "niue", label: "NU" },
        { value: "norfolk island", label: "NF" },
        { value: "northern mariana islands", label: "MP" },
        { value: "norway", label: "NO" },
        { value: "oman", label: "OM" },
        { value: "pakistan", label: "PK" },
        { value: "palau", label: "PW" },
        { value: "palestinian territory, occupied", label: "PS" },
        { value: "panama", label: "PA" },
        { value: "papua new guinea", label: "PG" },
        { value: "paraguay", label: "PY" },
        { value: "peru", label: "PE" },
        { value: "philippines", label: "PH" },
        { value: "pitcairn", label: "PN" },
        { value: "poland", label: "PL" },
        { value: "portugal", label: "PT" },
        { value: "puerto rico", label: "PR" },
        { value: "qatar", label: "QA" },
        { value: "reunion", label: "RE" },
        { value: "romania", label: "RO" },
        { value: "russian federation", label: "RU" },
        { value: "rwanda", label: "RW" },
        { value: "saint helena", label: "SH" },
        { value: "saint kitts and nevis", label: "KN" },
        { value: "saint lucia", label: "LC" },
        { value: "saint pierre and miquelon", label: "PM" },
        { value: "saint vincent and the grenadines", label: "VC" },
        { value: "samoa", label: "WS" },
        { value: "san marino", label: "SM" },
        { value: "sao tome and principe", label: "ST" },
        { value: "saudi arabia", label: "SA" },
        { value: "senegal", label: "SN" },
        { value: "serbia and montenegro", label: "CS" },
        { value: "seychelles", label: "SC" },
        { value: "sierra leone", label: "SL" },
        { value: "singapore", label: "SG" },
        { value: "slovakia", label: "SK" },
        { value: "slovenia", label: "SI" },
        { value: "solomon islands", label: "SB" },
        { value: "somalia", label: "SO" },
        { value: "south africa", label: "ZA" },
        { value: "south georgia and the south sandwich islands", label: "GS" },
        { value: "spain", label: "ES" },
        { value: "sri lanka", label: "LK" },
        { value: "sudan", label: "SD" },
        { value: "suriname", label: "SR" },
        { value: "svalbard and jan mayen", label: "SJ" },
        { value: "swaziland", label: "SZ" },
        { value: "sweden", label: "SE" },
        { value: "switzerland", label: "CH" },
        { value: "syrian arab republic", label: "SY" },
        { value: "taiwan", label: "TW" },
        { value: "tajikistan", label: "TJ" },
        { value: "tanzania, united republic of", label: "TZ" },
        { value: "thailand", label: "TH" },
        { value: "timor-leste", label: "TL" },
        { value: "togo", label: "TG" },
        { value: "tokelau", label: "TK" },
        { value: "tonga", label: "TO" },
        { value: "trinidad and tobago", label: "TT" },
        { value: "tunisia", label: "TN" },
        { value: "turkey", label: "TR" },
        { value: "turkmenistan", label: "TM" },
        { value: "turks and caicos islands", label: "TC" },
        { value: "tuvalu", label: "TV" },
        { value: "uganda", label: "UG" },
        { value: "ukraine", label: "UA" },
        { value: "united arab emirates", label: "AE" },
        { value: "united kingdom", label: "UK" },
        { value: "united states", label: "US" },
        { value: "united states minor outlying islands", label: "UM" },
        { value: "uruguay", label: "UY" },
        { value: "uzbekistan", label: "UZ" },
        { value: "vanuatu", label: "VU" },
        { value: "venezuela", label: "VE" },
        { value: "viet nam", label: "VN" },
        { value: "virgin islands, british", label: "VG" },
        { value: "virgin islands, u.s.", label: "VI" },
        { value: "wallis and futuna", label: "WF" },
        { value: "western sahara", label: "EH" },
        { value: "yemen", label: "YE" },
        { value: "zambia", label: "ZM" },
        { value: "zimbabwe", label: "ZW" }
    ]
    


export default countries2Options