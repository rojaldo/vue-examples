<template>
  <div>
    <div class="box">
      <Display :message="display"></Display>
      <Keyboard @on-key="handleKeyPress($event)"></Keyboard>
    </div>
  </div>
</template>

<script>
import { CalculatorEngine } from "../../model/CalculatorEngine";
import Display from "./Display";
import Keyboard from "./Keyboard";

let ce = new CalculatorEngine();

export default {
  name: "Calculator",
  data() {
    return {
      display: "",
    };
  },
  components: {
    Display,
    Keyboard,
  },
  methods: {
    handleKeyPress(value) {
      console.log(value);
      if (typeof value === "number") {
        this.display = ce.handleNumber(value);
      } else if (typeof value === "string") {
        this.display = ce.handleSymbol(value);
      }
      console.log(this.currentState);
    },
  },
};
</script>
<style scoped>
body {
  background-color: tan;
}
.box {
  background-color: #3d4543;
  height: 300px;
  width: 250px;
  border-radius: 10px;
  position: relative;
  top: 80px;
  left: 40%;
}
</style>