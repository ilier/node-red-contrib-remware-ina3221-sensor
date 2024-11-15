module.exports = function (RED) {
    const INA3221 = require('ina3221'); // Import the INA3221 driver

    function INA3221Node(config) {
        RED.nodes.createNode(this, config);
        const node = this;

        // Get config parameters
        const address = parseInt(config.address) || 0x40; // Default address
        const busNumber = parseInt(config.busNumber) || 1; // Default bus

        let sensor;
        try {
            // Initialize INA3221 sensor
            sensor = new INA3221(address, busNumber);
        } catch (error) {
            node.error("Failed to initialize INA3221: " + error.message);
            return;
        }

        const updateInterval = parseInt(config.updateInterval) || 1000; // Default to 1 second

        // Read values from INA3221
        const readSensor = () => {
            try {
                const voltages = [];
                const currents = [];

                for (let channel = 1; channel <= 3; channel++) {
                    voltages.push(sensor.getBusVoltage(channel));
                    currents.push(sensor.getCurrent(channel));
                }

                // Send outputs (millivolts and milliamps)
                node.send([
                    { payload: voltages[0] },
                    { payload: currents[0] },
                    { payload: voltages[1] },
                    { payload: currents[1] },
                    { payload: voltages[2] },
                    { payload: currents[2] },
                ]);
            } catch (error) {
                node.error("Failed to read sensor data: " + error.message);
            }
        };

        // Set interval for periodic updates
        const interval = setInterval(readSensor, updateInterval);

        // Handle node closure
        node.on('close', function () {
            clearInterval(interval);
            if (sensor && sensor.bus) {
                sensor.bus.closeSync();
            }
        });
    }

    // Register the node type
    RED.nodes.registerType('ina3221', INA3221Node, {
        settings: {
            ina3221: {
                value: true,
                exportable: true,
            },
        },
    });
};
