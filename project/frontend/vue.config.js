const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
	devServer: {port: 8086/*, proxy: 'http://localhost:3000'*/},
	transpileDependencies: true
})
