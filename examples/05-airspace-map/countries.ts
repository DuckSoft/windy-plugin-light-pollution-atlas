export interface CountryOriginal {
    name: string;
    bounds: [[number, number], [number, number]][];
}

export interface Country extends CountryOriginal {
    cc: string;
    title: string;
}

export const countriesOriginal: CountryOriginal[] = [
    {
        name: 'canada_ca',
        bounds: [
            [
                [41.6765556, -136.4300944],
                [68.9703832, -51],
            ],
        ],
    },
    {
        name: 'sweden_se',
        bounds: [
            [
                [54.9166667, 10.5808333],
                [69.06, 23.9102778],
            ],
        ],
    },
    {
        name: 'italy_it',
        bounds: [
            [
                [33.8916892, 6.6275],
                [47.0922222, 19],
            ],
        ],
    },
    {
        name: 'united_states_of_america_us',
        bounds: [
            [
                [17.6067308, -177.4610333],
                [71.3527167, -64.7020125],
            ],
            [
                [8.6483817, 144.5240934],
                [16.2176427, 167.8041225],
            ],
        ],
    },
    {
        name: 'spain_es',
        bounds: [
            [
                [21.6836559, -20],
                [44.9682528, 4.931418],
            ],
        ],
    },
    {
        name: 'switzerland_ch',
        bounds: [
            [
                [45.6205556, 5.4894444],
                [47.8833333, 10.4913889],
            ],
        ],
    },
    {
        name: 'denmark_dk',
        bounds: [
            [
                [54.4883333, 4.1905556],
                [58.5, 15.2178687],
            ],
        ],
    },
    {
        name: 'greenland_gl',
        bounds: [
            [
                [60.9609684, -75.1508823],
                [78.0300983, -21.6406036],
            ],
        ],
    },
    {
        name: 'united_kingdom_gb',
        bounds: [
            [
                [49.8142436, -7.9826465],
                [59.3441667, 2.5],
            ],
        ],
    },
    {
        name: 'united_arab_emirates_ae',
        bounds: [
            [
                [22.625, 51.5833333],
                [26.0849177, 56.9049319],
            ],
        ],
    },
    {
        name: 'australia_au',
        bounds: [
            [
                [-80, 75],
                [-2, 163],
            ],
        ],
    },
    {
        name: 'latvia_lv',
        bounds: [
            [
                [55.6794444, 18.5063889],
                [58.5383333, 28.2394444],
            ],
        ],
    },
    {
        name: 'finland_fi',
        bounds: [
            [
                [59.2319444, 19.2688889],
                [70.0919444, 31.5869444],
            ],
        ],
    },
    {
        name: 'france_fr',
        bounds: [
            [
                [41.1705556, -4.8833333],
                [51.1166667, 9.75],
            ],
        ],
    },
    {
        name: 'japan_jp',
        bounds: [
            [
                [21.8341667, 122.8882641],
                [45.4883108, 154.0157088],
            ],
        ],
    },
    {
        name: 'norway_no',
        bounds: [
            [
                [56.0861111, 0],
                [82, 31.7166667],
            ],
        ],
    },
    {
        name: 'iceland_is',
        bounds: [
            [
                [63.2255556, -24.1357563],
                [66.0163156, -14.0025566],
            ],
        ],
    },
    {
        name: 'bahrain_bh',
        bounds: [
            [
                [22.625, 48.8666667],
                [28.7333333, 55.3866667],
            ],
        ],
    },
    {
        name: 'germany_de',
        bounds: [
            [
                [47.27, 3.7605556],
                [55.1666667, 15.0413889],
            ],
        ],
    },
    {
        name: 'estonia_ee',
        bounds: [
            [
                [57.5177778, 21.3966667],
                [59.9083333, 28.2133333],
            ],
        ],
    },
    {
        name: 'poland_pl',
        bounds: [
            [
                [48.9436111, 14.1219444],
                [56.4283333, 26.6383333],
            ],
        ],
    },
    {
        name: 'portugal_pt',
        bounds: [
            [
                [17, -40],
                [45, -6.3293755],
            ],
        ],
    },
    {
        name: 'colombia_co',
        bounds: [
            [
                [0.1588728, -77.4954121],
                [11.0641667, -68],
            ],
        ],
    },
    {
        name: 'belgium_be',
        bounds: [
            [
                [49.4477778, 2],
                [51.5052778, 6.4077778],
            ],
        ],
    },
    {
        name: 'sri_lanka_lk',
        bounds: [
            [
                [-2, 77],
                [10, 92],
            ],
        ],
    },
    {
        name: 'romania_ro',
        bounds: [
            [
                [43.5151519, 20.2644444],
                [48.0525, 29.85],
            ],
        ],
    },
    {
        name: 'croatia_hr',
        bounds: [
            [
                [41.1883333, 12.7619444],
                [46.554582, 19.443591],
            ],
        ],
    },
    {
        name: 'greece_gr',
        bounds: [
            [
                [34.3988889, 19.1],
                [41.25, 29.6795105],
            ],
        ],
    },
    {
        name: 'lao_pdr_la',
        bounds: [
            [
                [13.9098243, 100.0831315],
                [22.5092068, 107.6350684],
            ],
        ],
    },
    {
        name: 'lithuania_lt',
        bounds: [
            [
                [53.898707, 20],
                [56.45042, 26.83565],
            ],
        ],
    },
    {
        name: 'serbia_rs',
        bounds: [
            [
                [41.1333333, 17.6158333],
                [46.189446, 23.005272],
            ],
        ],
    },
    {
        name: 'israel_il',
        bounds: [
            [
                [29.4666667, 33.9546283],
                [33.1, 35.5836111],
            ],
        ],
    },
    {
        name: 'argentina_ar',
        bounds: [
            [
                [-90, -74],
                [-21.7813889, -10],
            ],
        ],
    },
    {
        name: 'south_africa_za',
        bounds: [
            [
                [-37, 9.9719444],
                [-22.125, 35.9708333],
            ],
        ],
    },
    {
        name: 'bulgaria_bg',
        bounds: [
            [
                [41.4166667, 22.3569444],
                [44.2141667, 29.7833333],
            ],
        ],
    },
    {
        name: 'netherlands_nl',
        bounds: [
            [
                [50.7538889, 2],
                [55, 7.6163889],
            ],
        ],
    },
    {
        name: 'brazil_br',
        bounds: [
            [
                [-31.6666667, -70.7824717],
                [4.133, -34.2105922],
            ],
        ],
    },
    {
        name: 'bosnia_and_herzegovina_ba',
        bounds: [
            [
                [42.6107436, 15.7833333],
                [45.1538889, 19.3452778],
            ],
        ],
    },
    {
        name: 'hungary_hu',
        bounds: [
            [
                [45.7375, 16.1127778],
                [48.5844444, 22.8961111],
            ],
        ],
    },
    {
        name: 'ireland_ie',
        bounds: [
            [
                [48.5, -22.3397222],
                [64.2297656, -5.2583333],
            ],
        ],
    },
    {
        name: 'slovakia_sk',
        bounds: [
            [
                [47.7311111, 16.8333333],
                [49.6136111, 22.5655556],
            ],
        ],
    },
    {
        name: 'nepal_np',
        bounds: [
            [
                [26.347779, 80.052222],
                [30.446945, 88.199298],
            ],
        ],
    },
    {
        name: 'namibia_na',
        bounds: [
            [
                [-28, 11.0288889],
                [-16.6666667, 25.5],
            ],
        ],
    },
    {
        name: 'new_zealand_nz',
        bounds: [
            [
                [-48.15, 165.3],
                [-33.6752933, 179.7333333],
            ],
        ],
    },
    {
        name: 'pakistan_pk',
        bounds: [
            [
                [23.5005556, 64.7370174],
                [34.8805626, 74],
            ],
        ],
    },
    {
        name: 'moldova_md',
        bounds: [
            [
                [45.4733333, 26.6188889],
                [48.4891667, 30.1355556],
            ],
        ],
    },
    {
        name: 'austria_at',
        bounds: [
            [
                [46.3722222, 9.5308333],
                [49.0183333, 17.1608333],
            ],
        ],
    },
    {
        name: 'slovenia_si',
        bounds: [
            [
                [45.3900806, 13.3872222],
                [46.8769444, 16.6194444],
            ],
        ],
    },
    {
        name: 'luxembourg_lu',
        bounds: [
            [
                [49.4494444, 5.2947213],
                [50.1847222, 6.5308333],
            ],
        ],
    },
    {
        name: 'madagascar_mg',
        bounds: [
            [
                [-26.4333333, 42.7666667],
                [-11.1060564, 51.3333333],
            ],
        ],
    },
    {
        name: 'czech_republic_cz',
        bounds: [
            [
                [48.5519444, 12.0913889],
                [51.0566667, 18.8622222],
            ],
        ],
    },
    {
        name: 'qatar_qa',
        bounds: [
            [
                [24.4230556, 50.6166667],
                [26.3333333, 52.8272222],
            ],
        ],
    },
    {
        name: 'kenya_ke',
        bounds: [
            [
                [-8.5020278, 33.9211056],
                [4.4281108, 44.0010556],
            ],
        ],
    },
    {
        name: 'albania_al',
        bounds: [
            [
                [40.3308333, 19.0019444],
                [42.25, 20.9183333],
            ],
        ],
    },
    {
        name: 'cyprus_cy',
        bounds: [
            [
                [32.6138889, 31.8960951],
                [35.1833333, 34.9986111],
            ],
        ],
    },
    {
        name: 'mauritius_mu',
        bounds: [
            [
                [-45, 55.5],
                [-6, 75],
            ],
        ],
    },
    {
        name: 'vanuatu_vu',
        bounds: [
            [
                [-21, 163],
                [-13, 170.5],
            ],
        ],
    },
    {
        name: 'chile_cl',
        bounds: [
            [
                [-62.9403269, -111.6521686],
                [-18.3333333, -57.3758358],
            ],
        ],
    },
    {
        name: 'faroe_islands_fo',
        bounds: [
            [
                [60.9587308, -8.742735],
                [62.9573803, -4.4905984],
            ],
        ],
    },
];

const cc2emoji = (cc: string): string => {
    const offset = 127397;
    const f = cc.codePointAt(0)!;
    const s = cc.codePointAt(1)!;
    return String.fromCodePoint(f + offset) + String.fromCodePoint(s + offset);
};

const getCC = (name: string) => {
    const parts = name.split('_');
    return parts.pop();
};

const beautifyCountryName = (name: string) => {
    const parts = name.split('_');
    const cc = parts.pop(); // remove the last part
    const emoji = cc && cc2emoji(cc.toUpperCase());
    const formattedParts = parts.map(part => part.charAt(0).toUpperCase() + part.slice(1));
    return `${emoji} ${formattedParts.join(' ')}`;
};

export const countries = countriesOriginal.map(country => {
    return {
        ...country,
        cc: getCC(country.name),
        title: beautifyCountryName(country.name),
    };
});
