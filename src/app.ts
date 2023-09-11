import { createApp } from 'nativescript-vue';
import Home from './components/Home.vue';
import CollectionViewPlugin from "@nativescript-community/ui-collectionview/vue3"

createApp(Home)
.use(CollectionViewPlugin)
.start();
