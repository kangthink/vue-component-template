# Vue Sample Component
Basic template for single component development.

# Usage
There are few steps to customize this template.

### 0. Clone this repository
Clone the repository and change the dirname as you want.

### 1. Change 'sample-comp.vue'
Name the file as you want. Then change the 'index.js' file in **src/** dir to match the name.

### 2. Change 'examples/commonjs/App.vue'
This file is for the development. Change the path and component names accordingly.

### 3. Change 'build/webpack.*.js'
See the comments in each file.

### 4. Change the path of 'index.html' file in examples
The script path in index.html should refer to the path configured in 'build/webpack.dev.js'.

### 5. 'npm install' or 'npm ci'
If you want to use the same package version in 'package-lock.json', then use 'npm ci'.




# Upload to codepen
If you want to upload your code to codepen, then check the like below:
[Code pen sample](https://codepen.io/alexKang/pen/VNBaQN?editors=1111)



```html
    <!-- This element should be appended on head -->
    <script src="https://unpkg.com/vue@{vue-version}/dist/vue.js"></script>
    <script src="https://unpkg.com/vue-sample-comp2@1.0.0/dist/sample-comp.min.js"></script>
```