<div>
    <fieldset>
        {#each options as name}
            <label for={name} class="{mapSelection === name ? 'item-active' : 'item'}">
                {name}
                <input id={name} type="radio" bind:group={mapSelection} on:change={updateMapUrl} value={name}>
            </label>
        {/each}
    </fieldset>
    
    <fieldset>
        <input id="opacity" type="range" min="0" max="1" step="0.01" bind:value={mapOpacity} on:change={updateOpacity}>
        <label for="opacity">{Math.round(mapOpacity * 100) + '%'}</label>
    </fieldset>

    <small>
        Created by DuckSoft. <a href="https://djlorenz.github.io/astronomy/lp2022/" target="_blank">Data Source</a>
    </small>
</div>

<script lang="ts">
    import { map } from "@windy/map";
    import { onDestroy, onMount } from 'svelte';

    const urls: { [Key: string]: string } = {
        '2006': 'https://djlorenz.github.io/astronomy/lp2006/overlay/tiles/tile_{z}_{x}_{y}.png',
        '2016': 'https://djlorenz.github.io/astronomy/lp2016/overlay/tiles/tile_{z}_{x}_{y}.png',
        '2020': 'https://djlorenz.github.io/astronomy/lp2020/overlay/tiles/tile_{z}_{x}_{y}.png',
        '2022': 'https://djlorenz.github.io/astronomy/lp2022/overlay/tiles/tile_{z}_{x}_{y}.png',
        'trend': 'https://djlorenz.github.io/astronomy/lp2022/overlay/trend_2013_2022/tile_{z}_{x}_{y}.png',
    }
    const options = Object.keys(urls)
    let mapSelection = '2022';
    let mapOverlay: L.TileLayer | null = null
    let mapOpacity = 0.5;

    function updateMapUrl() {
        if (mapOverlay) {
            mapOverlay.setUrl(urls[mapSelection]);
        }
    }

    function updateOpacity() {
        if (mapOverlay) {
            mapOverlay.setOpacity(mapOpacity);
        }
    }

    export const onopen = (_params: unknown) => {
        
    };

    onMount(() => {
        if (!mapOverlay) {
            mapOverlay = L.tileLayer(urls[mapSelection], {
                minZoom: 2,
                maxNativeZoom: 8,
                maxZoom: 19,
                tileSize: 1024,
                zoomOffset: -2,
                opacity: mapOpacity,
                zIndex: 200,
            })
            mapOverlay.addTo(map)
        }
    });

    onDestroy(() => {
        if (mapOverlay) {
            mapOverlay.remove();
            mapOverlay = null;
        }
    });
</script>

<style lang="less">
    input[type=radio] {
        display: none;
    }
    fieldset {
        display: flex;
    }
    label.item {
        display: inline-block;
        padding: 0.5em;
        cursor: pointer;
        &:hover {
            font-weight: bold;
        }
    }
    label[for=opacity] {
        margin: .5em 0;
    }
    label.item-active {
        display: inline-block;
        padding: 0.5em;
        background-color: rgba(255,255,255,0.5);
    }
</style>

