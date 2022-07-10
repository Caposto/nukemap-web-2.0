AFRAME.registerComponent('hello-world', {
    init: function () {
        console.log("Hello Component World")
    }
})

AFRAME.registerComponent('log', {
    schema: {
        message: {type: 'string', default: 'Hello Component World'}
    },

    init: function() {
        console.log(this.data.message)
    }
})