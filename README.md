# INA3221 Node-RED Component

This Node-RED custom node reads data from the **INA3221 triple-channel voltage and current monitor**. It provides six outputs, delivering millivolts and milliamps for each of the three channels.

---

## Features

- **Six Outputs**:
  - Output 1: Voltage (millivolts) for Channel 1
  - Output 2: Current (milliamps) for Channel 1
  - Output 3: Voltage (millivolts) for Channel 2
  - Output 4: Current (milliamps) for Channel 2
  - Output 5: Voltage (millivolts) for Channel 3
  - Output 6: Current (milliamps) for Channel 3
- Configurable I2C address and bus number.
- Adjustable update interval for reading sensor data.

---

## Installation

1. **Clone the Repository or Download Files**:
   Place the files in your local Node-RED custom nodes directory:
~/.node-red/nodes/ina3221


2. **Folder Structure**:
Ensure the following files are in the directory:
ina3221/ ├── ina3221.js // Node logic ├── ina3221.html // Node editor and help ├── hardware.png // Optional: Node icon

4. **Add to a Flow**:
Drag and drop the `INA3221` node into your flow and configure its properties.

---

## Node Properties

| Property         | Description                                         | Default Value |
|-------------------|-----------------------------------------------------|---------------|
| **Name**         | Optional name for the node.                         | (empty)       |
| **I2C Address**  | I2C address of the INA3221 sensor.                  | `0x40`        |
| **I2C Bus**      | I2C bus number (e.g., `1` for Raspberry Pi).         | `1`           |
| **Update Interval** | Time (in milliseconds) between sensor readings. | `1000`        |

---

## Outputs

| Output # | Description                  |
|----------|------------------------------|
| **1**    | Voltage (millivolts) - Ch1  |
| **2**    | Current (milliamps) - Ch1   |
| **3**    | Voltage (millivolts) - Ch2  |
| **4**    | Current (milliamps) - Ch2   |
| **5**    | Voltage (millivolts) - Ch3  |
| **6**    | Current (milliamps) - Ch3   |

---

## Example Usage

1. **Add the Node**:
Drag the `INA3221` node into your flow.

2. **Configure the Properties**:
Set the I2C address, bus number, and update interval in the node editor.

3. **Connect Outputs**:
Connect the outputs to other nodes (e.g., debug nodes or data storage).

---

## Dependencies

- **Hardware**: INA3221 sensor connected to the I2C bus.
- **Node.js Modules**:
- `i2c-bus`: Install using:
 ```bash
 npm install i2c-bus
 ```

---

## Troubleshooting

- Ensure the INA3221 sensor is properly connected to the I2C bus.
- Check that the I2C address matches the hardware configuration.
- Use `i2cdetect` to verify the sensor is detected:
```bash
sudo i2cdetect -y 1




License
This Node-RED component is released under the MIT License.

Contributing
Contributions are welcome! Feel free to submit issues or pull requests.

Acknowledgments
This component uses the i2c-bus library for I2C communication and is based on the INA3221 triple-channel voltage/current monitor.
