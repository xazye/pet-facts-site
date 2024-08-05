import { MantineColorsTuple } from "@mantine/core";

interface CustomColors {
  [key: string]: MantineColorsTuple;
}

const customColors:CustomColors = {
  primary: [
    // https://mantine.dev/colors-generator/?color=370C9B
    "#f1ecfe",
    "#ded4f7",
    "#bba4f1",
    "#9772ed",
    "#7947e9",
    "#662ee6",
    "#5c21e6",
    "#4d16cd",
    "#4312b7",
    "#390ca1",
  ],
  accent:[
    // https://mantine.dev/colors-generator/?color=16DEA5
    "#e3fff7",
    "#d1fcf0",
    "#a5f6df",
    "#74f1cd",
    "#4fecbf",
    "#37e9b5",
    "#26e9af",
    "#14ce99",
    "#00b787",
    "#009f73"
  ],
  secondary:[
    // https://mantine.dev/colors-generator/?color=7A8B99
    "#e7f7ff",
    "#dee9ee",
    "#c5ced7",
    "#a7b3bd",
    "#8d9ca8",
    "#7c8d9b",
    "#738695",
    "#617382",
    "#526776",
    "#41596b"
  ],
  background:[
    // https://mantine.dev/colors-generator/?color=191716
    "#f4f5f5",
    "#e7e7e7",
    "#cdcdcd",
    "#b1b1b1",
    "#999999",
    "#8a8a8a",
    "#838383",
    "#707071",
    "#636466",
    "#52575c"
  ],
  tertiary:[
    // https://mantine.dev/colors-generator/?color=EF8354
    "#ffeee4",
    "#ffdfd0",
    "#f8bca2",
    "#f39971",
    "#ee7947",
    "#eb662c",
    "#eb5b1d",
    "#d14b10",
    "#ba420b",
    "#a43503"
  ]
};
export default customColors;
