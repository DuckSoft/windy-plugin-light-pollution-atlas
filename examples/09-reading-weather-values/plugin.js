// Windy API modules are imported via '@windy/nameOfModule'
import * as _ from '@windy/utils';
import { map } from '@windy/map';
import interpolator from '@windy/interpolator';
import store from '@windy/store';
import bcast from '@windy/broadcast';

// List of wayponts to be interpolated
const points = [
    ['Tours', 'city-2', 0.689, 47.39],
    ['Le Mans', 'city-2', 0.2, 48.008],
    ['Amilly', 'city-3', 2.767, 47.978],
    ['Bourges', 'city-3', 2.399, 47.081],
    ['Paris', 'city-1', 2.351, 48.857],
    ['Chartres', 'city-2', 1.487, 48.447],
];

// List of current markers
let markers = null;

const icon = L.divIcon({
    className: 'weather-at-city',
    iconSize: [80, 40],
    iconAnchor: [40, 20],
});

// Creates marker with content
const createPopup = (lat, lon, name) => {
    const marker = L.marker([lat, lon], { icon }).addTo(map);
    marker._icon.innerHTML = name;
    return marker;
};

// Major interpolation function
const interpolateValues = () => {
    /**
     * This example can interpolate only wind overlay, but
     * you can interpolate almost any raster layer of Windy
     */
    if (store.get('overlay') !== 'wind') {
        console.warn('I can iterpolate only Wind sorry');
        return;
    }

    /**
     * Interpolator returns interpolation function
     */
    interpolator(interpolate => {
        markers.forEach((m, i) => {
            // eslint-disable-next-line no-unused-vars
            const [name, cls, lon, lat] = points[i];

            /**
             * Interpolate finaly gets you the values
             * @param {Object} { lat, lon }
             * @return {Array} array of raw meterological values or null, NaN, -1
             */
            const values = interpolate.call(interpolator, { lat, lon });

            /**
             * Remeber that we are able to interpolate values only for
             * points that are visible on map
             */
            if (Array.isArray(values)) {
                const { wind, dir } = _.wind2obj(values);
                m._icon.innerHTML = `${name}<br />${Math.round(wind)}m/s&nbsp;${dir}`;
            } else {
                console.warn(`Unable to interpolate value for ${lat}, ${lon}.`);
            }
        });
    });
};

export const onopen = () => {
    map.setView({ lat: 47.3, lng: 2 }, 7);

    // Lets change layer to Wind
    store.set('overlay', 'wind');

    if (!markers) {
        markers = points.map(p => createPopup(p[3], p[2], p[0]));

        // Values are interpolated from the data set, used
        // for rendering weather layers, therefore remember to call
        // interpolation anytime something happens on a map
        bcast.on('redrawFinished', interpolateValues);
    }

    interpolateValues();
};

export const ondestroy = () => {
    if (markers) {
        markers.forEach(m => map.removeLayer(m));
        bcast.off('redrawFinished', interpolateValues);
        markers = null;
    }
};
