module.exports = function(RED) {
    function FooNode(config) {
        RED.nodes.createNode(this,config);
        var node = this;

        console.log(RED._("foo.hello"));

        this.on('input', function(msg) {
            msg.payload = msg.payload.toLowerCase();
            node.send(msg);
        });
    }
    RED.nodes.registerType("foo",FooNode);
}