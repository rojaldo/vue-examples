<template>
    <div>
        <div class="box">
            <div class="display">
                <!-- <input type="text" readonly size="15" id="d" /> -->
                <h3 id="d">{{ display }}</h3>
            </div>
            <div class="keys">
                <p>
                    <input type="button" class="button black" @click="handleClick(7)" value="7" />
                    <input type="button" class="button black" @click="handleClick(8)" value="8" />
                    <input type="button" class="button black" @click="handleClick(9)" value="9" />
                    <input type="button" class="button pink" @click="handleClick('*')" value="*" />
                </p>
                <p>
                    <input type="button" class="button black" @click="handleClick(4)" value="4" />
                    <input type="button" class="button black" @click="handleClick(5)" value="5" />
                    <input type="button" class="button black" @click="handleClick(6)" value="6" />
                    <input type="button" class="button pink" @click="handleClick('-')" value="-" />
                </p>
                <p>
                    <input type="button" class="button black" @click="handleClick(1)" value="1" />
                    <input type="button" class="button black" @click="handleClick(2)" value="2" />
                    <input type="button" class="button black" @click="handleClick(3)" value="3" />
                    <input type="button" class="button pink" @click="handleClick('+')" value="+" />
                </p>
                <p>
                    <input type="button" class="button black" @click="handleClick('.')" value="." />
                    <input type="button" class="button black" @click="handleClick(0)" value="0" />
                    <input type="button" class="button pink" @click="handleClick('=')" value="=" />
                    <input type="button" class="button pink" @click="handleClick('/')" value="/" />
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import {CalculatorEngine} from '../../model/CalculatorEngine'
let ce = new CalculatorEngine();

export default {
    name: 'Calculator',
    data() {
        return {            
            display: ''
        }
    },
    methods: {
        handleClick(value) {
            if (typeof value === 'number') {
                this.display = ce.handleNumber(value);
            } else if (typeof value === 'string') {
                this.display = ce.handleSymbol(value);
            }
            console.log(this.currentState);

        },
    }
}
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
.display {
    background-color: #8da09b;
    width: 220px;
    position: relative;
    left: 15px;
    top: 20px;
    height: 40px;
}
.display input {
    position: relative;
    left: 2px;
    top: 2px;
    height: 35px;
    color: black;
    background-color: #bccd95;
    font-size: 21px;
    text-align: right;
}
.keys {
    position: relative;
    top: 15px;
}
.button {
    width: 40px;
    height: 30px;
    border: none;
    border-radius: 8px;
    margin-left: 17px;
    cursor: pointer;
    border-top: 2px solid transparent;
}
.button.gray {
    color: white;
    background-color: #6f6f6f;
    border-bottom: black 2px solid;
    border-top: 2px #6f6f6f solid;
}
.button.pink {
    color: black;
    background-color: #ff4561;
    border-bottom: black 2px solid;
}
.button.black {
    color: grey;
    background-color: 303030;
    border-bottom: black 2px solid;
    border-top: 2px 303030 solid;
}
.button.orange {
    color: black;
    background-color: FF9933;
    border-bottom: black 2px solid;
    border-top: 2px FF9933 solid;
}
.gray:active {
    border-top: black 2px solid;
    border-bottom: 2px #6f6f6f solid;
}
.pink:active {
    border-top: black 2px solid;
    border-bottom: #ff4561 2px solid;
}
.black:active {
    border-top: black 2px solid;
    border-bottom: #303030 2px solid;
}
.orange:active {
    border-top: black 2px solid;
    border-bottom: FF9933 2px solid;
}
p {
    line-height: 10px;
}
</style>