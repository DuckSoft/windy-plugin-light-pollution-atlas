<div>
    <fieldset>
        {#each options as name}
            <label for={name} class={mapSelection === name ? 'item-active' : 'item'}>
                {name}
                <input
                    id={name}
                    type="radio"
                    bind:group={mapSelection}
                    on:change={updateMapUrl}
                    value={name}
                />
            </label>
        {/each}
    </fieldset>

    <fieldset>
        <input
            id="opacity"
            type="range"
            min="0"
            max="1"
            step="0.01"
            bind:value={mapOpacity}
            on:change={updateOpacity}
        />
        <label for="opacity">{Math.round(mapOpacity * 100) + '%'}</label>
    </fieldset>

    <small>
        Created by
        <a target="_blank" href="https://github.com/DuckSoft">DuckSoft</a>. Data:
        <a target="_blank" href="https://djlorenz.github.io/astronomy/lp/">djlorenz</a>
    </small>
</div>

<script lang="ts">
    import { map } from '@windy/map';
    import { onDestroy, onMount } from 'svelte';

    const urls: { [Key: string]: string } = {
        '2006': 'https://djlorenz.github.io/astronomy/image_tiles/tiles2006/tile_{z}_{x}_{y}.png',
        '2016': 'https://djlorenz.github.io/astronomy/image_tiles/tiles2016/tile_{z}_{x}_{y}.png',
        '2020': 'https://djlorenz.github.io/astronomy/image_tiles/tiles2020/tile_{z}_{x}_{y}.png',
        '2022': 'https://djlorenz.github.io/astronomy/image_tiles/tiles2022/tile_{z}_{x}_{y}.png',
        '2023': 'https://djlorenz.github.io/astronomy/image_tiles/tiles2023/tile_{z}_{x}_{y}.png',
        '2024': 'https://djlorenz.github.io/astronomy/image_tiles/tiles2024/tile_{z}_{x}_{y}.png',
    };
    const djlorenzOption: { [Key: string]: any } = {
        minZoom: 2,
        maxNativeZoom: 8,
        tileSize: 1024,
        zoomOffset: -2,
    };
    // const viirsOption: { [Key: string]: any } = {
    //     minZoom: 0,
    //     maxNativeZoom: 6,
    // };
    const tileOptions: { [Key: string]: any } = {
        '2006': djlorenzOption,
        '2016': djlorenzOption,
        '2020': djlorenzOption,
        '2022': djlorenzOption,
        '2023': djlorenzOption,
        '2024': djlorenzOption,
    };
    const options = ['2006', '2016', '2020', '2022', '2023', '2024'];
    let mapSelection = '2024';
    let mapOverlay: L.TileLayer | null = null;
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

    export const onopen = (_params: unknown) => {};

    onMount(() => {
        if (!mapOverlay) {
            mapOverlay = L.tileLayer(urls[mapSelection], {
                ...tileOptions[mapSelection],
                maxZoom: 19,
                opacity: mapOpacity,
                zIndex: 200,
            });
            mapOverlay.addTo(map);
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
    input[type='radio'] {
        display: none;
    }
    fieldset {
        display: flex;
        flex-wrap: wrap;
    }
    label.item {
        display: inline-block;
        padding: 0.5em;
        cursor: pointer;
        &:hover {
            text-decoration: underline;
        }
    }
    label[for='opacity'] {
        margin: 0.5em 0;
    }
    label.item-active {
        display: inline-block;
        padding: 0.5em;
        background-color: rgba(255, 255, 255, 0.5);
    }
</style>
