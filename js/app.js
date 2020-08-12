import Vue from 'vue';

// Store
import { store } from "./store";

// Plugins
// Markdown
import { VueShowdown } from 'vue-showdown' // remember to import the esm build of vue-showdown, i.e. vue-showdown.esm.js
Vue.component('VueShowdown', VueShowdown)

// Components
import opsz from './opsz'
import marq from './marquee'
import splash from './splash'
import inspector from './inspector'
import quote from './quote'
import timeline from './timeline'
import highlights from './highlights'
import player from './player'
import matrix from './matrix'

// Vue.use(store)
Vue.prototype.store = store

var app = new Vue({
    el: '#app',
    data: {
        kiloBytes: 0,
    },
    components: {
        opsz,
        marq,
        splash,
        inspector,
        quote,
        timeline,
        highlights,
        player,
        matrix
    },
    mounted() {

        // const scroll = new LocomotiveScroll({
        //     // smooth: true
        // });

        const inspectables = document.querySelectorAll('.inspectable');
        inspectables.forEach(inspectable => {
            inspectable.addEventListener('click', event => {

                let featuresWhitelist = ["sups"]
                let inspector = document.getElementById('inspectorDetails')
                let cursor = document.getElementById('inspectorCursor')

                let [styles, x, y] = [getComputedStyle(event.target), event.pageX, event.pageY]

                let vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

                if (x < vw - 250) {
                    inspector.style.left = x + "px"
                    inspector.style.right = null

                    cursor.style.top = y - 16 + "px"
                    cursor.style.left = x - 16 + "px"
                    cursor.style.right = null

                } else {
                    inspector.style.left = null
                    inspector.style.right = vw - x + "px"

                    cursor.style.top = y - 16 + "px"
                    cursor.style.right = vw - x - 16 + "px"
                    cursor.style.left = null
                }

                inspector.style.top = y + "px"

                store.inspector = {
                    "font-weight": styles.fontWeight,
                    "font-style": styles.fontStyle,
                    "font-size": styles.fontSize,
                    "line-height": styles.lineHeight,
                    "font-variant-numeric": styles.fontVariantNumeric,
                };

                if (!styles.fontFamily.includes("Piazzolla")) {
                    store.inspector["font-family"] = styles.fontFamily
                }
                if (styles.fontVariant.includes('small-caps')) {
                    store.inspector["font-variant"] = styles.fontVariant
                }

                for (const feature of featuresWhitelist) {
                    if (styles.fontFeatureSettings.includes(feature)) {
                        store.inspector["font-feature-settings"] = styles.fontFeatureSettings
                        return
                    }
                }
            });
        });
    },
})
