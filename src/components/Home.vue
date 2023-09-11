<script lang="ts" setup>
import { Image, ObservableArray, StackLayout } from '@nativescript/core';
import {
  ref
} from 'nativescript-vue';
const itemList = ref(new ObservableArray([
  { type: "default", index: 0, name: 'TURQUOISE', color: '#1abc9c' },
  { type: "default", index: 1, name: 'EMERALD', color: '#2ecc71' },
  { type: "other", index: 2, name: 'PETER RIVER', color: '#3498db' },
  { type: "default", index: 3, name: 'AMETHYST', color: '#9b59b6' },
  { type: "default", index: 4, name: 'WET ASPHALT', color: '#34495e' },
  { type: "default", index: 5, name: 'GREEN SEA', color: '#16a085' },
  { type: "default", index: 6, name: 'NEPHRITIS', color: '#27ae60' },
  { type: "default", index: 7, name: 'BELIZE HOLE', color: '#2980b9' },
  { type: "default", index: 8, name: 'WISTERIA', color: '#8e44ad' },
  { type: "default", index: 9, name: 'MIDNIGHT BLUE', color: '#2c3e50' },
  { type: "default", index: 10, name: 'SUN FLOWER', color: '#f1c40f' },
  { type: "default", index: 11, name: 'CARROT', color: '#e67e22' },
  { type: "other", index: 12, name: 'ALIZARIN', color: '#e74c3c' },
  { type: "default", index: 13, name: 'CLOUDS', color: '#ecf0f1' },
  { type: "default", index: 14, name: 'CONCRETE', color: '#95a5a6' },
  { type: "default", index: 15, name: 'ORANGE', color: '#f39c12' },
  { type: "default", index: 16, name: 'PUMPKIN', color: '#d35400' },
  { type: "other", index: 17, name: 'POMEGRANATE', color: '#c0392b' },
  { type: "default", index: 18, name: 'SILVER', color: '#bdc3c7' },
  { type: "default", index: 19, name: 'ASBESTOS', color: '#7f8c8d' }
]));
const itemTemplate = (args: { item: any }) => {
  return args.item.type;
}
let oldScroll = 0;
function scroll(args) {
  if (oldScroll > args.scrollOffset) {
    console.log("DETECTED CHANGE IN SCROLL");
  }
  oldScroll = args.scrollOffset;

}

</script>

<template>
  <Frame>
    <Page>
      <ActionBar>
        <Label text="Home" class="font-bold text-lg" />
      </ActionBar>

      <GridLayout>

        <CollectionView :itemTemplateSelector="itemTemplate" :items="itemList" @scroll="scroll" itemIdGenerator="index"
          colWidth="100%" height="100%" rowHeight="200">
          <template #default="{ item, index }">
            <GridLayout height="200" id="scroller" rowSpan="2" rows="*, auto" :backgroundColor="item.color" class="item">
              <StackLayout row="1">
                <Label row="1" :text="item.name" class="title" />
                <Label row="1" :text="`Index: ${index}`" class="title" />
                <Label row="1" :text="item.color" class="subtitle" />
                <Image
                  src="https://images.unsplash.com/photo-1615870216519-2f9fa575fa5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8TWV4aWNhbiUyMGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60">
                </Image>
              </StackLayout>
            </GridLayout>
          </template>
          <template height="200" #other="{ item, index }">
            <GridLayout id="scroller" rowSpan="2" rows="*, auto" :backgroundColor="item.color" class="item">
              <StackLayout row="1">
                <Label row="1" :text="item.name" class="title" />
                <Label row="1" :text="`Index: ${index}`" class="title" />
                <Label row="1" :text="item.color" class="subtitle" />

              </StackLayout>
            </GridLayout>
          </template>
        </CollectionView>
      
      </GridLayout>
    </Page>
  </Frame>
</template>
